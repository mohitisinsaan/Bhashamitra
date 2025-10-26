
import Header from '../components/Header'
import {useRouter} from 'next/router'
import languages from '../data/languages.json'
import {ensureProfile, saveProfile} from '../utils/localAuth'
import {useState,useEffect} from 'react'

export default function Select(){
  const router = useRouter()
  const [profile,setProfile] = useState(ensureProfile())

  const start = (langId) => {
    const p = {...profile, selectedLang: langId}
    saveProfile(p)
    router.push('/lessons?lang='+langId)
  }

  return (
    <div>
      <Header />
      <main className="container">
        <section className="card">
          <h2 style={{marginTop:0}}>Choose your language</h2>
          <div className="grid grid-cols-3" style={{marginTop:12}}>
            {languages.map(l=>(
              <div key={l.id} className="card" style={{cursor:'pointer'}} onClick={()=>start(l.id)}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontWeight:700}}>{l.name} <span className="small">{l.native}</span></div>
                    <div className="small">{l.desc}</div>
                  </div>
                  <div style={{width:48,height:48,borderRadius:8,background:l.color,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>{l.name[0]}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
