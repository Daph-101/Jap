//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let Usser = "Hola.com" 
let Pass = 123456 
document.getElementById('email');
document.getElementById('password');


// document.addEventListener("DOMContentLoaded", function(e){
//     document.getElementById("Btn-Env").addEventListener('click', function(e) { 

//     console.log('Enviando formulario...');
        
//     if(user.value=== Usser && password.value == Pass){
        
//         localStorage.setItem('Logged', JSON.stringify({ email: Usser.value }));
//         window.location='inicio.html'

//     }else{
//         alert('Su usuario o contraseña no son válidos');    
//     }
//    });

// });




document.addEventListener("DOMContentLoaded", function (e){
    document.getElementById("Btn-Env").addEventListener("click", function (e){
        console.log('Enviando formulario...');

        let Email = document.getElementById("email");
        if(Usser.value != " " && Pass.value != " "){
            localStorage.setItem('Logged', JSON.stringify({ email: Email.value }));

            window.location = 'index.html';
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