import FormComponent from "../../components/formcomponent/formComponent";
import "./form.scss";
type Props = {
  activePersona: number;
};
function Form({ activePersona }: Props) {
  return (
    <div className="desktop_wrapper">
      <div className="form_wrapper">
        <FormComponent activePersona={activePersona} />
      </div>
    </div>
  );
}

export default Form;
