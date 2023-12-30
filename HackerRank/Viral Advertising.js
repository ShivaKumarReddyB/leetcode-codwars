
function viralAdvertising(n) {
    let shared = 5;
    let likes = 0;
    let cumulative =0;
    for(let idx =0; idx<n; idx++){
        likes = Math.floor(shared/2);
        shared=likes* 3;
        cumulative+=likes
    }

    return cumulative

}
console.log(viralAdvertising(3))