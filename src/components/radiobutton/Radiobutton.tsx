import { useState } from 'react';
import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import hexagonFilled from '../../assets/icons/hexagonFilled.svg';
import './radioButton.scss';

type Props = {
    optionText: string;
}

function RadioButton({ optionText }: Props) {
    const [toggle, setToggle] = useState<boolean>(false);
    const [radio, setRadio] = useState<boolean>(false);

    //-> props button.id -> kör funktion
    //ladda här load.localstorage()

    //funktion om localstorage finns (button.id == frågan vi är på) kör funktion radioClicked()

    //fixa funktion så att enbart en knapp kan vara aktiv

    const radioClicked = () => {
        setToggle(!toggle);
        setRadio(!radio);
        //localstorage: object med question.id för button.key
        // "storage" {
        //    "question.id": id
        //    "button.key": key
        //}
    }

    return (
        <section className='radio_component'>
            <section className={`radio_${radio ? "filled" : "quiz"}`} onClick={radioClicked}>
                {toggle ? <img src={hexagonFilled} /> : <img src={hexagonEmpty} alt="" />}
                <p>{optionText}</p>
            </section>
        </section>
    )
}

export default RadioButton