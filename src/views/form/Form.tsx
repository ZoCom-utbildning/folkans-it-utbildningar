import tempMenu from './tempMenu.svg';
import threeFriends from '../../assets/photos/threeFriendsSVG.svg';
import RadioButton from '../../components/radiobutton/Radiobutton';
import RangeSlider from '../../components/range/Rangeslider';
import arrowLeft from '../../assets/icons/arrowLeft.svg';
import arrowRight from '../../assets/icons/arrowRight.svg';
import './form.scss';

function Form() {

    return (
        <div className="form_wrapper">
            <section className="form_content">
                <section className="top_section">
                    <nav className="form_nav">
                        <img className="temp_menu" src={tempMenu} alt="" />
                    </nav>
                    <figure className="form_image">
                        <img src={threeFriends} alt="" />
                        <div className="gradient_overlay"></div>
                    </figure>
                </section>
                <section className="quiz_section">
                    <article className="form_question">
                        <p>Hur skulle du beskriva din personlighet för en person som inte känner dig, Hur skulle du beskriva din personlighet för en person som inte känner dig?</p>
                    </article>
                    <RangeSlider />
                    <nav className="quiz_nav">
                        <img src={arrowLeft} alt="" />
                        <p> 1 / 10 </p>
                        <img src={arrowRight} alt="" />
                    </nav>
                </section>
            </section>
        </div>
    )
}

export default Form