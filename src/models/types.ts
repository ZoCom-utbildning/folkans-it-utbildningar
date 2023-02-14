export type ResultsType = {

    question: string;
    button: string;
    points: string[];

};

export type Optionvalue = {

    course: string;
    points: number;

}

export type Option = {

    id: string;
    text: string;
    value: Array<Optionvalue>;

}
export type Question = {

    alt: string;
    id: number;
    img: string;
    options: Array<Option>;
    text: string;
    type: string;

}