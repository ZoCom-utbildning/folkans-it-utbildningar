import "./personacontent.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  activePersona: number;

  interviewData: Array<any>;
};
function PersonaContent({ activePersona, interviewData }: Props) {
  const navigate = useNavigate();
  function navToPersonas(e: any) {
    e.preventDefault();
    navigate("/personer");
  }

  const personas = [
    {
      id: 0,
      personaTitle: "Adam, 20",
      personaIngress:
        "Adam kommer nästan direkt från gymnasiet, och fick upp ögonen för programmering på grund av sitt stora gamingintresse. Adam lägger en stor del av sin fritid på träning och ser kombinationen mellan att träna kroppen på gymmet och knoppen med koden som en klockren kombination.",
    },
    {
      id: 1,
      personaTitle: "Anna, 28",
      personaIngress:
        "Anna är 28 år gammal och bor tillsammans med sin sambo. Hon har alltid haft ett starkt intresse för teknik, men hade aldrig programmerat innan den behörighetsgivande förutbildningen (BFU).",
    },
    {
      id: 2,
      personaTitle: "Ahmed, 32",
      personaIngress:
        "Ahmed är tvåbarnsfadern med säljbakgrund som är mitt uppe i att sadla om till att bli programmerare. Han gick samhällsprogrammet på gymnasiet och har egentligen inte haft direkt erfarenhet av mjukvaruutveckling sedan tidigare, även om han faktiskt redan är yrkesverksam inom IT-branschen.",
    },
    {
      id: 3,
      personaTitle: "Sonja, 22",
      personaIngress:
        "Sonja är den nära på professionella gamern som programmerat sedan barnsben och nu tagit steget från att se utvecklingen som en hobby till att vara på god väg att bli en professionell utvecklare. Hon gick in med inställningen om att bara “formalisera” sina kunskaper till att inse att det finns mycket att lära i utbytet med andra, oavsett vilka de är.",
    },
    {
      id: 4,
      personaTitle: "Emilija, 32",
      personaIngress:
        "Emilija är karriärväxlaren som bytte katedern mot skolbänken och sadlade om från en karriär som SO-lärare på grundskolan till att nu vara helt inställd på programmering. Att hoppa på en programmeringsutbildning har givit henne en riktig nytändning i livet och nu kan hon räkna programmering som en av hennes största hobbies, även om hon stundtals får kämpa lite.",
    },
  ];

  return (
    <>
      {personas.map((persona, index) => {
        if (persona.id === activePersona) {
          return (
            <div className="persona-card-content" key={persona.id}>
              {!window.location.href.includes("personer") ? (
                <div className="persona-content">
                  <header className="persona-header">
                    <h2 className="persona-title">{persona.personaTitle}</h2>
                  </header>
                  <main className="persona-text-container">
                    <p className="persona-ingress">{persona.personaIngress}</p>
                    <button
                      className="homeButton"
                      onClick={(e) => navToPersonas(e)}
                    >
                      Läs hela intervjun här
                    </button>
                  </main>
                </div>
              ) : (
                <div>{interviewData[index]}</div>
              )}
            </div>
          );
        }
      })}
    </>
  );
}

export default PersonaContent;
