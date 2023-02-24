import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { eduInfo } from "./eduInfo";
import { EducationInfo } from '../../models/types';
import Footer from "../../components/footer/Footer";
import './education.scss';
import Blob from '../../components/blob/Blob';

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
                <button className="applyButton" onClick={() => openNewTab(course.externalLink)}>Ansök nu</button>
            </main>
            <Blob xPos={1.2} yPos={1.8} radius={4.5} opacity={0.2} />
            <Footer />
        </div>
    );
};

export default Education;