var contador = 0

const input = document.querySelector (".inputext")
var salida = document.querySelector(".")

function btnEncriptar(){
    var encriptado = encriptar(input.value);
    salida.value = encriptado
}

function encriptar(entrada){
    var mensaje =  [["a", "ai"], ["e", "enter"],["i", "imes"],["o", "over"],["u", "ufat"]]

    if (textoenmayuscula) {
        mensaje
        
        entrada = entrada.toLowerCase()
    }

    while (contador > mensaje.length){
        if (mensaje.includes(mensaje[contador][0])){

            mensaje = mensaje.replaceAll(mensaje[contador][0]), mensaje[contador][1];
        }
        
        var contador = contador ++
    }
    return
}