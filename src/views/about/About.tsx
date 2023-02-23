import Footer from '../../components/footer/Footer';
import './about.scss';
import { useEffect, useState } from 'react';
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { EducationInfo } from '../../models/types';
import Blob from '../../components/blob/Blob';
import TestButton from '../../components/testbutton/testButton';

function About() {
    const [courses, setCourses] = useState<EducationInfo[]>([]);

    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "educations"));
            const tempArr: any[] = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
            });

            setCourses(tempArr);
        })();
        console.log(courses);
    }, []);

    const displayCourses: JSX.Element[] = courses.map((course: EducationInfo, index: number) => {
        return (
            <section className="course" key={index}>
                <h3>{course.name}</h3>
                <p>{course.location}</p>
            </section>
        );
    });

    return (
        <div className="aboutView">
            <main>
                <h1>YH-utbildningar inom IT</h1>
                <p className="ingress">Gå en yrkeshögskoleutbildning inom IT på <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/" target="_blank">Folkuniversitetet</a> som leder till jobb. Du kan till exempel utbilda dig till apputvecklare eller frontendutvecklare.</p>
                <p>Alla YH-utbildningar är avgiftsfria, berättigar till studiemedel och sker i nära samverkan med arbetslivet. Utbildningarna innehåller en kvalificerad praktikperiod, LIA - lärande i arbete.</p>

                <h2>Om Folkuniversitetet</h2>
                <p>Folkuniversitetet är en stor anordnare av yrkeshögskoleutbildningar. En YH-examen gör dig attraktiv inom ett yrkesområde där efterfrågan på professionell och kompetent personal är stor.</p>
                <h3>Samarbete med näringslivet</h3>
                <p>Våra yrkesutbildningar tas alltid fram i nära samarbete med näringslivet. Representanter från företag och organisationer sitter med i utbildningens ledningsgrupp och bidrar till att forma utbildningen. Det nära samarbetet innebär också att det finns tillgång till LIA-platser.  </p>
                <h3>Mål</h3>
                <p>Målen med utbildningarna är att ge dig som studerande en yrkeskompetens som leder till arbete. Du får ett examensbevis när du genomgått utbildningen. När du är färdig med utbildningen har du mycket goda möjligheter till att få omedelbar anställning. Inte sällan på det företag där du genomfört din LIA-period.</p>
                <h3>Studerandeinflytande</h3>
                <p>Alla våra yrkeshögskoleutbildningar har en ledningsgrupp. I dessa finns alltid representanter från Folkuniversitetet, från näringslivet och från de studerande. Särskilt viktiga är de synpunkter och åsikter om utbildningen som framförs av de studerande. Det är de som hjälper oss att förbättra och utveckla våra utbildningar. Förutom genom ledningsgruppen kan naturligtvis synpunkter kan framföras direkt till utbildningsledaren, lärare, studentrepresentanter eller genom de utvärderingar som görs flera gånger under utbildningen.</p>
                <h3>Lärande i arbete</h3>
                <p>Eller kort och gott LIA. Det är din praktikperiod. Den kan vara olika lång beroende på utbildning och sker ofta mot slutet av din utbildning. Då har du god nytta av vad du fått lära dig hittills, och kan snabbt sätta dig in i yrkesrollen. Du har naturligtvis studiemedel även under din LIA-period.</p>

                <TestButton buttonText={'Gör Testet'} />
                
            </main>
            <Blob xPos={1.2} yPos={1.8} radius={4.5} opacity={0.2} />
            <Footer />
        </div>
    );
}

export default About;