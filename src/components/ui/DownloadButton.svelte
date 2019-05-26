<script>
    export let downloadLink = "#";
</script>

<style>
    a{
        display: block;
        text-align: center;
    }
</style>

<a href={downloadLink}><slot>Download</slot></a>