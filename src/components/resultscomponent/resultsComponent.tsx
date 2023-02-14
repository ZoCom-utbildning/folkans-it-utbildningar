import TestButton from "../testbutton/testButton";
import './resultsComponent.scss';
import { useEffect, useState } from "react";
import { auth, db } from "../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import ResultToggleComponent from './resultToggleComponent';

type CourseScore = {
    course: string;
    points: string;
    links: Links;
    studyAt: string;
    eduTextTitle: string;
    eduText: string;
}

type Links = {
    course: string;
    link: string;
}

const ResultsComponent = () => {

    //Lägga in "courses": "[frontend-link, backend-link .. , ..]"   i json för länkar.

    const courseScore: Array<CourseScore> = [];
    const loadResults = JSON.parse(localStorage.getItem("resultsArray")!);

    useEffect(() => {
        (async () => {
            const user = auth.currentUser?.uid;
            console.log("user uid", user);

            await updateDoc(doc(db, "answers", `${user}`), {
                results: {
                    courseScoreSorted
                }
            });

        })();

    }, []);

    const frontend = loadResults.map((result: any, index: number) => {
        return result.points[0];

    })

    const frontendFilter = frontend.filter((obj: undefined) => obj !== undefined)

    const frontendPoints = frontendFilter.reduce((a: number, b: number) => Number(a) + Number(b), 0)


    courseScore.push({ course: 'Frontendutvecklare', points: frontendPoints, links: { course: 'FE Karlstad', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare/' }, studyAt: 'Karlstad', 
    eduTextTitle: 'Frontendutvecklare Karlstad', 
    eduText: 'En frontendutvecklare skapar det som användaren ser på webben. Med hjälp av HTML, CSS & JavaScript förverkligar en frontendare den design och funktionalitet som webbsidan ska ha.'});
    // frontend_distans

    const frontend_distans = loadResults.map((result: any, index: number) => {
        return result.points[1];

    })

    const frontend_distans_filter = frontend_distans.filter((obj: undefined) => obj !== undefined)

    const frontend_distans_points = frontend_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Frontendutvecklare', points: frontend_distans_points, links: { course: 'FE Distans', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare-distans/' }, studyAt: 'Distans', 
    eduTextTitle: 'Frontendutvecklare Distans', 
    eduText: 'En frontendutvecklare skapar det som användaren ser på webben. Med hjälp av HTML, CSS & JavaScript förverkligar en frontendare den design och funktionalitet som webbsidan ska ha.'});

    // javascript_distans

    const javascript_distans = loadResults.map((result: any, index: number) => {
        return result.points[2];

    })

    const javascript_distans_filter = javascript_distans.filter((obj: undefined) => obj !== undefined)

    const javascript_distans_points = javascript_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'JavaScriptutvecklare', points: javascript_distans_points, links: { course: 'JS distans', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/javascriptutvecklare-distans/' }, studyAt: 'Distans', 
    eduTextTitle: 'JavaScriptutvecklare Distans', 
    eduText: 'Det moderna och mångsidiga programmeringsspråket JavaScript står i fokus för denna utbildning. En JavaScriptutvecklare arbetar med både det som användaren ser (frontend) och det som ligger bakom, på serversidan (backend) och blir på det sättet mycket bred i sin kompetens.' });

    // mobil_app

    const mobil_app = loadResults.map((result: any, index: number) => {
        return result.points[3];

    })

    const mobil_app_filter = mobil_app.filter((obj: undefined) => obj !== undefined)

    const mobil_app_points = mobil_app_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Mobilapplikationsutvecklare', points: mobil_app_points, links: { course: 'Mobilapp', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mobilapplikationsutvecklare-distans/' }, studyAt: 'Distans', 
    eduTextTitle: 'Mobilapplikationsutvecklare Distans', 
    eduText: 'En mobilapplikationsutvecklare är som namnet skvallrar om en expert på att bygga mobilappar. I denna utbildning ingår alla de mest framstående teknikerna för att skapa moderna och dynamiska appar till mobila enheter.'});

    // mjukvaru_utveckling

    const mjukvaru_utveckling = loadResults.map((result: any, index: number) => {
        return result.points[4];

    })

    const mjukvaru_utveckling_filter = mjukvaru_utveckling.filter((obj: undefined) => obj !== undefined)

    const mjukvaru_utveckling_points = mjukvaru_utveckling_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Mjukvaruutvecklare', points: mjukvaru_utveckling_points, links: { course: 'Mjukvaruutveckling', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mjukvaruutvecklare-for-mobiltetstjanster/' }, studyAt: 'Distans', 
    eduTextTitle: 'Mjukvaruutvecklare för mobiliutetstjänster Distans', 
    eduText: 'I denna utbildning ligger fokus på så kallade “inbyggda system”, det vill säga hur man med mjukvara kan styra hårdvara. Utbildningen är specifikt inriktad på hur man programmerar mjukvara för bilar som gör dem bättre och säkrare.'});

    const courseScoreSorted = courseScore.sort((a: any, b: any) => b.points - a.points)

    //funktion för att räkna ut svar/summa

    //mappa ut data för utbildning + länk till utbildning


    return (
        <div className="results_wrapper">

            <section className="results_section">

                <h2>Ditt test resultat blev: </h2>

                    {
                        courseScoreSorted.map((courseScore, index) => {
                            if (index < 5) {

                                return < ResultToggleComponent courseScore={courseScore} index={index} />
                             
                            }
                        })
                    }

                <TestButton buttonText={'Ta testet igen'} />

            </section>

        </div>
    )
}

export default ResultsComponent;