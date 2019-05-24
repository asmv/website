<script>
    export let linkedPages = [];
</script>

<nav>
    <h3>NavBar</h3>
    {console.log(linkedPages)}
    {#each linkedPages as linkedPage}
        <p>A linked page</p>
    {/each}
</nav>