import FormComponent from "../../components/formcomponent/formComponent";
import "./form.scss";
import { Question } from "../../models/types";

type FormProps = {
  activePersona: number;
  setActivePersona: (activePersona: number) => void;
  buttonElements: JSX.Element;
  questions: Question[];
  interviewData: JSX.Element[];
};

function Form({
  activePersona,
  buttonElements,
  questions,
  interviewData,
  setActivePersona,
}: FormProps) {
  return (
    <div className="desktop_wrapper">
      <>
        <FormComponent
          setActivePersona={setActivePersona}
          interviewData={interviewData}
          buttonElements={buttonElements}
          activePersona={activePersona}
          questions={questions}
        />
      </>
    </div>
  );
}

export default Form;
