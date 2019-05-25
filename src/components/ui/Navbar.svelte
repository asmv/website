<script>
    export let pageRoutes = Map();
    export let reqData;
    let pageRouteItems = [];
    for(let [pageRoute, pageComponent] of pageRoutes){
        let selected = pageRoute.startsWith(reqData.req.routePattern);
        let pageName = pageRoute.split("/")[1];
        if(selected)
        {
            document.title = `ASMV - ${pageName}`
        }
        pageRouteItems.push({
            path: pageRoute,
            name: pageName,
            selected: selected
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

    .selected{
        color: #DEB580;
    }
</style>

<nav>
    {#each pageRouteItems as page}
        <a class:selected={page.selected} href={page.path}>
            <p>{page.name}</p>
        </a>
    {/each}
</nav>