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
    text      : string,
    correct   : boolean,
    selected? : boolean
}

export interface ExerciseQuery {
    [index : string] : any,
    id?       : number,
    tags?     : number[],
    approved? : boolean
}