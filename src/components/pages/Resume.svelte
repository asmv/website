<script>
    export let reqData;

    import Skills from "../page_components/page_resume/Skills.svelte";
    import Experience from "../page_components/page_resume/Experience.svelte";
    import DownloadButton from "../ui/DownloadButton.svelte";

    import {skillsCategoryMap} from "../data/resumeData";
    import resData from "../data/resumeData.json";

    let experienceList = resData.experience;

    let skillsList = resData.skills;
    skillsList.forEach((skill) => {
       skill.cat = resData.skillCat[skill.cat]
    });

    console.log(skillsList);
</script>

<div>
    <h1>Resume Header</h1>
    <Skills {skillsList}></Skills>
    <Experience {experienceList}></Experience>
</div>
