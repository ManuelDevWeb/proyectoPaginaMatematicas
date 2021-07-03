/*** Código del cuadrado ***/
console.group("Cuadrado");

//Perímetro de un cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

//Area cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}

//Conectando con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area);
}

console.groupEnd("Cuadrado");


/*** Código del triángulo ***/
console.group("Triángulo");

//Perímetro del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return perimetro = lado1 + lado2 + base;
}

//Area triángulo
function areaTriangulo(base, altura) {
    return area = (base * altura) / 2;
}

//Conectando con HTML
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("inputLado1");
    const valueLado1 = Number(lado1.value);
    const lado2 = document.getElementById("inputLado2");
    const valueLado2 = Number(lado2.value);
    const base = document.getElementById("inputBase");
    const valueBase = Number(base.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputBase");
    const valueBase = Number(base.value);
    const altura = document.getElementById("inputAltura");
    const valueAltura = Number(altura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert("El área del triangulo es: " + area);
}

console.groupEnd("Triángulo");


/*** Código del circulo ***/
console.group("Círculo");

//Diametro círculo
function diametroCirculo(radio) {
    return radio * 2;
}

//Perimetro del círculo
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return perimetro = diametro * Math.PI;
}

//Area círculo
function areaCirculo(radio) {
    return area = (radio * radio) * Math.PI;
}

//Conectando con HTML
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El área del círculo es: " + area);
}

console.groupEnd("Círculo");