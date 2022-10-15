const coinChange = (coins,amount)=>{
    let table = new Array(amount+1).fill(Infinity);
    table[0]=0;
    for (let i = 0; i < table.length; i++) {
       for(coin of coins){
        if(coin<= i){
            let idx = i - coin;
            let permutedAmount = table[idx] + 1;
            table[i] = Math.min(table[i], permutedAmount);
        }
       }
        
    }
    return table[table.length-1]==Infinity ? -1 : table[table.length- 1]
}

let coins= [1,2, 5];
let amount = 11;
console.log(coinChange(coins, amount))