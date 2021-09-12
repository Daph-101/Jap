//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(URL_Fiat).then(function autos(algo){
        
        let data ="";
        for(let i = 0; i < algo.length; i++){
                
            let auto = algo[i];
                
            data += 'Nombre: ' + auto.name + '<br>';
            data += 'Descripcion: ' + auto.description + '<br>';
            data += 'Cantidad de ventas: ' + auto.soldCount + '<br>';
            data += 'Fotos del vehiculo ' + auto.images + '<br>';
            data += '<img src='  + element.imgSrc + 'style="width:350px;>'
        }
                
    });
    getJSONData(URL_Fiat);
})


function TraerComentarios(PRODUCT_INFO_COMMENTS_URL){
        let comen = "";
        for(let i = 0; i < comen.length; i++){
            let comen = comen[i]
            comen += 'Fecha: ' + comen.dateTime + '<br>';
            comen += 'Usuario: ' + comen.user + '<br>';
            comen += 'Descripción: ' + comen.description + '<br>';
            comen += 'Puntaje: ' + comen.score + '<br>';
        }
        document.getElementById("comentarios").innerHTML = comen;

TraerComentarios(PRODUCT_INFO_COMMENTS_URL)
}