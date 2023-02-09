import TestButton from "../testbutton/testButton";
import './resultsComponent.scss';
import jsonData from '../../../forminfo.json';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

type CourseScore = {
    course: string;
    points: string;
    links: Links;
    studyAt: string;
}

type Links = {
    course: string;
    link: string;
}

const ResultsComponent = () => {

    const navigate = useNavigate();

    //Lägga in "courses": "[frontend-link, backend-link .. , ..]"   i json för länkar.

    const courseScore: Array<CourseScore> = [];

    // frontend

    const loadResults = JSON.parse(localStorage.getItem("resultsArray")!);
    /*
    const loadLinks = jsonData.links.map((link: any) => {
        return link
    }) */

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

    /*
    let allPoints: Array<number> = [];
    const totalPoints = jsonData.questions.map((question: any) => {
        question.options.map((option: any) => {
            option.value.map((value: any) => {
                allPoints.push(value.points);
            })
        })
    });

    const allPointsSum = allPoints.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    console.log('allpoints:', allPointsSum);

    console.log(frontendPoints / allPointsSum); */


    const frontend = loadResults.map((result: any, index: number) => {
        return result.points[0];

    })

    const frontendFilter = frontend.filter((obj: undefined) => obj !== undefined)

    const frontendPoints = frontendFilter.reduce((a: number, b: number) => Number(a) + Number(b), 0)


    courseScore.push({ course: 'Frontendutvecklare', points: frontendPoints, links: { course: 'FE Karlstad', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare/' }, studyAt: 'Karlstad' });
    // frontend_distans

    const frontend_distans = loadResults.map((result: any, index: number) => {
        return result.points[1];

    })

    const frontend_distans_filter = frontend_distans.filter((obj: undefined) => obj !== undefined)

    const frontend_distans_points = frontend_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Frontendutvecklare', points: frontend_distans_points, links: { course: 'FE Distans', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare-distans/' }, studyAt: 'Distans' });

    // javascript_distans

    const javascript_distans = loadResults.map((result: any, index: number) => {
        return result.points[2];

    })

    const javascript_distans_filter = javascript_distans.filter((obj: undefined) => obj !== undefined)

    const javascript_distans_points = javascript_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'JavaScriptutvecklare', points: javascript_distans_points, links: { course: 'JS distans', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/javascriptutvecklare-distans/' }, studyAt: 'Distans' });

    // mobil_app

    const mobil_app = loadResults.map((result: any, index: number) => {
        return result.points[3];

    })

    const mobil_app_filter = mobil_app.filter((obj: undefined) => obj !== undefined)

    const mobil_app_points = mobil_app_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Mobilapplikationsutvecklare', points: mobil_app_points, links: { course: 'Mobilapp', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mobilapplikationsutvecklare-distans/' }, studyAt: 'Distans' });

    // mjukvaru_utveckling

    const mjukvaru_utveckling = loadResults.map((result: any, index: number) => {
        return result.points[4];

    })

    const mjukvaru_utveckling_filter = mjukvaru_utveckling.filter((obj: undefined) => obj !== undefined)

    const mjukvaru_utveckling_points = mjukvaru_utveckling_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Mjukvaruutvecklare', points: mjukvaru_utveckling_points, links: { course: 'Mjukvaruutveckling', 
    link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mjukvaruutvecklare-for-mobiltetstjanster/' }, studyAt: 'Distans' });

    const courseScoreSorted = courseScore.sort((a: any, b: any) => b.points - a.points)

    //funktion för att räkna ut svar/summa

    //mappa ut data för utbildning + länk till utbildning

    const openNewTab = (link: string) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
        if (newWindow) { newWindow.opener = null }
    }

    const gotoEducations = () => {
        navigate('/utbildningar');
    }


    return (
        <div className="results_wrapper">
            <section className="results_section">
                <h2>Ditt test resultat blev: </h2>
                <ul className="results_list">

                    {
                        courseScoreSorted.map((courseScore, index) => {
                            if (index < 5) {
                                return <li key={index} className="results_item"> 
                                <h2 className="rank">{`${index + 1}`}</h2> 
                                    <span>{courseScore.course} 
                                        <span className="study_at">{ courseScore.studyAt }</span>
                                    </span> 
                                    <span onClick={() => openNewTab(courseScore.links.link)}> Ansök </span>
                                    <span onClick={gotoEducations}> Läs mer </span>
                                </li>
                            }
                        })
                    }

                </ul>
                { /*<TestButton buttonText={'ansök här'} /> */}
                <TestButton buttonText={'ta testet igen'} />
            </section>
            {
            /*
            <section className="results_points">
                <h2>Alternativa utbildningar </h2>
                <p>Länkar till utbildningarna: </p>
                <li>
                    {
                        courseScoreSorted.map((courseScore, index) => {
                            return <span key={index}>{courseScore.course} <a href="" className="form_link">{courseScore.links}</a></span>
                        })
                    }
                </li>
            </section>
            */
            }
        </div>
    )
}

export default ResultsComponent;