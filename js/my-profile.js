//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  document.getElementById("btn-enviar").addEventListener('click', function(){
    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let email = document.getElementById("email")
    let tel = document.getElementById("tel")
    
    let datosPerfil ={
      name: name.value,
      age: age.value,
      email: email.value,
      tel: tel.value
    }  
    
    if(datosPerfil){
      let datosInputsGuardados = localStorage.setItem('profile', JSON.stringify({user: datosPerfil}));
      console.log(datosPerfil, "estos son los datos")
    }
        
  })

  if( document.getElementById("btn-enviar")){
    
    document.getElementById("btn-enviar").addEventListener("click", function (){
    
    let profile = localStorage.getItem('profile');
    let datosUsuario = document.getElementById("datosUsuario")
    let user = document.getElementById("user");
  
    if (profile) {
      profile = JSON.parse(profile);
      user.innerText = user.innerText + profile.email;
      datosUsuario.style = "display: inline-block";
    }
  
    if (document.getElementById("btn-editar")) {
      document.getElementById("btn-editar").addEventListener("click", function () {
        localStorage.removeItem('profile');
      })
    }
    if (document.getElementById("btn-enviar")) {
      document.getElementById("btn-enviar").addEventListener("click", function () {
        document.getElementById('user')="";
        localStorage.removeItem('Correo');
        
      })
    }
  });
}
    
});