<script>	
	import '../app.postcss';	
	import { page } from '$app/stores';
	
	// import component
	import Navbar from './navbar.svelte';
	import Sidebar from './sidebar.svelte';
	
</script>
<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<!-- {{ partial "navbar-dashboard" . }} -->
<Navbar />
<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
	<!-- {{ partial "sidebar" . }} -->	
	<Sidebar/>
	<div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
		<main>
			<slot />
		</main>
		<!-- {{ if .Params.footer }} {{ partial "footer-dashboard" . }} {{ end }} -->
	</div>
</div>






