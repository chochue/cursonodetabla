

const{ crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();


//const base = 5;

crearArchivo (argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log(err));
