let interval = [[1,3],[2,6],[8,10],[15,18]];
//let interval = [[2,3],[3,6]];
/*Brute Force */
const merge = function(interval){
    interval.sort((a,b)=>a[0]-b[0]);
    
    let result = [];
    for(let i = 0; i <interval.length;i ++ ){
        for(let j = i; j <interval.length;j ++){
            if(result.length> 0){
                if(result[result.length-1][1] >= interval[j][0]){
                    if(interval[i][1]<= interval[j][1]){
                        result[result.length-1][1] = (Math.max(interval[i][1],interval[j][1]));
                    }
                }else{
                    result.push(interval[j])
                }
            }
            if(interval[i][1]>= interval[j][1]){
                result.push([interval[i][0],Math.max(interval[i][1],interval[j][1])]);
            }
        }
        
        return result;
    }
    
}
/* Obtimised*/
const merge1 = function(interval){
    interval.sort((a,b)=>a[0]-b[0]);
    let result = [interval[0]];
    for(let i = 0; i<interval.length;i++){
        let e1 = result[result.length-1][1];
        let s2 = interval[i][0];
        let e2 = interval[i][1];
        if(e1>=s2){
            result[result.length-1][1] = Math.max(e1,e2);
        }else{
            result.push(interval[i])
        }
        // if(result[result.length-1][1]>=interval[i][0]){
        //     result[result.length-1][1] = Math.max(result[result.length-1][1],interval[i][1])
        // } else{
        //     result.push(interval[i])
        // }
    }
    return result;
}
console.log(merge(interval));