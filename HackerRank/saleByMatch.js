

function sockMerchant(n, ar) {
    let map ={}
    let pairs =[]
    for(let idx = 0; idx<ar.length; idx++){
        if(map[ar[idx]]){
            map[ar[idx]] ++
            if(map[ar[idx]] % 2===0){
                pairs.push(ar[idx])
            }
        }else {
            map[ar[idx]] =1
        }
    }
    return pairs.length

}

console.log((sockMerchant(9,  [10, 20, 20, 10, 10, 30, 50, 10, 20])))
console.log((sockMerchant(9,  [1,2,1,2,1,3,2])))