import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase";

const Education = () => {
  const { educationId } = useParams();
  const [course, setCourse] = useState<Array<any>>([]);

  useEffect(() => {
    (async () => {
        const querySnapshot = await getDocs(collection(db, "educations"));
        const tempArr: any[] = [];
        querySnapshot.forEach((doc) => {
            tempArr.push(doc.data());
        });

        console.log(tempArr);
        setCourse(tempArr);
    })();
}, [educationId]);
  console.log(course);

  return (
        <h1>{educationId}</h1>
    );
};

export default Education;