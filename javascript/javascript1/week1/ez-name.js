let firstWords = ["Easy","Awesome","Corporate","Financial","Oracle", "nets","Internet","Vikings","Dansk","Indisk" ];
let secondWords = ["Hard","Triocon","Webmaster","Developer","Leo", "Novo","Nordics","Nyt","Norwegien","Tysk"];

const randomNumber = Math.floor(Math.random() * 10);

let startupName = firstWords[ randomNumber] +' '+ secondWords [randomNumber];
let startupNameLength = startupName.length;

console.log("The startup: " + startupName+" contains " +startupNameLength+" characters");
