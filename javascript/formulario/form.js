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