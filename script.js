const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)

const sum = numberOne + numberTwo
if (sum % 2 === 0) {
  alert(`A soma dos números ${numberOne} e ${numberTwo} é ${sum}, resultado "PAR"`)
} else {
  alert(`A soma dos números ${numberOne} e ${numberTwo} é ${sum}, resultado "ÍMPAR"`)
}

if (numberOne === numberTwo) {
  alert("Os números digitados são iguais")
} else {
  alert("Os números digitados são diferentes")
}