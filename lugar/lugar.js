
const auth_code = "223090316289106785838x6608";

const axios = require('axios');

const getLugarLatLng = async (p_direccion) => {

    const encodedUrl = encodeURI(p_direccion);
    
    const params = {
        "auth": auth_code,
        "locate": encodedUrl,
        "json": 1
    };
    
    const resp = await axios.get('https://geocode.xyz', { params });

    // console.log(resp);

    if (resp.data.longt === '') {
        // console.error('ERROR!!!', err);
        throw new Error(`No hay resultados para ${ p_direccion }`);
    }

    const direccion = resp.data.standard.city;
    const latitud = resp.data.latt;
    const longitud = resp.data.longt;

    // const { city: direccion, latt: latitud, longt: longitud} = resp.data;

    return {
        direccion,
        latitud,
        longitud
    }

};

module.exports = {
    getLugarLatLng
}