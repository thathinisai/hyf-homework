//task1
setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
  
  //task2+3
  let delayAndLog = (delay, stringToLog) => {
    setTimeout(() => {
      console.log(stringToLog);
    }, delay * 1000);
  };
  
  delayAndLog(2, "string will logged out after 2 seconds");
  delayAndLog(5, "string will logged out afrer 5 seconds");
  
  //task4
  let earthLogger = () => {
    console.log("earth");
  };
  let saturnLogger = () => {
    console.log("saturn");
  };
  
  let planetLogFunction = (callbackfunction) => {
    callbackfunction();
  };
  planetLogFunction(earthLogger);
  planetLogFunction(saturnLogger);
  
  //task5
  let geoCallback = (message) => {
    console.log(message);
    document.getElementById("latitude").innerHTML =
      "This is the latitude: " + message.coords.latitude;
    document.getElementById("longitude").innerHTML =
      "This is the longitude: " + message.coords.longitude;
  };
  let geoLocator = () => {
    navigator.geolocation.getCurrentPosition(geoCallback);
  };
  
  // //task6
  // let map;
  // function getLocation(){
  //     navigator.geolocation.getCurrentPosition(geoCallback);
  // }
  
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: message.coords.latitude, lng: message.coords.longitude },
  //     zoom: 8,
  //   });
  // }
  
  //task 7
  let runAfterDelay = (delay, callback) => {
    setTimeout(() => {
      callback();
    }, delay * 1000);
  };
  runAfterDelay(4, function () {
    console.log("should be logged  after 4 seconds");
  });
  runAfterDelay(7, function () {
    console.log("should be logged  after 7 seconds");
  });
  
  //task 8
  
  document.addEventListener("dblclick", (event) => {
    console.log("double click");
  });
  
  //task 9
  let logFunnyJoke = () => {
    console.log("I am a funny joke");
  };
  let logBadJoke = () => {
    console.log("I am a bad joke");
  };
  
  let jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    if (shouldTellFunnyJoke === true) {
      logFunnyJoke();
    } else {
      logBadJoke();
    }
  };
  jokeCreator(true, logFunnyJoke, logBadJoke);
  jokeCreator(false, logFunnyJoke, logBadJoke);
  
  //Function as a variable
  //function1
  function function1() {
    console.log("function1");
  }
  function function2() {
    console.log("function2");
  }
  function function3() {
    console.log("function3");
  }
  
  let functionArray = [function3, function1, function3];
  functionArray.forEach((method) => {
    method();
  });
  //2
  const function4 = () => {
    console.log("function4");
  };
  
  function function5() {
    console.log("function5");
  }
  function4();
  function5();
  //3
  let function6 = () => {
    console.log("function6");
  };
  let functionObject = { key: function6 };
  functionObject.key();
  
  //Press Game
  let counterL = 0;
  let counterS = 0;
  function counter(e) {
    if (e.key == "l") {
      counterL++;
    } else if (e.key == "s") {
      counterS++;
    }
  }
  function startCounting() {
    console.log("Game Started!!!!!");
    document.addEventListener("keypress", counter);
  }
  
  function stopCountingAndShowResult() {
    document.removeEventListener("keypress", counter);
    console.log("counterL: ", counterL);
    console.log("counterS: ", counterS);
    if (counterS > counterL) {
      console.log("The WINNER is S");
    } else {
      console.log("The WINNER is L");
    }
  }
  
  let startGame = () => {
    let gameTime = document.getElementById("gametime").value;
    setTimeout(() => {
      stopCountingAndShowResult();
    }, gameTime * 1000);
    startCounting();
  };
  
  function reset() {
      counterL = 0;
      counterS = 0;
      console.log("Game is reset");
  }