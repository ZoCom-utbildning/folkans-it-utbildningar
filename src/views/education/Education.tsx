import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { eduInfo } from "./eduInfo";

const Education = () => {
  const { educationId } = useParams();
  const [course, setCourse] = useState<any>({});

  useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "educations"));
            const tempArr: any[] = [];
            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
            });
            
            for(let data of tempArr) {
                if(data.id == educationId) {
                    setCourse(data);
                }
            }
        })();
    }, [educationId]);
    const educationInfo = eduInfo.find(elem => elem.key == educationId);
    
    return (
        <div className="educationView">
            <main>
                <h1>{course.name}</h1>
                <p className="ingress">{course.description}</p>
                {educationInfo}
            </main>
        </div>
    );
};

export default Education;