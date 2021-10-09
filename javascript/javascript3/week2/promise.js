function setTime(resolveAfter) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(resolveAfter);
      }, resolveAfter * 1000);
    });
  }
  async function asynCall() {
    await setTime(8);
    console.log("I am called asynchronously");
  }
  asynCall();
  