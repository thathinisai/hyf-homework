fetch('http://api.icndb.com/jokes/random/3')
.then(response=> response.json())
.then(response=> {
      response.value.forEach(element => {
        const Jsjoke = document.createElement("Jsjoke")
        Jsjoke.innerText= element.joke;
        document.body.appendChild(Jsjoke);
      });
});