import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
   console.clear();

   copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);


function copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA){
    const readStream = fs.createReadStream(ARCHIVO_ENTRADA)
    const writeStream = fs.createWriteStream(ARCHIVO_SALIDA)
    readStream.pipe(writeStream)
}