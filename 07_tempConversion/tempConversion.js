const convertToCelsius = function(tempfu) {
  tempfu=(tempfu-32)*(5/9);
  rounded= Math.round(tempfu*10)/10;
 return rounded;
};

const convertToFahrenheit = function(tempruture) {
  tempruture=(tempruture*(9/5)+32);
  roundedf= Math.round(tempruture*10)/10;
return roundedf;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
