const dogYearOfBirth = 1985;
const dogYearFuture = 2027;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true){
    const dogYear = (dogYearFuture-dogYearOfBirth);
 console.log("Your dog will be " + dogYear*7 + " dog years old in" + dogYearFuture);   
}
else if(shouldShowResultInDogYears === false) {
    console.log("Your dog will be " + dogYear + " human years old in" + dogYearFuture);
}