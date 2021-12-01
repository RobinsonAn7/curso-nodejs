const { crearFile } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs')
const colors = require('colors')
crearFile(argv.b, argv.l)
    .then(nombreFile => console.log(nombreFile.america, 'creado'))
    .catch(err => console.log(err));


// const { crearFile, buscarClient } = require('./helpers/multiplicar');
// const base = 


// buscarClient(16)
//     .then(nameCliente => console.log(nameCliente, 'cliente existe'.red))
//     .catch(err => console.log(err));





