let boughtCandyPrices = [];
function addCandy(candyType,weight){
    if(candyType === "sweet"){
        boughtCandyPrices.push(0.5*weight);
    }else if(candyType === "chacolate"){
        boughtCandyPrices.push(0.7*weight);
    }else if(candyType === "toffe"){
        boughtCandyPrices.push(1.1*weight);
    }else if(candyType === "chewing-gum"){
        boughtCandyPrices.push(0.03*weight);
    }else{
        return "invalid entry";
    }


}
addCandy("sweet",20);
addCandy("chacolate",10);
addCandy("toffe",30);
addCandy("chewing-gum",10);
addCandy("salt",20);
let boughtCandy = 0;
let amountToSpend = (Math.random() * 100);
function canBuyMoreCandy(){
    for (let i=0; i < boughtCandyPrices.length; i++) {
    boughtCandy += boughtCandyPrices[i];
    }
    if (amountToSpend > boughtCandy) {
        console.log("You can buy more, so please do!.");
    } else {
        console.log("Enough Candy for you!")
    }

}
console.log(boughtCandy);
console.log(amountToSpend);
canBuyMoreCandy();
