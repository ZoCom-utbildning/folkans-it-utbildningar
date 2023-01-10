import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import './radioButton.scss';

type Props = {
    optionText: string;
}

function RadioButton({ optionText }: Props) {

    return (
        <section className='radio_component'>
            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>{ optionText }</p>
            </section>

            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>{ optionText }</p>
            </section>

            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>{ optionText }</p>
            </section>
        </section>
    )
}

export default RadioButton