//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var PrecioMin;
var PrecioMax;

function LoadProdu(PRODUCTS_URL) {

    document.getElementById("Pdt").innerHTML = " ";
    
    fetch(PRODUCTS_URL)
    .then(req => req.json())
    .then(LoadProdu => {
        
        LoadProdu.forEach(element => {
            if(((PrecioMin == undefined) || (PrecioMin != undefined && parseInt(element.cost) >= PrecioMin)) &&// comparamos la el precio que tenemos en el listado de autos sea mayor o igual que el precio que indica el usuario.
            ((PrecioMax == undefined) || (PrecioMax != undefined && parseInt(element.cost) <= PrecioMax))){  
            let linea = "<br><hr><br>";
        
            let salto = "<br><br>";
            
            let list = " ";
            list = `<ul>
                <ol> <img src=" ` + element.imgSrc + ` " style="width:350px;">` + salto +`</ol>
                <ol>` + `<strong>Marca: </strong>` + element.name +`</ol>
                <ol>` + `<strong>Descripcion: </strong>`+ element.description + `</ol>
                <ol>` + `<strong>Precio: </strong>` + element.cost + linea +`</ol>
            </ul>`
            document.getElementById("Pdt").innerHTML += list;
            }
        })
        
    })
    .catch(error => alert("Hay un error: " + error));
}

document.addEventListener("DOMContentLoaded", (e) =>{
    let color = document.getElementById("Pdt");

    color.addEventListener("mouseout", (e) =>{
     
        e.target.style.color = "purple";
      
        setTimeout(() =>{
            e.target.style.color = "";
      }, 1500);

    }, false);

});
document.getElementById("filtrar").addEventListener("click", function(){
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
})
document.getElementById("limpiar").addEventListener("click", function(){
    document.getElementById("min.Range").value = ""; // mediante este evento indicamos que el valor de los input sea vacio
    document.getElementById("max.Range").value = "";

    PrecioMin = undefined;
    PrecioMax = undefined;

    LoadProdu(PRODUCTS_URL);
})
function ordenamiento(orden, lista){
    let array = [];
    if(orden === "Asen"){
        array = lista.sort(
            function(a,b){
                if(a.cost < b.cost){return -1;}
                if(a.cost > b.cost){ return 1; }
                return 0;}
        );  
    }
    else if(orden === "Desen") {
        array = lista.sort(
            function(a,b){
                if(a.cost < b.cost){return -1;}
                if(a.cost > b.cost){ return 1; }
                return 0;
            }
        )
    }

}
document.getElementById("asen").addEventListener("click", function(){
    PRODUCTS_URL = ordenamiento("Asen", PRODUCTS_URL);

    LoadProdu(PRODUCTS_URL);
})
document.getElementById("desen").addEventListener("click", function(){
    PRODUCTS_URL = ordenamiento("Desen", PRODUCTS_URL);
    LoadProdu(PRODUCTS_URL);
})

// let search = document.createElement("input");
// search.setAttribute("type", "search");
// document.body.appendChild(search);
