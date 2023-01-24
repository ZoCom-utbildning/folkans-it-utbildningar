import TestButton from "../testbutton/testButton";
import './resultsComponent.scss';

const ResultsComponent = () => {

    const points = 8;
    const courseResult = 'frontend-utvecklare!'
    const coursePercentage = '99%'
    //const localValues = load.localstorage()
    /*

    const loadResults = JSON.parse(localStorage.getItem("resultsArray")!);

    const allResults = loadResults.map((result: any) => {
        return result.points
    })

    const frontend = allResults.map((result: any) => {
        return result[0];
    })

    const hej = frontend.reduce((current: number, prev: number, index: number) => {
        if (index !== 0) {
            return Number(prev) + Number(current);
        }
    })
    console.log(hej);
    */

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
                    <span>{points}P: <a href="" className="form_link">Frontend-utvecklare</a></span>
                    <span>12P: <a href="" className="form_link">Backend-utvecklare</a></span>
                    <span>10P: <a href="" className="form_link">Fullstack-utvecklare</a></span>
                    <span>7P: <a href="" className="form_link">Mjukvaru-utvecklare</a></span>
                </li>
            </section>
        </div>
    )
}

export default ResultsComponent;