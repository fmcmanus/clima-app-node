const axios = require("axios");
const { exitProcess } = require("yargs");

const getClima = async(lat, lng) => {



    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1994d056413a68daaa8ea0b9db36cf14&units=metric`);


    if (resp.status !== 200) {
        throw new Error(`
                No hay resultados para $ { dir }
                `);
    }



    return resp.data.main.temp;
}

module.exports = {
    getClima
}