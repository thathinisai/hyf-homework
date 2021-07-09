function getFullname(firstname,surname){
        return firstname+" "+surname;
    
}
const fullname1 = getFullname("Benjamin","Huges");
const fullname2 = getFullname("Henrik","Olsen");
console.log(fullname1);
console.log(fullname2);

//Formal Fullname
function getFullname(firstname, surname,useFormalName,gender){
    if (useFormalName === true && gender === "male"){
        useFormalName = "Lord";
        return useFormalName+" "+firstname+" "+surname+" "+gender;
    }
    else if(useFormalName === false && gender === "male") {
        return firstname +" "+surname+" "+gender;
    }
    else if(useFormalName=== true && gender === "female"){
        useFormalName ="Lady";
        return useFormalName+" "+firstname+" "+surname+" "+gender;
    }
    else if(useFormalName === false && gender ==="female"){
        return firstname+" "+surname;
    }
    else{
        return "please provid all the required parameters";
    }
}

const fullname1 = getFullname("Benjamin","Huges",true,"male");
const fullname2 = getFullname("Linda","Olsen",true,"female");
const fullname3 = getFullname();

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

