
import Header from '../components/Header'
import {useRouter} from 'next/router'
import lessonsData from '../data/lessons.json'
import languages from '../data/languages.json'
import Link from 'next/link'
import {ensureProfile, saveProfile} from '../utils/localAuth'

export default function Lessons(){
  const router = useRouter()
  const lang = router.query.lang || (ensureProfile().selectedLang)
  const lessons = lessonsData[lang] || []
  const langInfo = languages.find(l=>l.id===lang) || {name:'Unknown'}

  return (
    <div>
      <Header />
      <main className="container">
        <section className="card">
          <h2 style={{marginTop:0}}>Lessons — {langInfo.name}</h2>
          <div className="small">Tap a lesson to open the practice interface.</div>
        </section>
        <section className="grid" style={{marginTop:12}}>
          {lessons.map(ls=>(
            <Link key={ls.id} href={'/lesson?id='+ls.id+'&lang='+lang}><a className="card" style={{display:'block',textDecoration:'none',color:'inherit'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div style={{fontWeight:700}}>{ls.title}</div>
                  <div className="small">{ls.cards.length} cards</div>
                </div>
                <div className="small">Start</div>
              </div>
            </a></Link>
          ))}
        </section>
      </main>
    </div>
  )
}
