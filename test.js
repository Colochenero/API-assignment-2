const assert = require('assert');
const app = require('./app.js');

it('correctly yhe change from KELVIn to fahrenheitTemperature for CAIRO' , ()=>
{
    
    assert.equal(app.cfahrenheitTemperature(293.15),67.06);
});
it('change KELVIN temp to CELCIUS for cairo',()=>
{
    assert.equal(app.changeCelciusTemperature(293.15),19.48);
});
it('run the programme for CAIRO',()=>
{
    app.getResponse().then(result=>{
        assert.equal(result,'Right now, in Cairo, EG the current temperature is 62.33 deg F or 16.85 deg C.');
    });

})




