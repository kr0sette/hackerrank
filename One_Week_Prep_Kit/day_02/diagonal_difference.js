let colRowCount = 3;
let input = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

//Diagonal - top left > bottom right
//Row 1 - input[0][0]
//Row 2 - input[1][1]
//Row 3 - input[2][2]
//Row 4 - input[3][3]
//Sum all these values
//Diagonal - top right > bottom left
//Row 1 - input[0][3]
//Row 2 - input[1][2]
//Row 3 - input[2][1]
//Row 4 - input[3][0]
//Sum of all these values
//LTR - RTL = result - multiply by -1 if result is negative because we want absolute

function diagonalDifference(arr) {
    let count = arr.length;
    let LTRsum = LTR();
    function LTR() {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += arr[i][i];
            //onsole.log(arr[i][i]);
        }
        return sum;
    }

    let RTLsum = RTL();

    function RTL() {
        let firstIndex = 0;
        let secondIndex = count - 1;
        let sum = arr[firstIndex][secondIndex];
        //console.log(firstIndex + ' ' + secondIndex);
        for (let i = 1; i < count; i++) {
            firstIndex = i;
            secondIndex--;
            sum += arr[firstIndex][secondIndex];
            //console.log(firstIndex + ' ' + secondIndex);
        }
        return sum;
    }

    let result = LTRsum - RTLsum < 0 ? (LTRsum - RTLsum) * -1 : LTRsum - RTLsum;
    return result;

    //let LTRsum = 0;
    //for (let i = 0; i < colRowCount.length; i++)
    //LTRsum += array[i][i];
}

console.log(diagonalDifference(input));
