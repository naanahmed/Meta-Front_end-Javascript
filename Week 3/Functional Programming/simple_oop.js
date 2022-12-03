var Task ={
    done : false,
    complete : function(){
        this.done = true
    }
}
console.log(Task.done)
Task.complete() 
console.log(Task.done)