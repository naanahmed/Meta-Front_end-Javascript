function getNumber1(){
    return 5;
}

function getNumber2(){
    return 10;
}

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(getNumber1, getNumber2);