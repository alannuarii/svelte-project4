<script>
	import Header from '../../lib/components/Header.svelte';
	import Sidebar from '../../lib/components/Sidebar.svelte';

	export let data;

	const user = data.user
</script>

<svelte:head>
	<title>Project One</title>
	<meta name="description" content="ProjectOne" />
</svelte:head>

<main>
	<div class="row gx-0">
		<div class="col-2">
			<Sidebar />
		</div>
		<div class="col-10 position-relative">
			<div class="header position-absolute top-0 start-50 translate-middle-x">
				<Header username={user.username} />
			</div>
			<div class="content px-5">
				<slot />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
		background-image: url('../../lib/img/bg.jpg');
		background-size: cover;
	}
	.header {
		width: 100%;
		z-index: 1;
	}
	.content {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-top: 90px;
		padding-bottom: 50px;
	}
</style>
