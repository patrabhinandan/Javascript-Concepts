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


Promise.myAllSettled = function(ArrayOfPromises){
    let resultArray = ArrayOfPromises.map((promise)=>{
        return promise.then((eachPromiseValue)=>{
            return {
                status : "fulfilled",
                value :eachPromiseValue 
            }
        }).catch(err=>{
            return {
                status : "rejected",
                reason:err
            }
        })
    });
    return Promise.all(resultArray);
    
}
Promise.myAllSettled(ArrayOfPromises)
  .then((value) => {
    console.log(value);
  }).catch((err) => console.log(err));