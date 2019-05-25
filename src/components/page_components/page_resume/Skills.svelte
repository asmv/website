<script>
    export let skillsList = [];

    import ldBar from "@loadingio/loading-bar"; // Needs import, otherwise will be optimized away

    let skillsMap = new Map();

    skillsList.forEach((skill) =>
    {
        if(skillsMap.has(skill.cat)) {
            skillsMap.get(skill.cat).push(skill);
        }else{
            skillsMap.set(skill.cat, [skill]);
        }
    });

    let categorySkillsList = [];
    skillsMap.forEach((skills, category) =>
        categorySkillsList.push({
            skills: skills.sort((a, b) => b.value - a.value),
            category: category
        })
    );
</script>

<style>
    .skillsDiv{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .skillCategory{
        width: 10rem;
        flex-grow: 1;
        padding-left: 2rem;
        padding-right: 2rem;
        justify-content: center;
    }

    .skillCategory h4{
        text-align: center;
        width: 100%;
        color: #A3CBDD;
    }

    .skillName{
        width: 50%;
    }
    
    .skill{
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>

<h2>Skills</h2>
<div class="skillsDiv">
    {#each categorySkillsList as categoryAndSkills}
        <div class="skillCategory">
            <h4>{categoryAndSkills.category}</h4>
            <div>
                {#each categoryAndSkills.skills as skill}
                    <div class="skill">
                        <div class="skillName">{skill.name}</div>
                        <div class="ldBar" data-preset="energy" data-value={skill.value*100}></div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>