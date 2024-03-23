/* 
First question

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são: o primeiro nome, o sobrenome, o campo de estudo, o ano de nascimento. Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento). */

const firstName = prompt('What is your first name? ')
const lastName = prompt('What is your last name? ')
const fieldStudy = prompt('What is your field of study? ')
const birthYear = prompt('What is your birth year? ')

document.getElementById('info_recruit').innerHTML += `${firstName} ${lastName}, ${fieldStudy}, ${2024 - birthYear} years`

/* 
Second question

Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão). Após calcular os resultados o programa deve exibi-los na tela.
*/

const num1 = Number(prompt('Enter a number: '))
const num2 = Number(prompt('Enter another number: '))

document.getElementById('calc').innerHTML += 
`Sum = ${num1 + num2} <br>Subtraction = ${num1 - num2} <br>Multiplication = ${num1 * num2} <br>Division = ${num1 / num2}`