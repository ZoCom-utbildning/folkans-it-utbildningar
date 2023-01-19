import { useState } from 'react';
import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import hexagonFilled from '../../assets/icons/hexagonFilled.svg';
import './radioButton.scss';


type Props = {
    optionText: string;
    id: number;
    questionId: number;
}

type ResultsType = {
    question: string;
    button: string;
}

function RadioButton({ optionText, id, questionId }: Props) {
    const [toggle, setToggle] = useState<boolean>(false);
    const [radio, setRadio] = useState<boolean>(false);
    const [resultsArray, setResultsArray] = useState<ResultsType[]>(JSON.parse(localStorage.getItem("resultsArray")!) || []);


    const resultsValue: ResultsType = {
        question: `${questionId}`,
        button: `${id}`
    }


    //fixa funktion så att enbart en knapp kan vara aktiv

    const radioClicked = () => {
        setToggle(!toggle);
        setRadio(!radio);

        if (!toggle) {
            questionStorage();
        }
    }

    const questionStorage = () => {
        const updatedArray: ResultsType[] = [...resultsArray, resultsValue];
        const index = resultsArray.findIndex(obj => obj.question === resultsValue.question);

        if (index === -1) {
            // lägg till nytt objekt
            const updatedArray: ResultsType[] = [...resultsArray, resultsValue];
            setResultsArray(updatedArray);
            localStorage.setItem("resultsArray", JSON.stringify(updatedArray));
        } else {
            // uppdatera arrayen med nytt objekt-värde
            const updatedArray = [
                ...resultsArray.slice(0, index),
                resultsValue,
                ...resultsArray.slice(index + 1)
            ];
            setResultsArray(updatedArray);
            localStorage.setItem("resultsArray", JSON.stringify(updatedArray));
        }

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