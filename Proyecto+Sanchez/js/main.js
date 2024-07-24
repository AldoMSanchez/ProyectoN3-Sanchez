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
campoNombre.addEventListener("keydown", () => {
    console.log("Detectamos que se ha presionado una tecla");
});
campoNombre.onkeyup = () => {
    console.log("Detectamos que se ha soltado una tecla");
};

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
/*
validarFormulario = () => {
    let usuario = document.getElementById("user").value;
    let contrasenia = document.getElementById("password").value;

    if (usuario == "") {
        alert("Ingrese un valor para el Campo Nombre!");
        return false;
    }

    if (contrasenia == "") {
        alert("Ingrese un valor para el Campo Contraseña!");
        return false;
    } else if (contrasenia.length < 6) {
        alert("Ingrese una contraseña mayor o igual a 6 caracteres!");
        return false;
    }

    document.getElementById("form1").submit();
}
*/

// Opción #2 => Botón del tipo submit
/*
validarFormulario = (e) => {
    e.preventDefault();

    let usuario = document.getElementById("user").value;
    let contrasenia = document.getElementById("password").value;

    if (usuario == "") {
        alert("Ingrese un valor para el Campo Nombre!");
        return false;
    }

    if (contrasenia == "") {
        alert("Ingrese un valor para el Campo Contraseña!");
        return false;
    } else if (contrasenia.length < 6) {
        alert("Ingrese una contraseña mayor o igual a 6 caracteres!");
        return false;
    }

    document.getElementById("form1").submit();
}

let btnForm = document.getElementById("btnForm");
let form1 = document.getElementById("form1");
btnForm.addEventListener("click", validarFormulario);
// form1.addEventListener("submit", validarFormulario);
*/

// Otra forma de validar campos de un form
let formulario = document.getElementById("formulario");

function validarFormulario(evento) {
    evento.preventDefault();

    if (formulario.children[0].value == "") {
        alert("Ingrese un valor para el Campo Nombre!");
        return false;
    }

    if (formulario.children[1].value == "") {
        alert("Ingrese un valor para el Campo DNI!");
        return false;
    }

    formulario.submit(); // Enviar el formulario
}

formulario.onsubmit = validarFormulario;

// LocalStorage
// Crear una localStorage
/*
localStorage.setItem("academia", "Coderhouse");
localStorage.setItem("curso", "Curso De Aprendizaje");
localStorage.setItem("alumnos", 100);
localStorage.setItem("estudian", false);
*/

// Leer una localStorage
/*
let academy = localStorage.getItem("academia");
let course = localStorage.getItem("curso");
let mensaje = "Estoy realizando el " + course + " en " + academy;
alert(mensaje);
*/

// Crear una sessionStorage
/*
sessionStorage.setItem("academia", "CODERHOUSE");
sessionStorage.setItem("curso", "Curso de JavaScript");
sessionStorage.setItem("alumnos", 100);
sessionStorage.setItem("estudian", false);
*/

// Leer una sessionStorage
/*
let academy = sessionStorage.getItem("academia");
let course = sessionStorage.getItem("curso");
let mensaje = "Estoy realizando el " + course + " en " + academy;
alert(mensaje);
*/

// Actualización de una localStorage
// localStorage.setItem("curso", "Curso de JavaScript");
// localStorage.setItem("curso2", "Curso de JavaScript + TypeScript");

// Obtener cuántas localStorage hay en el navegador
// alert("Total de localStorages: " + localStorage.length);

// Recorriendo las localStorage
/*
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + " - Valor: " + localStorage.getItem(clave));
}
*/

// Problemas posibles con localStorage/sessionStorage (siempre guardan datos en formato String)
/*
let alumnos = localStorage.getItem("cantAlumnos");
console.log(100);
console.log(alumnos);
let nuevoAlumnos = 10;
let totalAlumnos = parseInt(alumnos) + nuevoAlumnos;
console.log(totalAlumnos);
console.log(localStorage.getItem("estudian"));

let bebida = { id: 1, nombre: "Coca Cola", precio: 1800 };
localStorage.setItem("bebida", JSON.stringify(bebida)); // Guardar como JSON

let bebidas = [
    { id: 1, nombre: "Coca Cola", precio: 1800 },
    { id: 2, nombre: "Pepsi", precio: 1700 }
];
localStorage.setItem("bebidas", JSON.stringify(bebidas)); // Guardar como JSON
*/

// Eliminando localStorages
/*
localStorage.removeItem("bebida");
localStorage.removeItem("bebidas");
localStorage.clear(); // Elimina todas las localStorage
*/

// Otra forma de crear/modificar localStorages
/*
localStorage.setItem("curso", "Desarrollo Web");
localStorage.curso = "JavaScript";
localStorage.proximoCurso = "React JS";
*/

// Otra forma de leer localStorages
// alert(localStorage.curso);

// Conversión y Parseo de JSON
// Definir un Objeto, convertir a JSON y parsear para obtener su valor original
/*
let bebida = { id: 1, nombre: "Coca Cola", precio: 1800 };
localStorage.setItem("bebida", JSON.stringify(bebida)); // Convertir objeto a JSON
let valor = JSON.parse(localStorage.getItem("bebida")); // Parsear JSON
console.log(valor);
console.log(valor.nombre + " $" + valor.precio);
*/

// Definir un Array, convertir a JSON y parsear para obtener su valor original
/*
let bebidas = [
    { id: 1, nombre: "Coca Cola", precio: 1800 },
    { id: 2, nombre: "Pepsi", precio: 1700 }
];
localStorage.setItem("bebidas", JSON.stringify(bebidas));
console.log(JSON.parse(localStorage.bebidas));
*/

// Ejemplo práctico con array y objetos en localStorage
/*
let bebidas = [
    { id: 1, nombre: "Coca Cola", precio: 1800 },
    { id: 2, nombre: "Pepsi", precio: 1700 },
    { id: 3, nombre: "Seven Up", precio: 1600 }
];

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
};

for (const bebida of bebidas) {
    guardarLocal("bebida" + bebida.id, bebida);
}

guardarLocal("listaBebidas", bebidas);

class Producto {
    constructor(objeto) {
        this.nombre = objeto.nombre.toUpperCase();
        this.precio = objeto.precio;
    }

    sumarIVA() {
        this.precio = this.precio * 1.21;
    }
}

const recuperarLocal = () => {
    return JSON.parse(localStorage.listaBebidas);
};

const productosOriginales = recuperarLocal();
const productosConIVA = [];

for (const productoOriginal of productosOriginales) {
    let bebida = new Producto(productoOriginal);
    productosConIVA.push(bebida);
}

for (const producto of productosConIVA) {
    producto.sumarIVA();
    console.log(producto);
}
*/
