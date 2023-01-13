import './about.scss';
import courseData from './tempInfoCourses.json';

function About() {
    console.log(courseData);

    const courses = courseData.map(course => {
        return(
            <section className="course">
                <h5>{course.name}</h5>
                <p>{course.location}</p>
            </section>
        );
    });

    return (
        <div className="about-view">
            <h1>YH-utbildningar</h1>
            <p className="introText">Gå en yrkeshögskoleutbildning inom IT på Folkuniversitetet som leder till jobb. Du kan till exempel utbilda dig till apputvecklare eller frontendutvecklare.</p>
            <p>Alla YH-utbildningar är avgiftsfria, berättigar till studiemedel och sker i nära samverkan med arbetslivet. Utbildningarna innehåller en kvalificerad praktikperiod, LIA - lärande i arbete.</p>

            <h2>Våra utbildningar</h2>
            {courses}
            
            <form className="contactForm">
                <h2>Kontakta oss direkt</h2>
                <input type="email" className="formText" placeholder="din@email.com" />
                <input type="text" className="formText" placeholder="Hej! Jag funderar på..." />
                <button className="formButton">Skicka!</button>
            </form>

            <p>* footer *</p>
        </div>
    );
}
  
export default About;