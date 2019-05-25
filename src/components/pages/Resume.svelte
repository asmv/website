<script>
    export let reqData;

    import Skills from "../page_components/page_resume/Skills.svelte";
    import Experience from "../page_components/page_resume/Experience.svelte";
    import DownloadButton from "../ui/DownloadButton.svelte";

    import {skillsCategoryMap, experienceObjects} from "../data/resumeData";

</script>

<div>
    <h1>Resume Header</h1>
    <Skills {skillsCategoryMap}></Skills>
    <Experience {experienceObjects}></Experience>
</div>
