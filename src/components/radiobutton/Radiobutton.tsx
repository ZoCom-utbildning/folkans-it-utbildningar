import { ResultType } from '@remix-run/router/dist/utils';
import { useEffect, useState } from 'react';
import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import hexagonFilled from '../../assets/icons/hexagonFilled.svg';
import './radioButton.scss';

type Props = {
    optionText: string;
    id: number;
    questionId: number;
    loadStorage: string;
}

type ResultsType = {
    question: string;
    button: string;
}


function RadioButton({ optionText, id, questionId, loadStorage }: Props) {
    const [toggle, setToggle] = useState<boolean>(false);
    const [radio, setRadio] = useState<boolean>(false);

    const [resultsArray, setResultsArray] = useState<ResultsType[]>([]) //ladda för att kolla om localstorage redan finns

    const resultsValue: ResultsType = {
        question: `${questionId}`,
        button: `${id}`
        //lägga in poäng här
    }

    //funktion om localstorage finns (button.id == frågan vi är på)
    //kör funktion radioClicked() enbart toggle/radio inte localstorage delen

    //fixa funktion så att enbart en knapp kan vara aktiv

    const radioClicked = () => {
        setToggle(!toggle);
        setRadio(!radio);
        //om id finns = push resultsValue -> resultsArray
        //annars byt ut (questionId) resultsValue i resultsArray
        const updatedArray: ResultsType[] = [...resultsArray, resultsValue];
        setResultsArray(updatedArray);
        //sätt enbart localstorage om toggle är falskt!
        /*
        const updatedArray = [...existingArray, objectetsomvivillsparahär];
        setExistingArray(updatedArray);

        localStorage.setItem("namnpåarrayhär", JSON.stringify(updatedArray));
        */
    }

    useEffect(() => {
        localStorage.setItem("resultsArray", JSON.stringify(resultsArray)) //ta array state här?
    }, [resultsArray])

    console.log(loadStorage);

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