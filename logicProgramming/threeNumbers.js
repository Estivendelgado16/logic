import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const num1 = Number(await rl.question("Ingresa el primer número: "));
const num2 = Number(await rl.question("Ingresa el segundo número: "));
const num3 = Number(await rl.question("Ingresa el tercer número: "));

// Validar que los datos sean números
if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
    console.log("Debes ingresar únicamente números.");
} else if (num1 > num2 && num1 > num3) {
    console.log(`${num1} es el mayor.`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} es el mayor.`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`${num3} es el mayor.`);
} else {
    console.log("Hay números iguales.");
}

rl.close();