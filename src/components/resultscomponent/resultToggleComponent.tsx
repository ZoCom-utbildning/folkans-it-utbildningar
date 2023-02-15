import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseScore, Links } from '../../models/types';


type Props = {
    courseScore: CourseScore;
    index: number;
}

const ResultToggleComponent = ({ courseScore, index }: Props) => {

    const [toggleInfo, setToggleInfo] = useState<boolean>(false);
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


    return (

        <section className="results_list">

            <section key={index} className="results_item">
                <h2 className="rank">{`${index + 1}`}</h2>
                <span>{courseScore.course}
                    <span className="study_at">{courseScore.studyAt}

                        {toggleInfo ?
                            <span className='toggled' onClick={() => setToggleInfo(!toggleInfo)}></span>
                            :
                            <span className='notToggled' onClick={() => setToggleInfo(!toggleInfo)}></span>
                        }

                    </span>
                </span>
                <a className='apply-link' onClick={() => openNewTab(courseScore.links.link)}> Ansök </a>
                <button className='read-more-button' onClick={() => openNewTab(`/utbildningar/${courseScore.intLink}`)}> Läs mer </button>
            </section>


            {
                toggleInfo ?
                    <section className="toggleText">
                        <p className="toggleTextTitle"> {courseScore.eduTextTitle} </p>
                        <p> {courseScore.eduText} </p>
                    </section>
                    :
                    ''
            }


        </section>

    )
}

export default ResultToggleComponent;