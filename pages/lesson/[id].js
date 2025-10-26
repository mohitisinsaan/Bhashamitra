import {useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import {loadProfile,addXp,addStreak,awardBadge} from '../../utils/localAuth';
import lessonsData from '../../data/lessons.json';

export default function Lesson(){
  const router=useRouter();
  const {id} = router.query;
  const [lesson,setLesson]=useState(null);
  const [showInfo,setShowInfo]=useState(true);
  const [currentCard,setCurrentCard]=useState(0);
  const [score,setScore]=useState(0);

  useEffect(()=>{
    if(!id) return;
    for(const lang in lessonsData){
      const l=lessonsData[lang].find(x=>x.id===id);
      if(l){ setLesson(l); break; }
    }
  },[id]);

  if(!lesson) return null;

  const handleAnswer=(opt)=>{
    if(opt===lesson.cards[currentCard].a) setScore(score+1);
    if(currentCard+1<lesson.cards.length){ setCurrentCard(currentCard+1) }
    else { addXp(score+1); addStreak(); if(score===lesson.cards.length) awardBadge(lesson.title); router.push('/lessons'); }
  }

  if(showInfo) return (<div className="container"><h2>{lesson.title}</h2><p>{lesson.info}</p><button onClick={()=>setShowInfo(false)}>Start Quiz</button></div>);

  const card=lesson.cards[currentCard];
  return (<div className="container"><h3>{card.q}</h3>{card.options.map(o=><button key={o} onClick={()=>handleAnswer(o)}>{o}</button>)}</div>);
}