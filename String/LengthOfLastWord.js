var lengthOfLastWord = function(s) {
     s = s.trim();
     let totWords = s.split(' ');
    let len = totWords.length;
   return(totWords[len-1].length);
}
let str= "   fly me   to   the moon  ";
console.log(lengthOfLastWord(str));
