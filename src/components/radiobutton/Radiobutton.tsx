import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import './radioButton.scss';

function RadioButton() {

    return (
        <section className='radio_component'>
            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>blå</p>
            </section>

            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>grön</p>
            </section>

            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>röd</p>
            </section>
        </section>
    )
}

export default RadioButton