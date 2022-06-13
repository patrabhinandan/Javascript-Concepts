// function passwordMatch(password){
//     return new Promise((resolve,reject)=>{
    
//         setTimeout(() => {
//             if(password=='admin'){
//                 resolve("Congratulations Access Granted");
//             }else{
//                 reject("Sorry Access Denied");
//             }
//         }, 1000);
//     })
// };
// let password = 'admin'

// passwordMatch(password).then((success)=>{
//     console.log("Please enjoy " , success)
// }).catch((error)=>{
//     console.log("Badluck " , error)
// });

let promiseOne = new Promise((resolve,reject)=>{
    setTimeout(() => {
            //console.log("Promise One Staring..");
            resolve("Promise One Resolved..");
           //reject("Promise One Rejected..");
    }, 400);
});
let promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(() => {
            //console.log("Promise Two Staring..");
            resolve("Promise Two Resolved..");
            //reject("Promise Two Rejected..");
    }, 300);
});
let promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
            //console.log("Promise Three Staring..");
            //resolve("Promise Three Resolved..");
            reject("Promise Three Rejected..");
    }, 500);
});
//  let allPromiseData = async ()=>{
//     try {
//        const response = await Promise.any([promiseOne,promiseTwo,promiseThree]);
//         console.log(response);
//     }
//     catch(error){
//         console.log("Error :" , error)
//     }
// }
//allPromiseData();

/** POLYFILLS FOR PROMISES */
// Takes in an array of promise and return a new promise from the array of promises 
let allPromiseData = async ()=>{
    try {
        //const response = await Promise.myRace([promiseOne,promiseTwo,promiseThree]);
        //const response = await Promise.myAll([promiseOne,promiseTwo,promiseThree]);
        //const response = await Promise.myAllSettled([promiseOne,promiseTwo,promiseThree]);
        const response = await Promise.myAny([promiseOne,promiseTwo,promiseThree]);
        
        console.log(response);
    }
    catch(error){
        console.log("Error :" , error)
    }
}

/** PolyFill for Race */
Promise.myRace = function(arrayOfPromises){ 
    return new Promise((resolve, reject)=>{
        arrayOfPromises.forEach(promise => {
            promise.then(resolve,reject)
        });
    })
}

/** ******************************** */
/** PolyFill for ALL */
Promise.myAll = function(arrayOfPromises){
    return new Promise((resolve,reject)=>{
        let resultArrayOfPromises =[];
        let completed = 0;
        arrayOfPromises.forEach((promise,index)=>{
            promise.then((eachPromiseValue)=>{ // Promise.resolve(promise) to convert each valueof promise to promise
                completed++;
                resultArrayOfPromises[index] = eachPromiseValue;
                if(completed == arrayOfPromises.length){                
                    resolve(resultArrayOfPromises)
                }
            }).catch((err)=>{reject(err)})
        })
    })
    
}

/** ******************************** */
/** PolyFill for AllSettled */
Promise.myAllSettled = function(arrayOfPromises){ 
    let array = arrayOfPromises.map((promise)=>{
       return promise.then((eachPromiseValue)=>{
            return {
                status : 'fulfilled',
                value : eachPromiseValue
            }
        }).catch((reason)=>{
            return {
                status : 'rejected',
                reason : reason
            }
        })
    })    
    return Promise.all(array);
    
}

/** ******************************** */
/** PolyFill for Any */
Promise.myAny = function(arrayOfPromises){
    let rejectedCount = 0;
    return new Promise((resolve,reject)=>{
        return arrayOfPromises.forEach((promise)=>{
            promise.then((eachPromiseValue)=>{
                resolve(eachPromiseValue)
            }).catch((err)=>{
                rejectedCount++
                if(rejectedCount == arrayOfPromises.length){
                    reject(new AggregateError([new Error(err)],"All promises were rejected"));
                }
               
            })
        })
    })    
    
}

/** ******************************** */
allPromiseData();
// let PromiseData = Promise.race([
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("1 sec")
//         }, 1000);
        
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("3 sec")
//         }, 500);
//     })
// ])

// let PromiseData = new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 reject(10)
//             }, 1000);
//         })

// PromiseData.then((item)=>{
//     console.log("promise resolved", item)
// }).catch((err)=>{
//     console.log("error", err)
// })

//chaining

// PromiseData.then((item)=>{
//     console.log("promise resolved", item);
//     return item *10
// }).then((item)=>{
//     console.log("2nd promise resolved", item)
//     return item *1000
// }).then((item)=>{
//     console.log("3rd promise resolved", item)
//     return item *10000
// }).catch((err)=>{
//     console.log("error", err)
// }).finally(()=>{
//     console.log("done with promise finally!")
// })

var str = "abhinandan";
var strArray = str.split('');
//console.log(strArray);

// var output = strArray.reduce((acc, curr)=>{
//         if(acc[curr]){
//             acc[curr]++;
//         }else{
//             acc[curr] = 1
//         }
//         return acc
//     },{});
   
// let resultObject = {};

var resultObject = {};
strArray.map((item)=>{
   // resultObject[item] = (resultObject[item] || 0) + 1;
    if(item in resultObject){
        resultObject[item]++;
    }else{
        resultObject[item] = 1;
    }
    // if(resultObject.get(item)){
    //     var value = resultObject.get(item)
    //     resultObject.set(item,value+1)

    // }else{
    //     resultObject.set(item,1)
    // }
})

//console.log(resultObject);


// const user = [
//     {firstName: "Abhi" , lastName : "Patra", age :33},
//     {firstName: "Sud" , lastName : "Patra", age :27},
//     {firstName: "Ritam" , lastName : "dey", age :30},
//     {firstName: "tushar" , lastName : "pal", age :30}
// ]

// var output = user.reduce((acc, curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }else{
//         acc[curr.age] = 1
//     }
//     return acc
// },{});

//console.log(output);

/*** Sample Closure */
// function closure(){
    
//     for(var i = 0; i<5 ;i++){
//         function close(i){
//             setTimeout(() => {
//                 console.log(i)
//             }, 1000);
//         }
//         close(i)        
//     }
// }
// closure();



