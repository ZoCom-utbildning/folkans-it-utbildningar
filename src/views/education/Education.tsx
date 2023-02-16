import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { eduInfo } from "./eduInfo";
import { EducationInfo } from '../../models/types';
import Footer from "../../components/footer/Footer";
import './education.scss';

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
    const openNewTab = (link: string) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
        if (newWindow) { newWindow.opener = null }
    }

    return (
        <div className="educationView">
            <main>
                <h1>{course.name}</h1>
                <p className="ingress">{course.description}</p>
                <button className="applyButton" onClick={() => openNewTab(course.externalLink)}>Ansök nu</button>
                {educationInfo}
                <button className="applyButton">Ansök nu</button>
            </main>
            <Footer />
            <div className="stripeBg"> </div>
        </div>
    );
};

export default Education;