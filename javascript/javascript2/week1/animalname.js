let firstName = document.getElementById("getname");
firstName.addEventListener("click", function getSpiritName() {
    let spiritAnimals = [
        "-Wolf",
        "-King Kong",
        "-Bear",
        "-Jaguar",
        "-Dolphin",
        "-Falcon",
        "-Gorilla",
        "-Tiger",
        "-Bull",
        "-Panther",
    ];
    let randomAnimal = spiritAnimals[Math.floor(Math.random() * 10)];
    let animalname = document.getElementById("name").value;
    if (animalname == "") {
        document.getElementById("animal").innerHTML = "Please enter name";
    } else {
        let name = document.getElementById("name").value + " " + randomAnimal;
        document.getElementById("animal").innerHTML = name;
    }
});