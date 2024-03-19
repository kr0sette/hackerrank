'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    //Create an empty object to count instances;
    let instances = {};

    //Iterate thru all numbers
    a.forEach((num) => {
        let key = num;
        //If number is undefined as a key in instances{}
        if (instances[key] === undefined) {
            //Add it as a key and assign value as 1
            instances[key] = 1;
        }
        //If number is found as a key in instances{}
        else {
            //Increase value by 1
            instances[key] += 1;
        }
    });

    //Define loneInteger variable;
    let loneInteger;
    //Iterate thru instance{} using for in
    for (let num in instances) {
        //Assign object key that has an instance of 1 to loneInteger
        instances[num] === 1 ? (loneInteger = num) : null;
    }

    //return the lone integer
    return loneInteger;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map((aTemp) => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
