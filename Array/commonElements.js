/*** Find common elemnts from 3 sorted array */
function common(A,B,C){
    let i=0,j=0,k=0;
    let n1 = A.length;
    let n2 = B.length;
    let n3 = C.length;
    let flag = 0
    while(i < n1 && j < n2 &&  k < n3){
        if(A[i] == B[j] && A[i]==C[k]){
                console.log(A[i]);
                flag = 1;
                i++;j++;k++;
        }else if(A[i]> B[j] && A[i]==C[k]){
            j++            
        }else if(B[j] > A[i] && B[j]==C[k]){
            i++            
        }else if(B[j] > C[k] && B[j]==A[i]){
            k++
        }
        else if(A[i] > B[j] && A[i] > C[k]){
            j++; k++ ;           
        }
        else if( B[j] > C[k] && B[j]> A[i]){
            i++;k++;            
        }
        else if( C[k] > B[j] && C[k] > A[i]){
           i++;j++          
        }
    }
    
    if(flag==0){
        console.log("no common elements");
    }
    
}
// let A1 = [2,3,4,45,62,87,88,91, 99];
// let A2 = [1,3,4,62,76, 87,99,111];
// let A3 = [1,2,3,45, 55, 62, 72, 73, 87,99];
let A1 = [2,4,45,88,91];
let A2 = [1,4,76,111];
let A3 = [1,2,45, 55,  72, 73];
common(A1,A2,A3);