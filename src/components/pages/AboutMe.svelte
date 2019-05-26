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
</style>

<div>
    <h1>Alexander Smirnov</h1>
    <div class="aboutmeSection">
        <div class="AboutMeIntro">
            <p>Hello and welcome to my website!</p>
            <p>I am Alexander Smirnov, <b>Game Developer</b>, <b>Programmer</b>, and <b>Student at UC Santa Cruz</b>.</p>
            <p>My goal is to join in at the forefront of new CS technologies and participate in the creation of tools and software for my own interest and to make an impact.</p>
            <br/>
            <p>You can find the source code for this site <a href="https://github.com/asmv/website">on my github page</a></p>
        </div>
        <h4>A few links that may be of interest:</h4>
        <div class="mediaLinks">
            <IconWithLink site="git" link="https://github.com/asmv">Github</IconWithLink>
            <IconWithLink site="LinkedIn" link="https://www.linkedin.com/in/97alex-smirnov/">LinkedIn</IconWithLink>
        </div>
    </div>
</div>