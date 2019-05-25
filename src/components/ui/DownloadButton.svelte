<script>
    export let downloadLink = "#";
    export let downloadName = "file"
</script>

<style>
    a{
        display: block;
        text-align: center;
    }
</style>

<a href={downloadLink} download="{downloadName}">Download {downloadName}</a>