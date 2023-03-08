// let mostrarInfo= document.querySelector('.btn');
// mostrarInfo.addEventListener('click', obtenerInfo);
document.addEventListener('DOMContentLoaded', obtenerInfo);
function obtenerInfo(){
    const url='http://localhost:5000/sections'
    fetch(url)
    .then(resp=>resp.json())
    .then(resultado=>mostrarInfo(resultado))
}
function mostrarInfo(sections){
    const contenido=document.querySelector('#MuestraInfo');
    let html='';

    sections.forEach(section=>{
        const {name}=section;
        html += `<h3>${name}</h3>`;
    });
    contenido.innerHTML=html;
}
