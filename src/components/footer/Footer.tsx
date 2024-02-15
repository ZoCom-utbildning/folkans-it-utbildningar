import "./footer.scss";
import folkuniversitetet from "../../assets/logos/fulogogbg.png";
import zocom from "../../assets/logos/zocom-white.png";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/"
        target="_blank"
      >
        <img
          id="folkanImg"
          src={folkuniversitetet}
          alt="Folkuniversitetet logo"
        />
      </a>
      <a href="https://www.zocom.com/utbildning" target="_blank">
        <img id="zocomImg" src={zocom} alt="ZoCom logo" />
      </a>
    </footer>
  );
}

export default Footer;
