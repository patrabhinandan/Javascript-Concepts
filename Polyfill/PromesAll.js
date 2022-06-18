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

Promise.myAll= function(ArrayOfPromises){
    let resultArray = []; let completed = 0;
    return new Promise((resolve,reject)=>{
        ArrayOfPromises.forEach((promise,index)=>{
            promise.then((eachValue)=>{
                completed++;
                resultArray[index]=eachValue;
                if(completed == ArrayOfPromises.length){                
                    resolve(resultArray)
                }
            }).catch((err)=>{
               reject(err)
            }        
           )
    
        })
    })
    
    
}

Promise.myAll(ArrayOfPromises)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));