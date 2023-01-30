import "./footer.scss";
import folkuniversitetet from "../../assets/logos/fulogo-rodsvart.webp";
import zocom from "../../assets/logos/zocom.png";

function Footer() {

    return (
        <footer>
            <a href="https://www.zocom.com/utbildning" target="_blank"><img src={zocom} alt="ZoCom logo" /></a>
            <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/" target="_blank"><img src={folkuniversitetet} alt="Folkuniversitetet logo" /></a>
        </footer>
    );
}

export default Footer;