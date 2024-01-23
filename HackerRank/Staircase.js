function staircase(n) {
// let line ='';
let result = '';
//
//     for(let i=0; i<n; i++){
//         for(let j =i; j<=i; j++){
//             line+=" "
//         }
//         result +=
//     }
//     return result;
    /*this solution is working good but its only leftsided we need rightside */

    for(let i=0; i<n; i++){
        let line="";
        for(let j =0; j<=i-1; j++){
            if( j!==n-1){
                line +=" ";
            }else{
                line+="#"
            }
        }
        result+=`${line}\n`
    }
    return result;
}

console.log(staircase(4))
console.log(["#", "#", "#", "#"])

