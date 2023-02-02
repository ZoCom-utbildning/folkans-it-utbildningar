import forminfo from "../../../forminfo.json";
import ImageComponent from "../imagecomponent/imageComponent";
import ContentComponent from "../contentcomponent/contentComponent";
import { useEffect, useState } from "react";
import PersonaContent from "../personacontent/PersonaContent";
import happyGuy from "../../assets/photos/happyGuy.png";
import ResultsComponent from "../resultscomponent/resultsComponent";
import OnboardingComponent from "../onboardingcomponent/onboardingComponent";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

type Props = {
  activePersona: number;
};

function FormComponent({ activePersona }: Props) {
  // const questions = forminfo.questions;
  // const questionNmbrs: Array<number> = [];
  const AMOUNT_OF_QUESTIONS = 11;
  const [questions, setQuestions] = useState<Array<any>>([]);
  const [questionId, setQuestionId] = useState<number>(0);
  const [formText, setFormText] = useState<string>("");
  const [formImage, setFormImage] = useState<string>("");
  const [altImage, setAltImage] = useState<string>("");
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [firstPage, setFirstPage] = useState<boolean>(false);
  const [firstQuestion, setFirstQuestion] = useState<boolean>(true);

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

    if (!window.location.href.includes("fragor")) {
      setFormImage(happyGuy);
    }

    if (questionId === AMOUNT_OF_QUESTIONS) {
      setLastPage(true);
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
  }, [questionId, questions]);

  // Changes pagenmbrs depending on click.
  //framåt knapp syns inte om du inte svarat på frågan
  const increaseQuestion = (buttonCheck: boolean) => {
    if (questionId < questions.length && buttonCheck) {
      setQuestionId(questionId + 1);
      setFirstQuestion(false);
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
