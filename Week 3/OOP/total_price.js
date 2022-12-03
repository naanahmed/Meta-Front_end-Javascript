var purchase1 ={
    price : 100,
    tax : 1.35,
    total_price : function(){
        var price_inc_tax = this.price * this.        
        return price_inc_tax
    }
}
console.log(purchase1.total_price())