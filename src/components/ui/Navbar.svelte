<script>
    export let pageRoutes = Map();
    export let reqData;
    let pageRouteItems = [];
    for(let [pageRoute, pageComponent] of pageRoutes){
        pageRouteItems.push({
            path: pageRoute,
            name: pageRoute.split("/")[1],
            selected: pageRoute.startsWith(reqData.req.routePattern)
        });
    }
</script>

<style>
    p:first-letter {
        text-transform: capitalize;
    }
    nav {
        overflow: hidden;
        background-color: #222222;
    }

    a {
        float: right;
        display: block;
        text-align: center;
        padding-right: 3rem;
    }
</style>

<nav>
    {#each pageRouteItems as page}
        <a class:selected={page.selected} href={page.path}>
            <p>{page.name}</p>
        </a>
    {/each}
</nav>