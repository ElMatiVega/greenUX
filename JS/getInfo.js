document.addEventListener('DOMContentLoaded', obtenerInfo);
function obtenerInfo(){
  
    const url1='http://localhost:5000/info'
    fetch(url1)
    .then(resp=>resp.json())
    .then(resultado=>mostrarInfo(resultado))
}
function mostrarInfo(infos){
    const contenido=document.querySelector('#muestraInfo');
    let html='';

    infos.forEach(info=>{
        const {data}=info;
        html += `<p>${data}</p>`;
    });
   
    contenido.innerHTML=html;
}