import Footer from '../../components/footer/Footer';
import './educations.scss';
import { useEffect, useState } from 'react';
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { eduInfo } from "./eduInfo";
import { Link } from 'react-router-dom';


function Educations() {
    const [courses, setCourses] = useState<Array<any>>([]);

    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "educations"));
            const tempArr: any[] = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
            });

            setCourses(tempArr);
        })();
    }, []);
    

    const displayCourses = courses.map((course, index) => {
        const linkId = course.name.split(" ").join("-").toLowerCase() + index;
        return (
            <section className="course" id={linkId} key={index}>
                <h3>{course.name}</h3>
                <p>{course.location}</p>
                {eduInfo[index]}
            </section>
        );
    });

    return (
        <div className="educationView">
            <main>
                <h1>Våra utbildningar</h1>
                <p>Samtliga våra utbildningar är 400 YH-poäng, vilket i praktiken är 2 år. Utbildningarna startar i augusti/september och examen sker i juni lite mindre än två år senare. Alla utbildningar är dessutom studiemedelsberättigade, vilket gör att du har samma rätt till studiemedel från CSN som på en traditionell högskoleutbildning.</p>

                <p>Om du inte är behörig till den utbildning du vill gå, går det jättebra att kontakta utbildningsledaren. Vi har särskilda förberedande kurser, så kallade “BFU:er” som inte bara gör dig behörig, utan dessutom garanterar dig en plats på utbildningen om du blir godkänd på den.</p>

                <p>Om du har behov av särskilt stöd av något slag för att klara av dina studier kan du kontakta utbildningsledare så kan ni lägga upp en plan som blir bra för just dig. Kom bara ihåg att ta kontakt med utbildningsledaren i god tid innan utbildningen börjar så att anpassningarna kan planeras och bli rätt från början.</p>

                {courses.map((course) => {
                    return (
                    <h5 key={course.id}>
                        <Link to={`/utbildningar/${course.id}`}>{course.id}</Link>
                    </h5>
                    );
                })}

                <section className="coursesWrapper">
                    {displayCourses}
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default Educations;