function list_array_items(arr){
    for(var i=0; i<arr.length;i++){
        console.log('%c' + "Item " + i + " = " + arr[i], styles)
    }
    }
var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple"
var fruits =["Apple","Orange","Banana","Peach","Pear","Strawberry"] 
list_array_items(fruits)