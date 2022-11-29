try{
    throw new ReferenceError();
}
catch(err){
    console.log(err)
    console.log("there was a reference error")
}
console.log("Program continued")