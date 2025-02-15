// Find the greatest num from the 3 elements
let num1 = 30;
let num2 = 90;
let num3 = 80;
if(num1 > num2 && num1 > num3){
    console.log("Num1 is the greatest ", num1)
}
else if(num2 > num1 && num2 > num3){
    console.log("Num2 is the greatest ", num2)
}
else{
    console.log("Num3 is the greatest ", num3)
}

// Using function
function getMaxNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else {
        return num3;
    }
}
let maxNum = getMaxNum(40, 50, 140);
console.log("greatest number is ", maxNum);
