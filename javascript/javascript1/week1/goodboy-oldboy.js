const dogYearOfBirth = 1985;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true){
    let dogYear = (dogYearFuture-dogYearOfBirth)*7;
 console.log("Your dog will be " + dogYear + " dog years old in" + dogYearFuture);   
}
else if(shouldShowResultInDogYears === false) {
    let humanYear = dogYearFuture-dogYearOfBirth;
    console.log("Your dog will be " + humanYear + " human years old in" + dogYearFuture);
}