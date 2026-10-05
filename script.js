const target = new Date('2027-03-27T14:30:00+01:00').getTime();
const els = {d:document.getElementById('days'),h:document.getElementById('hours'),m:document.getElementById('minutes')};
function tick(){
  const diff=Math.max(0,target-Date.now());
  els.d.textContent=Math.floor(diff/86400000);
  els.h.textContent=Math.floor(diff%86400000/3600000).toString().padStart(2,'0');
  els.m.textContent=Math.floor(diff%3600000/60000).toString().padStart(2,'0');
}
tick();setInterval(tick,60000);

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuToggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const form=document.querySelector('.rsvp-form');
const guestCount=document.getElementById('guest-count');
const guestRows=[...document.querySelectorAll('.guest-row')];
const attendance=[...document.querySelectorAll('input[name="aanwezigheid"]')];
const attendingFields=document.getElementById('attending-fields');
const wholeDay=document.getElementById('whole-day');
const partChecks=[...document.querySelectorAll('.part-check')];
const activityError=document.getElementById('activity-error');

function isAttending(){return document.querySelector('input[name="aanwezigheid"]:checked')?.value==='Ja'}
function dinnerSelected(){return wholeDay.checked || partChecks.some(c=>c.value==='Diner'&&c.checked)}
function syncGuestRows(){
  const count=Number(guestCount.value);
  guestRows.forEach((row,i)=>{
    const visible=isAttending() && i<count;
    row.hidden=!visible;
    const name=row.querySelector('input[type="text"]');
    name.required=visible;
    row.querySelectorAll('[data-menu-field] input').forEach(input=>input.required=visible&&dinnerSelected());
    row.querySelector('[data-menu-field]').hidden=!dinnerSelected();
  });
}
function syncAttendance(){
  const yes=isAttending();
  attendingFields.hidden=!yes;
  attendingFields.querySelectorAll('input,select,textarea').forEach(el=>el.disabled=!yes);
  syncGuestRows();
}
attendance.forEach(r=>r.addEventListener('change',syncAttendance));
guestCount.addEventListener('change',syncGuestRows);

wholeDay.addEventListener('change',()=>{
  partChecks.forEach(c=>{c.checked=wholeDay.checked;c.disabled=wholeDay.checked});
  syncGuestRows();
});
partChecks.forEach(c=>c.addEventListener('change',()=>{if(!c.checked)wholeDay.checked=false;syncGuestRows()}));

form.addEventListener('submit',e=>{
  if(isAttending()){
    const chosen=wholeDay.checked||partChecks.some(c=>c.checked);
    activityError.hidden=chosen;
    if(!chosen){e.preventDefault();document.getElementById('activities').scrollIntoView({behavior:'smooth',block:'center'});return}
  }
});

syncAttendance();
syncGuestRows();
