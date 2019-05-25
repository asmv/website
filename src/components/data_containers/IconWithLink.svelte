<script>
    import {IconLink} from "../../scripts/enumerations/iconLink";

    export let link = "#";
    export let site = "Website";

    let iconAndLink = IconLink.GetIconLink(site);
</script>

<style>
    img{
        filter: grayscale(100%);
    }

    .iconAndLabel{
        align-items: center;
    }
</style>

<a class="iconAndLabel" href={link} target="_blank">
    <img src={iconAndLink.iconFilepath} alt={iconAndLink.iconName.concat(" icon")}/>
    <slot>
        <p>{site}</p>
    </slot>
</a>
