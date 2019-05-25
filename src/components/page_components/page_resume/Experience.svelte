<script>
    //TODO: Make these into objects.
    export let experienceList = [];
</script>

<div>
    <h2>Experience</h2>
    {#each experienceList as experience}
        <div>
            <div class="experienceHeader">
                <p>{experience.role}</p>
                <p>{experience.employer}</p>
                <p>{experience.timerange}</p>
            </div>
            <div class="experienceContent">
                <p>{experience.description}</p>
            </div>
        </div>
    {/each}
</div>