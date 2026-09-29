// Troque pelo número real (DDI + DDD + número, só dígitos)
  const WHATSAPP = "5567900000000";
  const MSG = "Olá! Quero agendar meu horário.";
  document.querySelectorAll("[data-wa]").forEach(a=>{
    a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(MSG);
    a.target = "_blank"; a.rel = "noopener";
  });

  document.documentElement.classList.add("js");
  const groups=".stats .stat,.about .wrap>div,.head,.svc,.gal .ph,.t,.loc .wrap>div";
  document.querySelectorAll(groups).forEach(el=>{
    el.classList.add("rv");
    const i=[...el.parentElement.children].indexOf(el);
    if(i>0&&i<5)el.classList.add("d"+i);
  });
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll(".rv").forEach(el=>io.observe(el));