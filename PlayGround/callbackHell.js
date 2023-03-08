// 1+2+3+4
const chalk=require('chalk');
getSum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("syntax error");
      } else {
        resolve({
          sum: a + b,
        });
      }
    }, 2000);
  });
};
getSum(1, 2)
  .then((res) => {
    console.log(res.sum);
    return getSum(res.sum, 3);
  })
  .then((res) => {
    console.log("sum:" + res.sum);
  })
  .catch((err) => console.log(err));
