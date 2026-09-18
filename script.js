const data={
"juridica":null
};
document.querySelectorAll(".service").forEach((card)=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".service").forEach(x=>x.classList.remove("active"));
    card.classList.add("active");
    const panel=document.querySelector("#service-panel");
    panel.querySelector(".panel-label").textContent=`ÁREA ${card.dataset.title==="Asesoría Jurídica"?"01":card.dataset.title==="Asesoría Laboral"?"02":card.dataset.title==="Asesoría Fiscal"?"03":card.dataset.title==="Asesoría Contable"?"04":"05"}`;
    panel.querySelector("h3").textContent=card.dataset.title;
    panel.querySelector("p").textContent=card.dataset.copy;
    panel.querySelector("ul").innerHTML=card.dataset.items.split("|").map(x=>`<li>${x}</li>`).join("");
  });
});
const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#contact-form").addEventListener("submit",(e)=>{
  e.preventDefault();
  document.querySelector("#form-note").textContent="Formulario de demostración. Añade tu endpoint de Formspree para recibir consultas.";
});
