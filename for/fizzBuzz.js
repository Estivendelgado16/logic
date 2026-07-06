/*
Reto 3 (Este ya es de programador)

Imprime todos los números del 1 al 30.

Pero:

Si el número es múltiplo de 3, imprime "Fizz".
Si es múltiplo de 5, imprime "Buzz".
Si es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no, imprime el número.
*/

for (let i = 1; i <= 30; i++) {
    
    if ( (i % 3 === 0) && (i % 5 === 0) ){
        console.log(`${i} FizzBuzz`)
    } else if ( i % 3 === 0) {
        console.log(`${i} Fizz`)
    } else if ( i % 5 === 0) {
        console.log(`${i} Buzz`)
    } else {
        console.log(i)
    }

}