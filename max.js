// Find the max number between 2
let person1 = 30;
let person2 = 40;
if(person1 > person2){
    console.log("This person is the greatest one", person1)
}
else{
    console.log("This person is the greatest", person2)
}

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
let result = getMax(20, 30);
console.log("The greatest number is ", result);