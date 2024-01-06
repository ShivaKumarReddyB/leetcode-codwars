/*
* https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
* */


const designerPdfViewer =(h, word) =>{
    // Write your code here
    const characterHeights = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    };


    let tallestWord = 0;
    for (let idx=0; idx<word.length; idx++ ){
        // console.log(h[characterHeights[word[idx]]])
        let height = h[characterHeights[word[idx].toLowerCase()]]
        if(height>=tallestWord){
            tallestWord = height;

        }
    }
    // console.log("tallestWord", tallestWord)
    return tallestWord * word.length


}

//cas
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],"abc"));