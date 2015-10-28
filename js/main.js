// add scripts

console.log("sanity check!");

//take original num and turn into var arr = array;

//set a variable as first num in array

//loop through the rest of the numbers so starting from index 1

//slice out the other numbers and save that as a new array

//we want the first number in new array to be smallest one that is higher then original variable, so for this set a new variable.

//could push to array straight after this???



var nextHighNum = function(num) {
    var numArr = [];
    var numString = num.toString();

    for (var i = 0; i < numString.length; i++) {
        numArr.push(parseInt(numString.charAt(i)));
    }

    var originalNum = numArr[0];
    var outputArray = [];
    var tempNum = 10;
    var numArrCopy = numArr.slice();


    for (var j = 1; j < numArr.length; j++) {
        if (numArr[j] <= tempNum && numArr[j] >= originalNum){
            tempNum = numArr[j];
        }
    }

    if (tempNum === 10){
        return 'no higher number';
    } else {
        outputArray.push(tempNum);
        var index = numArrCopy.indexOf(tempNum);
        numArrCopy.splice(index, 1);
        // if(index !== numArrCopy.lastIndexOf(tempNum)) {
        //     var m = 0;
        //     while(index !== numArrCopy.lastIndexOf(tempNum)) {

        //             if(numArrCopy[m] === tempNum) {
        //                 outputArray.push(numArrCopy.splice(m, 1));
        //                 m++;
        //             }

        //     }
        // }
        var sortedArray = numArrCopy.sort();
        for (var k = 0; k < sortedArray.length; k++) {
            outputArray.push(sortedArray[k]);
        }
        return parseInt(outputArray.join(''));
    }
};

// var nextHighNum = function(num) {
//     var firstNum = firstNum()
// };




console.log(nextHighNum(1234));
console.log(nextHighNum(4233));
console.log(nextHighNum(7939));
console.log(nextHighNum(6333));
