// ¿qué datos tengo?
// ¿qué necesito lograr?
// ¿qué condición debo evaluar?
// ¿qué resultado espero?

/* necesitamos un program aque permita retirar dinero  */

let saldo = 500000;
let retiro = 120000;

if (retiro < 10000) {
    console.log('no puedes retirar menos de 10');
} else if (retiro > saldo) {
    console.log('no tienes fondos suficientes');
};

if ( retiro < saldo) {
    console.log('retiro exitoso')
    saldo = saldo - retiro
}


console.log(`tu saldo es ${saldo}`)