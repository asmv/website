<script>
    export let reqData;

    import IconWithLink from "../data_containers/IconWithLink.svelte";
</script>
<div>
    <h1>Alexander Smirnov</h1>
    <div class="AboutMeIntro">
        <p>Hello and welcome to my humble website!</p>
        <p>I am Alexander Smirnov:</p>
        <ol>
            <li>Game Developer</li>
            <li>Hobby Programmer</li>
            <li>Student at UC Santa Cruz</li>
        </ol>
        <p>There isn't too much content here now, but I will be adding more pages and projects as I keep developing the website.</p>
        <p>You can find the source code for this site <a href="https://github.com/asmv/website">on my github page</a></p>
    </div>
    <div>
        <!-- Container Icon Link Here -->
        <h4>A few links that may be of interest:</h4>
        <IconWithLink site="git" link="https://github.com/asmv">Github</IconWithLink>
        <IconWithLink site="LinkedIn" link="https://www.linkedin.com/in/97alex-smirnov/">LinkedIn</IconWithLink>
    </div>
</div>