import FormComponent from "../../components/formcomponent/formComponent";
import "./form.scss";
type Props = {
  personaTitle: string;
  personaIngress: string;
  personaText: string;
};
function Form({ personaTitle, personaIngress, personaText }: Props) {
  return (
    <div className="desktop_wrapper">
      <div className="form_wrapper">
        <FormComponent
          personaIngress={personaIngress}
          personaTitle={personaTitle}
          personaText={personaText}
        />
      </div>
    </div>
  );
}

export default Form;
