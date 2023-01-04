console.log("cargado..");


function like(element){
    /** Obtener el contador a cambiar, concatenando con el id del boton
     * Por ejemplo id boton: like-2 concatenar con la palabra contador 
     * de esta manera se obtiene contador-like-2
     */

    let contadorElemento = document.querySelector("#contador-"+element.getAttribute("data-count"));

    /* Aumentar en 1 unidad su valor */
    contadorElemento.innerText = parseInt(contadorElemento.innerText)+1;    
}