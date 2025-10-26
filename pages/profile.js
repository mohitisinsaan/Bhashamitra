
import Header from '../components/Header'
import {loadProfile, ensureProfile} from '../utils/localAuth'
import {useEffect,useState} from 'react'
export default function Profile(){
  const [p, setP] = useState(null)
  useEffect(()=>{
    setP(loadProfile() || ensureProfile())
  },[])
  if(!p) return (<div><Header /><main className='container'><div className='card'>Loading...</div></main></div>)
  return (
    <div>
      <Header />
      <main className="container">
        <section className="card">
          <h2 style={{marginTop:0}}>Profile</h2>
          <div style={{display:'flex',gap:16,alignItems:'center'}}>
            <div style={{width:88}}><div style={{width:88,height:88,borderRadius:12,background:'#0b6b3a',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>{p.name[0]}</div></div>
            <div>
              <div style={{fontWeight:800,fontSize:20}}>{p.name}</div>
              <div className="small">XP: {p.xp}</div>
              <div className="small">Streak: {p.streak} days</div>
              <div className="small">Badges: {p.badges.join(', ') || '—'}</div>
            </div>
          </div>
        </section>
        <section className="card" style={{marginTop:12}}>
          <h3 style={{marginTop:0}}>Settings</h3>
          <div className="small">Local-only account. Data saved in browser storage.</div>
        </section>
      </main>
    </div>
  )
}
