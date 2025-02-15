// Sum up the prices of products with discounts based on the quantity of purchase

function discountPricing(quantity){

    if(quantity <= 100){
        const total = quantity * 200;
        console.log("Total Cost ", total);
    }
    else if(quantity <= 200){
        const total = quantity * 190;
        console.log("Total Cost ", total);
    }
    else{
        const total = quantity * 180;
        const totalDiscount = quantity * 200 - total;

        console.log("Total Cost :", total, " You got Total Discount : ", totalDiscount)
    }
}

// Push a number of quantity
discountPricing(900);