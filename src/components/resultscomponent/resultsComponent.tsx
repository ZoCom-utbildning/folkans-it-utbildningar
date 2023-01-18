import './resultsComponent.scss';
import TestButton from "../testbutton/testButton";

const ResultsComponent = () => {

    const points = 8;
    const courseResult = 'frontend-utvecklare!';
    //const localValues = load.localstorage()

    //funktion för att räkna ut svar/summa

    //mappa ut data för utbildning + länk till utbildning

    return (
        <div className="results_wrapper">
            <section className="results_section">
                <h3>Ditt test resultat blev: </h3>
                <p> { courseResult } </p>
                <p>länkar till utbildningen</p>
                < TestButton buttonText={'ta testet igen'} /> {/** rensa localstorage här? */}
            </section>
            <section className="results_points">
                <h3>Alternativa utbildningar </h3>
                <p>Länkar till utbildningarna: </p>
                <li>
                    <span>{ points }P: <a href="" className="form_link">Frontend-utvecklare</a></span>
                    <span>12P: <a href="" className="form_link">Backend-utvecklare</a></span>
                    <span>10P: <a href="" className="form_link">Fullstack-utvecklare</a></span>
                    <span>7P: <a href="" className="form_link">Mjukvaru-utvecklare</a></span>
                </li>
            </section>
        </div>
    )
}

export default ResultsComponent;