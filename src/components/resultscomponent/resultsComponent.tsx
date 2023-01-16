import './resultsComponent.scss';
import TestButton from "../testbutton/testButton";

const ResultsComponent = () => {

    const points = 8;
    const courseResult = 'frontend-utvecklare!';

    //byt ut button till button-component från 'home'

    return(
        <div className="results_wrapper">
            <section className="results_section">
                <section className="results_text">
                    <h2>Ditt test resultat blev: </h2>
                    <p> { courseResult } </p>
                    <p>länkar till utbildningen</p>
                    < TestButton buttonText={'ta testet igen'} />
                </section>
            </section>
            <section className="results_points">
                <h2>Alternativa utbildningar </h2>
                <p>Länkar till utbildningarna: </p>
                <li>
                    <span>{ points }: </span><a href="">frontend-utvecklare</a>
                    <span>12P: </span><a href="">Backend-utvecklare</a>
                    <span>10P: </span><a href="">Fullstack-utvecklare</a>
                    <span>7P: </span><a href="">Mjukvaru-utvecklare</a>
                </li>
            </section>
        </div>
    )
}

export default ResultsComponent;