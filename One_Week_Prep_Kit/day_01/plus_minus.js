'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var denom = arr.length;
    var ratios = {
        pos: [],
        neg: [],
        zeros: []
    }

    arr.forEach((n)=>{
        (n === 0) ? ratios.zeros.push(n):null;
        (n > 0) ? ratios.pos.push(n):null;
        (n < 0 ) ? ratios.neg.push(n):null;        
    })
    

    for(let r in ratios){
        console.log(parseFloat((ratios[r].length/denom)).toFixed(6));
    }

    //Identify & pull out Positive/Negative/Zeros using a loop/forEach
        //Get a count of each Positive/neg/0 element
        //Store count as numerator
    //Numerator/Denom = Ratio
        //Format ratios so that there are 6 places after decimal

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
    
}
