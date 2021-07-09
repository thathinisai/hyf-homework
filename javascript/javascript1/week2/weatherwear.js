function weatherWear(temp){
    if(temp<=10){
        return "Weather will be freezing, better to wear the winter cloths";
    }else if(temp>10 && temp<=15){
        return "Weather will be cold, better to wear warm cloths";
    }else if(temp>16) {
        return "Weather will be warm, better to wear summer cloths like Shorts and T-shirts";
    }else{
        return "temperature is not provided";
    }

}
const clothsToWear = weatherWear(25);

console.log(clothsToWear);