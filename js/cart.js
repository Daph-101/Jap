//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

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
                        <input type="number" class="h6 w-100" placeholder="Cantidad: ${item.count}"></input>
                        <p class="h6 w-100">Precio: ${item.currency} ${item.unitCost}</p>
                        <p id="tott" class="h6 w-100">Total: $</p>
                        <button type="button" class="btn btn-outline-danger bd-highlight mt-4 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">enviar</button>
                      </div>
                    </div>
                </article>
              </div>
            </div>
          </div>` ;
        
        document.getElementById("info").innerHTML += body;
        
        })
        })
        .catch(error => console.log(error))
        }
  
        Comen()
        
})   


function total(){
  let preUnit = parseInt(item.currency)
  let cantidad = parseInt(item.count)
  let total = Math.round(preUnit*cantidad)

  
  console.log(parseInt(document.getElementById("tott").value))
  total.innerHTML= preUnit * cantidad
}