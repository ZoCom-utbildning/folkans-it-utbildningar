import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


type Links = {
    course: string;
    link: string;
}

type CourseScore = {
    course: string;
    points: string;
    links: Links;
    studyAt: string;
    eduTextTitle: string;
    eduText: string;
}

type Props = {
    courseScore: CourseScore;
    index: number;
}

const ResultToggleComponent = ({ courseScore, index }: Props) => {

    const [toggleInfo, setToggleInfo] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (index === 0) {
            setToggleInfo(true);
        }
    }, [])


    const openNewTab = (link: string) => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
        if (newWindow) { newWindow.opener = null }
    }


    const gotoEducations = () => {
        navigate('/utbildningar');
    }


    return (

        <>
            <h2 className="rank">{`${index + 1}`}</h2> 
                <span>{courseScore.course} 
                    <span className="study_at">{ courseScore.studyAt } 

                        { toggleInfo ? 
                        <span className='toggled' onClick={ () => setToggleInfo(!toggleInfo) }></span>
                        :
                        <span className='notToggled' onClick={ () => setToggleInfo(!toggleInfo) }></span>
                        }

                    </span>
                </span> 
            <span onClick={() => openNewTab(courseScore.links.link)}> Ansök </span>
            <span onClick={gotoEducations}> Läs mer </span>
            {
                toggleInfo ?
                <section className="toggleText">
                    <p className="toggleTextTitle"> { courseScore.eduTextTitle } </p>
                    <p> { courseScore.eduText } </p>
                </section>
                :
                ''
            }

        </>

    )
}

export default ResultToggleComponent;