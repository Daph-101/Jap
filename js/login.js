//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let Usser = "Hola.com" 
let Pass = 123456 
document.getElementById('emaill');
document.getElementById('password');


document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("Btn-Env").addEventListener('click', function(e) { 

    console.log('Enviando formulario...');
        
    if(emaill.value=== Usser && password.value == Pass){
        
        localStorage.setItem('Correo', JSON.stringify({email: emaill.value }));
        window.location='inicio.html'

    }else{
        alert('Su usuario o contraseña no son válidos');    
    }
   });

});





// function GuardarDatos(user, password){
//     localStorage.setItem("Usuario", JSON.stringify({email: email.value})); //setItem guarda datos; getItem es para obtener datos
//     localStorage.setItem("Pss", password.value);
// }
// function obtenerDatos (){
//     // const Usuario = localStorage.getItem("Usuario");
//     // const sesion = sessionStorage.getItem("Usuario");
//     document.getElementById('perfil').innerHTML = Usuario;
//     document.getElementById('sesion').innerHTML = sesion;
// }