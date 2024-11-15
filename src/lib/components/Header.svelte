<script>
	import Timer from './Timer.svelte';
	import user from '../img/user.png';

	export let username;

	const reload = () => {
		location.reload();
	};
</script>

<nav class="navbar shadow bg-light">
	<div class="container-fluid">
		<div class="menu ms-3">
			<a class="btn btn-light me-2" href="/" role="button"
				><i class="bi-house-fill me-2"></i>Beranda</a
			>
			<a class="btn btn-light me-2" href="/rekap/notulen" role="button"
				><i class="bi-file-earmark-text-fill me-2"></i>Menu 2</a
			>
			<a class="btn btn-light me-2" href="/rekap/absensi" role="button"
				><i class="bi-file-earmark-spreadsheet-fill me-2"></i>Menu 3</a
			>
		</div>
		<div class="ms-auto me-5"><Timer /></div>
		<div class="me-4 reload">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button on:click={reload}
				><i
					class="bi-arrow-clockwise"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Reload"
				></i></button
			>
		</div>
		<div class="dropdown-center user">
			<div class="me-3 d-flex" data-bs-toggle="dropdown" data-bs-display="static">
				<img src={user} class="me-2" alt="" />
				<h6 class="d-block my-auto">{username}</h6>
			</div>
			<ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark">
				<li>
					<a
						class="dropdown-item d-flex align-items-center justify-content-center auth"
						href="/logout"><i class="bi-box-arrow-right me-2"></i>Log Out</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	nav {
		height: 70px;
		color: #264653;
	}
	.menu a {
		font-size: 13px;
		color: #264653;
		font-weight: 500;
		background-color: rgba(38, 70, 83, 0.114);
	}
	.reload {
		font-size: 22px;
		cursor: pointer;
	}
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	img {
		height: 30px;
	}
	h6 {
		font-weight: 300;
	}
	.user {
		cursor: pointer;
	}
</style>
