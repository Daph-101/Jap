//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    //falta url de fetch()
     function carritoDAta(carro){

        console.log(data.articles[0].name)
        let body="";
         
         for(let i = 0; i<carro.length; i++){
             body+= ` <p>Hola:${data[i].articles}</p> `
         }
         document.getElementById(datos).innerHTML = body;
     }
    
});