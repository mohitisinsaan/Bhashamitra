
export const loadProfile = () => {
  try{
    const raw = localStorage.getItem('bhashamitra_profile');
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
export const saveProfile = (profile) => {
  localStorage.setItem('bhashamitra_profile', JSON.stringify(profile));
}
export const ensureProfile = () => {
  let p = loadProfile();
  if(!p){
    p = {name:'Guest', xp:0, streak:0, badges:[], lastSeen:null, selectedLang:null};
    saveProfile(p);
  }
  return p;
}
export const addXp = (amount) => {
  const p = ensureProfile();
  p.xp = (p.xp || 0) + amount;
  p.lastSeen = new Date().toISOString();
  saveProfile(p);
  return p;
}
export const addStreak = () => {
  const p = ensureProfile();
  p.streak = (p.streak || 0) + 1;
  p.lastSeen = new Date().toISOString();
  saveProfile(p);
  return p;
}
export const awardBadge = (badge) => {
  const p = ensureProfile();
  if(!p.badges.includes(badge)) p.badges.push(badge);
  saveProfile(p);
  return p;
}
