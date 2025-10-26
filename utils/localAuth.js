
const STORAGE_KEY = 'bhashamitra_profile';

const isBrowser = typeof window !== 'undefined';

export const loadProfile = () => {
  try{
    if(!isBrowser) return null;
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
export const saveProfile = (profile) => {
  try{
    if(!isBrowser) return null;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    return profile;
  }catch(e){ return null; }
}
export const ensureProfile = () => {
  if(!isBrowser) return {name:'Guest', xp:0, streak:0, badges:[], lastSeen:null, selectedLang:null};
  let p = loadProfile();
  if(!p){
    p = {name:'Guest', xp:0, streak:0, badges:[], lastSeen:null, selectedLang:null};
    saveProfile(p);
  }
  return p;
}
export const addXp = (amount) => {
  if(!isBrowser) return null;
  const p = ensureProfile();
  p.xp = (p.xp || 0) + amount;
  p.lastSeen = new Date().toISOString();
  saveProfile(p);
  return p;
}
export const addStreak = () => {
  if(!isBrowser) return null;
  const p = ensureProfile();
  p.streak = (p.streak || 0) + 1;
  p.lastSeen = new Date().toISOString();
  saveProfile(p);
  return p;
}
export const awardBadge = (badge) => {
  if(!isBrowser) return null;
  const p = ensureProfile();
  if(!p.badges.includes(badge)) p.badges.push(badge);
  saveProfile(p);
  return p;
}
