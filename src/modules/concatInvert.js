function concatInvert(txt1, txt2){
    var separarCadena = txt2.split("");
    var invertirArreglo = separarCadena.reverse();
    var unirArreglo = invertirArreglo.join("");

    let inv = unirArreglo;

    var separarCadena = txt1.split("");
    var invertirArreglo = separarCadena.reverse();
    var unirArreglo = invertirArreglo.join("");

    inv = inv + unirArreglo;
    return inv;
}

export {concatInvert} 