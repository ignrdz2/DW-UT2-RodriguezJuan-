function removeFromArray(arreglo, item) {
    let resultado = arreglo.filter(elemento => elemento !== item);
    console.log(resultado);
}

removeFromArray([1, 2, 3, 4, 5], 3);
