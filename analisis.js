//Lista con solo salarios
const salariosCol = colombia.map((persona) => {
    return persona.salary
});

//Ordenando elementos
const salariosColSorted = salariosCol.sort((a, b) => a - b);

//Función para saber si es par el arreglo
function esPar(tamaño) {
    return (tamaño % 2 == 0)
}

//Función para calcular promedio
function calcularPromedio(lista) {
    const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => {
        return valorAcumulado += nuevoValor
    }, 0)

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

//Función para calcular la mediana general
function medianaSalariosCol(lista) {
    const tamañoLista = lista.length;
    const mitad = parseInt(tamañoLista / 2);

    if (esPar(tamañoLista)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

/* Mediana del top 10 */
const spliceStart = (salariosColSorted.length * (100 - 10)) / 100; // (18)
const spliceCount = (salariosColSorted.length - spliceStart); // (20-18)=2

//Extrayendo de personas, la 19 y 20.
const salariosTopCol = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTopCol = medianaSalariosCol(salariosTopCol);

console.log({
    medianaGeneralCol,
    medianaTopCol
});