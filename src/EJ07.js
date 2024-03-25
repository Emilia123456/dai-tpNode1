import { getCountry, getCountryByAbbreviation   } from 'currency-map-country';

//problema con el node module 
let monedaDelPais, codigoPais;
try {
    codigoPais='AR';
    monedaDelPais=obtenerMoneda(codigoPais);
    console.log(`La moneda del país ${codigoPais} es:${monedaDelPais}`);
    codigoPais='UZA';
    monedaDelPais=obtenerMoneda(codigoPais); 
} catch (error) {
    console.log(`La moneda del país ${codigoPais} es:${null}`);
} 


function  obtenerMoneda(codigoPais){
    let xxx  = getCountryByAbbreviation  (codigoPais);
    console.log(getCountry(xxx));
    console.log('xxx', xxx);
}