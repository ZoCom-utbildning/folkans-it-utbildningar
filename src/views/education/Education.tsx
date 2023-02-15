import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { eduInfo } from "./eduInfo";
import { EducationInfo } from '../../models/types';
import Footer from "../../components/footer/Footer";

const Education = () => {
    const { educationId } = useParams<string>();
    const [course, setCourse] = useState<EducationInfo>({
        applyLink: "",
        description: "",
        externalLink: "",
        id: "",
        internalLink: "",
        location: "",
        name: "",
    });

    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "educations"));
            const tempArr: any[] = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
            });

            for (let data of tempArr) {
                if (data.id == educationId) {
                    setCourse(data);
                }
            }
        })();
    }, [educationId]);

    const educationInfo: JSX.Element | undefined = eduInfo.find(elem => elem.key == educationId);

    return (
        <div className="educationView">
            <main>
                <h1>{course.name}</h1>
                <p className="ingress">{course.description}</p>
                {educationInfo}
            </main>
            <Footer />
            <div className="stripeBg"> </div>
        </div>
    );
};

export default Education;