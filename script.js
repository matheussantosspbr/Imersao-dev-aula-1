var nome = window.prompt("Qual é seu nome ?")
var n1 = Number(window.prompt("Digite a sua nota do 1º Bimestre !"))
var n2 = Number(window.prompt("Digite a sua nota do 2º Bimestre !"))
var n3 = Number(window.prompt("Digite a suacnota do 3º Bimestre"))
var n4 = Number(window.prompt("Digite a sua nota do 4ºBimestre"))

var notaFinal = (n1+n2+n3+n4) / 4

window.alert(`Olá ${nome}, Tudo Bem ?
A média da sua nota é ${notaFinal}
`)

if (notaFinal < 5){
  window.alert("Você foi Reprovado :(")
}
else {
  window.alert("Você Foi Aprovado :)")
}