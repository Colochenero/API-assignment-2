const axios = require('axios');
const http = require('http');
const url = require('url');
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
 const API_KEY = 'b4642b3321c9e21a4e1efc5ffe1b296c';
 var ENTIRE_API_URL;
const x = 459.67;
const y = 273.15;


http.createServer(function(req,res){
    const cityName= req.url.replace('/','');
 ENTIRE_API_URL = `${API_URL}${cityName},&appid=${API_KEY}`
getResponse(res);

}).listen(8000);
async function SendREQ()
{
   var result = await axios.get(ENTIRE_API_URL);  
   return result;
}
const getResponse = (res)=>{
   
    return SendREQ().then(response => {
           // Building the final message.
           const message = constructMessage(response);
           console.log(message);
           res.write(message);
           res.end();
           return message;
    
       })
   
       .catch(error => console.log(''));    
        
    }
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
function constructMessage(response)
{
    const kelvinTemperature = getkelvin(response);
        const cityName = getcityname(response);
        const countryName = getcountryname(response);
        // Making K to F and K to C conversions.
        const fahrenheitTemperature = cfahrenheitTemperature(kelvinTemperature);
        const celciusTemperature = changeCelciusTemperature(kelvinTemperature);
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

