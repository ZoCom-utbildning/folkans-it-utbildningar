import { useState } from "react";
import "./personacontent.scss";

function PersonaTitle() {
  const [personaTitle, setPersonaTitle] = useState<string>("Adam, 20");
  const [personaIngress, setPersonaIngress] = useState<string>(
    "Adam är en av de personer som startat sin utbildning hos Folkuniversitetet."
  );
  const [personaText, setPersonaText] = useState<string>(
    "Här är en text som beskriver Adam och hur han kom in på utbildningensom förändrade hans liv till det bättre."
  );

  return (
    <section className="persona-content">
      <header className="persona-header">
        <h1 className="persona-title">{personaTitle}</h1>
      </header>
      <main className="persona-text-container">
        <p className="persona-ingress">{personaIngress}</p>
        <p className="persona-text">{personaText}</p>
      </main>
    </section>
  );
}

export default PersonaTitle;
