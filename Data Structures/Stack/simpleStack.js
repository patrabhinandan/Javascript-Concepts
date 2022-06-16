/* methods present -- push, pop, size , peek */


// let letters = [];
// let word="racecar";
// let rWord = "";
// for(let i=0;i<word.length;i++){
//     letters.push(word[i])
// }
// for(let i=0;i<word.length;i++){
//     rWord+=letters.pop();
// }
// if(word === rWord){
//     console.log("its a palindrome")
// }else{
//     console.log("NOT  a palindrome")
// }

var Stack = function(){
    this.count = 0;
    this.storage = {};
    this.push= function(data){        
        this.storage[this.count] = data;
        this.count++;
    }
    this.pop= function(){ 
        if(this.count==0) return undefined;
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function(){
        return this.count;
    }
    this.peek = function(){
        if(this.count==0) return undefined
        var result = this.storage[this.count - 1];
        return result
    }
}
 let myStack = new Stack();
 myStack.push(10);
 myStack.push(20);
 myStack.push("test");
 console.log(myStack.peek());
 myStack.pop();
 myStack.pop();
 myStack.push("raka");
 console.log(myStack.peek());
 console.log(myStack.size());

