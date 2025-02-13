import Footer from "../../components/footer/Footer";
import "./educations.scss";
import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import anime from "animejs";
import { EducationInfo } from "../../models/types";

function Educations() {
  const [courses, setCourses] = useState<EducationInfo[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "educations"));
        const tempCourses: EducationInfo[] = [];
        querySnapshot.forEach((doc) => {
          tempCourses.push(doc.data() as EducationInfo);
        });

        const activeCourses = filterCourses(tempCourses)
        //Set activeCourses here to get the filtered courses
        //change back to tempCourses if it's not longer needed :)
        setCourses(activeCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, []);

  //filter the courses that are not currently active
  //change them back if courses gets remade
  const filterCourses = (courses: EducationInfo[]) => {
    const filteredCourses = courses.filter(course => course.id !== "frontendutvecklare-distans" && course.id !== "javascriptutvecklare-distans")
    return filteredCourses
  }

  function navigateTo(link: string) {
    window.scrollTo(0, 0);
    navigate(link);
  }

  const displayCourses: JSX.Element[] = courses.map(
    (course: EducationInfo, index: number) => {
      return (
        <section
          className="course"
          id={course.id}
          key={index}
          onClick={() => navigateTo(`/utbildningar/${course.id}`)}
        >
          <h3 className="course-title">{course.name}</h3>
          <section className="course-info">
          <p className="course-location-text">{course.location}</p>
          <p className="right">Läs mer</p>
          </section>
        </section>
      );
    }
  );

  useEffect(() => {
    anime({
      targets: ".course",
      keyframes: [{ backgroundPositionX: 0 }, { backgroundPositionX: 100 }],
      direction: "alternate",
      loop: false,
      delay: anime.stagger(2000, { start: 500 }),
      endDelay: anime.stagger(300, { start: 300 }),
      duration: 5000,
      easing: "easeInOutQuad",
    });
  }, [displayCourses]);

  return (
    <div className="educationsView">
      <main>
        <h1 className="educations-view-title">Våra utbildningar</h1>
        <p className="educations-view-text">
          Samtliga utbildningar är 400 YH-poäng, vilket i praktiken innebär 2
          års studier. Utbildningarna startar i augusti/september och examen
          sker i juni lite mindre än två år senare. Alla utbildningar är
          dessutom studiemedelsberättigade, vilket gör att du har samma rätt
          till studiemedel från CSN som på en traditionell högskoleutbildning.
        </p>
        <p className="educations-view-text">
          Om du inte är behörig till den utbildning du vill gå, går det jättebra
          att kontakta utbildningsledaren. Vi har särskilda förberedande kurser,
          så kallade ”BFU:er” som inte bara gör dig behörig, utan dessutom
          garanterar dig en plats på utbildningen om du blir godkänd på den.
        </p>
        <p className="educations-view-text">
          Om du har behov av särskilt stöd av något slag för att klara av dina
          studier kan du kontakta utbildningsledaren så kan ni lägga upp en plan
          som blir bra för just dig. Kom bara ihåg att ta kontakt med
          utbildningsledaren i god tid innan utbildningen börjar så att
          anpassningarna kan planeras och bli rätt från början.
        </p>
        <section className="coursesWrapper">{displayCourses}</section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Educations;
