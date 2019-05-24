<script>
    export let reqData;

    import Skills from "../components/page_components/page_resume/Skills.svelte"

    let skillsCategoryMap = new Map(
        [
            ["Programming Languages",
                new Map([
                    ["C#", 0.8],
                    ["C++", 0.4]
                ])
            ],
            ["Tools",
                new Map([
                    ["Git", 0.9],
                    ["Unity", 0.7]
                ])
            ]
        ]
    );
</script>

<div>
    <h1>Resume Header</h1>
    <Skills {skillsCategoryMap}></Skills>
</div>
