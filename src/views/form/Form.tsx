import './form.scss';
import tempMenu from './tempMenu.svg';
import tempPicture from './tempPicture.svg';

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
                </figure>

                <article className="form_question">
                    <p>Hur skulle du beskriva din personlighet för en person som inte känner dig, Hur skulle du beskriva din personlighet för en person som inte känner dig?</p>
                </article>

            </section>

        </div>
    );
}
  
export default Form;