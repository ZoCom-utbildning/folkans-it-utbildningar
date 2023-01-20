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

type ResultsType = {
    question: string;
    buttonId: string;
}

function ContentComponent({ formText, formType, questionId, decreaseQuestion, increaseQuestion }: Props) {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    const [resultsArray, setResultsArray] = useState<ResultsType[]>(JSON.parse(localStorage.getItem("resultsArray")!) || []);
    const [optionText, setOptionText] = useState<string[]>([])
    const [buttonId, setButtonId] = useState<string>() //kolla localstorage eller om den är tom
    //const true setTrue state
    const [toggle, setToggle] = useState<boolean>(false)

    const resultsValue: ResultsType = {
        question: `${questionId}`,
        buttonId: `${buttonId}`
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
    useEffect(() => {
        const answers = JSON.parse(localStorage.getItem("resultsArray")!)
        const allAnswers = answers.map((answer: { buttonId: any; }) => {
            return answer.buttonId
        })

        console.log(allAnswers)
        if (answers[questionId - 1].question.includes(questionId)) {
            console.log(allAnswers[questionId - 1].buttonId)
            setButtonId(allAnswers[questionId - 1].buttonId)
            //setTrue kolla om radio är ifylld istället för att skicka nummer
        }

        //beroende på question så ska button id stämma

        //if answer = questionId
        //hämta localstorage
        //jämför question id
        //returnera localstorage
        //skicka till variabel skicka till state setButtonId
    }, [])

    //const [answer, setAnswer] = useState(localstorage || number)

    const radioClicked = (number: any) => {
        setButtonId(number)
        setToggle(!toggle)
    }

    useEffect(() => {
        if (toggle) {
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
            setToggle(!toggle)
        }
    }, [buttonId, toggle])

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
                    <input type='radio' name='radio'></input> {/* checked state här*/}
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