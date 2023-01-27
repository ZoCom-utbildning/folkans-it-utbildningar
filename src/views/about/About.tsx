import Footer from '../../components/footer/footer';
import './about.scss';
import courseData from './tempInfoCourses.json';

function About() {

    const courses = courseData.map((course, index) => {
        return(
            <section className="course" key={index}>
                <h3>{course.name}</h3>
                <p>{course.location}</p>
            </section>
        );
    });

    return (
        <div className="aboutView">
            <main>
                <h1>YH-utbildningar</h1>
            
                <p className="ingress">Gå en yrkeshögskoleutbildning inom IT på <a href="https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/">Folkuniversitetet</a> som leder till jobb. Du kan till exempel utbilda dig till apputvecklare eller frontendutvecklare.</p>
                <p>Alla YH-utbildningar är avgiftsfria, berättigar till studiemedel och sker i nära samverkan med arbetslivet. Utbildningarna innehåller en kvalificerad praktikperiod, LIA - lärande i arbete.</p>
                <h2>Mål</h2>
                <p>Målen med utbildningarna är att ge dig som studerande en yrkeskompetens som leder till arbete. Du får ett examensbevis när du genomgått utbildningen. När du är färdig med utbildningen har du mycket goda möjligheter till att få omedelbar anställning. Inte sällan på det företag där du genomfört din LIA-period.</p>

                <h2>Innehåll</h2>
                <p>Utbildningens innehåll består av både praktiska och teoretiska delar. Kursplaner och studieplaner tas fram tillsammans med näringslivets representanter. Under utbildningen har du utvecklingssamtal med dina lärare för att du ska få den feed-back du behöver för att utvecklas i din kommande yrkesroll.</p>

                <h2>Våra utbildningar</h2>
                <section className="coursesWrapper">
                    {courses}
                </section>
                
            </main>
            <Footer />
        </div>
    );
}
  
export default About;