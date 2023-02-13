import FormComponent from "../../components/formcomponent/formComponent";
import "./form.scss";

type Props = {
  activePersona: number;
  buttonElements: any;
  questions: Array<any>;
  interviewData: Array<any>;
};

function Form({
  activePersona,
  buttonElements,
  questions,
  interviewData,
}: Props) {
  return (
    <div className="desktop_wrapper">
      <div className="form_wrapper">
        <FormComponent
          interviewData={interviewData}
          buttonElements={buttonElements}
          activePersona={activePersona}
          questions={questions}
        />
      </div>
    </div>
  );
}

export default Form;
