// Campo Nombre no debe estar en blanco o vacío.
// Debe contener máximo 50 caracteres.
// Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida


// Campo e-mail no debe estar en blanco o vacío.
// Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.)
// Ejemplo: texto@texto.com
// Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida


// Campo Asunto no debe estar en blanco o vacío.
// Debe contener máximo 50 caracteres.
// Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida


// Campo Mensaje no debe estar en blanco o vacío.
// Debe contener máximo 300 caracteres.
// Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida


// El botón enviar solo debe ser activado cuando todos los campos del formulário estén llenos
// El botón debe enviar el mensaje.

const formulario = document.querySelector("form")
//console.log(formulario);

const nombre = document.querySelector("#nombre").value;
//console.log(nombre.value);

const asunto = document.querySelector("#asunto");
//console.log(asunto.value);

const email = document.querySelector("#email");
//console.log(email.value);

const mensaje = document.querySelector("#mensaje")
//console.log(mensaje);



const validador = () => {
    if (nombre.length <= 50) {
        console.log("su nombre debe tener maximo 50 caracteres");
    } else {
        console.log("usted cumple con el requisito");
    }
    return
}

formulario.addEventListener("blur", validador);
//console.log(validador());