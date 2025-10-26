
import Link from 'next/link'
import {useEffect,useState} from 'react'
import {loadProfile,ensureProfile} from '../utils/localAuth'
export default function Header(){
  const [profile,setProfile] = useState(ensureProfile())
  useEffect(()=>{ setProfile(loadProfile()) },[])
  return (
    <header className="header container">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <img src="/logo.svg" className="logo" alt="Bhashamitra"/>
        <div style={{opacity:0.9}}>
          <div style={{fontWeight:700}}>Bhashamitra</div>
          <div className="small">Learn local languages — gamified</div>
        </div>
      </div>
      <div className="profile">
        <div style={{textAlign:'right',marginRight:8}}>
          <div style={{fontWeight:700}}>{profile?.name || 'Guest'}</div>
          <div className="small">XP {profile?.xp || 0} • Streak {profile?.streak || 0}d</div>
        </div>
        <div className="avatar">{(profile?.name || 'G')[0]}</div>
      </div>
    </header>
  )
}
