import TestButton from '../testbutton/testButton';
import './resultsComponent.scss';
import { useEffect } from 'react';
import { auth, db } from '../../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { CourseScore, Links, ResultsType } from '../../models/types';
import ResultToggleComponent from './resultToggleComponent';
import { useNavigate } from 'react-router-dom';

type Props = {
  setQuestionId: React.Dispatch<React.SetStateAction<number>>;
};

const ResultsComponent = ({ setQuestionId }: Props) => {
  const courseScore: Array<CourseScore> = [];
  const loadResults: ResultsType[] = JSON.parse(
    localStorage.getItem('resultsArray')!
  );

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const user: string | undefined = auth.currentUser?.uid;
      console.log('user uid', user);
      await updateDoc(doc(db, 'answers', `${user}`), {
        results: {
          courseScoreSorted,
        },
      });
    })();
  }, []);

  // FRONTEND POINTS/INFO
  const frontend: string[] = loadResults.map(
    (result: ResultsType, index: number) => {
      return result.points[0];
    }
  );

  const frontendFilter: string[] | undefined = frontend.filter(
    (obj: string | undefined) => obj !== undefined
  );
  const frontendPoints: string = frontendFilter.reduce(
    (a: string, b: string) => `${Number(a) + Number(b)}`
  );

  courseScore.push({
    course: 'Frontendutvecklare',
    points: frontendPoints,
    links: {
      course: 'FE Karlstad',
      link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare/',
    },
    studyAt: 'Karlstad',
    eduTextTitle: 'Frontendutvecklare Karlstad',
    eduText:
      'En frontendutvecklare skapar det som användaren ser på webben. Med hjälp av HTML, CSS & JavaScript förverkligar en frontendare den design och funktionalitet som webbsidan ska ha.',
    intLink: 'frontendutvecklare-karlstad',
  });

  // SPECIALIST-NETWORK POINTS/INFO
  const specialist: string[] = loadResults.map(
    (result: ResultsType, index: number) => {
      return result.points[0];
    }
  );

  const specialistFilter: string[] | undefined = specialist.filter(
    (obj: string | undefined) => obj !== undefined
  );
  const specialistPoints: string = specialistFilter.reduce(
    (a: string, b: string) => `${Number(a) + Number(b)}`
  );

  courseScore.push({
    course: 'Specialist inom nätverkssäkerhet',
    points: specialistPoints,
    links: {
      course: 'Specialist-inom-nätverkssäkerhet',
      link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/specialist-inom-natverkssakerhet-goteborg/?_t_tags=language%3asv&_t_hit.id=Folkuniversitetet_Web_Models_Pages_YHArrangementPage%2f_0dcfd798-f9b3-41e3-8e69-a08ba0615c01_sv&_t_hit.pos=4&bpid=63963',
    },
    studyAt: 'Göteborg',
    eduTextTitle: 'Specialist inom nätverkssäkerhet',
    eduText:
      'IT-säkerhet har sett till vad som händer i omvärlden snabbt seglat upp till att bli en av de absolut viktigaste kompetenserna på arbetsmarknaden. Inte bara inom IT-branschen, utan generellt, då i princip alla organisationer idag är beroende av IT på något sätt. Utbildningen fokuserar på nätverkssidan av säkerhet, med särskilt fokus på att designa och bygga säkra datanätverk.',
    intLink: 'Specialist-inom-nätverkssäkerhet-Göteborg',
  });

  //code is left in here in case anyone would want to add it back in the future.

  // // FRONTEND DISTANCE POINTS/INFO
  // const frontend_distans: string[] = loadResults.map(
  //   (result: ResultsType, index: number) => {
  //     return result.points[1];
  //   }
  // );

  // const frontend_distans_filter: string[] = frontend_distans.filter(
  //   (obj: string | undefined) => obj !== undefined
  // );
  // const frontend_distans_points: string = frontend_distans_filter.reduce(
  //   (a: string, b: string) => `${Number(a) + Number(b)}`
  // );

  // courseScore.push({
  //   course: 'Frontendutvecklare',
  //   points: frontend_distans_points,
  //   links: {
  //     course: 'FE Distans',
  //     link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/frontendutvecklare-distans/',
  //   },
  //   studyAt: 'Distans',
  //   eduTextTitle: 'Frontendutvecklare Distans',
  //   eduText:
  //     'En frontendutvecklare skapar det som användaren ser på webben. Med hjälp av HTML, CSS & JavaScript förverkligar en frontendare den design och funktionalitet som webbsidan ska ha.',
  //   intLink: 'frontendutvecklare-distans',
  // });

  // // JAVASCRIPT DISTANCE POINTS/INFO
  // const javascript_distans: string[] = loadResults.map(
  //   (result: ResultsType, index: number) => {
  //     return result.points[2];
  //   }
  // );

  // const javascript_distans_filter: string[] = javascript_distans.filter(
  //   (obj: string | undefined) => obj !== undefined
  // );
  // const javascript_distans_points: string = javascript_distans_filter.reduce(
  //   (a: string, b: string) => `${Number(a) + Number(b)}`
  // );

  // courseScore.push({
  //   course: 'JavaScriptutvecklare',
  //   points: javascript_distans_points,
  //   links: {
  //     course: 'JS distans',
  //     link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/javascriptutvecklare-distans/',
  //   },
  //   studyAt: 'Distans',
  //   eduTextTitle: 'JavaScriptutvecklare Distans',
  //   eduText:
  //     'Det moderna och mångsidiga programmeringsspråket JavaScript står i fokus för denna utbildning. En JavaScriptutvecklare arbetar med både det som användaren ser (frontend) och det som ligger bakom, på serversidan (backend) och blir på det sättet mycket bred i sin kompetens.',
  //   intLink: 'javascriptutvecklare-distans',
  // });

  // MOBIL APP POINTS/INFO
  const mobil_app: string[] = loadResults.map(
    (result: ResultsType, index: number) => {
      return result.points[3];
    }
  );

  const mobil_app_filter: string[] = mobil_app.filter(
    (obj: string | undefined) => obj !== undefined
  );
  const mobil_app_points: string = mobil_app_filter.reduce(
    (a: string, b: string) => `${Number(a) + Number(b)}`
  );

  courseScore.push({
    course: 'Mobilapplikationsutvecklare',
    points: mobil_app_points,
    links: {
      course: 'Mobilapp',
      link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mobilapplikationsutvecklare-distans/',
    },
    studyAt: 'Distans',
    eduTextTitle: 'Mobilapplikationsutvecklare Distans',
    eduText:
      'En mobilapplikationsutvecklare är som namnet skvallrar om en expert på att bygga mobilappar. I denna utbildning ingår alla de mest framstående teknikerna för att skapa moderna och dynamiska appar till mobila enheter.',
    intLink: 'mobilapplikationsutvecklare-distans',
  });

  // MJUKVARU UTV. POINTS/INFO
  const mjukvaru_utveckling: string[] = loadResults.map(
    (result: ResultsType, index: number) => {
      return result.points[4];
    }
  );

  const mjukvaru_utveckling_filter: string[] = mjukvaru_utveckling.filter(
    (obj: string | undefined) => obj !== undefined
  );
  const mjukvaru_utveckling_points: string = mjukvaru_utveckling_filter.reduce(
    (a: string, b: string) => `${Number(a) + Number(b)}`
  );

  courseScore.push({
    course: 'Mjukvaruutvecklare',
    points: mjukvaru_utveckling_points,
    links: {
      course: 'Mjukvaruutveckling',
      link: 'https://www.folkuniversitetet.se/vara-skolor/yh-utbildningar/alla-yh-utbildningar/it-data/mjukvaruutvecklare-for-mobiltetstjanster/',
    },
    studyAt: 'Distans',
    eduTextTitle: 'Mjukvaruutvecklare för mobilitetstjänster Distans',
    eduText:
      'I denna utbildning ligger fokus på så kallade “inbyggda system”, det vill säga hur man med mjukvara kan styra hårdvara. Utbildningen är specifikt inriktad på hur man programmerar mjukvara för bilar som gör dem bättre och säkrare.',
    intLink: 'mjukvaruutvecklare-for-mobiltjanster-distans',
  });

  const courseScoreSorted: CourseScore[] = courseScore.sort(
    (a: any, b: any) => b.points - a.points
  );

  const gotoOnboarding = () => {
    setQuestionId(0);
    navigate('/fragor/onboarding');
  };

  console.log(courseScoreSorted);
  

  return (
    <div className='results_wrapper'>
      <section className='results_section'>
        <h2>Ditt test resultat blev: </h2>
        {courseScoreSorted.map((courseScore: CourseScore, index: number) => {
          if (index < 5) {
            return (
              <ResultToggleComponent
                key={index}
                courseScore={courseScore}
                index={index}
              />
            );
          }
        })}
        <div className='results-button-container'>
          <button onClick={gotoOnboarding}>Ta testet igen</button>
        </div>
      </section>
    </div>
  );
};

export default ResultsComponent;
