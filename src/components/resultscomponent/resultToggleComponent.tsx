import { useState, useEffect } from 'react';
import { CourseScore, Links } from '../../models/types';

type Props = {
    courseScore: CourseScore;
    index: number;
}

const ResultToggleComponent = ({ courseScore, index }: Props) => {
    const [toggleInfo, setToggleInfo] = useState<boolean>(false);

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
                <span onClick={() => setToggleInfo(!toggleInfo)}>{courseScore.course}
                    <span className="study_at">{courseScore.studyAt}
                        {toggleInfo ?
                            <span className='toggled' ></span>
                            :
                            <span className='notToggled' ></span>
                        }
                    </span>
                </span>
                <button className='read-more-button' onClick={() => openNewTab(`/utbildningar/${courseScore.intLink}`)}> Läs mer </button>
            </section>
            {
                toggleInfo ?
                    <section className="toggleText">
                        <p className="toggleTextTitle"> {courseScore.eduTextTitle} </p>
                        <p> {courseScore.eduText} </p>
                        <a className='apply-link' onClick={() => openNewTab(courseScore.links.link)}> Ansök här </a>
                    </section>
                    :
                    ''
            }
        </section>
    )
}

export default ResultToggleComponent;