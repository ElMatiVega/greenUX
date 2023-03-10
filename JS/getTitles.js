document.addEventListener('DOMContentLoaded', obtenerTitles);
function obtenerTitles(){
  
    const url1='http://localhost:5000/titles'
    fetch(url1)
    .then(resp=>resp.json())
    .then(resultado=>mostrarTitle(resultado))
}
function mostrarTitle(titles){
    const contenido=document.querySelector('#muestratitle');
    let html='';

    titles.forEach(title=>{
        const {name}=title;
        html += `<h2>${name}</h2>`;
    });
   
    contenido.innerHTML=html;
}
