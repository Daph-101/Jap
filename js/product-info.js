//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    // getJSONData(URL_Fiat).then(function autos(algo){
        
    //     let data ="";
    //     for(let i = 0; i < algo.length; i++){
                
    //         let auto = algo[i];
                
    //         data += 'Nombre: ' + auto.name + '<br>';
    //         data += 'Descripcion: ' + auto.description + '<br>';
    //         data += 'Cantidad de ventas: ' + auto.soldCount + '<br>';
    //         data += 'Fotos del vehiculo ' + auto.images + '<br>';
    //         data += '<img src='  + element.imgSrc + 'style="width:350px;>'
    //     }
                
    // });
    // getJSONData(URL_Fiat);
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

var url;
function autos(){

  fetch(URL_Peugeot)
  .then(req => req.json())
  .then(MostrarAutos =>{
    
    MostrarAutos.forEach(element => {
      
      let auto = " ";

      auto= `<div>
      <a href="info-autos.html"><button id="info-auto">Ver más</button></a> <br>
      <p>` + `<strong>Marca: </strong>` + element.name +`</p>
      <p>` + `<strong>Descripcion: </strong>`+ element.description + `</p>
      <p>` + `<strong>Precio: </strong>` + element.cost + `</p>
  </div>`
      
 
      document.getElementById("informacion").innerHTML += auto;
     
    });
    MostrarImg(url);
  })

}
function MostrarImg(url){
 url = [URL_C_Onix, URL_Fiat];
  
  let Img = "";
  Img += `
 
    <img src="img/car1.jpg" style="width:200px;">
    <img src="img/cat1.jpg" style="width:200px;">
    <img src="img/car3.jpg" style="width:200px;">
 
  `;
  document.getElementById("imagenes").innerHTML = Img;
  
}
