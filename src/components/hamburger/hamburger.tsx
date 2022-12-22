import "./hamburger.scss";
import Icon from "../../assets/icons/hamburger.svg";
function Hamburger() {
  return (
    <div className="burger-icon">
      <span>
        <img src={Icon} alt="" />
      </span>
    </div>
  );
}

export default Hamburger;
