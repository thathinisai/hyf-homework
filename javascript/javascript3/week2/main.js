//moveElement(document.getElementsByTagName('li')[0],{x:100,y:100})
//.then(()=>{
//   console.log('element has been moved');
//})
async function translateOneByOne() {
  await moveElement(document.getElementById("red"), { x: 20, y: 300 }).then(
    () => {
      console.log("Red circle  has been moved to the target");
    }
  );

  await moveElement(document.getElementById("blue"), { x: 400, y: 300 }).then(
    () => {
      console.log("Blue circle  has been moved to the target");
    }
  );

  await moveElement(document.getElementById("green"), { x: 400, y: 20 }).then(
    () => {
      console.log("Green circle  has been moved to the target");
    }
  );
}
//translateOneByOne();
function translateAllAtOnce() {
  const redCircle = moveElement(document.getElementById("red"), {
    x: 20,
    and: 300,
  });

  const blueCircle = moveElement(document.getElementById("blue"), {
    x: 400,
    and: 300,
  });

  const greenCircle = moveElement(document.getElementById("green"), {
    x: 400,
    and: 20,
  });

  Promise.all([redCircle, blueCircle, greenCircle]).then(() => {
    console.log("all the circles moved to the target");
  });
}
translateAllAtOnce();
