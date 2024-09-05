// Introduccion
// Ejercicio 1
let a = 10;
let b = 20;
let c = 10 + 20;
console.log(`La suma de ${a} + ${b} = ${c}`);

// Ejercicio 2
let nombre = prompt("Ingrese su nombre: ");
console.log(`HOLA, ${nombre.toUpperCase()}!`);

// Operadores Logicos y condicionales

// Ejercicio 1
let num1 = 10;
let num2 = 5;
let num3 = 110;
let mayor;
if (num1 > num2 && num1 > num3) {
  mayor = num1;
} else if (num2 > num1 && num2 > num3) {
  mayor = num2;
} else if (num3 > num1 && num3 > num2) {
  mayor = num3;
} else {
  mayor = "No hay un número mayor";
}

console.log(`El mayor de los numero es: ${mayor}`);

// Ejercicio 2
let numero = Number(prompt("Ingrese un numero: "));

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
} else {
  console.log("No es un numero");
}

// Operadores de asignacion y bucles

// Ejercicio 1
let i = 10;

while (i != 0) {
  console.log(i);
  i--;
}

// Ejercicio 2
let num;
do {
  num = Number(prompt("Ingrese un numero mayor a 100:"));
} while (num < 100);

console.log(`Ingresaste un numero mayor a 100: ${num}`);

// Funciones
// Ejercicio 1
const esPar = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
let numeroFuncion = Number(prompt("Ingrese un numero"));
console.log(`El numero ${numeroFuncion} es Par: ${esPar(numeroFuncion)}`);

// Ejercicio 2
function convertirCelciusAFahrenheit(celcius) {
  return celcius * 1.8 + 32;
}

let celcius = Number(prompt("Ingrese la temperatura en Celcius"));
console.log(
  `${celcius}°C son equivalentes a ${convertirCelciusAFahrenheit(celcius)}°F`
);

// Objetos
// Ejercicio 1
const persona = {
  nombre: "Jeronimo",
  edad: 21,
  ciudad: "Mendoza",
  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  },
};

console.log(
  `Persona datos: 
  Nombre: ${persona.nombre}
  Edad: ${persona.edad}
  Ciudad: ${persona.ciudad}`
);

persona.cambiarCiudad("Guaymallen");
console.log("La persona cambio su ciudad");
console.log(
  `Persona datos actualizados: 
  Nombre: ${persona.nombre}
  Edad: ${persona.edad}
  Ciudad: ${persona.ciudad}`
);

// Ejercicio 2
const libro = {
  titulo: "El Señor de los Anillos",
  autor: "JRR Tolkien",
  anioPublicacion: 1954,
};

const libroAntiguo = (anio) => {
  const anioActual = new Date();
  if (Math.abs(anioActual - anio) > 10) {
    return true;
  } else {
    return false;
  }
};

console.log(
  `Libro datos:
  Titulo: ${libro.titulo}
  Autor: ${libro.autor}
  Año de publicación: ${libro.anioPublicacion}`
);

console.log(
  `El libro ${libro.titulo} es antiguo(tiene mas de diez años): ${libroAntiguo(
    libro.anioPublicacion
  )}`
);

// Arrays
// Ejercicio 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];
for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados[i] = numeros[i] * 2;
}

console.log(numerosMultiplicados);

// Ejercicio 2
const veinteNumeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let pares = [];
let cont = 0;

for (let i = 0; i < 20; i++) {
  if (veinteNumeros[i] % 2 === 0) {
    pares.push(veinteNumeros[i]);
    cont++;
  }
  if (cont === 10) break;
}

console.log(`Los primeros 10 numeros pares: ${pares}`);

// INTRO DOM
// Ejercicio 1
document.getElementById("cambioColor").addEventListener("click", () => {
  const parrafos = document.getElementsByClassName("parrafo");
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
  }
});

// Ejercicio 2
document.getElementById("buttonAlert").addEventListener("click", () => {
  const mensaje = document.getElementById("texto").value;
  alert("Mensaje ingresado: " + mensaje);
});

// DOM
// Ejercicio 1
const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", () => {
    console.log(this.textContent);
  });
}

// Ejercicio 2
const habilitar = document.getElementById("habilitar");
const deshabilitar = document.getElementById("deshabilitar");
const inputTexto = document.getElementById("inputTexto");

habilitar.addEventListener("click", () => {
  inputTexto.disabled = false;
});

deshabilitar.addEventListener("click", () => {
  inputTexto.disabled = true;
});

//  LocalStorage
// Ejercicio 1
document.getElementById("enviar").addEventListener("click", () => {
  let emailGuardado = localStorage.getItem("emailGuardado") === "true";
  const emailContainer = document.getElementById("emailGuardado");

  // Borramos el contenido previo (si hubiera) para no duplicar párrafos
  emailContainer.innerHTML = "";

  if (!emailGuardado) {
    const email = document.getElementById("email").value;

    // Almacenando el correo electrónico en localStorage solo si no está guardado
    localStorage.setItem("email", email);
    emailGuardado = true;
    localStorage.setItem("emailGuardado", emailGuardado);
  }

  // Creando y mostrando el párrafo con el correo guardado
  const parrafoCorreo = document.createElement("p");
  parrafoCorreo.innerText = `Correo electrónico: ${localStorage.getItem(
    "email"
  )}`;
  emailContainer.appendChild(parrafoCorreo);
});

document.getElementById("eliminar").addEventListener("click", () => {
  // Eliminamos tanto el email como la variable que indica si el email está guardado
  localStorage.removeItem("email");
  localStorage.removeItem("emailGuardado");

  // Limpiamos el contenedor donde se mostraba el correo
  const emailContainer = document.getElementById("emailGuardado");
  emailContainer.innerHTML = "";
});
