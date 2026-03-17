function mostrarSeccion(id){

let secciones = document.querySelectorAll(".seccion");

secciones.forEach(function(sec){
sec.classList.add("oculto");
});

document.getElementById(id).classList.remove("oculto");

}