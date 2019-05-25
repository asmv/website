<script>
    import NavBar from "./components/ui/Navbar.svelte"

    export let iComponent;
    export let reqData;
    export let pageRoutes = {};
</script>

<style>
    footer{
        padding-bottom: 6rem;
    }
</style>

<header></header>
<NavBar {pageRoutes} {reqData}></NavBar>
<svelte:component this={iComponent} {reqData}/>
<footer></footer>