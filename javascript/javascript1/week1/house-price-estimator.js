let width = 8;
let depth = 10;
let hieght = 10;
let gardenSizeInM2 = 100;
let payingHousePrice = 2500000;

let volumeInMeters = width*depth*hieght;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice > payingHousePrice) {
    console.log("paying too much");
}
else if(housePrice < payingHousePrice) {
    console.log("paying too less");
}
