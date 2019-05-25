<script>
    export let reqData;

    import projData from "../../data/projectsData.json";
    import IconWithLink from "../data_containers/IconWithLink.svelte"

    let projectList = projData.projects;

</script>

<style>
    .projectName{
        color: #A3CBDD;
    }
</style>

<h1>Projects</h1>
{#each projectList as project}
    <div>
        <div class="projectHeader">
            <h2 class="projectName">{project.name}</h2>
            <h4>{project.timerange}</h4>
        </div>
        <p>{project.description}</p>
        <div>
            <!--TODO: Replace this div with Svelte element-->
            {#each project.links as projectLink}
                <IconWithLink link={projectLink.link}, site={projectLink.name}>{projectLink.name}</IconWithLink>
            {/each}
        </div>
    </div>
{/each}