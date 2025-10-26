import {useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import {loadProfile,saveProfile,ensureProfile} from '../utils/localAuth';

export default function Home(){
  const [name,setName]=useState('');
  const [profile,setProfile]=useState(null);
  const router=useRouter();

  useEffect(()=>{ const p=loadProfile()||ensureProfile(); setProfile(p); setName(p.name||''); },[]);

  const startApp=()=>{ const p={...profile,name}; saveProfile(p); router.push('/select'); }

  if(!profile) return null;

  if(!profile.name) return (
    <div className="container center">
      <h1>Welcome to Bhashamitra</h1>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/>
      <button onClick={startApp} disabled={!name}>Start</button>
    </div>
  );

  router.push('/select');
  return null;
}