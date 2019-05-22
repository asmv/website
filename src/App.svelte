<script>
	import {HistoryRouter, RouterProvider, RouterLink, RouterView} from '@svel/router';

	import AboutMe from './pages/AboutMe.svelte';

	// const router = new HistoryRouter({
	// 	base: __dirname,
	// 	routes: [
	// 		{path: '/', component: AboutMe}
	// 	]
	// });
	//
	// let n = 0;
	// let route = router.currentRoute;
	// router.listen(r => route = r)
	//
	// function navigateAndIncrement () {
	// 	const increment = () => n++
	// 	route = router.currentRoute;
	// 	if (router.currentRoute.path === '/') {
	// 		router.push('/foo', increment)
	// 	} else {
	// 		router.push('/', increment)
	// 	}
	// }

</script>

<style>
	h1 {
		color: red;
	}
</style>

<h1>Hello.</h1>

<!--<RouterProvider {router}>-->
<!--	<div id="app">-->
<!--		<h1>Basic</h1>-->
<!--		<ul>-->
<!--			<li><RouterLink to="/">/</RouterLink></li>-->
<!--		</ul>-->
<!--	</div>-->
<!--</RouterProvider>-->