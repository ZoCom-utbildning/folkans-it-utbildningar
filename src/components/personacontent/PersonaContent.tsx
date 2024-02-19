import "./personacontent.scss";
import { useNavigate } from "react-router-dom";
import { PersonaText } from "../../models/types";
import arrow from "../../assets/icons/arrow.svg";

type Props = {
  activePersona: number;
  setActivePersona: (activePersona: number) => void;
  interviewData: JSX.Element[];
};
function PersonaContent({
  activePersona,
  interviewData,
  setActivePersona,
}: Props) {
  const navigate = useNavigate();

  function navToPersonas(e: any,persona:string) {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate("/personer?persona="+ persona);
  }

  const personas: PersonaText[] = [
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
        "Ahmed är tvåbarnsfadern med säljbakgrund som är mitt uppe i att sadla om till att bli programmerare. Han gick samhällsprogrammet på gymnasiet och har inte haft erfarenhet av mjukvaruutveckling sedan tidigare, även om han redan är yrkesverksam inom IT-branschen.",
    },
    {
      id: 3,
      personaTitle: "Sonja, 22",
      personaIngress:
        "Sonja är den nära på professionella gamern som programmerat sedan barnsben och nu tagit steget från att se utvecklingen som en hobby till att vara på god väg att bli en professionell utvecklare.",
    },
    {
      id: 4,
      personaTitle: "Emilija, 32",
      personaIngress:
        "Emilija är karriärväxlaren som bytte katedern mot skolbänken och sadlade om från en karriär som SO-lärare på grundskolan till att nu vara helt inställd på programmering.",
    },
  ];

  function increaseActivePersona() {
    if (activePersona < 4) setActivePersona(activePersona + 1);
    else {
      setActivePersona(0);
    }
  }

  function decreaseActivePersona() {
    if (activePersona > 0) setActivePersona(activePersona - 1);
    else {
      setActivePersona(4);
    }
  }

  return (
    <>
      {personas.map((persona: PersonaText, index: number) => {
        if (persona.id === activePersona) {
          return (
            <div className="persona-card-content" key={persona.id}>
              {!window.location.href.includes("personer") ? (
                <div className="persona-content">
                  <header className="persona-header">
                    <h2 className="persona-title">{persona.personaTitle}</h2>
                  </header>
                  <main className="persona-text-container">
                    <p className="ingress">{persona.personaIngress}</p>
                  </main>
                  <div className="personas-button-container">
                    <button
                      className="personasButton"
                      onClick={(e) => navToPersonas(e,persona.personaTitle)}
                    >
                      Läs hela intervjun här
                    </button>
                    <section className="arrow-wrapper">
                      <img
                        className="left-arrow"
                        src={arrow}
                        alt=""
                        onClick={decreaseActivePersona}
                      />
                      <img
                        className="right-arrow"
                        src={arrow}
                        alt=""
                        onClick={increaseActivePersona}
                      />
                    </section>
                  </div>
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
