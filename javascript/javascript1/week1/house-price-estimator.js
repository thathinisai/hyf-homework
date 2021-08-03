const width = 8;
const depth = 10;
const hieght = 10;
const gardenSizeInM2 = 100;
const payingHousePrice = 2500000;

const volumeInMeters = width*depth*hieght;

const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice > payingHousePrice) {
    console.log("paying too much");
}
else if(housePrice < payingHousePrice) {
    console.log("paying too less");
}
