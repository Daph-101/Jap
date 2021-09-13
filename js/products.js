//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
<<<<<<< HEAD
=======
var PrecioMin;
var PrecioMax;
function verAuto(name){
    localStorage.setItem('auto', JSON.stringify({autoName: name}));
    window.location = 'poroduct-info.html'
}
function LoadProdu(PRODUCTS_URL) {
>>>>>>> 6f5cff41f480b3d7191af49d979e77b85f09efa2

function LoadProdu(PRODUCTS_URL) {
   
    document.getElementById("Pdt").innerHTML = " ";
    
    fetch(PRODUCTS_URL)
    .then(req => req.json())
    .then(LoadProdu => {
       
        LoadProdu.forEach(element => {
<<<<<<< HEAD
       
=======
            if(((PrecioMin == undefined) || (PrecioMin != undefined && parseInt(element.cost) >= PrecioMin)) &&// comparamos la el precio que tenemos en el listado de autos sea mayor o igual que el precio que indica el usuario.
            ((PrecioMax == undefined) || (PrecioMax != undefined && parseInt(element.cost) <= PrecioMax))){  
>>>>>>> 6f5cff41f480b3d7191af49d979e77b85f09efa2
            let linea = "<br><hr><br>";
        
            let salto = "<br><br>";
            
            let list = " ";

            list = `<ul>
                <ol> <img src=" ` + element.imgSrc + ` " style="width:350px;">` + salto +`</ol>
                <a href="product-info.html"><button id="info-auto">Ver más</button></a> <br>
                <ol>` + `<strong>Marca: </strong>` + element.name +`</ol>
                <ol>` + `<strong>Descripcion: </strong>`+ element.description + `</ol>
                <ol>` + `<strong>Precio: </strong>` + element.cost + linea +`</ol>
            </ul>`
<<<<<<< HEAD
        document.getElementById("Pdt").innerHTML += list;
        // document.getElementById("abc").addEventListener('click',function() {
        
        // abc.sort(element)
        // console.log(element)

        // })
        
    })
=======
            document.getElementById("Pdt").innerHTML += list;
            }
        })
        
>>>>>>> 6f5cff41f480b3d7191af49d979e77b85f09efa2
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
function ordenamiento(orden, lista){
    let array = [];
    if(orden === "Asen"){
        array = lista.sort(
            function(a,b){
                if(a.cost < b.cost){ return -1;}
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
ordenamiento()
}
});
<<<<<<< HEAD
//var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
//arr.sort(); 
//console.log(arr)

// function abc(){
//     element[0].sort();
//     LoadProdu(element[1]);
//     console.log(abc)
// }
=======
document.getElementById("asen").addEventListener('click', function(){
    PRODUCTS_URL = ordenamiento("Asen", PRODUCTS_URL);

    LoadProdu(PRODUCTS_URL);
})
document.getElementById("desen").addEventListener('click', function(){
    PRODUCTS_URL = ordenamiento("Desen", PRODUCTS_URL);
    LoadProdu(PRODUCTS_URL);
})

// let search = document.createElement("input");
// search.setAttribute('type', "search");
// document.body.appendChild(search);


>>>>>>> 6f5cff41f480b3d7191af49d979e77b85f09efa2
