function isBalanced(exp){
    let n = exp.length;
    let stack = [];
    for(let i = 0 ; i <n; i++){
        let x = exp[i];
        if(x == '(' || x =='{' || x == '['){
            stack.push(x);
            continue;
        }
    
    if(stack.length = 0){return false;}
    let check;
    switch(x){
        case ')':
            check = stack.pop();
            if(check == '{' || check == '[') return false;
            break;
        case '}':
            check = stack.pop();
            if(check == '(' || check == '[') return false;
            break;
        case ']':
            check = stack.pop();
            if(check == '(' || check == '{') return false;
            break;
        }
    }
    return (stack.length);
}
let expr = "([{}])";
let result = isBalanced(expr);
if(result){ console.log("exp is balanced")} else {console.log("exp is NOT  balanced") }
