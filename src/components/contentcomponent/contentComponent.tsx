import RadioButton from '../../components/radiobutton/Radiobutton';
import RangeSlider from '../../components/range/Rangeslider';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import forminfo from '../../../forminfo.json';

type Props = {
    formText: string;
    formType: string;
    optionText: string;
    questionId: number;
    decreaseQuestion: () => void;
    increaseQuestion: () => void;
}

function ContentComponent({ formText, formType, optionText, questionId, decreaseQuestion, increaseQuestion }: Props) {

    const questions = forminfo.questions;
    const questionNmbrs: Array<number> = [];

    // Storing array length to display maxValue of pages.
    questions.map(question => {
        questionNmbrs.push(question.id);  // [1, 2, 3, 4]
    });

    return (
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
    )
}

export default ContentComponent;