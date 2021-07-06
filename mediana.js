/* Mediana */
function calcularMediana(lista) {
    const listaOrdenada = lista.sort((a, b) => a - b);
    const mitadLista = parseInt(listaOrdenada.length / 2);
    const tamañoLista = lista.length;

    let mediana;

    if (esPar(tamañoLista)) {
        //Si es par, necesitamos 2 elementos
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElementos;

        console.log(mediana);
    } else {
        //Si es impar, necesitamos el elemento de la mitad
        mediana = lista[mitadLista];

        console.log(mediana);
    }
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado, elemento) => {
        return valorAcumulado + elemento;
    }, 0)

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

calcularMediana([1, 10, 60, 50, 200]);
calcularMediana([400000000000, 100, 500, 200]);