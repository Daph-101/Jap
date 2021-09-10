//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var autos={}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(URL_C_Onix).then(function(mostrar){
        if(mostrar.status === "ok"){
            autos = mostrar.info
            let nombre = document.getElementById("nombre") 
            nombre.innerHTML = autos.name;
        }

    })
});