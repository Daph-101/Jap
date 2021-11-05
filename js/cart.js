//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
// let preUnit = document.getElementById('precio');
// let cantidad = document.getElementById('cantidad');
// let subtotal = document.getElementById('subTotal');

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
        multiplicar()
        
        
        })
        .catch(error => console.log(error))
        }
  
        Comen()

})   


function multiplicar(){
  let preUnit = parseInt(`${item.unitCost}`)
  let cantidad = parseInt(`${item.count}`)
  let subtotal = preUnit*cantidad

  // console.log(parseInt(document.getElementById("subTotal").value))
  subtotal.innerText = subtotal
}   

// function multiplicar(){

//   let cantidad = document.getElementById('cantidad');
//   let preUnit = document.getElementById('precio');
//   let subtotal = document.getElementById('subTotal');

//   for(let i = 0; i < cantidad.length; i++){
//     subtotal[i].value = cantidad[i].value * preUnit[i].value;
//     subtotal.innerText = preUnit * cantidad
//   }
  
// }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          alert('El formulario se envio correctamente');
        }

        form.classList.add('was-validated')
      }, false)
    })
})()