import FormComponent from "../../components/formcomponent/formComponent";
import "./form.scss";

type Props = {
  activePersona: number;
  buttonElements: any;
};

function Form({ activePersona, buttonElements }: Props) {
  return (
    <div className="desktop_wrapper">
      <div className="form_wrapper">
        <FormComponent
          buttonElements={buttonElements}
          activePersona={activePersona}
        />
      </div>
    </div>
  );
}

export default Form;
