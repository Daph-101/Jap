//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
// let articulos=[]

 document.addEventListener("DOMContentLoaded", function(e){
    function mostrarCarro(){
    
        fetch(CART_INFO_URL)
        .then(response=>response.json())
        .then(data => mostraD(data))
        .catch(error => console.log(error))
        
        const mostraD = (data) =>{
        
            console.log(data.articles[0])
            let body = '';
        
            for (let i = 0; i<data.length; i++){
                let recorre = data[i]
                
                body +=`<p>Hola:${recorre.articles[0]}</p>`
            }
            document.getElementById('info').innerHTML = body
        }
        
        }
        
        mostrarCarro()
     }
   
    

//     function carritoDAta(carro){

    
//     let body= "";

//     for(let i = 0; i < carro.length; i++){
//         let info = carro[i];

//         console.log(data.articles[0].name)
//         body+= `
//         // <div class="col-lg-3 col-md-4 col-6">
//         //     <div class="d-block mb-4 h-100">
//                     <p>Hola:${info.articles[0]}</p>
//         //          <img class="img-fluid img-thumbnail" src="${info.articles[0].src}" alt="">
//         //     </div>
//         // </div>
//         // `

//         document.getElementById("datos").innerHTML = body;
//     }

// carritoDAta();
);

// document.addEventListener("DOMContentLoaded", function(e){
//     getJSONData(CART_INFO_URL).then(function(resultObj){
//         if (resultObj.status === "ok"){
//             carritoDAta()
//         }
//     });
// // });


// function carritoDAta(CART_INFO_URL) {
   
    
//     fetch(CART_INFO_URL)
//     .then(req => req.json())
//     .then(carro => {
//        console.log(hola)
//         carro.forEach(element => {
            
//             let body = " ";

//             body = `<div class="col-lg-3 col-md-4 col-6">
//             <div class="d-block mb-4 h-100">
//              <p>Hola:${element.articles[0].name}</p>
//             <img class="img-fluid img-thumbnail" src="${element.articles[0].src}" alt="">
//             </div>
//             </div>`
//             document.getElementById("datos").innerHTML += body;
            
//         })
        
//     })
//     .catch(error => alert("Hay un error: " + error));
// }

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL)
    .then(function(resultObj){
        if (resultObj.status === "ok") {
        cartprods = resultObj.data;
        prods = cartprods.articles;
        mostrarcarrito(prods);
     }
 })
});