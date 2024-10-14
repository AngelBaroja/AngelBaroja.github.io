let cont = 0;
let imagenes = ["images/carrouse1.jpg",
                "images/carrouse2.jpg",
                "images/carrouse3.jpg",
                "images/carrouse4.jpg",
                "images/carrouse5.jpg",
                "images/carrouse6.jpg",
                "images/carrouse7.jpg",
                "images/carrouse8.jpg",
                ];
document.imagenCarrousel.src = imagenes[0];
let btnAdelante = document.querySelector(".adelante");
let btnAtras = document.querySelector(".atras");
function forward(){
    cont++;
    if(cont > imagenes.length -1){
        cont=0;
    }
    document.imagenCarrousel.src = imagenes[cont];
}
btnAdelante.addEventListener("click",forward);
function back(){
    cont--;
    if(cont < 0){
        cont = imagenes.length -1;
    }
    document.imagenCarrousel.src = imagenes[cont];
}
btnAtras.addEventListener("click",back);

/* Contacto */

function validar() {
    let usuario = document.getElementById("nombre");    
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let localidad = document.getElementById("localidad");
    let mensaje = document.getElementById("mensaje");

    let invalidado = false;

    document.getElementById("info").style.display = "none";
    let div = document.getElementById("infoCliente");
    if (div) {
        div.remove();
    }

    let errores = document.querySelectorAll('.error');
    for (let error of errores) {
        error.remove();
    }
    


    function crearMensajeError(campo, mensaje) {
        let obligatorio = document.createElement("div");
        obligatorio.className = "error";       
        obligatorio.appendChild(document.createTextNode(mensaje));
        campo.insertAdjacentElement("afterend", obligatorio);
    }


    let nombreCorrecto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (usuario.value == "") {
        crearMensajeError(usuario, "El Nombre y Apellido son obligatorios");
        invalidado = true;
    } else if (usuario.value.length > 30 || !nombreCorrecto.test(usuario.value)) {
        crearMensajeError(usuario, "Este campo debe contener solo letras y no exceder los 30 caracteres");
        invalidado = true;
    }

    let telefonoCorrecto = /^\d{10}$/;
    if (telefono.value == "") {
        crearMensajeError(telefono, "El Telefono es obligatorio")
        invalidado = true;
    }else if (!telefonoCorrecto.test(telefono.value)) {
        crearMensajeError(telefono, "El número de teléfono es incorrecto");
        invalidado = true;
    }


    let emailCorrecto = /^[\w.+_-]+@(gmail|ulp|hotmail|yahoo|outlook)\.(com|ar)(\.org)?$/;
    if (email.value !== "") {
        if (!emailCorrecto.test(email.value)) {
            crearMensajeError(email, "El Email incorrecto");
            invalidado = true;
        }
    }

    if (localidad.value!=="") {
        if (!nombreCorrecto.test(localidad.value)) {
            crearMensajeError(localidad,"La localidad no puede contener simbolos o numeros")
            invalidado = true;
        }
    }
    
    if (mensaje.value=="") {
        crearMensajeError(mensaje,"Este campo es obligatorio");
        invalidado = true;
    }

    if (!invalidado) {
       
        let resultado = document.createElement("div");
        resultado.className = "resultado";
        resultado.id = "infoCliente";  

            resultado.appendChild(document.createTextNode("Cliente: " + usuario.value+" / Telefono: "+telefono.value));
            resultado.appendChild(document.createElement("br"));
            resultado.appendChild(document.createTextNode("Pronto nos comunicaremos contigo."));
        document.getElementById("info").style.display = "block";
        let abajo = document.getElementById("resultado");
        abajo.appendChild(resultado);


        usuario.value = "";
        telefono.value = "";
        email.value = "";
        localidad.value = "";
        mensaje.value = "";

        usuario.focus();

    }

    return false;
}
