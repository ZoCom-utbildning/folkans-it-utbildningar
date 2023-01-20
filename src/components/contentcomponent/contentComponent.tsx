//import RangeSlider from '../../components/range/Rangeslider';
//import RadioButton from '../../components/radiobutton/Radiobutton';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import forminfo from '../../../forminfo.json';
import { SetStateAction, useEffect, useState } from 'react';
import "./contentcomponent.scss"

type Props = {
    formText: string;
    formType: string;
    questionId: number;
    decreaseQuestion: () => void;
    increaseQuestion: () => void;
}

type ButtonAmountType = {
    id: number;
    text: string;
}

type ResultsType = {
    question: string;
    buttonId: string;
}

function ContentComponent({ formText, formType, questionId, decreaseQuestion, increaseQuestion }: Props) {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    const [resultsArray, setResultsArray] = useState<ResultsType[]>(JSON.parse(localStorage.getItem("resultsArray")!) || []);
    const [optionText, setOptionText] = useState<string[]>([])
    const [buttonId, setButtonId] = useState<string>() //få in rätt knapp tryck här
    const [toggle, setToggle] = useState<boolean>(false)

    const resultsValue: ResultsType = {
        question: `${questionId}`,
        buttonId: `${buttonId}`
        //id ska bytas ut som state i vår radio section beroende på knappen tryckd
        //lägga in poäng här
    }

    useEffect(() => {
        questions.map(question => {
            if (questionId === question.id) {
                const tempText: SetStateAction<string[]> = []
                question.options.map(option => {
                    tempText.push(option.text)
                })
                setOptionText(tempText)
            }
        })
    }, [questionId])

    //funktion om localstorage finns (button.id == frågan vi är på)

    //kör funktion radioClicked() enbart toggle/radio inte localstorage delen

    const radioClicked = (number: any) => {
        //om id finns = push resultsValue -> resultsArray
        //annars byt ut (questionId) resultsValue i resultsArray
        setButtonId(number) //välj rätt id här beroende på vilken knapp som clickas

        setToggle(!toggle)

        //sätt enbart localstorage om toggle är falskt!
    }

    useEffect(() => {
        if (!toggle) {
            questionStorage();
        }
    }, [buttonId, toggle])

    const questionStorage = () => {
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

    //const [buttonAmount, setButtonAmount] = useState<ButtonAmountType[]>([]);

    /*useEffect(() => {
        forminfo.questions.map((question) => {
            const allOptions = question.options?.filter((option: any) => {
                if (questionId === question.id) {
                    return option
                }
            });
            if (questionId === question.id) {
                setButtonAmount(allOptions);
            }
        });
    }, [questionId]);*/

    // Storing array length to display maxValue of pages.
    questions.map(question => {
        questionNmbrs.push(question.id);  // [1, 2, 3, 4]
    });

    return (
        <section className="quiz_section">
            <article className="form_question">
                <p>{formText}</p>
            </article>
            <section className='radio_wrapper'>
                <section className='radio_component' onClick={() => radioClicked(0)}>
                    <input type='radio' name='radio'></input>
                    <p>{optionText[0]}</p>
                </section>
                <section className='radio_component' onClick={() => radioClicked(1)}>
                    <input type='radio' name='radio'></input>
                    <p>{optionText[1]}</p>
                </section>
                <section className='radio_component' onClick={() => radioClicked(2)}>
                    <input type='radio' name='radio'></input>
                    <p>{optionText[2]}</p>
                </section>
            </section>
            <nav className="quiz_nav">
                <img src={arrowLeft} alt="" onClick={decreaseQuestion} />
                <p> {questionId} / {questionNmbrs.length - 1} </p>
                <img src={arrowRight} alt="" onClick={increaseQuestion} />
            </nav>
        </section >
    )
}

export default ContentComponent;