function maxWords(sentences){
    let maxWords = 0;
    let map = new Map();
    for(let i = 0 ; i < sentences.length;i++){
        let numberOfWords = 0;
        numberOfWords = sentences[i].split(" ").length;
        map.set(i,numberOfWords);
    }
    map.forEach(item => {
        maxWords = Math.max(maxWords,item)
    });
    console.log(maxWords);
}
//let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let sentences = ["please wait", "continue to fight", "continue to win"];
maxWords(sentences);