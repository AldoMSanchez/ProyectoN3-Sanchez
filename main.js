// Funciones básicas
function saludar() {
    let nombre = document.getElementById("nombre").value;
    alert("Holis " + nombre);
}

function despedir() {
    let nombre = document.getElementById("nombre").value;
    alert("Adiós, usted está despedido " + nombre + "!");
}

// Opciones para manejar eventos en botones
// Opción #1 => addEventListener
let boton = document.getElementById("boton");
// boton.addEventListener("click", saludar);
// boton.addEventListener("dblclick", despedir);
// boton.addEventListener("click", () => {
//     alert("Buenas a todos!");
// });
// document.getElementById("boton2").addEventListener("dblclick", saludar);

// Opción #2 => propiedad onclick
// boton.onclick = saludar;
// boton.onclick = () => {
//     alert("Buenas a Todos!");
// };

// Opción #3 => definir el atributo onclick en el HTML

// Eventos del Mouse
// boton.addEventListener("mouseup", () => {
//     console.log("Hiciste click (UP)");
// });
// boton.addEventListener("mousedown", () => {
//     console.log("Hiciste click (DOWN)");
// });
// boton.addEventListener("mouseover", () => {
//     console.log("Detectamos ingreso del mouse");
//     boton.className = "btn btn-danger";
// });
// boton.addEventListener("mouseout", () => {
//     console.log("Detectamos salida del mouse");
//     boton.className = "btn btn-primary";
// });

// Eventos del Teclado
let campoNombre = document.getElementById("nombre");
// campoNombre.addEventListener("keydown", () => {
//     console.log("Detectamos que se ha presionado una tecla");
// });
// campoNombre.onkeyup = () => {
//     console.log("Detectamos que se ha soltado una tecla");
// };

// Evento Oninput
// campoNombre.oninput = () => {
//     let maximo = 140;
//     let longTexto = campoNombre.value.length;
//     let diff = maximo - longTexto;
//     document.getElementById("resultado").innerHTML = "Caracteres disponibles: " + diff;
// };

// Evento Onchange
// let compania = document.getElementById("compania");
// compania.onchange = () => {
//     document.getElementById("resultado").innerHTML = "Seleccionaste: <b>" + compania.value + "</b>";
// };

// Eventos con Formularios
// Opción #1 => Botón del tipo "button"
function validarFormulario(evento) {
    evento.preventDefault();

    let usuario = document.getElementById("user").value;
    let dni = document.getElementById("dni").value;

    if (usuario === "") {
        alert("Ingrese un valor para el Campo Nombre!");
        return false;
    }

    if (dni === "") {
        alert("Ingrese un valor para el Campo DNI!");
        return false;
    }

    // Enviar el formulario
    // formulario.submit(); // Asegúrate de tener el formulario con el id 'formulario'
}

// Asignar la función al botón de tipo submit
let formulario = document.getElementById("formulario");
formulario.onsubmit = validarFormulario;
