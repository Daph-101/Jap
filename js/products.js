//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var PrecioMin;
var PrecioMax;
function verAuto(name){
    localStorage.setItem('auto', JSON.stringify({autoName: name}));
    window.location = 'poroduct-info.html' // en boton 'ver mas' redirige a 'poroduct-info.html' 
}

function LoadProdu(PRODUCTS_URL) {
   
    document.getElementById("Pdt").innerHTML = " ";
    
    fetch(PRODUCTS_URL)
    .then(req => req.json())
    .then(LoadProdu => {
       
        LoadProdu.forEach(element => {
            if(((PrecioMin == undefined) || (PrecioMin != undefined && parseInt(element.cost) >= PrecioMin)) &&// comparamos la el precio que tenemos en el listado de autos sea mayor o igual que el precio que indica el usuario.
            ((PrecioMax == undefined) || (PrecioMax != undefined && parseInt(element.cost) <= PrecioMax))){ 
            
            let list = " ";

            list = 
            `<div class="col-12 col-sm-6 col-md-3" style="width: 16rem;">
            <div class="card" style="width: 16rem;">
            <img src=" ` + element.imgSrc + ` " class="card-img-top" style="width: 16rem;">
                <div class="card-body">  
                    <p class="card-text">` + `<strong>Marca: </strong>` + element.name +`</p>
                    <p class="card-text">` + `<strong>Descripcion: </strong>`+ element.description + `</p>
                    <p class="card-text">` + `<strong>Precio: </strong>` + element.cost + `</p>
                    <a href="product-info.html"><button id="info-auto" class="d-grid gap-2 col-6 mx-auto btn btn-danger">Ver más</button></a>
                </div>
            </div>
            </div>`
            document.getElementById("Pdt").innerHTML += list;
            }
        })
        
    })
    .catch(error => alert("Hay un error: " + error));
}

document.addEventListener("DOMContentLoaded", (e) =>{

    let filtrar= document.getElementById("filtrar")
    filtrar.addEventListener('click', function(){

    PrecioMin = document.getElementById("min.Range").value;
    PrecioMax = document.getElementById("max.Range").value;
    
    if((PrecioMin != undefined) && (PrecioMin != " ") && (parseInt(PrecioMin))>= 0){
        PrecioMin = parseInt(PrecioMin);
    }
    else {
        PrecioMin = undefined;
    }
    if((PrecioMax != undefined) && (PrecioMax != " ") && (parseInt(PrecioMax))>= 0){
        PrecioMax = parseInt(PrecioMax);
    }
    else {
        PrecioMin = undefined;
    }
LoadProdu(PRODUCTS_URL)

    let color = document.getElementById("Pdt");
    color.addEventListener('mouseout', (e) =>{
        e.target.style.color = "purple";
        setTimeout(() =>{
            e.target.style.color = "";
        }, 1500);    
    }, false);
})

    let limpiar =document.getElementById("limpiar")
    limpiar.addEventListener('click', function(){

    document.getElementById("min.Range").value = ""; // mediante este evento indicamos que el valor de los input sea vacio
    document.getElementById("max.Range").value = "";

    PrecioMin = undefined;
    PrecioMax = undefined;

    LoadProdu(PRODUCTS_URL);
})

});


let array = [];
function ordenamiento(orden, lista){
    if(orden === "asen"){
        array = lista.sort(
            function(a,b){
                if(a.cost < b.cost){ return -1;}
                if(a.cost > b.cost){ return 1; }
                return 0;}
        );  
    }
    else if(orden === "desen") {
        array = lista.sort(
            function(a,b){
                if(a.cost < b.cost){return 1;}
                if(a.cost > b.cost){ return -1; }
                return 0;
            }
            
        )
        
    }

}
document.addEventListener('click', function(e){
    console.log(e.target.matches(".btn-outline-primary"))
    document.getElementById("asen").value
    document.getElementById("desen").value

   PRODUCTS_URL = ordenamiento("asen", PRODUCTS_URL);
   PRODUCTS_URL = ordenamiento("desen", PRODUCTS_URL);
   LoadProdu(PRODUCTS_URL);
})


// let search = document.createElement("input");
// search.setAttribute('type', "search");
// document.body.appendChild(search);
