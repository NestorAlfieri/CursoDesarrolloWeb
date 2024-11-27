document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const button = document.getElementById("boton-enviar-resultados");

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir la recarga de la página
        
        let score = 0; // Puntaje inicial
        const totalQuestions = document.querySelectorAll("fieldset").length;

        // Iterar sobre cada pregunta para comprobar las respuestas
        const fieldsets = document.querySelectorAll("fieldset");
        fieldsets.forEach((fieldset) => {
            const correctInput = fieldset.querySelector('input[data-correct="true"]');
            if (correctInput && correctInput.checked) {
                score++;
            }
        });

        // Mostrar el resultado
        alert(`Tu puntaje es: ${score}/${totalQuestions}`);
    });
});




function mostrarColor() {
    
var color = 'rojo';
  console.log(color); // 'rojo', porque color es global
}

mostrarColor();
console.log(color); // 'rojo', aún fuera de la función


console.log(persona.nombre); // Muestra "Juan"
console.log(persona["edad"]); // Muestra 25
persona.direccion = "Calle 123";
console.log(persona.direccion);  // Muestra "Calle 123"


let isAdult = true;
let hasPermission = false;

console.log(isAdult && hasPermission); // false
console.log(isAdult || hasPermission); // true
console.log(!isAdult); // false

