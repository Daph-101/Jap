//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var newComen=[];
function Comen(){

  fetch(PRODUCT_INFO_COMMENTS_URL)
  .then(req => req.json())
  .then(MostrarCom =>{
    MostrarCom.forEach(com =>{

      let mostrar = "";
      mostrar= `<ul>
      <hr>
        <p>` + `Fecha: ` + com.dateTime + `</p>
        <p>` + `Usuario: ` + com.user + `</p>
        <p>` + `Descripción: ` + com.description + `</p>
        <p>` + `Puntaje: `  + 
        `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`+
        `<span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div></p><br>
      </ul>`;
      document.getElementById("DatosCom").innerHTML += mostrar;
      
    })
  
  })

}
function NewComments() {
  var nameField = document.getElementById('nameField').value;
  var result = document.getElementById('result');
  
  if (nameField.length < 5) {
      result.textContent = 'Tu comentario debe tener más de 5 caracteres';
      //Avisa al usuario si el comentario tiene menos de 10 caracteres
  } else {
      result.textContent = '' + nameField;
      //Muestra al usuario los datos que se guardaron en la variable "nameField"
  }
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', NewComments, false); 


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
          <p>` + `<strong>Precio: </strong> ` + element.currency + " " + element.cost + `</p>
          <p><img src=" ` + element.images[0] + ` " style="width:350px;"></p>
          <p><img src=" ` + element.images[1] + ` " style="width:350px;"></p>
          <p><img src=" ` + element.images[2] + ` " style="width:350px;"></p>
          </div>`
          
    
          document.getElementById("informacion").innerHTML += auto;
        
        });
      })
});


// function MostrarImg(url){
//  url = URL_C_Onix;
  
//   let Img = "";
//   Img += `
 
//     <img src="img/car1.jpg" style="width:200px;">
//     <img src="img/cat1.jpg" style="width:200px;">
//     <img src="img/car3.jpg" style="width:200px;"><br><br>
//     <a href="products.html"><button id="info-auto">Volver a lista de autos</button></a> <br>
 
//   `;
//   document.getElementById("imagenes").innerHTML = Img;
  
// }
