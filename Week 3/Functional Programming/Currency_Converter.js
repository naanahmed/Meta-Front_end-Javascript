var currencyOne =100;
var currencyTwo =0;
exchangeRate = 52.48;

function currency_converter(amount, rate){
    return exchangeRate * currencyOne;
}

var currencyTwo = currency_converter(currencyOne, exchangeRate);
console.log(currencyTwo)