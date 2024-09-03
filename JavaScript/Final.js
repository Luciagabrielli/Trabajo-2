//CICLO
//Programa exclusivo para Argentina
for (let i = 0; i < 2; i++) { //da otra oportunidad para que el usuario corrija lo que ingresó
    let nacionalidad = prompt("¿De qué nacionalidad/pais sos?");

    if (nacionalidad == "argentina" || nacionalidad == "Argentina" || nacionalidad == "ARGENTINA") {
        alert("Bienvenida/o");
        break; // Sale del ciclo si la condición se cumple
    } else {
        alert("Disculpe, programa exclusivo para Argentina!");
        // Sale del ciclo si la nacionalidad no es Argentina
    }
}

//Obtener los datos de los casilleros
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    //Guardar los valores de los campos
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let motivacion = document.getElementById("motivacion").value;

    //Verificar si algún campo está vacío
    if (nombre == "" || email == "" || edad == "" || motivacion == "") {
        alert("Por favor, complete todos los campos.");
    } else {
        if (edad <= 14 || edad >= 21) {
            alert("Ingrese una edad válida.");
        }else{
            alert("Los datos se guardaron correctamente.");
        } //Guardar los datos
    }
});
