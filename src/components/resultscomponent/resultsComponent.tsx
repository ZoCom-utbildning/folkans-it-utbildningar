import TestButton from "../testbutton/testButton";
import './resultsComponent.scss';



const ResultsComponent = () => {

    const points = 8;
    const courseResult = 'frontend-utvecklare!'
    const coursePercentage = '99%'


    const courseScore = [];

    // frontend

    const loadResults = JSON.parse(localStorage.getItem("resultsArray")!);

    const frontend = loadResults.map((result: any, index: number) => {
            return result.points[0];

    })

    const frontendFilter = frontend.filter((obj: undefined) => obj !== undefined)

    const frontendPoints = frontendFilter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'FE Karlstad', points: frontendPoints });
    // frontend_distans

    const frontend_distans = loadResults.map((result: any, index: number) => {
            return result.points[1];

    })

    const frontend_distans_filter = frontend_distans.filter((obj: undefined) => obj !== undefined)

    const frontend_distans_points = frontend_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'FE Distans', points: frontend_distans_points });

    // javascript_distans

    const javascript_distans = loadResults.map((result: any, index: number) => {
        return result.points[2];

    })

    const javascript_distans_filter = javascript_distans.filter((obj: undefined) => obj !== undefined)

    const javascript_distans_points = javascript_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'JS distans', points: javascript_distans_points });

    // mobil_app

    const mobil_app = loadResults.map((result: any, index: number) => {
        return result.points[3];

    })

    const mobil_app_filter = mobil_app.filter((obj: undefined) => obj !== undefined)

    const mobil_app_points = mobil_app_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Mobilapp', points: mobil_app_points });

    // mjukvaru_utveckling

    const mjukvaru_utveckling = loadResults.map((result: any, index: number) => {
        return result.points[4];

    })

    const mjukvaru_utveckling_filter = mjukvaru_utveckling.filter((obj: undefined) => obj !== undefined)

    const mjukvaru_utveckling_points = mjukvaru_utveckling_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    courseScore.push({ course: 'Mjukvaruutveckling', points: mjukvaru_utveckling_points });

    console.log(courseScore);

    const courseScoreSorted = courseScore.sort((a, b) => b.points - a.points)
    console.log(courseScoreSorted)





    //funktion för att räkna ut svar/summa

    //mappa ut data för utbildning + länk till utbildning

    return (
        <div className="results_wrapper">
            <section className="results_section">
                <h2>Ditt test resultat blev: </h2>
                <ul className="results_list">

                    { 

                    courseScoreSorted.map((courseScore, index) => {
                        if (index < 3) {
                        return <li key={index} className="results_item"> { `${index + 1}.` } {courseScore.course} {courseScore.points} LÄNK HÄR?</li>
                        }
                    })

                    }

                </ul>
                <TestButton buttonText={'ansök här'} />
                <TestButton buttonText={'ta testet igen'} />
            </section>
            <section className="results_points">
                <h2>Alternativa utbildningar </h2>
                <p>Länkar till utbildningarna: </p>
                <li>
                    { 

                    courseScoreSorted.map((courseScore, index) => {
                        return <span key={index}>{courseScore.points}P: <a href="" className="form_link">{courseScore.course}</a> LÄNK HÄR?</span>
                    })

                    }
                </li>
            </section>
        </div>
    )
}

export default ResultsComponent;