import {useEffect,useState} from 'react';
import {useRouter} from 'next/router';
import {loadProfile,ensureProfile} from '../utils/localAuth';
import lessonsData from '../data/lessons.json';

export default function Lessons(){
  const [profile,setProfile]=useState(null);
  const [lessons,setLessons]=useState([]);
  const router=useRouter();

  useEffect(()=>{
    const p=loadProfile()||ensureProfile();
    setProfile(p);
    if(p.selectedLang && lessonsData[p.selectedLang]) setLessons(lessonsData[p.selectedLang]);
  },[]);

  const openLesson=(id)=> router.push(`/lesson/${id}`);

  if(!profile) return null;

  return (<div className="container">{lessons.map(l=><div key={l.id}><h3>{l.title}</h3><button onClick={()=>openLesson(l.id)}>Start</button></div>)}</div>)
}