

import url from'./modules/url.js';

try {
    let objeto = parsearUrl("emilia");
        function parsearUrl(url){
                const link = new URL(url)
                let obj = {
                    hostname: link.hostname,
                    pathname: link.pathname,
                    parametros: link.searchParams
                }
            return obj;
        }
    console.log(objeto);

} catch (error) {
    console.log("ERROR");
        function parsearUrl(url){
                const link = new URL(url)
                let obj = {
                    hostname: null,
                    pathname: null,
                    parametros: null
                }
            return obj;
        }
        console.log(obj);

}



