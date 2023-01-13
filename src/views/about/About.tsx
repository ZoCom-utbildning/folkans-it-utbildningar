import './about.scss';
import courseData from './tempInfoCourses.json';

function About() {

    const courses = courseData.map((course, index) => {
        return(
            <section className="course" key={index}>
                <h5>{course.name}</h5>
                <p>{course.location}</p>
            </section>
        );
    });

    return (
        <div className="about-view lines">
            <section className="textWrapper">
                <h1>YH-utbildningar</h1>
                <p className="introText">Gå en yrkeshögskoleutbildning inom IT på Folkuniversitetet som leder till jobb. Du kan till exempel utbilda dig till apputvecklare eller frontendutvecklare.</p>
                <p>Alla YH-utbildningar är avgiftsfria, berättigar till studiemedel och sker i nära samverkan med arbetslivet. Utbildningarna innehåller en kvalificerad praktikperiod, LIA - lärande i arbete.</p>
            </section>

            <section className="coursesWrapper">
                <h2>Våra utbildningar</h2>
                {courses}
            </section>
            
            <form className="contactForm">
                <h5>Kontakta oss direkt</h5>
                <input type="email" className="formText" placeholder="din@email.com" />
                <textarea className="formText" placeholder="Hej! Jag funderar på..." />
                <button className="formButton">Skicka!</button>
            </form>
        </div>
    );
}
  
export default About;