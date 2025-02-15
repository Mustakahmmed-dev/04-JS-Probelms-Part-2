// Find the greatest num from an array
let weights = [20, 30, 32, 40, 50, 54, 35, 80, 67, 65];

function getMax(numbers){
    let maxNum = numbers[0];
    
    for(let num of numbers){
        if(num > maxNum){
            maxNum = num;
        }
    }
    console.log("The highest weight num of the array is ", maxNum);
}

getMax(weights);