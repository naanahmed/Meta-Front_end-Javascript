var a,b;
function addTwoNums(a,b){
    try{
        if (a != Number){
            throw new ReferenceError('the first argument is not a number')
        }
        else if (b != Number){
            throw new ReferenceError('the second argument is not a number')
        }
        else{
            console.log(a+b)
        }
    }
    catch(err){
        console.log("Error",err)
    }
}

addTwoNums("5",5)
console.log("It still works")