var age = 10
if (age > 65){
    console.log("You get your income from your pension")
}else if(age < 65 && age>=18){
    console.log("Each month you get a salary")
}else if(age<18){
    console.log("You get an allowance")
}else{
    console.log("The value of the age variable is not numerical")
}

var Day= "Sunday"

switch(Day){
    case "Monday":{
        console.log("Do Monday")
        break;
    }
    case "Tuesday":{
        console.log("Do Tuesday")
        break;
    }
    case "Wednesday":{
        console.log("Do Wednesday")
        break;
    }
    case "Thursday":{
        console.log("Do Thursday")
        break;
    }
    case "Friday":{
        console.log("Do Friday")
        break;
    }
    case "Saturday":{
        console.log("Do Saturday")
        break;
    }
    case "Sunday":{
        console.log("Do Sunnday")
        break;
    }
    default:{
        console.log("No such day is present")
    }
}
