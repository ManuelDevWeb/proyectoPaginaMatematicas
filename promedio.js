/* Promedio */

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado, elemento) => {
        return valorAcumulado + elemento;
    }, 0)

    const promedioLista = sumaLista / lista.length;

    return console.log(promedioLista);
}

const lista1 = [1, 14, 151, 98];
const lista2 = [1, 14, 151, 1000000];

calcularMediaAritmetica(lista1);
calcularMediaAritmetica(lista2);