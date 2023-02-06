import "./personas.scss";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
const Personas: React.FC = () => {
  const [contClass, setContClass] = useState("cont s--inactive");
  const [activeEl, setActiveEl] = useState<HTMLDivElement | null>(null);
  const [preview, setPreview] = useState(true);
  const [data, setData] = useState<Array<any>>([]);
  const [interviewData, setInterviewData] = useState<any[]>([]);
  const NUM_OF_ELEMENTS = 5;
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "Personas"));
      const tempArr: any[] = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });

      setData(tempArr);
    })();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setInterviewData(
        data.map((personas, index) => {
          return (
            <div className="personas-main" key={index}>
              <article className="personas-card">
                <section className="personas-card-header">
                  <h2 className="personas-card-title">
                    {personas.name + `, ` + personas.age}
                  </h2>
                </section>
                <main className="personas-card-text-container">
                  <p className="personas-card-ingress">{personas.desc}</p>
                  <span>
                    Vad var det som fick dig att välja din utbildning?
                  </span>
                  <br></br>
                  <section className="card-text-container">
                    <p className="personas-card-text">{personas.replies[0]}</p>
                    <span>Vad har du för bakgrund innan denna utbildning?</span>
                    <br></br>
                    <p className="personas-card-text">{personas.replies[1]}</p>
                    <span>Vad är det bästa med din utbildning?</span>
                    <br></br>
                    <p className="personas-card-text">{personas.replies[2]}</p>
                    <span>
                      Har du några visdomsord till andra som funderar på att
                      söka eller som redan sökt?
                    </span>
                    <br></br>
                    <p className="personas-card-text">{personas.replies[3]}</p>
                  </section>
                </main>
              </article>
            </div>
          );
        })
      );
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setContClass("cont s--active");
    }, 200);
  }, []);

  const handleElClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (contClass.includes("s__el-active")) return;
    const el = event.currentTarget;
    setContClass("cont s__el-active");
    toggleClass(el, "s--active");
    setActiveEl(el);
    console.log(data);
    setTimeout(() => {
      setPreview(false);
    }, 1350);
    console.log(interviewData);
  };

  const toggleClass = (el: HTMLDivElement, className: string) => {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    } else {
      el.classList.add(className);
    }
  };

  const handleCloseBtnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    toggleClass(activeEl!, "s--active");
    setContClass("cont s__inactive");
    setActiveEl(null);

    setPreview(true);
  };

  return (
    <div className="personasView-container">
      <section className="personasView">
        <h1 className="title-h1">Möt några av våra studerande</h1>
        <h2 className="title-h1">
          Klicka på något av korten för att läsa mer om en student
        </h2>
        <div className={contClass}>
          <div className="cont__inner">
            {Array(NUM_OF_ELEMENTS)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="el" onClick={handleElClick}>
                  <div className="el__overflow">
                    <div className="el__inner">
                      <div className="el__bg"></div>
                      {preview ? (
                        <section className="el__preview-cont">
                          <h2 className="el__heading">
                            {data[index] ? data[index].name : ""}
                          </h2>
                        </section>
                      ) : (
                        <div className="el__content">
                          {interviewData[index]}
                          <button
                            className="el__close-btn"
                            onClick={handleCloseBtnClick}
                          ></button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personas;
