export interface ExerciseObject {
    id          : number,
    text        : string,
    tags        : ExerciseTag[],
    options     : ExerciseOption[],
    approved    : boolean,
    explanation : string
}

export type ExerciseTag = {
    id    : number,
    title : string
}

export type ExerciseOption = {
    text    : string,
    correct : boolean
}

export interface ExerciseQuery {
    id?       : number,
    tags?     : number[],
    approved? : boolean
}