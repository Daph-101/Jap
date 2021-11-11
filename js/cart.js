//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
// let preUnit = document.getElementById('precio');
// let cantidad = document.getElementById('cantidad');
// let subtotal = document.getElementById('subTotal');

//variables del modal
let exampleModal = document.getElementById('exampleModal');
let input = document.getElementById('inp');
let btnEnviar = document.getElementById('enviar');
// variables para formulario
let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let direccionCalle = document.getElementById('direccionCalle');
let direccionNum = document.getElementById('direccionNum');
let direccionEsq = document.getElementById('direccionEsq');
let pais = document.getElementById('pais');
let ciudad = document.getElementById('ciudad');
let EnvioPremium = document.getElementById('EnvioPremium');

//expresion regular acepta solo minuscula 'marta@menta.com'
let exRegEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
let exRegNombre = /^[a-zA-Z ]*$/;
let exRegNum = /[a-z]/gi;
//alertas
let alertSuccess = document.getElementById('alertSuccess');
let alertNombre = document.getElementById('alertNombre');
let alertApellido = document.getElementById('alertApellido');
let alertEmail = document.getElementById('alertEmail');


 document.addEventListener("DOMContentLoaded", function(e){
   
    function Comen(){

        fetch(CART_INFO_URL)
        .then(req => req.json())
        .then(art =>{
        console.log(art.articles[0])
        
        art.articles.forEach(item =>{

        let body = "";
        body= `
        <main id="info">
          <div class="row ">
            <div class="col-sm-12 col-md-12 col-lg-6 p-2">
              <div class="d-block mb-4 h-100">
                <article class="card h-100 flex-shrink-0">
                  <div class="card-body">
                    <div class="d-flex mb-3">
                      <img class="rounded float-start w-50 h-50 pt-3" src="${item.src}">
                      <div class="p-2 w-100 ">
                        <p class="h6 w-100 ">${item.name}</p>
                        <input type="number" class="h6 w-100" id="cantidad" onChange="multiplicar()" placeholder="Cantidad: ${item.count}"></p>
                        <p class="h6 w-100" id="precio" onChange="multiplicar()">Precio: ${item.currency} ${item.unitCost}</p>
                        <p id="subTotal" class="h6 w-100">SubTotal: $</p>
                        
                      </div>
                    </div>
                </article>
              </div>
            </div>
          </div>` ;
          
        document.getElementById("info").innerHTML += body;
       
        })
        // multiplicar()
        
        
        })
        .catch(error => console.log(error))
        }
       
        Comen()

})   


// function multiplicar(){
//   let preUnit = parseInt(`${item.unitCost}`)
//   let cantidad = parseInt(`${item.count}`)
//   let subtotal = preUnit*cantidad

//   // console.log(parseInt(document.getElementById("subTotal").value))
//   subtotal.innerText = subtotal
// }   

// function multiplicar(){

//   let cantidad = document.getElementById('cantidad');
//   let preUnit = document.getElementById('precio');
//   let subtotal = document.getElementById('subTotal');

//   for(let i = 0; i < cantidad.length; i++){
//     subtotal[i].value = cantidad[i].value * preUnit[i].value;
//     subtotal.innerText = preUnit * cantidad
//   }
  
// }


// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }else{
//           alert('El formulario se envio correctamente');
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

function mostrarMensajeExito(){
  alertSuccess.classList.remove('d-none')
  alertSuccess.innerHTML = " Mensaje enviado con éxito😉!"
}

function validandoFormulario(){
  formulario.addEventListener('submit', function(e){

    // console.log(nombre.value, '🇸🇷 ');
    // console.log(apellido.value, '📛');

    alertSuccess.classList.add('d-none');
    

    if (!formulario.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
      
    }
    if (!exRegEmail.test(email.value) || !email.value.trim() ){
     // console.log("formato de email no válido");
      email.classList.add("is-invalid")
    }else{
      email.classList.remove('is-invalid')
      email.classList.add("is-valid") 
     
    }
    if (!exRegNombre.test(nombre.value) || !nombre.value.trim()){
      //console.log("Nombre en formato invalido");
      nombre.classList.add("is-invalid")
    }else{
      nombre.classList.remove("is-invalid")
      nombre.classList.add("is-valid") 
    }
    if (!exRegNombre.test(apellido.value) || !apellido.value.trim()){
      apellido.classList.add("is-invalid")
    }else{
      apellido.classList.remove("is-invalid")
      apellido.classList.add("is-valid")
    }
    if (exRegNum.test(direccionCalle.value)){
      direccionCalle.classList.add("is-invalid")
    }else{
      direccionCalle.classList.remove("is-valid")
      direccionCalle.classList.add("is-invalid")
      
    }
    if (!exRegNombre.test(direccionEsq.value) || !direccionEsq.value.trim()){
      direccionEsq.classList.add("is-invalid")
    }else{
      direccionEsq.classList.remove("is-valid")
      direccionEsq.classList.add("is-invalid")
    }
    if (!exRegNum.test(direccionNum.value)){
      direccionNum.classList.add("is-invalid")
    }else{
      direccionNum.classList.remove("is-invalid")
      direccionNum.classList.add("is-valid")
    }

   if (this.classList.add("is-valid")=== true){
    console.log('formulario enviado 😁 ');
    mostrarMensajeExito()
   } 
   pais.setCustomValidity("is-invalid")
   pais.addEventListener("input", ()  =>{
     if(pais.value === true){
       pais.setCustomValidity("is")
     }else {
       pais.setCustomValidity("is-invalid")
     }
   })
  })

}
validandoFormulario();


