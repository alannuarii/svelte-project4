import * as auth from '$lib/server/auth.js';
import { redirect } from '@sveltejs/kit';

const handleAuth = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;

		// Jika pengguna mencoba mengakses halaman selain /login, arahkan ke /login
		if (event.url.pathname !== '/login') {
			throw redirect(303, '/login');
		}
		return resolve(event);
	}

	// Validasi session token
	const { session, user } = await auth.validateSessionToken(sessionToken);

	// Jika session valid, perbarui session token dalam cookies
	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
		event.locals.user = user;
		event.locals.session = session;

		// Jika pengguna mengakses /login, tetapi sudah login, arahkan ke /
		if (event.url.pathname === '/login') {
			throw redirect(303, '/');
		}
	} else {
		// Jika session tidak valid, hapus session token dari cookies dan arahkan ke /login
		auth.deleteSessionTokenCookie(event);
		event.locals.user = null;
		event.locals.session = null;

		if (event.url.pathname !== '/login') {
			throw redirect(303, '/login');
		}
	}

	return resolve(event);
};

export const handle = handleAuth;
