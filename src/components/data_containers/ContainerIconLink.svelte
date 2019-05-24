<script>
    import {IconLink} from "../enumerations/iconLink";
    export let iconLinks = [
        IconLink.enumerations.twitter,
        IconLink.enumerations.git
    ];
</script>

{#each iconLinks as iconLink}
    <div>
    <img src={iconLink.icon} alt={iconLink.name}>
    </div>
{/each}