import arrow from "../../assets/icons/arrow.svg";
import { useEffect, useState } from "react";
import "./contentcomponent.scss";
import { auth, db } from "../../services/firebase";
import { doc, setDoc } from "firebase/firestore";
import anime, { AnimeInstance } from 'animejs';
import { ResultsType } from '../../models/types';
import { Question, Option, Optionvalue } from '../../models/types';

type Props = {
  questions: Array<Question>;
  formText: string;
  questionId: number;
  firstQuestion: boolean;
  decreaseQuestion: () => void;
  increaseQuestion: (toggle: boolean, shakeAnimation: AnimeInstance) => void;
};

function ContentComponent({
  questions,
  formText,
  questionId,
  decreaseQuestion,
  increaseQuestion,
  firstQuestion,
}: Props) {
  const [resultsArray, setResultsArray] = useState<ResultsType[]>(
    JSON.parse(localStorage.getItem("resultsArray")!) || []
  );
  const [optionText, setOptionText] = useState<string[]>([]);
  const [buttonId, setButtonId] = useState<string>("0");
  const [pointsId, setPointsId] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [buttonCheck, setButtonCheck] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const resultsValue: ResultsType = {
    question: `${questionId}`,
    button: `${buttonId}`,
    points: pointsId,
  };

  let shakeAnimation: AnimeInstance = anime({
    targets: '.quiz_section .radio_wrapper, .quiz_nav',
    keyframes: [
      { translateX: '10px' },
      { translateX: '0px' },
      { translateX: '-10px' },
      { translateX: '0px' }
    ],
    duration: 200,
    endDelay: 0,
    easing: 'linear',
    autoplay: false
  });

  useEffect(() => {
    if (!resultsArray[questionId - 1] && questionId !== 0) {
      const updatedArray: ResultsType[] = [
        ...resultsArray,
        { question: "", button: "", points: [] },
      ];
      setResultsArray(updatedArray);
      localStorage.setItem("resultsArray", JSON.stringify(updatedArray));
    }
  }, []);

  useEffect(() => {
    questions.map((question: Question) => {
      if (questionId === question.id) {
        const tempText: string[] = [];
        question.options.map((option: { text: string }) => {
          tempText.push(option.text);
        });
        setOptionText(tempText);
      }
    });
    setButtonCheck(false);
  }, [questionId]);

  useEffect(() => {
    if (resultsArray.length > 0 && resultsArray[questionId]) {
      setSelectedOption(resultsArray[questionId].button);
      setButtonCheck(true);
    } else {
      setSelectedOption("");
    }
  }, [questionId]);

  useEffect(() => {
    if (toggle) {
      const index: number = resultsArray.findIndex(
        (obj) => obj.question === resultsValue.question
      );
      if (index === -1) {
        // lägg till nytt objekt
        const updatedArray: ResultsType[] = [...resultsArray, resultsValue];
        setResultsArray(updatedArray);
        localStorage.setItem("resultsArray", JSON.stringify(updatedArray));
      } else {
        // uppdatera arrayen med nytt objekt-värde
        const updatedArray: ResultsType[] = [
          ...resultsArray.slice(0, index),
          resultsValue,
          ...resultsArray.slice(index + 1),
        ];
        setResultsArray(updatedArray);
        localStorage.setItem("resultsArray", JSON.stringify(updatedArray));
      }
      setToggle(!toggle);
    }
  }, [pointsId]);

  const temporaryPoints = async (buttonId: Promise<string>) => {
    const id = await buttonId;

    questions.map((question: Question) => {
      if (questionId === question.id) {
        const tempPoints: string[] = [];
        question.options.map((option: Option) => {
          if (option.id == id + 1) {
            option.value.map((value: Optionvalue) => {
              tempPoints.push(`${value.points}`);
            });
          }
        });
        if (resultsArray.length > 0) {
          setPointsId(tempPoints);
        }
      }
    });
  };

  // Lägger till answers till firebase databasen 
  useEffect(() => {
    (async () => {
      const user = auth.currentUser?.uid;
      console.log("user uid", user);
      await setDoc(doc(db, "answers", `${user}`), {
        user: `${user}`,
        answers: resultsArray
      });
    })();
  }, [questionId]);

  const radioClicked = (number: any) => {
    setButtonId(number);
    temporaryPoints(number);
    setToggle(!toggle);
    setButtonCheck(true);
  };

  const handleOption = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="quiz_section">
      <article className="form_question">
        <h3>{formText}</h3>
      </article>
      <section className="radio_wrapper">
        <label
          htmlFor="radio-0"
          className="radio_component"
          onClick={() => radioClicked(0)}
        >
          <input
            type="radio"
            name="radio"
            id="radio-0"
            value="0"
            checked={selectedOption === "0"}
            onChange={handleOption}
          ></input>
          <p>{optionText[0]}</p>
        </label>
        <label
          htmlFor="radio-1"
          className="radio_component"
          onClick={() => radioClicked(1)}
        >
          <input
            type="radio"
            name="radio"
            id="radio-1"
            value="1"
            checked={selectedOption === "1"}
            onChange={handleOption}
          ></input>
          <p>{optionText[1]}</p>
        </label>
        <label
          htmlFor="radio-2"
          className="radio_component margin"
          onClick={() => radioClicked(2)}
        >
          <input
            type="radio"
            name="radio"
            id="radio-2"
            value="2"
            checked={selectedOption === "2"}
            onChange={handleOption}
          ></input>
          <p>{optionText[2]}</p>
        </label>
      </section>
      <div className="nav_container">
        <nav className="quiz_nav">
          <img
            className={`left-arrow hidden_${firstQuestion ? "true" : "false"}`}
            src={arrow}
            alt=""
            onClick={() => decreaseQuestion()}
          />
          <p>
            {" "}
            {questionId} / {questions.length - 1}{" "}
          </p>
          <img
            className={` right-arrow transparent_${buttonCheck ? "false" : "true"}`}
            src={arrow}
            alt=""
            onClick={() => increaseQuestion(buttonCheck, shakeAnimation)}
          />
        </nav>
      </div>
    </section>
  );
}

export default ContentComponent;