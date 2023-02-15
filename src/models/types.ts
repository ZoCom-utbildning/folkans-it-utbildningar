// TYPES - QUESTIONAIRE SECTION

export type Optionvalue = {

    course: string;
    points: number;

};

export type Option = {

    id: string;
    text: string;
    value: Array<Optionvalue>;

};

export type Question = {

    alt: string;
    id: number;
    img: string;
    options: Array<Option>;
    text: string;
    type: string;

};


// TYPES - RESULTS SECTION

export type ResultsType = {

    question: string;
    button: string;
    points: string[];

};

export type CourseScore = {
    course: string;
    points: string;
    links: Links;
    studyAt: string;
    eduTextTitle: string;
    eduText: string;
}

export type Links = {
    course: string;
    link: string;
}


// TYPES - PERSONA SECTION

export type Persona = {

    age: string;
    desc: string;
    name: string;
    replies: Array<string>;

}

export type PersonaText = {
    id: number;
    personaTitle: string;
    personaIngress: string;
}


// TYPES - ABOUT/EDUCATION SECTION

export type EducationInfo = {
    applyLink: string;
    description: string;
    externalLink: string;
    id: string;
    internalLink: string;
    location: string;
    name: string;
}

