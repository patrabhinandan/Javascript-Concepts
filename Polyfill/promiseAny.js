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
    }, 100);
});

const ArrayOfPromises = [promise1,promise2,promise3];


Promise.myAny = function(ArrayOfPromises){
    let rejectedCount = 0;
    const customError = new AggregateError([new Error("Some Error")],"All promise failed");
     return new Promise((resolve,reject)=>{
        return ArrayOfPromises.forEach((promise)=>{
            promise.then((eachValue)=>resolve(eachValue)
            ).catch((err)=>{
                rejectedCount++;
                if(rejectedCount == ArrayOfPromises.length){
                    reject(customError);
                }
            })
        })
     })     
}


Promise.myAny(ArrayOfPromises)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));