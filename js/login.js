//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault()
    document.getElementById("log").addEventListener("click", function() { 

    let Usser = "Hola.com" 
    let Pass = 123456 
    document.getElementById('user');
    document.getElementById('password');
    
    console.log('Enviando formulario...');
        
    if(user.value=== Usser && password.value == Pass){
        window.location='inicio.html'
    }else{
        alert('Su usuario o contraseña no son válidos');    
    }
   });

});