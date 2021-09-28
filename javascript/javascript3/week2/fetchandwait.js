const astronautApi = "http://api.open-notify.org/astros.json";
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve("timeout after 3 seconds");
      }, 3000);
    });

    promise.then(() => {
      fetch(astronautApi)
        .then((response) => {
            response.json()
        })
        .then((data) => console.log(data));
    });
    //using async/await
    async function astronaut() {
      try {
        await promise;
        const  astroResponse  =  await  fetch ( astronautApi );
        const astronauts = await astroResponse.json();
        console.log("number of astronuts" + astronauts.number);
      } catch (err) {
        console.log(err);
      }
    }
    astronaut();