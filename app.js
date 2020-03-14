const axios = require('axios');

// API specific settings.
//const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'b4642b3321c9e21a4e1efc5ffe1b296c';

//const LOCATION_ZIP_CODE = '90001';
//const COUNTRY_CODE = 'us';
const cityName = 'CAIRO';
const x = 459.67;
const y = 273.15;

//const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;
const ENTIRE_API_URL = `${API_URL}${cityName},&appid=${API_KEY}`
async function SendREQ()
{
   var result = await axios.get(ENTIRE_API_URL);
   return result;
}
const getResponse = ()=>{
    return SendREQ().then(response => {
           // Getting the current temperature and the city from the response object.
           const kelvinTemperature = getkelvin(response);
           const cityName = getcityname(response);
           const countryName = getcountryname(response);
           // Making K to F and K to C conversions.
           const fahrenheitTemperature = cfahrenheitTemperature(kelvinTemperature);
           const celciusTemperature = changeCelciusTemperature(kelvinTemperature);
   
           // Building the final message.
           const message = constructMessage(cityName,countryName,fahrenheitTemperature,celciusTemperature);
         
           console.log(message);
           return message;
    
       })
   
       .catch(error => console.log('Error', error));    
        
    }
 getResponse();
   



    function cfahrenheitTemperature(kelvinTemperature){
        var fahrenheitTemperature = (kelvinTemperature * 9/5) - 459.67;
        return  fahrenheitTemperature.toFixed(2);
        //return 1;
    }
    function changeCelciusTemperature(kelvinTemperature)
    {
       var result =  kelvinTemperature - 273.15;
        return result.toFixed(2);
        
    }
    function returnONE(K)
    {
        return 1;
    }
   
function getkelvin(response)
{
    return response.data.main.temp;
}
function getcityname(response)
{
    return response.data.name;
}
function getcountryname(response)
{
    return response.data.sys.country;
}
function constructMessage(cityName,countryName,fahrenheitTemperature,celciusTemperature)
{
 const messageX = `Right now, in \
    ${cityName}, ${countryName} the current temperature is \
    ${fahrenheitTemperature} deg F or \
    ${celciusTemperature} deg C.`.replace(/\s+/g, ' ');
    return messageX;
}
exports.getResponse = getResponse;
module.exports={cfahrenheitTemperature,
    changeCelciusTemperature,
returnONE,
constructMessage,
getcityname,
getcountryname,
getResponse,
SendREQ
};
