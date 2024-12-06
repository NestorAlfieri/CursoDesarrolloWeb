let usuarioNombre = ''; // Declara una variable global para almacenar el nombre del usuario

document.addEventListener("DOMContentLoaded", () => {
   
    const nombre = prompt("Ingresa tu nombre:");
    // Verifica si el usuario ingresó un nombre
    if (nombre) {
        usuarioNombre = nombre; // Guarda el nombre en la variable global
        alert("Hola, " + usuarioNombre + "! " + "Elije la respuesta correcta para cada pregunta. Pon a prueba tus conocimientos!");
    } else {
        alert("No ingresaste un nombre. Pero puedes continuar!");
    }
});


// Selecciona el botón de "VER RESULTADOS" y añade un evento al hacer clic
const button = document.getElementById("boton-enviar-resultados");

button.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe (si es un botón dentro de un formulario)
  calcularResultado();    // Llama a la función para calcular y mostrar el resultado
});

function calcularResultado() {
    let score = 0; // Inicializa el puntaje del usuario
    const totalQuestions = document.querySelectorAll("fieldset").length; // Obtiene el número total de preguntas
  
    const fieldsets = document.querySelectorAll("fieldset"); // Selecciona todos los fieldsets (contenedores de preguntas)
    console.log(fieldsets);
  
    // Recorre cada fieldset usando for...of
    for (let fieldset of fieldsets) {
      const correctInput = fieldset.querySelector('input[data-correct="true"]'); // Encuentra la opción correcta usando el atributo data-correct
      if (correctInput && correctInput.checked) { // Si existe una opción correcta y está seleccionada
        score++; // Incrementa el puntaje
      }
    }
  
    // Muestra el contenedor donde se mostrará el resultado
    let result = document.getElementById("resultado");
    result.style.display = "block"; // Asegura que el contenedor sea visible
  
    // Escribe el resultado final en el texto de resultado
    let resultText = document.getElementById("resultado-texto");
    resultText.innerText = `Gracias ${usuarioNombre}, tu puntaje es: ${score}/${totalQuestions}`; // Muestra el puntaje con el nombre del usuario
  
    return console.log("score = " + score); // Imprime el puntaje en la consola para verificar
  }
  
