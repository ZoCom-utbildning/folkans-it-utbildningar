import { useState } from "react";
import "./personacontent.scss";
type PersonaContentProps = {
  personaTitle: string;
  personaIngress: string;
  personaText: string;
};

function PersonaContent({
  personaTitle,
  personaIngress,
  personaText,
}: PersonaContentProps) {
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

export default PersonaContent;
