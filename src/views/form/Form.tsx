import FormComponent from "../../components/formcomponent/formComponent";
import "./form.scss";
import { Question } from '../../models/types';


type Props = {
  activePersona: number;
  buttonElements: JSX.Element;
  questions: Question[];
  interviewData: JSX.Element[];
};

function Form({ activePersona, buttonElements, questions, interviewData }: Props) {


  return (
    <div className="desktop_wrapper">
      <>
        <FormComponent
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
