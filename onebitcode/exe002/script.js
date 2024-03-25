/* 
Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

const vehicle1 = prompt('Enter the first vehicle: ');
const speedVehicle1 = Number(prompt(`Enter "${vehicle1}" speed: `));
const vehicle2 = prompt('Enter the second vehicle: ');
const speedVehicle2 = Number(prompt(`Enter "${vehicle2}" speed: `));

if (speedVehicle1 > speedVehicle2) {
    document.getElementById('comparison').innerHTML = 
    `Comparison: <em>${vehicle1}</em> is faster than <em>${vehicle2}</em>`;
} else if (speedVehicle1 < speedVehicle2) {
    document.getElementById('comparison').innerHTML = 
    `Comparison: <em>${vehicle2}</em> is faster than <em>${vehicle1}</em>`;
} else {
    document.getElementById('comparison').innerHTML = 
    `Comparison: The speeds are the same`;
}

/* 
// Teacher resolution

const vehicle1 = prompt('Enter the first vehicle: ');
const speedVehicle1 = parseFloat(prompt(`Enter "${vehicle1}" speed: `));
const vehicle2 = prompt('Enter the second vehicle: ');
const speedVehicle2 = parseFloat(prompt(`Enter "${vehicle2}" speed: `));

if (speedVehicle1 > speedVehicle2) {
   alert(vehicle1 + " é mais rápido do que " + vehicle2);
} else if (speedVehicle2 > speedVehicle1) {
    alert(vehicle2 + " é mais rápido do que " + vehicle1);
} else {
    alert(vehicle1 + " e " + vehicle2 + " possuem velocidades iguais.");
}
*/

/* 
Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras: 
    1. Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa. 2. Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
    3. Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/

const char1 = prompt('Enter the name of the first character: ');
const damage1 = Number(prompt(`Enter "${char1}" damage: `));

const char2 = prompt('Enter the name of the second character: ');
let life = prompt(`How much life does "${char2}" have? `);
const defense = Number(prompt(`How much defense does "${char2}" have? `));
const shield = confirm(`Does "${char2}" have a shield? `);

document.getElementById('attacker').innerHTML = 
`Attacker: <em>${char1}</em> <br>Damage = ${damage1}`;

document.getElementById('defender').innerHTML =
`Defender: <em>${char2}</em> <br>Life = ${life} <br>Defense = ${defense} <br>Shield = ${shield == true ? 'Yes': 'No'}`;

let damage = 0;
if (damage1 > defense && shield == true) {
    damage = (damage1 - defense) / 2;
} else if (damage1 > defense && shield == false) {
    damage = damage1 - defense;
}
life -= damage;

document.getElementById('damage').innerHTML = 
`<em>${char1}</em>: <br>Damage = ${damage}`

document.getElementsByClassName('defender')[0].innerHTML =
`<em>${char2}</em>: <br>Life = ${life}`;

/* 
// Teacher resolution

const char1 = prompt('Enter the name of the first character: ');
const damage1 = parseFloat(prompt(`Enter "${char1}" damage: `));

const char2 = prompt('Enter the name of the second character: ');
let life = parseFloat(prompt(`How much life does "${char2}" have? `));
const defense = parseFloat(prompt(`How much defense does "${char2}" have? `));
const shield = prompt(`Does "${char2}" have a shield? (Yes/No)`);

let damage = 0;
if (damage1 > defense && shield === "No") {
    damage = damage1 - defense;
} else if (damage1 > defense && shield === "Yes") {
    damage = (damage1 - defense) / 2;
}
life -= damage;

alert(char1 + " causou " + damage + " pontos de dano em " + char2);
alert(
    char1 + "\nPoder de ataque: " + damage1 + "\n\n" +
    char2 + "\nPontos de vida: " + life +
    "\nPoder de defesa: " + defense + "\nPossui escudo: " + shield
) 
*/