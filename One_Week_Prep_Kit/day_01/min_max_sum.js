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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    //sort the array
   arr.sort((a,b)=>{
        return a-b;
    });
    
    let minVal = 0
    let maxVal = 0
    
    //create for loop that loops thru indexes 0-3 (let i = 0; i < arr.length-1)
        //for each element, minVal += the element number
    for(let i = 0; i < arr.length-1; i++){
        minVal += arr[i]
    }
    
    //create for loop that loops thru indexes 1-4 (let i=; i< arr.length)
        //for each element, maxVal += the element number
    for(let i = 1; i < arr.length; i++){
        maxVal += arr[i];
    }

    //Combine minVal + "  " + "maxVal"
        //console.log
    
    console.log(minVal + " " + maxVal);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}