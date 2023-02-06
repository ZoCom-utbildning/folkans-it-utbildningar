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
      personaTitle: "Anna, 28",
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
      personaTitle: "Sonja, 22",
      personaIngress:
        "Anja är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Anja och hur hon kom in på utbildningensom förändrade hennes liv till det bättre.",
    },
    {
      id: 4,
      personaTitle: "Emilija, 32",
      personaIngress:
        "Amina är en av de personer som startat sin utbildning hos Folkuniversitetet.",
      personaText:
        "Här är en text som beskriver Amina och hur hon kom in på utbildningensom förändrade hennes liv till det bättre.",
    },
  ];
  // map out the personas with key={persona.id} and return the active persona
  return (
    <div className="persona-content">
      {personas.map((persona) => {
        if (persona.id === activePersona) {
          return (
            <div key={persona.id}>
              <header className="persona-header">
                <h2 className="persona-title">{persona.personaTitle}</h2>
              </header>
              <main className="persona-text-container">
                <p className="persona-ingress">{persona.personaIngress}</p>
                <p className="persona-text">{persona.personaText}</p>
              </main>
            </div>
          );
        }
      })}
    </div>
  );
}

export default PersonaContent;
