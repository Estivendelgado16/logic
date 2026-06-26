import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const num1 = (Number(
    await rl.question('Ingresa le primer numero: ')
));

const num2 = (Number(
    await rl.question('Ingresa le segundo numero: ')
));

if (num1 > num2) {
    console.log(`${num1} es mayor`);
}  else {
    if (num1 < num2) {
        console.log(`${num2} es mayor`)
    } else {
        console.log('son numeros iguales')
    }
}

rl.close();