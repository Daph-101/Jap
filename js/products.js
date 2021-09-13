//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function LoadProdu(PRODUCTS_URL) {
   
    document.getElementById("Pdt").innerHTML = " ";
    
    fetch(PRODUCTS_URL)
    .then(req => req.json())
    .then(LoadProdu => {
       
        LoadProdu.forEach(element => {
       
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
        // document.getElementById("abc").addEventListener('click',function() {
        
        // abc.sort(element)
        // console.log(element)

        // })
        
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
//var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
//arr.sort(); 
//console.log(arr)

// function abc(){
//     element[0].sort();
//     LoadProdu(element[1]);
//     console.log(abc)
// }
