//use of rest operator and arrow functions
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.15, 20, 30, 40, 50);
console.log(shoppingCart)