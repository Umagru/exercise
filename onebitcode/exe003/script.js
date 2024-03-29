/* 
Conversor de medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
- quilômetro (km)
- hectômetro (hm)
- decâmetro (dam)
- decímetro (dm)
- centímetro (cm)
- milímetro (mm)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado. O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

const meters = prompt("Enter a distance in meters: ");
const option = 
prompt(`Choose one of the options to convert the ${meters}m: \nkm\nhm\ndam\ndm\ncm\nmm`);

switch (option) {
    case "km":
        document.querySelector("p#converter").innerHTML =
        `${meters}m is equivalent to ${meters / 1000}km`;
        break
    case "hm":
        document.querySelector("p#converter").innerHTML =
        `${meters}m is equivalent to ${meters / 100}hm`;
        break
    case "dam":
        document.querySelector("p#converter").innerHTML =
        `${meters}m is equivalent to ${meters / 10}dam`;
        break
    case "dm":
        document.querySelector("p#converter").innerHTML =
        `${meters}m is equivalent to ${meters * 10}dm`;
        break
    case "cm":
        document.querySelector("p#converter").innerHTML =
        `${meters}m is equivalent to ${meters * 100}cm`;
        break
    case "mm":
        document.querySelector("p#converter").innerHTML =
        `${meters}m is equivalent to ${meters * 1000}mm`;
        break
    default:
        document.querySelector("p#converter").innerHTML =
        "Invalid value. Choose one of the previous options.";
        alert("Invalid value. Choose one of the previous options.");
}

/* 
// Teacher resolution

const meters = prompt("Enter a distance in meters: ");
const option = prompt(
    "Choose one of the options to convert the " + meters + "m: " +
    "\n1. kilometer (km)" +
    "\n2. hectometer (hm)" +
    "\n3. decameter (dam)" +
    "\n4. decimeter (dm)" +
    "\n5. centimeter (cm)" +
    "\n6. millimeter (mm)"
);

switch (option) {
    case "1":
        alert("Result: " + meters + " m = " + meters / 1000 + "km");
        break
    case "2":
        alert("Result: " + meters + " m = " + meters / 100 + "hm");
        break
    case "3":
        alert("Result: " + meters + " m = " + meters / 10 + "dam");
        break
    case "4":
        alert("Result: " + meters + " m = " + meters * 10 + "dm");
        break
    case "5":
        alert("Result: " + meters + " m = " + meters * 100 + "cm");
        break
    case "6":
        alert("Result: " + meters + " m = " + meters * 1000 + "mm");
        break
    default:
        alert("Invalid value. Choose one of the previous options.");
} 
*/