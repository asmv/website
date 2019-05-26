<script>
    export let pageRoutes = [];
    export let reqData;
    let pageRouteItems = [];
    console.log("pageRoutes", pageRoutes);
    pageRoutes.forEach((pageRoute) => {
        let selected = pageRoute.path.startsWith(reqData.req.routePattern);
        if(selected)
        {
            document.title = `ASMV - ${pageRoute.title}`
        }
        pageRouteItems.push({
            path: pageRoute.path,
            title: pageRoute.title,
            selected: selected
        });
    });
</script>

<style>
    nav {
        overflow: hidden;
        background-color: #FFFFFF23;
    }

    a {
        float: right;
        display: block;
        text-align: center;
        padding-right: 3rem;
    }

    .selected{
        color: #ccc;
    }
</style>

<nav>
    {#each pageRouteItems as page}
        <a class:selected={page.selected} href={page.path}>
            <p>{page.title}</p>
        </a>
    {/each}
</nav>