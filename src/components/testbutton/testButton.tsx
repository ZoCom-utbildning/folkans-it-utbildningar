import { useNavigate } from "react-router-dom";
import "./testButton.scss";

type Props = {
  buttonText: string;
};

function TestButton({ buttonText }: Props) {
  const navigate = useNavigate();

  function navToTest() {
    if (window.location.href.includes("fragor")) {
      localStorage.removeItem("resultsArray");
      window.location.reload();
    } else if (window.location.href.includes("")) {
      navigate("/fragor");
    }
  }

  return (
    <>
      <button className="homeButton" onClick={() => navToTest()}>
        {buttonText}
      </button>
    </>
  );
}

export default TestButton;
