const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hey it worked!");
    reject("it didn't work");
  }, 2000);
});

// somePromise.then(
//   (message) => {
//     console.log("success!", message);
//   },
//   (err) => {
//     console.log("error", err);
//   }
// );

somePromise
  .then((message) => {
    console.log("success!", message);
  })
  .catch((err) => {
    (err) => {
      console.log("error", err);
    };  
  });
