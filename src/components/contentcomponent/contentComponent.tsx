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
    button: string;
}

function ContentComponent({ formText, formType, questionId, decreaseQuestion, increaseQuestion }: Props) {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    const [resultsArray, setResultsArray] = useState<ResultsType[]>(JSON.parse(localStorage.getItem("resultsArray")!) || []);

    //const resultsValue: ResultsType = {
    //question: `${questionId}`,
    //button: `${id}`
    //id ska bytas ut som state i vår radio section beroende på knappen tryckd
    //lägga in poäng här
    //}

    //funktion om localstorage finns (button.id == frågan vi är på)
    //kör funktion radioClicked() enbart toggle/radio inte localstorage delen

    //fixa funktion så att enbart en knapp kan vara aktiv

    const radioClicked = () => {
        //om id finns = push resultsValue -> resultsArray
        //annars byt ut (questionId) resultsValue i resultsArray
        //const updatedArray: ResultsType[] = [...resultsArray, resultsValue];
        //setResultsArray(updatedArray);
        //localStorage.setItem("resultsArray", JSON.stringify(updatedArray)) //ta array state här?
        //sätt enbart localstorage om toggle är falskt!
    }

    //console.log(resultsArray)

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


    /*const optionText = buttonAmount?.map((button, index) => {
        if (questionId === question.id) {
            setButtonAmount(allOptions);
        }
    });*/

    // Storing array length to display maxValue of pages.
    questions.map(question => {
        questionNmbrs.push(question.id);  // [1, 2, 3, 4]
    });

    const [optionText, setOptionText] = useState<string[]>([])


    useEffect(() => {
        questions.map(question => {
            if (questionId === question.id) {
                const tempText: SetStateAction<string[]> = []
                console.log(question.options)
                question.options.map(option => {
                    console.log(option.text)
                    tempText.push(option.text)
                })
                setOptionText(tempText)
            }
        })
    }, [questionId])

    console.log(optionText)

    return (
        <section className="quiz_section">
            <article className="form_question">
                <p>{formText}</p>
            </article>
            {/*buttonArray*/}
            <section className='radio_wrapper'>
                <section className='radio_component' onClick={radioClicked}>
                    <input type='radio' name='radio'></input>
                    <p>{optionText[0]}</p>
                </section>
                <section className='radio_component' onClick={radioClicked}>
                    <input type='radio' name='radio'></input>
                    <p>{optionText[1]}</p>
                </section>
                <section className='radio_component' onClick={radioClicked}>
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