const assert = require('assert');
const app = require('./app.js');

const response= {"coord":{"lon":31.25,"lat":30.06},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}],"base":"stations","main":{"temp":290,"feels_like":290.09,"temp_min":289.82,"temp_max":290.15,"pressure":1018,"humidity":88},"visibility":3000,"wind":{"speed":2.1,"deg":80},"clouds":{"all":40},"dt":1584225345,"sys":{"type":1,"id":2514,"country":"EG","sunrise":1584245080,"sunset":1584288188},"timezone":7200,"id":360630,"name":"Cairo","cod":200}
it('correctly yhe change from KELVIn to fahrenheitTemperature for CAIRO' , ()=>
{
    
    assert.equal(app.cfahrenheitTemperature(293.15),68.00);
});
it('change KELVIN temp to CELCIUS for cairo',()=>
{
    assert.equal(app.changeCelciusTemperature(293.15),20.00);
});
it('run the programme for CAIRO',()=>
{
    app.getResponse().then(result=>{
        assert.equal(result,'Right now, in Cairo, EG the current temperature is 62.33 deg F or 16.85 deg C.');
    });

})
it('to test SendREQ with Static object',()=>
{
    app.SendREQ().then(result=>{
        assert.equal(result,response);
    })
})





