import './onboardingComponent.scss';
import { ResultsType, Question } from '../../models/types';
import { useNavigate } from 'react-router-dom';

type Props = {
    startTest: () => void;
    questions: Question[];
    setLastPage: React.Dispatch<React.SetStateAction<boolean>>;
    setQuestionId: React.Dispatch<React.SetStateAction<number>>;
}

const OnboardingComponent = ({ startTest, questions, setLastPage, setQuestionId }: Props) => {

    const navigate = useNavigate();


    let loadResults: ResultsType[] | [] = [];

    if (JSON.parse(localStorage.getItem("resultsArray")!)) {
        loadResults = JSON.parse(localStorage.getItem("resultsArray")!);
    }


    const gotoResult = () => {
        setQuestionId(questions.length);
        setLastPage(true);
        navigate('/fragor/resultat');
    }


    return (
        <div className="results_wrapper">
            <section className="results_points">
                <h2>Hur fungerar testet?</h2>
                <p className='onboarding_text'> All data från testet kommer att sparas anonymt. </p>
                <p className='onboarding_text'> Testet består av 11 frågor, som alla har tre svarsalternativ. </p>
                <p className='onboarding_text'> Det finns inget rätt eller fel, utan svara med det svarsalternativ som känns mest rätt för dig. </p>
                <p className='onboarding_text'> När du svarat på frågorna kommer du att få ett resultat, där fem utbildningar rangordnas efter hur du svarat på frågorna. </p>
                <p className='onboarding_text'> Detta är så klart bara en rekommendation, men det är samtidigt vår kvalificerade gissning för vilken utbildning vi tror är mest rätt för just dig. </p>

                <section className="button_container">
                    <button className={'start_button'} onClick={() => startTest()}>
                        Starta testet
                    </button>
                    {
                        loadResults.length !== questions.length
                            ?
                            ''
                            :
                            <button className={`result_button`} onClick={gotoResult}>Se senaste resultat</button>
                    }
                </section>

            </section>
        </div>
    )
}

export default OnboardingComponent;