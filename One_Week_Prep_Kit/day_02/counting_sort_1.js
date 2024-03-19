let input = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85,
    74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24,
    87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82,
    67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33
];

let expectedOutput =
    '0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2';

function countingSort(arr) {
    //console.log(arr.length);

    //Create sortedArrays object
    //Key is the number itself
    //Value is the number of times that number appears in the array
    let counts = {};

    //Iterate thru arr
    //let key = element value in array
    //If sortedArrays[key] is undefined
    //Then add the key to the object and assign value to 1
    //If sortedArrays[key] exists
    //Then increment the value by 1
    arr.forEach((num) => {
        let key = num;
        if (counts[key] === undefined) {
            counts[key] = 1;
        } else {
            counts[key] += 1;
        }
    });

    //Turning Object into expected out put - an array with 100 elements & each index is associated with the number of times it apprears in the original array

    function convertToInt() {
        let convertedKeys = [];
        //Object.keys(sortedArrays);
        Object.keys(counts).forEach((num) => {
            convertedKeys.push(parseInt(num));
        });
        return convertedKeys;
    }

    // let result = [];
    let result = [];
    // let countedNums = //Object.keys(sortedArrays);
    let countedNums = convertToInt();

    //for (let i=0; i <100; i++){
    for (let i = 0; i < 100; i++) {
        //if(countedNums.includes(i))
        //result.push(sortedArray[i])
        //else
        //result.push(0)
        countedNums.includes(i) ? result.push(counts[i]) : result.push(0);
        //countedNums.includes(i) ? result.push[i] : result.push[];
    }

    //return result
    return result.join(' ');
}

countingSort(input);
