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
      setQuestionId(questionId + 1);
    }
  };

  const decreaseQuestion = () => {
    if (questionId > 1) {
      setQuestionId(questionId - 1);
    }
  };

  const personas = [
    {
      id: 0,
      personaTitle: "Adam, 20",
      personaIngress:
        "Adam är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Adam och hur han kom in på utbildningensom förändrade hans liv till det bättre.",
    },
    {
      id: 1,
      personaTitle: "Bertil, 30",
      personaIngress:
        "Bertil är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Bertil och hur han kom in på utbildningensom förändrade hans liv till det bättre.",
    },
    {
      id: 2,
      personaTitle: "Ahmed, 32",
      personaIngress:
        "Ahmed är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Ahmed och hur han kom in på utbildningensom förändrade hans liv till det bättre.",
    },
    {
      id: 3,
      personaTitle: "Anja, 23",
      personaIngress:
        "Anja är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Anja och hur hon kom in på utbildningensom förändrade hennes liv till det bättre.",
    },
    {
      id: 4,
      personaTitle: "Amina, 38",
      personaIngress:
        "Amina är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Amina och hur hon kom in på utbildningensom förändrade hennes liv till det bättre.",
    },
  ];

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
        <section className="persona-card-content">
          <ImageComponent formImage={formImage} altImage={altImage} />
          <PersonaContent activePersona={activePersona} />
        </section>
      ) : null}
    </section>
  );
}

export default FormComponent;
