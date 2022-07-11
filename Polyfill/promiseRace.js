const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 1 resolved")
    }, 100);
});
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise 2 resolved")
    }, 200);
});
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("promise 3 rejected")
    }, 50);
});

const ArrayOfPromises = [promise1,promise2,promise3];
Promise.myRace = function(ArrayOfPromises){
    return new Promise((resolve,reject)=>{
        ArrayOfPromises.forEach((promise) => {
            promise.then(value=>{
                resolve(value)
            }).catch((err)=>{
                    reject(err)
                })
        });
    })
}
Promise.myRace(ArrayOfPromises)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
