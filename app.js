
const info = require('./info/info');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

info.getInfo(argv.direccion)
    .then( console.log )
    .catch( console.error)