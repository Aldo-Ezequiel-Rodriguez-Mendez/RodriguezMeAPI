const pasarMayusculas = (cadena) => {
    return cadena.toUpperCase();
}
function quitarEspacios(cadena){
    return cadena.replace(/ /g,"");
}
function obtenerLongitud(cadena){
    return cadena.length;
}

console.log(module);

exports.pasarMayusculas = pasarMayusculas;
exports.quitarEspacios = quitarEspacios;
exports.obtenerLongitud = obtenerLongitud;

console.log(module);