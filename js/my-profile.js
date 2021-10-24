//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.getElementById("btn-enviar").addEventListener('click', function(){
    
        let name = document.getElementById("name")
        let age = document.getElementById("age")
        let email = document.getElementById("email")
        let tel = document.getElementById("tel")
    
    if(datosPerfil){
        localStorage.setItem('datosPerfil', JSON.stringify({nombre: name.value, email: email.value }));
        console.log(datosPerfil, "estos son los datos")
    }
    
 })

 document.addEventListener("DOMContentLoaded", function (e) {
    let datos = localStorage.getItem('datosPerfil');
    let infoUser = document.getElementById("info-user")
    let user = document.getElementById("user");
  
    if (datos) {
      datos = JSON.parse(datos);
      user.innerText = user.innerText + datos.email;
      infoUser.style = "display: inline-block";
    }
  
    if (document.getElementById("btn-editar")) {
      document.getElementById("btn-editar").addEventListener("click", function () {
        localStorage.removeItem('datosPerfil');
      })
    }
  });