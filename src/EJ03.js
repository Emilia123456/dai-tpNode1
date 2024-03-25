import Alumno from'./models/alumno.js';
let persona1=new Alumno("EstebanDido" , true); 
let persona2=new Alumno("MatiasQueroso"); 
let persona3=new Alumno(); 
console.log(persona1); 
console.log(persona2); 
console.log(persona3.getInformacion()); 