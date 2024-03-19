let input = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];

//Determine how many numbers are needed in the top quadrant
const colCount = input[0].length;
const rowCount = input.length;
const quadrantNumCount = (colCount * rowCount) / 4;

//Determine what exact numbers will make the greatest sum (based on how many numbers needed)

let combinedMatrix = input.reduce((accumulatedArrays, currentArray) => {
    return accumulatedArrays.concat(currentArray);
}, []);
let sortedCombMatrix = combinedMatrix.sort((a, b) => a - b);
let quadNums = sortedCombMatrix.splice(sortedCombMatrix.length - 6, 6);
let quadNumsSum = quadNums.reduce((accumSum, currentNum) => {
    return (accumSum += currentNum);
});

console.log(quadNumsSum);

//reduce matrix
//sort numbers highest to lowest

//Flip the columns and rows to get those numbers in the top quadrant
//determind how many numbers are needed in the top quadrant
