<script>
    export let reqData;

    import projData from "../../data/projectsData.json";

    let projectList = projData.projects;

</script>
<h1>Projects</h1>
{#each projectList as project}
    <div>
        <h4>{project.name}</h4>
        <h5>{project.timerange}</h5>
        <p>{project.description}</p>
        <div>
            <!--TODO: Replace this div with Svelte element-->
            {#each project.links as projectLink}
                <a href={projectLink.link}>{projectLink.name}</a>
            {/each}
        </div>
    </div>
{/each}