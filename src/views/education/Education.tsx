import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { eduInfo } from "./eduInfo";

const Education = () => {
  const { educationId } = useParams();
  const [course, setCourse] = useState({});
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
    if(educationInfo){
        const titleElem = educationInfo.props.children.find((elem: { type: string; }) => elem.type == "h1");
        console.log(titleElem);
        // titleElem.props.children = course.name;
        // console.log(titleElem.props.children);
    }

    return (
        <div className="educationView">
            {educationInfo}
        </div>
    );
};

export default Education;