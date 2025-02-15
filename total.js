// let numbers = [20, 40, 50, 60];

// let sum = 0;
// for(let num of numbers){
//    sum = sum + num;
    
// }
// console.log(sum)

// Sum up the total values of the object

let products = [
    {name: "shirt", price: 500},
    {name: "pant", price: 300},
    {name: "shoe", price: 600},
    {name: "watch", price: 1500},
    {name: "belt", price: 200},
]

function getTotal(products){
    let total = 0;
    for(let product of products){
        total = total + product.price;
    }
    return total;
}
let total = getTotal(products);
console.log(total)
