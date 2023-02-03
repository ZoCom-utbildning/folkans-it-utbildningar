import Footer from '../../components/footer/Footer';
import './educations.scss';
import { useEffect, useState } from 'react';
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";


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
        console.log(courses);
    }, []);
    
    const displayCourses = courses.map((course, index) => {
        return (
            <section className="course" key={index}>
                <h3>{course.name}</h3>
                <p>{course.location}</p>
            </section>
        );
    });

    return (
        <div className="educationView">
            <main>
                <h1>Våra utbildningar</h1>
                <section className="coursesWrapper">
                    {displayCourses}
                </section>

            </main>
            <Footer />
        </div>
    );
}

export default Educations;