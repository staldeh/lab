const delay = 3;
var callback = (value) => {
    console.log(value + " seconds later...");
  };

console.log("Now...");
setTimeout(callback, delay * 1000, delay);

