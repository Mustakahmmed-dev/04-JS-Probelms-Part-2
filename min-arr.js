// Find the min num of an array
let numList = [30, 20, 40, 5, 50, 1, 89, 90, 100, 99];

function minNum(numbers){
    let minNum = numbers[0];

    for(let num of numbers){
        if(num < minNum){
            minNum = num;
        }
    }
    return minNum;
}

const minNumber = minNum(numList);
console.log("The smallest number of the array is ", minNumber);