import forminfo from "../../../forminfo.json";
import ImageComponent from "../imagecomponent/imageComponent";
import ContentComponent from "../contentcomponent/contentComponent";
import { useEffect, useState } from "react";
import PersonaContent from "../personacontent/PersonaContent";
import happyGuy from "../../assets/photos/happyGuy.png";
import ResultsComponent from "../resultscomponent/resultsComponent";

type Props = {
  activePersona: number;
};
function FormComponent({ activePersona }: Props) {
  const questions = forminfo.questions;
  const questionNmbrs: Array<number> = [];

  const [questionId, setQuestionId] = useState<number>(1);
  const [formText, setFormText] = useState<string>("");
  const [formType, setFormType] = useState<string>("");
  const [formImage, setFormImage] = useState<string>("");
  const [altImage, setAltImage] = useState<string>("");
  const [lastPage, setLastPage] = useState<boolean>(false);

  //Changing the question depending on questionNmbr
  useEffect(() => {
    questions.map((question) => {
      if (questionId === question.id) {
        setFormText(question.text);
      }

      if (questionId === question.id) {
        setFormImage(question.img);
      }

      if (questionId === question.id) {
        setAltImage(question.alt);
      }
    });

    if (questions[questionId - 1].type === "radio") {
      setFormType("radio");
    } else if (questions[questionId - 1].type === "range") {
      setFormType("range");
    }

    //ladda localstorage här

    if (!window.location.href.includes("fragor")) {
      setFormImage(happyGuy);
    }

    if (questionId === questionNmbrs[questionNmbrs.length - 1]) {
      setLastPage(true);
    }
  }, [questionId]);

  // Storing array length to display maxValue of pages.
  questions.map((question) => {
    questionNmbrs.push(question.id); // [1, 2, 3, 4]
  });

  // Changes pagenmbrs depending on click.
  //framåt knapp syns inte om du inte svarat på frågan
  const increaseQuestion = () => {
    if (questionId < questionNmbrs.length) {
      //spara värde/spara över värde
      setQuestionId(questionId + 1);
    }
  };

  //funktion som sparar värde i localstorage
  //spara värde i ny funktion som körs i increase och decrese
  //jämför question.id med localstorage värdet "question"


  //spara valt alternativ i state?
  const decreaseQuestion = () => {
    if (questionId > 1) {
      //
      setQuestionId(questionId - 1);
    }
  };

  return (
    <section className="card_content">
      {window.location.href.includes("fragor") && !lastPage ? (
        <>
          <ImageComponent formImage={formImage} altImage={altImage} />
          <ContentComponent
            formText={formText}
            formType={formType}
            questionId={questionId}
            increaseQuestion={increaseQuestion}
            decreaseQuestion={decreaseQuestion}
          />
        </>
      ) : window.location.href.includes("fragor") && lastPage ? (
        <>
          <ResultsComponent />
        </>
      ) : window.location.href.includes("") ? (
        <>
          <ImageComponent formImage={formImage} altImage={altImage} />
          <PersonaContent activePersona={activePersona} />
        </>
      ) : (
        ""
      )}
    </section>
  );
}

export default FormComponent;
