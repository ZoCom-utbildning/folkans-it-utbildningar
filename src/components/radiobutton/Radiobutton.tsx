import { useEffect, useState } from 'react';
import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import hexagonFilled from '../../assets/icons/hexagonFilled.svg';
import './radioButton.scss';

type Props = {
    optionText: string;
}

function RadioButton({ optionText }: Props) {
    const [toggle, setToggle] = useState<boolean>(true);
    const [filled, setFilled] = useState<string>('filled');

    useEffect(() => {
        toggle ? setFilled('filled') : setFilled('');
    }, []);

    const radioClicked = () => {
        setToggle(!toggle);
    }

    return (
        <section className='radio_component'>
            <section className={`radio_quiz ${filled}`} onClick={radioClicked}>
                {toggle ? <img src={hexagonFilled} /> : <img src={hexagonEmpty} alt="" />}
                <p>{optionText}</p>
            </section>

            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>{optionText}</p>
            </section>

            <section className="radio_quiz">
                <img src={hexagonEmpty} alt="" />
                <p>{optionText}</p>
            </section>
        </section>
    )
}

export default RadioButton