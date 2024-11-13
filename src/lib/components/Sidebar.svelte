<script>
	import pnp from '../img/pnp.png';
</script>

<div id="sidebar" class="position-relative">
	<div class="logo d-flex flex-column justify-content-center align-items-center py-4">
		<img src={pnp} class="img-fluid pnp mb-1" alt="" />
		<h6>UP MINAHASA</h6>
	</div>
	<div class="menu d-flex flex-column justify-content-center mt-5">
		<a class="btn btn-light mx-4 mb-3" href="/input/notulen" role="button"
			><i class="bi-plus-lg me-2"></i>Service 1</a
		>
		<div
			class="btn btn-light mx-4"
			role="button"
			data-bs-toggle="modal"
			data-bs-target="#exampleModal"
		>
			<i class="bi-plus-lg me-2"></i>Service 2
		</div>
	</div>
	<div class="position-absolute bottom-0 start-0 mb-3 ms-3">
		<h6 class="navbar-text owner me-4">Designed by <span>Alan Nuari</span></h6>
		<div class="social">
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="/" class="github me-1"><i class="bi-github" /></a>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="/" class="instagram me-1"><i class="bi-instagram" /></a>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="/" class="twitter me-1"><i class="bi-twitter-x" /></a>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="/" class="whatsapp me-1"><i class="bi-whatsapp" /></a>
		</div>
	</div>
</div>

<style>
	#sidebar {
		color: #ffffff;
		width: 100%;
		height: 100vh;
		background-color: #023e8a;
		background-position: left;
		background-repeat: no-repeat;
		background-size: 180%;
		border-radius: 0 0 180px 0;
	}
	.logo h6 {
		font-weight: 700;
		font-size: 21px;
	}
	.pnp {
		width: 60%;
	}
	.menu .btn {
		font-weight: 500;
		font-size: 15px;
		color: #023e8a;
		border-radius: 0 15px 0 15px;
	}
	.owner {
		margin: 0;
		color: #ffffff;
		font-size: 10px;
	}
	.owner span {
		font-weight: 700;
	}
	.social a {
		color: #ffffff;
	}
</style>
