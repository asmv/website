<script>
    //TODO: Make these into objects.
    export let experienceList = [];
</script>

<style>
    .experienceEntry{
        padding: 2rem;
    }

    .experienceHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .experienceHeader > *{
        width: 33.33%;
        text-align: center;
    }
</style>

<div>
    <h2>Experience</h2>
    {#each experienceList as experience}
        <div class="experienceEntry">
            <div class="experienceHeader">
                <p>{experience.role}</p>
                <h4>{experience.employer}</h4>
                <p>{experience.timerange}</p>
            </div>
            <div class="experienceContent">
                <p>{experience.description}</p>
            </div>
        </div>
    {/each}
</div>