import "./footer.scss";
import folkuniversitetet from "../../assets/logos/fulogo-rodsvart.webp";
import zocom from "../../assets/logos/zocom.png";

function Footer() {

    return (
        <section className="footer">
            <a href="https://www.zocom.com/utbildning"><img src={zocom} alt="ZoCom logo"/></a>
            <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/"><img src={folkuniversitetet} alt="Folkuniversitetet logo" /></a>
        </section>
    );
}
  
export default Footer;