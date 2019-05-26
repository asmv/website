<script>
    import NavBar from "./components/ui/Navbar.svelte"

    export let iComponent;
    export let reqData;
    export let pageRoutes = [];
</script>

<style>
    footer{
        padding-bottom: 6rem;
    }

    .innerPageContent{
        padding: 1rem 3rem;
    }
</style>

<header></header>
<NavBar {pageRoutes} {reqData}></NavBar>
<div class="innerPageContent">
    <svelte:component this={iComponent} {reqData}/>
</div>
<footer></footer>