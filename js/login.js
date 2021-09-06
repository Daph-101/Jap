//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let Usser = "Hola.com" 
let Pass = 123456 
document.getElementById('user');
document.getElementById('password');

function GuardarDatos(user, password){
    localStorage.setItem("Usuario", user.value); //setItem guarda datos; getItem es para obtener datos
    localStorage.setItem("Pss", password.value);
}
function obtenerDatos (){
    const Usuario = localStorage.getItem("Usuario");
    const sesion = sessionStorage.getItem("Usuario");
    document.getElementById('perfil').innerHTML = Usuario;
    document.getElementById('sesion').innerHTML = sesion;
}
document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault()
    document.getElementById("log").addEventListener("click", function() { 

    console.log('Enviando formulario...');
        
    if(user.value=== Usser && password.value == Pass){

        window.location='inicio.html'

    }else{
        alert('Su usuario o contraseña no son válidos');    
    }
   });

});
