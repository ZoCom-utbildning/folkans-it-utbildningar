import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { EducationInfo } from "../../models/types";
import Footer from "../../components/footer/Footer";
import educations from "../../../educations.json";
import "./education.scss";

const Education = () => {
  const { educationId } = useParams<string>();
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
        <h1>{course.name}</h1>
        <p className="ingress">{course.description}</p>

        {educationInfo && (
          <div key={educationInfo.id}>
            <h2>{educationInfo.title}</h2>
            {educationInfo.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
        <button
          className="applyButton"
          onClick={() => openNewTab(course.externalLink)}
        >
          Ansök nu
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
