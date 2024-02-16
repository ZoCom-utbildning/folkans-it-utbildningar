import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { EducationInfo } from "../../models/types";
import Footer from "../../components/footer/Footer";
import educations from "../../../educations.json";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/backIcon.svg";
import "./education.scss";

const Education = () => {
  const { educationId } = useParams<string>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<EducationInfo>({
    applyLink: "",
    description: "",
    externalLink: "",
    id: "",
    internalLink: "",
    location: "",
    name: "",
  });

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "educations"));
      const tempArr: any[] = [];
      querySnapshot.forEach((doc) => {
        tempArr.push(doc.data());
      });

      for (let data of tempArr) {
        if (data.id == educationId) {
          setCourse(data);
        }
      }
    })();
  }, [educationId]);

  const educationInfo = educations.find((elem) => elem.id === educationId);
  const openNewTab = (link: string) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <div className="educationView">
      <main>
        <span
          className="educationView-back__button"
          onClick={() => navigate("/utbildningar")}
        >
          <img src={BackIcon} alt="" />
          <p className="back__button-text">Tillbaka till utbildningar</p>
        </span>
        <article className="educationView-main__content">
          <section className="main__content-course">
            <h1 className="main__education-title">{course.name}</h1>
            <p className="ingress">{course.description}</p>

            {educationInfo && (
              <section key={educationInfo.id}>
                <h2 className="main__education-sub-title">{educationInfo.title}</h2>
                {educationInfo.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            )}
          </section>

          <section className="educationView-button__container">
            <button
              className="applyButton applyButton-back__mobile"
              onClick={() => navigate("/utbildningar")}
            >
              Tillbaka
            </button>
            <button
              className="applyButton"
              onClick={() => openNewTab(course.externalLink)}
            >
              Ansök nu
            </button>
          </section>
        </article>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Education;
