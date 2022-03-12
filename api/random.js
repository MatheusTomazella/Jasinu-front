const casual = require("casual");

const tags = [ 
    {
        id: 1,
        title: "Matemática"
    },
    {
        id: 2,
        title: "Portugues"
    },
    {
        id: 3,
        title: "Fisica"
    },
    {
        id: 4,
        title: "Historia"
    },
    {
        id: 5,
        title: "Sociologia"
    },
    {
        id: 6,
        title: "Quimica"
    },
]

function chooseTags () {
    const result = [];
    for ( i = 0; i < casual.integer(from = 1, to = tags.length); i++ ) 
        result.push(tags[casual.integer(from = 0, to = tags.length-1)].id);
    return [...new Set(result)];
}

function genOptions () {
    const result = [];
    for ( i = 0; i < casual.integer(from = 2, to = 5); i++ ) 
        result.push({text: casual.short_description, correct: casual.boolean});
    return result;
}

module.exports = () => {
    const data = { exercises: [] }
    for (let i = 0; i < casual.integer(from = 0, to = 1000); i++) {
        data.exercises.push({ 
            id: i, 
            text: casual.text,
            tags: chooseTags(),
            options: genOptions(),
            approved: casual.boolean,
            explanation: casual.url
        })
    }
    return data
}