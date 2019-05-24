<script>
    export let pageRoutes = Map();

    let pageRouteItems = [];
    for(let [pageRoute, pageComponent] of pageRoutes){
        pageRouteItems.push({
            path: pageRoute,
            name: pageRoute.split("/")[1],
            selected: false
        });
    }
</script>

<nav>
    {#each pageRouteItems as page}
        <a href={page.path}>{page.name}</a>
    {/each}
</nav>