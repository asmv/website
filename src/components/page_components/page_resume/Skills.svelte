<script>
    export let skillsCategoryMap = Map();

    import ContainerLabelNum from "../../data_containers/ContainerLabelNum";
    import ldBar from "@loadingio/loading-bar";

    console.log("skillsCategoryMap", skillsCategoryMap);

    let skillCategories = [];
    for(let [skillCategory, skillsMap] of skillsCategoryMap)
    {
        let skills = [];
        for(let [skillName, skillValue] of skillsMap)
        {
            skills.push(new ContainerLabelNum(skillName, skillValue));
        }
        skills.sort((left, right) => right.num - left.num); // sorts largest skill value first
        skillCategories.push({category: skillCategory, skills: skills});
    }
</script>

{#each skillCategories as skillCategoryDict}
    <h4>{skillCategoryDict.category}</h4>
    <div>
    {#each skillCategoryDict.skills as skill}
        <div>
            <label>{skill.label}</label>
            <div class="ldBar" data-preset="energy" data-value={skill.num*100}></div>
        </div>
    {/each}
    </div>
{/each}
