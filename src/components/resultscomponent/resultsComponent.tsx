import TestButton from "../testbutton/testButton";
import './resultsComponent.scss';


type Course = {
    frontend: number;
    frontend_distans: number;
    javascript_distans: number;
    mobil_app: number;
    mjukvaru_utveckling: number;
}


const ResultsComponent = () => {

    const points = 8;
    const courseResult = 'frontend-utvecklare!'
    const coursePercentage = '99%'


    const courseScore: Course = {
        frontend: 0,
        frontend_distans: 0,
        javascript_distans: 0,
        mobil_app: 0,
        mjukvaru_utveckling: 0
    }

    // frontend

    const loadResults = JSON.parse(localStorage.getItem("resultsArray")!);

    const frontend = loadResults.map((result: any, index: number) => {
            return result.points[0];

    })

    const frontendFilter = frontend.filter((obj: undefined) => obj !== undefined)

    courseScore.frontend = frontendFilter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    // frontend_distans

    const frontend_distans = loadResults.map((result: any, index: number) => {
            return result.points[1];

    })

    const frontend_distans_filter = frontend_distans.filter((obj: undefined) => obj !== undefined)

    courseScore.frontend_distans = frontend_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    // javascript_distans

    const javascript_distans = loadResults.map((result: any, index: number) => {
        return result.points[2];

    })

    const javascript_distans_filter = javascript_distans.filter((obj: undefined) => obj !== undefined)

    courseScore.javascript_distans = javascript_distans_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    // mobil_app

    const mobil_app = loadResults.map((result: any, index: number) => {
        return result.points[3];

    })

    const mobil_app_filter = mobil_app.filter((obj: undefined) => obj !== undefined)

    courseScore.mobil_app = mobil_app_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    // mjukvaru_utveckling

    const mjukvaru_utveckling = loadResults.map((result: any, index: number) => {
        return result.points[4];

    })

    const mjukvaru_utveckling_filter = mjukvaru_utveckling.filter((obj: undefined) => obj !== undefined)

    courseScore.mjukvaru_utveckling = mjukvaru_utveckling_filter.reduce((a: number, b: number) => Number(a) + Number(b), 0)

    console.log(courseScore);





    //funktion för att räkna ut svar/summa

    //mappa ut data för utbildning + länk till utbildning

    return (
        <div className="results_wrapper">
            <section className="results_section">
                <h2>Ditt test resultat blev: </h2>
                <ul className="results_list">
                    <li className='results_item'>
                        1 {courseResult}{coursePercentage}
                    </li>
                    <li className='results_item'>
                        2 {courseResult}
                    </li>
                    <li className='results_item'>
                        3 {courseResult}
                    </li>
                </ul>
                <TestButton buttonText={'ansök här'} />
                <TestButton buttonText={'ta testet igen'} />
            </section>
            <section className="results_points">
                <h2>Alternativa utbildningar </h2>
                <p>Länkar till utbildningarna: </p>
                <li>
                    <span>{courseScore.frontend}P: <a href="" className="form_link">Frontend-utvecklare</a></span>
                    <span>{courseScore.frontend_distans}P: <a href="" className="form_link">Backend-utvecklare</a></span>
                    <span>{courseScore.javascript_distans}P: <a href="" className="form_link">Fullstack-utvecklare</a></span>
                    <span>{courseScore.mjukvaru_utveckling}P: <a href="" className="form_link">Mjukvaru-utvecklare</a></span>
                </li>
            </section>
        </div>
    )
}

export default ResultsComponent;