<script>
    export let reqData;

    import IconWithLink from "../data_containers/IconWithLink.svelte";
</script>

<style>
    .aboutmeSection{
        background: #FFFFFF15;
        padding: 1rem;
    }
    .mediaLinks{
        padding-left: 3em;
    }

    img{
        display: block;
        float: left;
        height: 17.5rem;
        width: auto;
        clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%);
        shape-outside: polygon(0 0, 11rem 0, 14rem 19rem, 0 19rem);
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
</style>

<div>
    <h1>Alexander Smirnov</h1>
    <div class="aboutmeSection">
        <img src="images/raster/profile_picture.jpg" alt="Alexander Smirnov Waist-Up Profile Picture">
        <div>
            <div class="AboutMeIntro">
                <p>Hello and welcome to my website!</p>
                <p>I am Alexander Smirnov, <b>Game Developer</b>, <b>Programmer</b>, and <b>Student at UC Santa Cruz</b>.</p>
                <p>My goal is to join in at the forefront of new CS technologies and participate in the creation of tools and software for my own interest and to make an impact.</p>
                <br/>
                <p>You can find the source code for this site <a href="https://github.com/asmv/website">on my github page</a></p>
            </div>
            <p>A few links that may be of interest:</p>
            <div class="mediaLinks">
                <IconWithLink site="git" link="https://github.com/asmv">Github</IconWithLink>
                <IconWithLink site="LinkedIn" link="https://www.linkedin.com/in/97alex-smirnov/">LinkedIn</IconWithLink>
            </div>
        </div>
    </div>
</div>