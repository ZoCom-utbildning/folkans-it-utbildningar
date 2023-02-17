import "./footer.scss";
import folkuniversitetet from "../../assets/logos/fulogo-rodsvart.webp";
import zocom from "../../assets/logos/zocom.png";

function Footer() {

    return (
        <footer>
            <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/" target="_blank"><img id="folkanImg" src={folkuniversitetet} alt="Folkuniversitetet logo" /></a>
            <a href="https://www.zocom.com/utbildning" target="_blank"><img id="zocomImg" src={zocom} alt="ZoCom logo" /></a>
        </footer>
    );
}

export default Footer;