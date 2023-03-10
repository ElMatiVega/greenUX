// let mostrarInfo= document.querySelector('.btn');
// mostrarInfo.addEventListener('click', obtenerSecciones);
document.addEventListener('DOMContentLoaded', obtenerSection);

function obtenerSection(){
    const url='http://localhost:5000/sections'
    fetch(url)
    .then(resp=>resp.json())
    .then(resultado=>mostrarSeccion(resultado))
   
}
function mostrarSeccion(sections){
    const contenido=document.querySelector('#muestraSection');
    let html='';

    sections.forEach(section=>{
        const {name}=section;
        html += `<h2>${name}</h2>`;
    });
  
    contenido.innerHTML=html;
}

