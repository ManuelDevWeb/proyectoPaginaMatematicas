/* Moda */
function calcularModa(lista) {
    const listaCount = {};

    //Mapeando sobre cada elemento del array para pasarlo al objeto e ir sumando 1 cada que aparezca
    lista.map((elemento) => {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1
        }
    })

    //Convirtiendo el objeto a un array, para ordenarlos de menos a mayor por el valor de veces que aparece (indice 1)
    const objectoToArray = Object.entries(listaCount)
        .sort((valorActual, nuevoValor) => valorActual[1] - nuevoValor[1]);

    const moda = objectoToArray[objectoToArray.length - 1];

    console.log(moda[1]);
}

const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

calcularModa(lista);