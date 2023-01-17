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

    function sendEmail(event) {
        event.preventDefault();
        // Send email
    }

    return (
        <div className="aboutView">
            <h1 className="line">YH-utbildningar</h1>

            <form className="contactForm">
                <h2>Kontakta oss direkt</h2>
                <input type="email" className="formText" placeholder="pelle@example.com" />
                <textarea className="formText" rows={5} placeholder="Hej! Jag undrar ..." />
                <button className="formButton" onClick={sendEmail}>Skicka!</button>
            </form>

            <p className="introText">Gå en yrkeshögskoleutbildning inom IT på Folkuniversitetet som leder till jobb. Du kan till exempel utbilda dig till apputvecklare eller frontendutvecklare.</p>
            <p>Alla YH-utbildningar är avgiftsfria, berättigar till studiemedel och sker i nära samverkan med arbetslivet. Utbildningarna innehåller en kvalificerad praktikperiod, LIA - lärande i arbete.</p>
            <h2>Mål</h2>
            <p>Målen med utbildningarna är att ge dig som studerande en yrkeskompetens som leder till arbete. Du får ett examensbevis när du genomgått utbildningen. När du är färdig med utbildningen har du mycket goda möjligheter till att få omedelbar anställning. Inte sällan på det företag där du genomfört din LIA-period.</p>

            <h2>Innehåll</h2>
            <p>Utbildningens innehåll består av både praktiska och teoretiska delar. Kursplaner och studieplaner tas fram tillsammans med näringslivets representanter. Under utbildningen har du utvecklingssamtal med dina lärare för att du ska få den feed-back du behöver för att utvecklas i din kommande yrkesroll.</p>

            <section className="coursesWrapper line">
                <h2>Våra utbildningar</h2>
                {courses}
            </section>
        </div>
    );
}
  
export default About;