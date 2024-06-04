document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector ('#formu');
    
    const errorMessage = document.querySelector ('#error-message');
    
    form.addEventListener ('submit',(evento)=> {
    evento.preventDefault();
    const nombre = form.nombre.value;
    const  apellido = form.apellido.value;
    const password = form.password.value;
    const  correo = form.correo.value;
    
     if (nombre === "") {
        errorMessage.textContent = "Los campos no pueden estar vacios";
        return;
     }

     if (correo === "") {
        errorMessage.textContent = "Debe ingresar un correo electrónico";
        return;
     }

     if (password.length < 6){
    errorMessage.textContent = "El password debe tener más de 6 digitos";
    return;
    
     }
    
    const users = JSON.parse (localStorage.getItem('user')) || [];
    const existingUser = users.find((user)=> user.nombre === nombre);
    
    if(existingUser){
        errorMessage.textContent = "El nombre de usuario ya existe";
        return;
    }
    
    
    const newUser = {
        nombre, 
        password,
    };
    
    users.push (newUser);
    
    localStorage.setItem ("users", JSON.stringify (users));
    
    window.location.href = "menu.html";
    
    })
    })
    
    
    
    