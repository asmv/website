<script>
    import NavBar from "./components/Navbar.svelte"

    export let iComponent;
    export let reqData;
    export let pageRoutes = {};
</script>

<style>
    footer{
        background-color: darkturquoise;
    }
</style>

<NavBar {pageRoutes} {reqData}></NavBar>
<svelte:component this={iComponent} {reqData}/>
<footer>
    <h3>Footer in Layout </h3>
</footer>