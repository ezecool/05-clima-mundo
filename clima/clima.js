
const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d2a46f7a01218958ee1794ab5f5e4fe2&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}