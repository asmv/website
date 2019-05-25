<script>
    export let skillsList = [];

    import ldBar from "@loadingio/loading-bar"; // Needs import, otherwise will be optimized away

    let skillsMap = new Map();

    skillsList.forEach((skill) =>
    {
        if(skillsMap.has(skill.cat)) {
            console.log(skillsMap.get(skill.cat));
            skillsMap.get(skill.cat).push(skill);
        }else{
            skillsMap.set(skill.cat, [skill]);
        }
    });

    let categorySkillsList = [];
    skillsMap.forEach((skills, category) =>
        categorySkillsList.push({
            skills: skills.sort((a, b) => b - a),
            category: category
        })
    );
</script>

<div>
    <h2>Skills</h2>
    {#each categorySkillsList as categoryAndSkills}
        <h4>{categoryAndSkills.category}</h4>
        <div>
        {#each categoryAndSkills.skills as skill}
            <div>
                <label>{skill.name}</label>
                <div class="ldBar" data-preset="energy" data-value={skill.value*100}></div>
            </div>
        {/each}
        </div>
    {/each}
</div>