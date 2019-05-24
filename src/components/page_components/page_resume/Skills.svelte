<script>
    export let skillsCategoryMap = Map();

    import ContainerLabelNum from "../../../scripts/wrapper_classes/ContainerLabelNum";
    import ldBar from "@loadingio/loading-bar"; // Needs import, otherwise will be optimized away

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

<div>
    <h2>Skills</h2>
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
    {/each}`
</div>