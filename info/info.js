const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const getInfo = async (direccion) => {

    try {
        const ubicacion = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(ubicacion.latitud, ubicacion.longitud);
        
        return `El clima de ${ubicacion.direccion} es ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar la temperatura de ${direccion}`
    }

};

module.exports = {
    getInfo
}