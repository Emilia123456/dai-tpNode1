import url from'./modules/url.js';

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto);

function parsearUrl(url){
    const link = new URL(url)
    let obj = {
        hostname: link.hostname,
        pathname: link.pathname,
        parametros: link.searchParams
    }
    return obj;
}
