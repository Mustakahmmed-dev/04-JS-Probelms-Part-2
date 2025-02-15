// Show the total costs of the products multiplying the price and quantity
let products = [
    {name: "book", price: 400, quantity: 5 },
    {name: "pen", price: 10, quantity: 6 },
    {name: "pencil", price: 5, quantity: 5 },
    {name: "eraser", price: 50, quantity: 5 },
    {name: "ex-book", price: 200, quantity: 4 },
    {name: "chalk", price: 100, quantity: 3 },
    {name: "marker", price: 45, quantity: 1 },
    {name: "bag", price: 700, quantity: 5 },
]

function getTotal(product){
    
    let total = 0;
    for(let product of products){
        let totalPriceOfProduct = product.price * product.quantity;
        total = total + totalPriceOfProduct;
    }
    return total;
}

let totalCost = getTotal(products);
console.log("The total costs of today's shopping is ", totalCost);