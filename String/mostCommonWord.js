// Find out the most common word other than the list of Banned words.
const mostCommonWord = (paragraph,banned)=>{
    let bannedMap = new Map();
    banned.forEach(eachBannedWord => {
        bannedMap.set(eachBannedWord,1)
    });
    let wordMap = new Map();
    const REGEX = /[^a-zA-Z ]/g;    
    wordArray = paragraph.replace(REGEX,' ').toLowerCase().split(' ');
    wordArray.forEach(eachWord => {
        if(!bannedMap.has(eachWord) && eachWord){
            if(wordMap.has(eachWord)){
                wordMap.set(eachWord, wordMap.get(eachWord)+1);
            }else{
                wordMap.set(eachWord, 1);
            }            
        }
        
    });
    let result = '';
    let count = 0;
    //for (var [key, value] of tasteMap.entries()) {}
    console.log(wordMap);
    wordMap.forEach((key,value)=>{       
        if(key > count ){
            result = value;
            count = key;
        }
    }); 
   return result;
}

// let paragraph = "Bob hit a ball, the hit BALL flew far after- it was hit.";
// let banned = ['hit'];

let paragraph = "a, a, a, a, b,b,b,c, c"
let banned = ["a"];
console.log(mostCommonWord(paragraph,banned));