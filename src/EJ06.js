import url from'./modules/url.js';
try {
    let objeto = parsearUrl("emilia");
    function parsearUrl(link){
            const url = new URL(link)
            let obj = {
                hostname: url.hostname,
                pathname: url.pathname,
                parametros: url.searchParams
            }
        return obj;
    }
    console.log(objeto);
    
} catch{
        let obj = {
            hostname: null,
            pathname: null,
            parametros: null
        }
        console.log(obj);
}
