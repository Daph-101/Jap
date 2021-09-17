//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  });

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
document.addEventListener("DOMContentLoaded", 
 
    function autos(){

      fetch(URL_Peugeot)
      .then(req => req.json())
      .then(MostrarAutos =>{
        
        MostrarAutos.forEach(element => {
          
          let auto = " ";

          auto= `<div>
          <p>` + `<strong>Marca: </strong>` + element.name +`</p>
          <p>` + `<strong>Descripcion: </strong>`+ element.description + `</p>
          <p>` + `<strong>Precio: $</strong>` + element.cost + `</p>
          
          </div>`
          
    
          document.getElementById("informacion").innerHTML += auto;
        
        });
        MostrarImg(url);
      })
});


function MostrarImg(url){
 url = [URL_C_Onix, URL_Fiat];
  
  let Img = "";
  Img += `
 
    <img src="img/car1.jpg" style="width:200px;">
    <img src="img/cat1.jpg" style="width:200px;">
    <img src="img/car3.jpg" style="width:200px;"><br><br>
    <a href="products.html"><button id="info-auto">Volver a lista de autos</button></a> <br>
 
  `;
  document.getElementById("imagenes").innerHTML = Img;
  
}
