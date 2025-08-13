// Flatworks scripts
const TOAST = (msg, ok=true)=>{
  const el = document.querySelector(ok ? '.alert.success' : '.alert.error');
  if(!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(()=>{ el.style.display = 'none'; }, 6000);
};

// Mobile nav
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.matches('.mobile-toggle')){
    const m = document.querySelector('.menu');
    if(m){ m.style.display = (m.style.display==='flex'?'none':'flex'); }
  }
});

// Termin-Form: Formspree via fetch
(async function(){
  const form = document.getElementById('termin-form');
  if(!form) return;

  const endpoint = form.dataset.endpoint || 'https://formspree.io/f/xyzzdummy'; // <-- Platzhalter
  const dateInput = form.querySelector('input[type="date"]');
  if(dateInput){
    const today = new Date();
    today.setDate(today.getDate()+1); // ab morgen
    dateInput.min = today.toISOString().split('T')[0];
  }

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // Basic honeypot
    if(data.website){ return; }
    try{
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if(res.ok){
        form.reset();
        TOAST('Danke! Wir melden uns schnellstmöglich zur Terminbestätigung.', true);
      }else{
        TOAST('Ups – Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie eine E‑Mail.', false);
      }
    }catch(err){
      TOAST('Netzwerkfehler – bitte später erneut versuchen.', false);
    }
  });
})();
