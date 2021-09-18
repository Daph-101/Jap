const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
//
//
//
var URL_C_Onix ='https://daph-101.github.io/Apis-JaP/C_Onix.json'
var URL_Fiat = 'https://daph-101.github.io/Apis-JaP/Fiat.json'
var URL_Peugeot = 'https://daph-101.github.io/Apis-JaP/Peugeot.json'
var URL_Suzuki = 'https://daph-101.github.io/Apis-JaP/Suzuki.json'


var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

addEventListener("DOMContentLoaded", function(e) { // evento click que te redirige a la información del auto 
  // let click = document.getElementById("info-auto");
  // click.addEventListener('click', function(){
  //     window.location='product-info.html';
  // })
})

// document.addEventListener("DOMContentLoaded", function (e) {
//   let IniSesion = localStorage.getItem('Usuario');
//   let InfoUsuario = document.getElementById("InfoUsuario")
//   let usuario = document.getElementById("usuario");

//   if (IniSesion) {
//     IniSesion = JSON.parse(IniSesion);
//     usuario.innerHTML = usuario.innerHTML + 'Usuario logueado: ' + IniSesion.value;
//     InfoUsuario.style = "display: inline-block";
//   }
//   let BotonSalir = document.getElementById("salir")
//   if (BotonSalir) {
//     document.getElementById("salir").addEventListener("click", function () {
//       localStorage.removeItem('Usuario');
//       window.location = 'index.html';
//     })
//   }
// });
