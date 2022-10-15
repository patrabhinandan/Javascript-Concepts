 function maxWealth(arr){
    let numberOfEmp = arr.length;
    let map = new Map();
    for(let i = 0; i<numberOfEmp;i++){
        let totWealth = 0;
        arr[i].forEach((item)=>{
            totWealth+=item;
        });
        map.set(i,totWealth)
    }
    let maxValue = 0;
    map.forEach((item)=>{
        maxValue = Math.max(item,maxValue);
        
    });
    console.log(maxValue);
    
     
 }
 let accounts = [[1,2,3],[3,2,1]];
 //let accounts = [[2,8,7],[7,1,3],[1,9,5]];
 maxWealth(accounts);//6