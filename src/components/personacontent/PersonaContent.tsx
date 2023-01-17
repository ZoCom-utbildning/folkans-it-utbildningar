import "./personacontent.scss";
type Props = {
  activePersona: number;
};
function PersonaContent({ activePersona }: Props) {
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
    <section className="persona-content">
      <header className="persona-header">
        <h1 className="persona-title">
          {personas[activePersona].personaTitle}
        </h1>
      </header>
      <main className="persona-text-container">
        <p className="persona-ingress">
          {personas[activePersona].personaIngress}
        </p>
        <p className="persona-text">{personas[activePersona].personaText}</p>
      </main>
    </section>
  );
}

export default PersonaContent;
