//TODO: Place these in database and fetch with API?

export let skillsCategoryMap = new Map(
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

export let experienceObjects = [
    {
        employer: "Employer A",
        timerange: "Jun-Sept 2017",
        role: "Software engineer intern.",
        description: "Description A"
    }
];