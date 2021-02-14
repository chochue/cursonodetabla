const fs = require('fs');

const crearArchivo = async ( base = 5)=> {
    try {
    let salida = '';

    console.log('=================');
    console.log(`tabla del ${ base } `);
    console.log('=================');
    for (let i = 1; i <=10; i++ ) {
        salida += `${ base } x ${ i } = ${ base * i}\n`;
    }
     console.log(salida);
    
    fs.writeFileSync( `tabla-${base}.txt`, salida)
    

}catch (err){
   throw err; 
}
}
module.exports = {
    crearArchivo 
}