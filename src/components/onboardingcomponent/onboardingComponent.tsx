import './onboardingComponent.scss';

type Props = {
    startTest: () => void;
}

const OnboardingComponent = ({ startTest }: Props) => {

    return (
        <div className="results_wrapper">
            <section className="results_section">
                <h2>Här är vår onboarding heading</h2>
                <p>här är vår onboarding text</p>
                <button className='start_button' onClick={() => startTest()}>
                    Starta testet
                </button>
            </section>
            <section className="results_points">
                <h2>här är mer heading</h2>
                <p>här är mer text angående testet</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, maxime.</p>
            </section>
        </div>
    )
}

export default OnboardingComponent;