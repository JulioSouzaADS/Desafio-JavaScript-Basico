
let numero1 = Number(window.prompt(' digite o primeiro numero Aqui'))

let numero2 = Number(window.prompt(' digite o Segundo numero Aqui'))


function multiplicar(numero1, numero2) {
    return (numero1 * numero2)
}

let resultadomultiplicar = multiplicar(numero1, numero2)
console.log("o resultado Da multiplicacao entre " + numero1 + " e " + numero2 + " e " + resultadomultiplicar)


function subtrair(numero1, numero2) {
    return (numero1 - numero2)
}
let resultadoSubtracao = subtrair(numero1, numero2)
console.log("o resultado da subtracao entre " + numero1 + " e " + numero2 + " e " + resultadoSubtracao)

function dividir(numero1, numero2) {
    return (numero1 / numero2)

}
let resultadoDivisao = dividir(numero1, numero2);
console.log("O resultado da Divisão Entre " + numero1 + " e " + numero2 + " e " + resultadoDivisao)


function somar(numero1, numero2) {
    return (numero1 + numero2)
}
let resultadoSoma = somar(numero1, numero2)
console.log('o resultado da Soma entre ' + numero1 + ' e '  + numero2 + ' e ' + resultadoSoma)



