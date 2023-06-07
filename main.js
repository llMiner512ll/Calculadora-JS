const numeros = [];
function ingresarNumero(number){
   for (var i = 1; i <= number; i++) {
      numeroInd = parseInt(prompt("Ingresa el numero " + i + ": "));
      numeros.push(numeroInd);
    }
}
n = parseInt(prompt("Cuantos numeros vas a ingresar?: "));
ingresarNumero(n);
while (true) {
    decision = parseInt(
        prompt(
            "¿Que deseas hacer con estos numeros? Elije una opción. 1. Suma | 2. Resta | 3. Multiplicación | 4. División| 5. Salir |"
        )
    );
    switch (decision) {
        case 1:
            suma();
            break;
        case 2:
            resta()
            break;
        case 3:
            multiplicacion()
            break;
        case 4:
            division()
            break;
        case 5:
            alert("Gracias por usar la calculadora. Adios.");
            break;
        default:
            alert("Esto no es una opción valida");
    }
    break;
}