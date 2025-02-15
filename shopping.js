// Going for shopping such as shirts, pants, shoes, etc
/*
- Shirts = 5;
- Pants = 10;
- shows = 3;
*/
function shopping(shirtsQ, pantsQ, shoesQ){
    let shirtPrice = 500;
    let pantPrice = 700;
    let shoePrice = 900;

    let totalShirtsCost = shirtPrice * shirtsQ;
    // console.log("Total shirts cost: ", totalShirtsCost); 
    let totalPantsCost = pantPrice * pantsQ;
    let totalShoesCost = shoePrice * shoesQ;

    let totalCost = totalShirtsCost + totalPantsCost + totalShoesCost;
    
    return totalCost;
}

let firstShopping = shopping(5, 10, 3);
console.log("The total cost of the first shopping is ", firstShopping);