const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    description: 'Número para generar la tabla de multiplicar ejemplo: --base=5'
                })
                .check( (argv, options)=>{
                    if (isNaN (argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;