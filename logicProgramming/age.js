import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const edad = Number(
  await rl.question("Ingrese por favor en numeros su edad: ")
);

if (edad >= 18) {
    console.log("You are welcome, you can come in.");
} else {
    console.log("Sorry, come back when you are an adult.");
}

rl.close();