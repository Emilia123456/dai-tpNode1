import {PI, sumar, restar, multiplicar, dividir} from './modules/matematica.js';
let total1;
let total2;
console.clear();
console.log(`La constante PI vale '${PI}'`);
let numero1 = 10, numero2 = 20
let numero3 = 20, numero4 = 10
total1 = sumar(numero1, numero2);
total2 = restar(numero3, numero4);
console.log(`sumar(${numero1}, ${numero2}) = ${total1}`);   
console.log(`restar(${numero3}, ${numero4}) = ${total2}`);   