import Footer from '../../components/footer/Footer';
import './educations.scss';
import { useEffect, useState } from 'react';
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router';
import { eduInfo } from '../education/eduInfo';
import anime from 'animejs';
import { EducationInfo } from '../../models/types';


function Educations() {
    const [courses, setCourses] = useState<EducationInfo[]>([]);
    const navigate = useNavigate();

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

    
    function navigateTo(link: string) {
        window.scrollTo(0, 0)
        navigate(link);
    }

    
    const displayCourses: JSX.Element[] = courses.map((course: EducationInfo, index: number) => {
        return (
            <section className="course" id={course.id} key={index} onClick={() => navigateTo(`/utbildningar/${course.id}`)}>
                <h3>{course.name}</h3>
                <p>{course.location}</p>
                <p className="right">Läs mer</p>
            </section>
        );
    });

    useEffect(() => {
        anime({
            targets: '.coursesWrapper .course',
            keyframes: [
                { backgroundPositionX: 0 }, 
                { backgroundPositionX: 100 }
            ],
            direction: 'alternate',
            loop: true,
            delay: anime.stagger(2000, {start: 500}),
            endDelay: anime.stagger(500, {start: 300}),
            duration: 5000,
            easing: 'easeInOutQuart'
          });
    },[displayCourses]);


    return (
        <div className="educationView">
            <main>
                <h1>Våra utbildningar</h1>
                <p>Samtliga våra utbildningar är 400 YH-poäng, vilket i praktiken är 2 år. Utbildningarna startar i augusti/september och examen sker i juni lite mindre än två år senare. Alla utbildningar är dessutom studiemedelsberättigade, vilket gör att du har samma rätt till studiemedel från CSN som på en traditionell högskoleutbildning.</p>

                <p>Om du inte är behörig till den utbildning du vill gå, går det jättebra att kontakta utbildningsledaren. Vi har särskilda förberedande kurser, så kallade “BFU:er” som inte bara gör dig behörig, utan dessutom garanterar dig en plats på utbildningen om du blir godkänd på den.</p>

                <p>Om du har behov av särskilt stöd av något slag för att klara av dina studier kan du kontakta utbildningsledare så kan ni lägga upp en plan som blir bra för just dig. Kom bara ihåg att ta kontakt med utbildningsledaren i god tid innan utbildningen börjar så att anpassningarna kan planeras och bli rätt från början.</p>

                <section className="coursesWrapper">
                    {displayCourses}
                </section>

            </main>
            <Footer />
            <div className="stripeBg"> </div>
        </div>
    );
}

export default Educations;