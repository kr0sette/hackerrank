'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    //let timeComponents = s.split(":");
    
    let newTime;
    
    (s.includes("PM"))? pmConversion():amConversion();
    
    function convertToArray(dayNight){
    //Separate each number out into an array
        //Ex. array [hour, minute, second] > ["07":"05":"45"]
        //Remove AM or PM from string
            //Store it in variable named dayNight
        //Split by :

        let timeStripped = s.replace(dayNight,"");
        let timeArray = timeStripped.split(":");  
        return timeArray;
    }
    
    function pmConversion(){
        let timeArr = convertToArray("PM");
        let hr = parseInt(timeArr[0]);
        
        if(hr != 12){
            let newHr = hr + 12 ;
            timeArr[0] = newHr;

        }
        
        newTime = timeArr.join(":");
        
    }
    
    function amConversion(){
        let timeArr = convertToArray("AM");
        let hr = parseInt(timeArr[0]);
        if(hr === 12){
            timeArr[0] = "00";
        }
        newTime = timeArr.join(":");
    }

    //If s.includes("PM")
        //Look at parseInt(array[0])
            //if array[0] === 12, leave it alone
            //else array[0]+12 = newHour
            //replace array[0] with newHour
            //Join array by :
    //Else (AM track)
        //Look at parseInt(array[0])
            //if array[0] === 12, replace array[0] with 00
            //else, leave it alone
            //Join array by :
            
    return newTime;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
