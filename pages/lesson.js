
import Header from '../components/Header'
import {useRouter} from 'next/router'
import lessonsData from '../data/lessons.json'
import {useEffect,useState} from 'react'
import {addXp, addStreak, awardBadge, ensureProfile} from '../utils/localAuth'
export default function Lesson(){
  const router = useRouter()
  const {id, lang} = router.query
  const [idx,setIdx] = useState(0)
  const [showAns,setShowAns] = useState(false)
  const [lesson,setLesson] = useState(null)
  useEffect(()=>{
    if(id && lang){
      const all = lessonsData[lang] || []
      const L = all.find(x=>x.id===id)
      setLesson(L)
    }
  },[id,lang])

  if(!lesson) return (<div><Header /><main className='container'><div className='card'>Loading...</div></main></div>)

  const card = lesson.cards[idx]

  const markCorrect = ()=>{
    addXp(10)
    addStreak()
    if((ensureProfile().xp || 0) + 10 >= 100) awardBadge('Learner I')
    // move next
    setShowAns(false)
    setIdx(Math.min(idx+1, lesson.cards.length-1))
  }

  return (
    <div>
      <Header />
      <main className="container">
        <section className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:800,fontSize:20}}>{lesson.title}</div>
              <div className="small">{idx+1} / {lesson.cards.length}</div>
            </div>
            <div className="small">XP +10 • Streak +1</div>
          </div>
        </section>
        <section className="card" style={{marginTop:12,textAlign:'center'}}>
          <div style={{fontSize:24,fontWeight:800}}>{card.q}</div>
          <div style={{marginTop:18}}>
            {showAns ? <div style={{fontSize:22}}>{card.a}</div> : <button className="btn" onClick={()=>setShowAns(true)}>Show answer</button>}
          </div>
          <div style={{display:'flex',gap:12,justifyContent:'center',marginTop:18}}>
            <button className="btn" onClick={markCorrect}>I got it</button>
            <button className="card" onClick={()=>setIdx(Math.min(idx+1, lesson.cards.length-1))}>Skip</button>
          </div>
        </section>
      </main>
    </div>
  )
}
