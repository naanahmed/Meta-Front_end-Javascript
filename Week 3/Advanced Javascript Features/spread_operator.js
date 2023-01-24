let top_3 =["Fries", "Chocolate", "Ice Cream"];

function listFavDessert(Dessert1, Dessert2, Dessert3){
    console.log(`The first dessert is ${Dessert1}`)
    console.log(`The second dessert is ${Dessert2}`)
    console.log(`The third dessert is ${Dessert3}`)
}

//listFavDessert(top_3[0],top_3[1],top_3[2])
listFavDessert(...top_3);