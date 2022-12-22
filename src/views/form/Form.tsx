import './form.scss';
import tempMenu from './tempMenu.svg';
import tempPicture from '../../assets/photos/tempPicture.svg';
import hexagonEmpty from '../../assets/icons/hexagonEmpty.svg';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';

function Form() {

    return (
        <div className="form_wrapper">

            <div className="spaceholder_upper__left"></div>
            <div className="spaceholder_upper__right"></div>
            <div className="spaceholder_lower__left"></div>
            <div className="spaceholder_lower__right"></div>

            <section className="form_content">

                <nav className="form_nav">
                        <img className="temp_menu" src={ tempMenu } alt="" />
                </nav>

                <figure className="form_image">
                    <img src={ tempPicture } alt="" />
                    <div className="gradient_overlay"></div>
                </figure>

                <section className="quiz_section">

                    <article className="form_question">
                        <p>Hur skulle du beskriva din personlighet för en person som inte känner dig, Hur skulle du beskriva din personlighet för en person som inte känner dig?</p>
                    </article>

                    <section className="radio_quiz">
                        <img src={ hexagonEmpty } alt="" />
                        <p>hejje</p>
                    </section>

                    <section className="radio_quiz">
                        <img src={ hexagonEmpty } alt="" />
                        <p>hej</p>
                    </section>

                    <section className="radio_quiz">
                        <img src={ hexagonEmpty } alt="" />
                        <p>hejee</p>
                    </section>

                    <nav className="quiz_nav">
                        <img src={ arrowLeft } alt="" />
                        <p> 1 / 10 </p>
                        <img src={ arrowRight } alt="" />
                    </nav>

                </section>

            </section>

        </div>
    );
}
  
export default Form;