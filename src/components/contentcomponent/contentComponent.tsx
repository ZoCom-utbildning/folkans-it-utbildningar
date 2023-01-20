//import RangeSlider from '../../components/range/Rangeslider';
import RadioButton from '../../components/radiobutton/Radiobutton';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import forminfo from '../../../forminfo.json';
import { useEffect, useState } from 'react';

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

function ContentComponent({ formText, formType, questionId, decreaseQuestion, increaseQuestion }: Props) {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    const [buttonAmount, setButtonAmount] = useState<ButtonAmountType[]>([]);

    useEffect(() => {
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
    }, [questionId]);

    // Storing array length to display maxValue of pages.
    questions.map(question => {
        questionNmbrs.push(question.id);  // [1, 2, 3, 4]
    });

    const buttonArray = buttonAmount?.map((button, index) => {
        if (formType === 'radio') {
            return < RadioButton optionText={button.text} key={index} id={index} questionId={questionId} />
        } else if (formType === 'range') {
            //return <RangeSlider optionText={button.text} key={index} id={index} questionId={questionId} />
        }
    });

    return (
        <section className="quiz_section">
            <article className="form_question">
                <p>{formText}</p>
            </article>
            {buttonArray}
            {/*
            section
                button key 1
            section

            section
                button key 2
            section

            section
                button key 3
            section
            */}
            <nav className="quiz_nav">
                <img src={arrowLeft} alt="" onClick={decreaseQuestion} />
                <p> {questionId} / {questionNmbrs.length - 1} </p>
                <img src={arrowRight} alt="" onClick={increaseQuestion} />
            </nav>
        </section>
    )
}

export default ContentComponent;