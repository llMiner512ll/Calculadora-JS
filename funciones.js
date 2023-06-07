function suma(){
    let total=0;
    for(let i of numeros) total+=i;
    alert("El resultado de la suma es: " + total);
}
function resta() {
    let total = numeros[0];
    let firstIteration = true;
    for (let i of numeros) {
        if (firstIteration) {
            firstIteration = false;
        }else {
        total -= i;
        }
    }
    alert("El resultado de la resta es: " + total);
}
function multiplicacion(){
    let total = numeros[0];
    let firstIteration = true;
    for (let i of numeros) {
        if (firstIteration) {
            firstIteration = false;
        }else {
            total *= i;
        }
    }
    alert("El resultado de la multiplicación es: " + total);
}
function division(){
    let total = numeros[0];
    let firstIteration = true;
    for (let i of numeros) {
        if (firstIteration) {
            firstIteration = false;
        }else {
            total /= i;
        }
    }
    alert("El resultado de la división es: " + total);
}