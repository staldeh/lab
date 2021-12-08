const dela = 3;
var callback = (value) => {
    console.log(value + " seconds later...");
  };

console.log("Now...");
setTimeout(callback, dela * 1000, delay);

function delay(t, v) {
  return new Promise(function(resolve) { 
      setTimeout(resolve.bind(null, v), t)
  });
}
const doit = (delay) => {
  return new Promise((resolve, reject) => {
    /*stuff using username, password*/

    if ( /* everything turned out fine */ ) {
      resolve("Stuff worked!");
    } else {
      reject(Error("It broke"));
    }
  });
};