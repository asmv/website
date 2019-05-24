<script>
    export let reqData;

    import Skills from "../page_components/page_resume/Skills.svelte"
    import Experience from "../page_components/page_resume/Experience.svelte"


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

    let experienceObjects = [
        {
            employer: "Employer A",
            timerange: "Jun-Sept 2017",
            role: "Software engineer intern.",
            description: "Description A"
        }
    ];

</script>

<div>
    <h1>Resume Header</h1>
    <Skills {skillsCategoryMap}></Skills>
    <Experience {experienceObjects}></Experience>
</div>
