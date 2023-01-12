import RadioButton from '../../components/radiobutton/Radiobutton';
import RangeSlider from '../../components/range/Rangeslider';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import forminfo from '../../../forminfo.json';
import FormImage from '../../components/image/Image';
import { useEffect, useState } from 'react';
import './form.scss';

function Form() {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    const [questionId, setQuestionId] = useState<number>(1);
    const [formText, setFormText] = useState<string>();
    const [formType, setFormType] = useState<string>();
    const [optionText, setOptionText] = useState<string>('');
    const [formImage, setFormImage] = useState<string>('');
    const [altImage, setAltImage] = useState<string>('');


    //Changing the question depending on questionNmbr

    useEffect(() => {

        questions.map((question) => {

            if (questionId === question.id) {
                setFormText(question.text);
            }

            if (questionId === question.id) {
                question.options.map((option) => {
                    setOptionText(option.text);
                });
            }

            if (questionId === question.id) {
                setFormImage(question.img);
            }

            if (questionId === question.id) {
                setAltImage(question.alt);
            }

        });

        if (questions[questionId - 1].type === 'radio') {
            setFormType('radio');
        } else if (questions[questionId - 1].type === 'range') {
            setFormType('range');
        }

    }, [questionId]);


    // Storing array length to display maxValue of pages.

    questions.map(question => {
        questionNmbrs.push(question.id);  // [1, 2, 3, 4]
    });


    // Changes pagenmbrs depending on click.

    const increaseQuestion = () => {
        if (questionId < questionNmbrs.length) {
            setQuestionId(questionId + 1);
        }
    }

    const decreaseQuestion = () => {
        if (questionId > 1) {
            setQuestionId(questionId - 1);
        }
    }


    return (
        <div className='desktop_wrapper'>
            <div className="form_wrapper">
                <section className="form_content">
                    <section className="top_section">
                        < FormImage src={formImage} alt={altImage} />
                    </section>
                    <section className="quiz_section">
                        <article className="form_question">
                            <p>{formText}</p>
                        </article>
                        {formType === 'range' ? <RangeSlider optionText={optionText} /> : < RadioButton optionText={optionText} />}
                        <nav className="quiz_nav">
                            <img src={arrowLeft} alt="" onClick={decreaseQuestion} />
                            <p> {questionId} / {questionNmbrs.length} </p>
                            <img src={arrowRight} alt="" onClick={increaseQuestion} />
                        </nav>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Form;