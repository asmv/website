const prefix = "images/icons/";

export class IconLink
{
    static GetIconLink(iconLinkString)
    {
        let value = IconLink.enumerations[iconLinkString];
        return value === undefined ? IconLink.enumerations.default : value;
    }

    constructor(iconName, iconFilename)
    {
        this.iconName = iconName;
        this.iconFilepath = prefix + iconFilename;
    }
}

IconLink.enumerations = {
    twitter : new IconLink("Twitter", "twitter.svg"),
    git : new IconLink("git", "git.svg"),
    default : new IconLink("External Website Link", "link.svg")
};