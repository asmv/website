<script>
    export let reqData;

    import projData from "../../data/projectsData.json";
    import IconWithLink from "../data_containers/IconWithLink.svelte"

    let projectList = projData.projects;

</script>

<style>

    .projectsSection{
        padding: 0.5rem 0;
    }

    .projectEntry{
        background: #FFFFFF1A;
        padding: 1rem;
        margin: 1rem;
    }

    .projectName{
        color: #A3CBDD;
    }

</style>

<div class="projectsSection">
    <h1>Projects</h1>
    {#each projectList as project}
        <div class="projectEntry">
            <div class="projectHeader">
                <h2 class="projectName">{project.name}</h2>
                <h4>{project.timerange}</h4>
            </div>
            <p>{@html project.description}</p>
            <div>
                {#each project.links as projectLink}
                    <IconWithLink link={projectLink.link}, site={projectLink.name}>{projectLink.name}</IconWithLink>
                {/each}
            </div>
        </div>
    {/each}
</div>