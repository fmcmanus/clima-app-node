const axios = require("axios");
const { exitProcess } = require("yargs");

const getLugarLatLng = async(dir) => {


    const params = {
        auth: '510573444037236571774x6384',
        locate: dir,
        json: '1'
    }

    const resp = await axios.get('https://geocode.xyz', { params });
    // .then(response => {
    //     console.log(response.data);
    // }).catch(error => {
    //     console.log(error);
    // });

    if (resp.status !== 200) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const direccion = resp.data.standard.addresst + ", " + resp.data.standard.city + ", " + resp.data.standard.countryname;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
        getLugarLatLng
    }
    // axios({
    //         "method": "GET",
    //         "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    //         "headers": {
    //             "content-type": "application/octet-stream",
    //             "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "5caac5ea58msh6a1e2d2193d14b3p132522jsn6de5ea48244f",
    //             "useQueryString": true
    //         },
    //         "params": {
    //             "location": encodeURI(argv.direccion)
    //         }
    //     })
    //     .then((response) => {
    //         console.log(response.status, response.data.Results)
    //     })
    //     .catch((error) => {
    //         console.log('ERROR!!!!', error.data)
    //     })