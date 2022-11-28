function arraybuilder(a, b, c){
    var arr= [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    return arr;
}

var fruit_list = arraybuilder("Apple","Banana","Orange")
console.log(fruit_list)