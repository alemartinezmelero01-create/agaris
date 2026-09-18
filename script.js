const serviceContent={
juridica:["ÁREA 01","Asesoría Jurídica","Analizamos tu situación, anticipamos riesgos y te acompañamos en las decisiones jurídicas que afectan a tu negocio.",["Contratos y reclamaciones","Derecho civil y procesal","Derecho laboral","Derecho administrativo"]],
laboral:["ÁREA 02","Asesoría Laboral","Gestionamos las relaciones laborales para que puedas centrarte en tu actividad.",["Contratos y nóminas","Despidos y sanciones","Relaciones laborales","Inspecciones y consultas"]],
fiscal:["ÁREA 03","Asesoría Fiscal","Planificamos y gestionamos tus obligaciones fiscales desde una perspectiva empresarial.",["Impuestos y declaraciones","Planificación fiscal","Inspecciones","Consultoría tributaria"]],
contable:["ÁREA 04","Asesoría Contable","Convertimos la información contable en una herramienta útil para controlar y decidir.",["Contabilidad","Cierres de ejercicio","Reporting","Análisis de información"]],
financiera:["ÁREA 05","Asesoría Financiera","Analizamos la realidad financiera de tu empresa para ayudarte a planificar y tomar decisiones.",["Planificación financiera","Tesorería","Análisis de negocio","Financiación"]]
};
document.querySelectorAll(".service").forEach(card=>card.addEventListener("click",()=>{
 document.querySelectorAll(".service").forEach(x=>x.classList.remove("active"));card.classList.add("active");
 const d=serviceContent[card.dataset.service],p=document.querySelector("#service-panel");
 p.querySelector("small").textContent=d[0];p.querySelector("h3").textContent=d[1];p.querySelector("p").textContent=d[2];
 p.querySelector("ul").innerHTML=d[3].map(x=>`<li>${x}</li>`).join("");
}));
const menu=document.querySelector(".menu"),nav=document.querySelector(".site-header nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector("#contact-form").addEventListener("submit",e=>{
 e.preventDefault();document.querySelector("#form-note").textContent="Formulario de demostración. Añade tu endpoint de Formspree en action para recibir solicitudes.";
});
