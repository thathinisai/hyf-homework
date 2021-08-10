let displayName = "";
let toDoList = [];

function getReply(command) {
    const arrayName = command.split(" ");
    if (command.includes("Hello my name is")) {
        displayName = arrayName[4];
        return `Nice to see you ${displayName}`;
    } else if (command.includes("What is your name")) {
        return `My name is ${displayName}`;
    }
    if (command == "") {
        return "Please say your name";
    }
    if (command.includes(arrayName)) {
        return `Hey ${displayName} i know you`;
    } 
    else if (command == "Add fishing to my todolist") {
        toDoList.push("fishing");
        return "fishing added to todolist";
    }else if (command == "Remove fishing from my todolist") {
        toDoList.shift();
        return "Removed fishing from your todolist";
    } else if (command == "What is on my todolist?") {
        toDoList.unshift("fishing");
        return toDoList;
    }
    if (command == "What day is it today?") {
        const days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];

        const today = new Date();
        const daypattern = { day: "numeric", month: "long", year: "numeric" };

        return today.toLocaleDateString(undefined, daypattern);
    } else {
        return "I do not understand what you are saying";
    }
}
function airthOperator(command) {
    let resultNum = command.match(/\d/g);
    let firstNum = parseInt(resultNum[0]);
    let secondNum = parseInt(resultNum[1]);
    if (command.includes("+")) {
        return firstNum + secondNum;
    }
    if (command.includes("*")) {
        return firstNum * secondNum;
    }
}
function Timer() {
    console.log("Timer is done");
}
console.log(getReply(""));
console.log(getReply("Hello my name is Martin"));
console.log(getReply("What is your name"));
console.log(getReply("Martin"));
console.log(getReply("Add fishing to my todolist"));console.log(toDoList);
console.log(getReply("Remove fishing from my todolist"));
console.log(toDoList);
console.log(getReply("What is on my todolist?"));
console.log(getReply("What day is it today?"));
console.log(airthOperator("what is 5+6"));
console.log(airthOperator("what is 3*8")); 