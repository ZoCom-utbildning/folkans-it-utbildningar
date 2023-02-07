import Footer from '../../components/footer/Footer';
import './educations.scss';
import { useEffect, useState } from 'react';
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { eduInfo } from "./eduInfo";


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
        return (
            <section className="course" key={index}>
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
                <p>Alla utbildningarna är 2år långa vilket är 400 YH-poäng. och du kommer ha två kurser med LIA osv osv ...</p>
                <details>
                    <summary>Lärande i arbete (LIA)</summary>
                    <p>I utbildningen ingår praktik, Lärande i arbete (LIA), som är uppdelad på två kurser som är 9 eller 10 veckor långa. Du söker i första hand själv din LIA-plats för att skapa personliga kontakter i arbetslivet. Vi har ett kontaktnät med arbetsgivare som kan ta emot LIA-studerande, men det står dig fritt att söka dig till en plats där du är intresserad av att göra din LIA.</p>
                    <p>Många ser LIA som en form av provanställning där du får inblick i rutiner, arbetsklimat och verksamhetsstöd hos en framtida arbetsgivare, som i sin tur får möjligheten att lära känna dig och dina kunskaper, färdigheter och förmågor.</p>
                    <p>Du formulerar dina egna LIA-uppgifter utifrån kursplanen och skriver en LIA-rapport i slutet av kursen som bedöms av LIA-ansvarig på skolan. </p>
                </details>
                <details>
                    <summary>Särskilt stöd</summary>
                    <p>För att utbildningen ska vara tillgänglig för studerande med olika bakgrunder, behov och förutsättningar erbjuds möjlighet till studieanpassning. Har du behov av särskilt stöd ber vi dig att kontakta oss så snart som du har tackat ja till din plats på utbildningen, så att vi kan påbörja arbetet med att göra din studiesituation så bra som möjligt innan utbildningen börjar. Kontaktuppgifter finns på YH-antagning.se</p>
                </details>

                <section className="coursesWrapper">
                    {displayCourses}
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default Educations;