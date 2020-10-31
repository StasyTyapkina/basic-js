const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
    
    let k = 0.693 / HALF_LIFE_PERIOD
    let age = 0
    
    if (typeof sampleActivity != 'string' ||isNaN(parseFloat(sampleActivity))) {
        return false; 
    } 
    
    if (parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity)<= 0){
        return false; 
    }
    
    age =  Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
    return age;
};
