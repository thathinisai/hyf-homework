const class07students = [];
function addStudentToClass(studentname){
    if (studentname === "") {
        console.log("Name is empty. So you can not add the class.");
        return;
    }
    if (studentname === "queen"){
        class07students.push(studentname);
    }
    if (class07students.includes(studentname)){
        console.log(studentname+" name already exists,you can not add the same student");
    }else if(class07students.length>=6){
        console.log("class is full ");
    }else{
        class07students.push(studentname);
        console.log(class07students);
    }

}

function getNumberOfStudents(){
    let numberOfStudents = class07students.length;
    return numberOfStudents;
}

addStudentToClass("Shannu");
addStudentToClass("Shannu");
addStudentToClass("Dev");
addStudentToClass("Ram");
addStudentToClass("");
addStudentToClass("Sai");
addStudentToClass("Frank");
addStudentToClass("Peter");
addStudentToClass("queen");

console.log(class07students);
console.log("Total number of Students in class07 are: "  +getNumberOfStudents());
