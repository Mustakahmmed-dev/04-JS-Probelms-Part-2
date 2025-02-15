// Find the lowest priced phone and show it from an object list of phones

let phones = [
    {name: "Sumsung", price: 20000, mfg: 2017},
    {name: "Walton", price: 18000, mfg: 2017},
    {name: "MI", price: 10000, mfg: 2017},
    {name: "Xiomi", price: 15000, mfg: 2017},
    {name: "Itel", price: 21000, mfg: 2017},
    {name: "Iphone", price: 100000, mfg: 2017},
    {name: "Oppo", price: 3000, mfg: 2017},
    {name: "Vivo", price: 290000, mfg: 2017}

]

function getLowest(phones){
    let lowestPricePhone = phones[0];
    for(let phone of phones){
        if(phone.price < lowestPricePhone.price){
            lowestPricePhone = phone;
        }
    }
    return lowestPricePhone;
}

let lowestPhone = getLowest(phones);
console.log(lowestPhone);