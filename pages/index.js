
import Header from '../components/Header'
import Link from 'next/link'
import languages from '../data/languages.json'
export default function Home(){
  return (
    <div>
      <Header />
      <main className="container">
        <section className="card" style={{marginBottom:16}}>
          <h2 style={{margin:'0 0 8px 0'}}>Pick a language to start</h2>
          <p className="small">Designed like a cinematic, minimal app — saffron, green and earthy tones.</p>
        </section>
        <section className="grid grid-cols-3">
          {languages.map(l=>(
            <Link key={l.id} href={'/select?lang='+l.id}>
              <a className="card" style={{display:'block',textDecoration:'none',color:'inherit'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:18}}>{l.name} <span className="small"> — {l.native}</span></div>
                    <div className="small" style={{marginTop:6}}>{l.desc}</div>
                  </div>
                  <div style={{width:56,height:56,borderRadius:12,background:l.color,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>
                    {l.name[0]}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </section>
        <section style={{marginTop:20}} className="card">
          <h3 style={{marginTop:0}}>Your progress</h3>
          <p className="small">Local-only profile and progress tracking. No cloud, no tracking.</p>
          <div style={{display:'flex',gap:12,marginTop:12,alignItems:'center'}}>
            <img src="/badge-xp.svg" style={{width:64,height:64}}/>
            <div style={{flex:1}}>
              <div style={{display:'flex',justifyContent:'space-between'}}><div className="small">XP</div><div className="small">Level progress</div></div>
              <div className="progress" style={{marginTop:8}}><i style={{width:'35%'}}></i></div>
            </div>
            <Link href="/profile"><a className="btn">Open Profile</a></Link>
          </div>
        </section>
      </main>
    </div>
  )
}
