<script>
    //TODO: Make these into objects.
    export let experienceList = [];
</script>

<style>
    .experienceSection{
        background: #FFFFFF1A;
        margin-top: 2rem;
        padding: 0.5rem 1rem;
    }

    .experienceEntry{
        padding: 2rem;
        margin-bottom: 1rem;
        background: #FFFFFF1A;
    }

    .experienceHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .experienceHeader > *{
        text-align: center;
        flex: 1;
        min-width: 8rem;
    }

    .experienceHeader h4{
        font-size: 110%;
        flex-basis: 33%;
    }
</style>

<div class="experienceSection">
    <h2>Experience</h2>
    {#each experienceList as experience}
        <div class="experienceEntry">
            <div class="experienceHeader">
                <p>{experience.role}</p>
                <h4>{experience.employer}</h4>
                <p>{experience.timerange}</p>
            </div>
            <div class="experienceContent">
                <p>{@html experience.description}</p>
            </div>
        </div>
    {/each}
</div>