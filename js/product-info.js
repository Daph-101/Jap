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
  var comentary = document.getElementById('comentary').value;
  var result = document.getElementById('result');
  
  if (comentary.length < 5) {
      result.textContent = 'Tu comentario debe tener más de 5 caracteres';
      //Avisa al usuario si el comentario tiene menos de 10 caracteres
  } else {
      result.textContent = '' + comentary  ;
      
      //Muestra al usuario los datos que se guardaron en la variable "nameField"
  }
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', NewComments, false); 


document.addEventListener("DOMContentLoaded", 
 
    function autos(){

      fetch(URL_Peugeot)
      .then(req => req.json())
      .then(MostrarAutos =>{
        
        MostrarAutos.forEach(element => {
          
          let auto = " ";

          auto= `<div class="masInfo">
          <p>` + `<strong>Marca: </strong>` + element.name +`</p>
          <p style="width:1000px">` + `<strong>Descripcion: </strong>` + element.description + ` </p>
          <p>` + `<strong>Precio: </strong> ` + element.currency + " " + element.cost + `</p>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="` + element.images[0] + `"  "alt="First slide">
            </div>
            <div class="carousel-item">
               <img class="d-block w-100" src="` + element.images[1] + `"  "alt="Second slide">
            </div>
            <div class="carousel-item">
               <img class="d-block w-100" src="` + element.images[2] + `"  "alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

          <a href="products.html">Volver a lista de autos</a>
          <h5>` + `Productos relacionados `+`</h5>
          <div class="contain">
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="./img/prod2.jpg " alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Fiat Way</h5>
                <p class="card-text">` + element.relatedProducts[1] + `</p>
                <a href="product-info.html" class="btn btn-primary">Ir a ver</a>
              </div>
            </div>
          </div>
          <div class="contain">
              <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="./img/peugeot_208_1.jpg " alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Peugeot 208</h5>
                <p class="card-text">` + element.relatedProducts[3] + `</p>
                <a href="product-info" class="btn btn-primary">Ir a ver</a>
              </div>
            </div>
          </div>
          </div>`
          
    
          document.getElementById("informacion").innerHTML += auto;
        });
  
      })

});



