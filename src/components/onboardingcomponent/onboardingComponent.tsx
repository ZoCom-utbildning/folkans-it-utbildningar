import './onboardingComponent.scss';

type Props = {
    startTest: () => void;
}

const OnboardingComponent = ({ startTest }: Props) => {
    return (
        <div className="results_wrapper">
            <section className="results_points">
                <h2>Hur fungerar testet?</h2>
                <p className='onboarding_text'> All data från testet kommer att sparas anonymt. </p>
                <p className='onboarding_text'> Testet består av 11 frågor, som alla har tre svarsalternativ. </p>
                <p className='onboarding_text'> Det finns inget rätt eller fel, utan svara med det svarsalternativ som känns mest rätt för hur just du ser på frågan. </p>
                <p className='onboarding_text'> När du svarat på frågorna kommer du att få ett resultat, där de tre utbildningar som du blivit bäst matchad mot dyker upp. </p>
                <p className='onboarding_text'> Detta är så klart bara en rekommendation, men det är samtidigt vår kvalificerade gissning för vilken utbildning vi tror är mest rätt för just dig. </p>
                <button className={'start_button'} onClick={() => startTest()}>
                    Starta testet
                </button>
            </section>
        </div>
    )
}

export default OnboardingComponent;