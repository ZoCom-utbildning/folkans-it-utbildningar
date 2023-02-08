import ImageComponent from "../imagecomponent/imageComponent";
import ContentComponent from "../contentcomponent/contentComponent";
import { useEffect, useState, useRef } from "react";
import PersonaContent from "../personacontent/PersonaContent";
import personasImage1 from "../../assets/photos/personas/Persona1.webp";
import personasImage2 from "../../assets/photos/personas/Persona2.webp";
import personasImage3 from "../../assets/photos/personas/Persona3.webp";
import personasImage4 from "../../assets/photos/personas/Persona4.webp";
import personasImage5 from "../../assets/photos/personas/Persona5.webp";
import ResultsComponent from "../resultscomponent/resultsComponent";
import OnboardingComponent from "../onboardingcomponent/onboardingComponent";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import anime, { AnimeInstance } from 'animejs';

type Props = {
  activePersona: number;
};

function FormComponent({ activePersona }: Props) {
  const [questions, setQuestions] = useState<Array<any>>([]);
  const [questionId, setQuestionId] = useState<number>(0);
  const [formText, setFormText] = useState<string>("");
  const [formImage, setFormImage] = useState<string>("");
  const [altImage, setAltImage] = useState<string>("");
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [firstPage, setFirstPage] = useState<boolean>(false);
  const [firstQuestion, setFirstQuestion] = useState<boolean>(true);



  // Hämtar questions från firebase databasen
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      const tempArr: any[] = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });

      setQuestions(tempArr);
    })();
  }, []);

  //Changes question depending on questionNmbr
  useEffect(() => {
    questions.map((question) => {
      if (questionId === question.id) {
        setFormText(question.text);
        setFormImage(question.img);
        setAltImage(question.alt);
      }
    });
    if (!window.location.href.includes("fragor") && activePersona === 0) {
      setFormImage(personasImage1);
      setAltImage("personasImage1");
    } else if (
      !window.location.href.includes("fragor") &&
      activePersona === 1
    ) {
      setFormImage(personasImage2);
      setAltImage("personasImage2");
    } else if (
      !window.location.href.includes("fragor") &&
      activePersona === 2
    ) {
      setFormImage(personasImage3);
      setAltImage("personasImage3");
    } else if (
      !window.location.href.includes("fragor") &&
      activePersona === 3
    ) {
      setFormImage(personasImage4);
      setAltImage("personasImage4");
    } else if (
      !window.location.href.includes("fragor") &&
      activePersona === 4
    ) {
      setFormImage(personasImage5);
      setAltImage("personasImage5");
    }

    if (questionId === 0) {
      setFirstPage(true);
    } else {
      setFirstPage(false);
    }

    if (questionId === 1) {
      setFirstQuestion(true);
    } else {
      setFirstQuestion(false);
    }
  }, [activePersona, questionId, questions]);

  // Changes pagenmbrs depending on click.
  //framåt knapp syns inte om du inte svarat på frågan
  const increaseQuestion = (buttonCheck: boolean, shakeAnimation: AnimeInstance) => {
    if (questionId < questions.length && buttonCheck) {
      setQuestionId(questionId + 1);
      setFirstQuestion(false);
    }
    if (questionId === questions.length - 1) {
      setLastPage(true);
    }
    if (buttonCheck == false) {
      shakeAnimation.play();
    }
  };

  const decreaseQuestion = () => {
    if (questionId > 1) {
      setQuestionId(questionId - 1);
    }
  };

  const startTest = () => {
    setQuestionId(questionId + 1);
  };

  return (
    <section className="card_content">
      {window.location.href.includes("fragor") && firstPage ? (
        <>
          <OnboardingComponent startTest={startTest} />
        </>
      ) : window.location.href.includes("fragor") && !firstPage && !lastPage ? (
        <>
          <ImageComponent formImage={formImage} altImage={altImage} />
          <ContentComponent
            questions={questions}
            formText={formText}
            questionId={questionId}
            increaseQuestion={increaseQuestion}
            decreaseQuestion={decreaseQuestion}
            firstQuestion={firstQuestion}
          />
        </>
      ) : window.location.href.includes("fragor") && lastPage ? (
        <>
          <ResultsComponent />
        </>
      ) : window.location.href.includes("") ? (
        <section className="persona-card-content">
          <ImageComponent formImage={formImage} altImage={altImage} />
          <PersonaContent activePersona={activePersona} />
        </section>
      ) : null}
    </section>
  );
}

export default FormComponent;
