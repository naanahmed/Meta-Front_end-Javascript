//accepts a function
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruits, index) {
    console.log(`${index}. ${fruits}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggies, index) {
    console.log(`${index}. ${veggies}`);
});