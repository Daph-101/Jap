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
            <div class="col-12 col-xl-6 col-md-6 p-2">
              <div class="d-block mb-4 h-100">
                <article class="card h-100 flex-shrink-0">
                  <div class="card-body">
                    <div class="d-flex mb-3">
                      <img class="rounded float-start w-50 h-50 pt-3" src="${item.src}">
                      <div class="p-2 w-100">
                        <p class="h6 w-100">${item.name}</p>
                        <p class="h6 w-100">Cantidad: ${item.count}</p>
                        <p class="h6 w-100">Precio: ${item.currency} ${item.unitCost}</p>
                        <button class="btn btn-outline-danger bd-highlight mt-4 btn-sm ">add to cart</button>
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


