
// Divide the array into equal parts PARTS LENGTH KNOWN BEFORE and last part contain the remaining when The Chunk Size is known 
const sliceIntoChucks1 = (arr, chunkSize)=>{
    let res = [];
    for(let i = 0; i< arr.length;i+=chunkSize){
        let eachChunks = arr.slice(i, i+chunkSize);// Doesnt modifies the array
        res.push(eachChunks)
        
    }
    console.log(res)
}
let arr1 = [1,2,3,4,5,6,7,8,9,10,11];
//sliceIntoChucks1(arr1,3);


// Modifies the array using splice
const sliceIntoChucks2 = (arr, chunkSize)=>{
    let res = [];
    while(arr.length > 0){
        let eachChunks = arr.splice(0, chunkSize);// It modifies the array
        res.push(eachChunks);
        
    }
    console.log(res);
}
let arr2 = [1,2,3,4,5,6,7,8,9,10,11];
//sliceIntoChucks2(arr2,3);

// Divide an array into equal chunks chuncks and extra into another ie chunk size is NOT KNOWN;
const sliceToChunksNtKnown=(arr)=>{
    let predictedMaxDivideChunkSize = Math.floor(arr.length/2);
    let actualMaxChunkSize=0;
    for(let i = 1 ; i <= predictedMaxDivideChunkSize ; i++){
        if(arr.length % i == 0) {
            actualMaxChunkSize = Math.max(actualMaxChunkSize,i);
        }else if(arr.length % i <i){
            actualMaxChunkSize =  i;
        }
    }
    console.log("Max Chunk Size:", actualMaxChunkSize);
    let res = [];
    while(arr.length > 0){
        let chunk = arr.splice(0,actualMaxChunkSize);
        res.push(chunk);
    }
    console.log(res);
    
}
let arr3 = [1,2,3,4,5,6,7,8,9,10,11];
sliceToChunksNtKnown(arr3);