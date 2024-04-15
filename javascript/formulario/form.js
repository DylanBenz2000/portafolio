const form = document.querySelector("#contact-form");

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this)
    
    const response = await fetch(this.action, {
        method: this.method, // Obtengo el método HTTP del formulario (POST)
        body: form, // Utilizo los datos del form como cuerpo de la solicitud
        headers: {
            'Accept': 'application/json'
        }
    })
    // Verifico si la respuesta del servidor fue exitosa
    if (response.ok){
        // Limpio los campos
        this.reset();

        alert("Gracias por contactarme, te escribiré pronto");
    }
}

// Validaciones

// Nombre

const nombreInput = document.querySelector("#nombre");

nombreInput.addEventListener('input', function(){
    const nombre = this.value.trim();

    if(!nombre){
        this.setCustomValidity("Por favor ingrese su nombre");
    }else if(nombre.length > 50){
        this.setCustomValidity("El nombre no puede tener más de 50 caracteres.");
    }else if(!/^[\w\sáéíóúÁÉÍÓÚüÜñÑ-]+$/.test(nombre)){
        this.setCustomValidity("El nombre solo puede contener letras, espacios y los caracteres especiales áéíóúÁÉÍÓÚüÜñÑ-");
    }else{
        this.setCustomValidity("")
    }
})

// Correo

const email = document.querySelector("#email");

email.addEventListener('input', function(){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Se espera una dirección de correo valida");
    }else{
        email.setCustomValidity("");
    }
})

// Asunto

const asuntoInput = document.querySelector("#asunto");

asuntoInput.addEventListener('input', function(){
    const asunto = this.value.trim();

    if(!asunto){
        this.setCustomValidity("Por favor ingrese un asunto")
    }else if(asunto.length > 50){
        this.setCustomValidity("El asunto no puede tener más de 50 caracteres");
    }else{
        this.setCustomValidity("");
    }
})

// Mensaje

const mensajeInput = document.querySelector("#mensaje");

mensajeInput.addEventListener('input', function(){
    const mensaje = this.value.trim();

    if(!mensaje){
        this.setCustomValidity("Por favor ingrese un mensaje");
    }else if(mensaje.length > 300){
        this.setCustomValidity("El mensaje no puede tener más de 300 caracteres");
    }else{
        this.setCustomValidity("");
    }
})




form.addEventListener('submit', function(e){
    if(!nombreInput.checkValidity() || !email.checkValidity() || !asuntoInput.checkValidity() || !mensajeInput.checkValidity()){
        e.preventDefault();
    }
})


