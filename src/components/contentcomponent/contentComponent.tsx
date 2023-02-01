import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import forminfo from '../../../forminfo.json';
import { SetStateAction, useEffect, useState } from 'react';
import "./contentcomponent.scss"

type Props = {
    formText: string;
    questionId: number;
    firstQuestion: boolean;
    decreaseQuestion: () => void
    increaseQuestion: (toggle: boolean) => void
}

type ResultsType = {
    question: string;
    button: string;
    points: string[];
}

function ContentComponent({ formText, questionId, decreaseQuestion, increaseQuestion, firstQuestion }: Props) {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    const [resultsArray, setResultsArray] = useState<ResultsType[]>(JSON.parse(localStorage.getItem("resultsArray")!) || []);
    const [optionText, setOptionText] = useState<string[]>([])
    const [buttonId, setButtonId] = useState<string>("0")
    const [pointsId, setPointsId] = useState<string[]>([])
    const [selectedOption, setSelectedOption] = useState("")
    const [buttonCheck, setButtonCheck] = useState<boolean>(false)
    const [toggle, setToggle] = useState<boolean>(false)

    const resultsValue: ResultsType = {
        question: `${questionId}`,
        button: `${buttonId}`,
        points: pointsId
    }

    useEffect(() => {
        if (!resultsArray[questionId - 1] && questionId !== 0) {
            const updatedArray: ResultsType[] = [...resultsArray, { question: "", button: "", points: [] }];
            setResultsArray(updatedArray);
            localStorage.setItem("resultsArray", JSON.stringify(updatedArray));
        }
    }, [])

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
        setButtonCheck(false);
    }, [questionId])

    useEffect(() => {
        if (resultsArray.length > 0 && resultsArray[questionId]) {
            setSelectedOption(resultsArray[questionId].button)
            setButtonCheck(true);

        } else {
            setSelectedOption("")
        }
    }, [questionId])

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
    }, [pointsId])

    const temporaryPoints = async (buttonId: any) => {
        const id = await buttonId

        questions.map(question => {
            if (questionId === question.id) {
                const tempPoints: SetStateAction<string[]> = []
                question.options.map(option => {
                    if (option.id == Number(id) + 1) {
                        option.value.map((value) => {
                            tempPoints.push(`${value.points}`);
                        })
                    }
                })
                if (resultsArray.length > 0) {
                    setPointsId(tempPoints)
                }
            }
        })
    }

    const radioClicked = (number: any) => {
        setButtonId(number)
        temporaryPoints(number)
        setToggle(!toggle)
        setButtonCheck(true)
    }

    const handleOption = (event: any) => {
        setSelectedOption(event.target.value);
        console.log(event.target.checked)
    }


    // Storing array length to display maxValue of pages.
    questions.map(question => {
        questionNmbrs.push(question.id);  // [1, 2, 3, 4]
    })

    return (
        <section className="quiz_section">
            <article className="form_question">
                <p>{formText}</p>
            </article>
            <section className='radio_wrapper'>
                <label htmlFor="radio-0" className='radio_component' onClick={() => radioClicked(0)}>
                    <input type='radio' name='radio' id="radio-0" value="0" checked={selectedOption === "0"} onChange={handleOption}></input>
                    <p>{optionText[0]}</p>
                </label>
                <label htmlFor="radio-1" className='radio_component' onClick={() => radioClicked(1)}>
                    <input type='radio' name='radio' id="radio-1" value="1" checked={selectedOption === "1"} onChange={handleOption}></input>
                    <p>{optionText[1]}</p>
                </label>
                <label htmlFor="radio-2" className='radio_component' onClick={() => radioClicked(2)}>
                    <input type='radio' name='radio' id="radio-2" value="2" checked={selectedOption === "2"} onChange={handleOption}></input>
                    <p>{optionText[2]}</p>
                </label>
            </section>
            <nav className="quiz_nav">
                <img className={`hidden_${firstQuestion ? "true" : "false"}`} src={arrowLeft} alt="" onClick={() => decreaseQuestion()} />
                <p> {questionId} / {questionNmbrs.length - 1} </p>
                <img className={`transparent_${buttonCheck ? "false" : "true"}`} src={arrowRight} alt="" onClick={() => increaseQuestion(buttonCheck)} />
            </nav>
        </section >
    )
}

export default ContentComponent;