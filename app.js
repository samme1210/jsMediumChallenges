/*
    Q1 - using a function to solve arthimatic series

function series (num) {
    let sum = 0;
    for (i = 0; i <= num.length; i++) {
        sum = sum + i;
    }
    return sum
}

console.log(series(10));
*/
/*
    Q2 - return time in 00:00 format


function calcTime(seconds) {
    let timerSeconds = seconds % 60;
    let timerMins = Math.floor(seconds / 60);

    if (timerMins.toString.length === 1) {
        timerMins = '0' + timerMins;
    }
    return timerMins + ':' + timerSeconds;
}

console.log(calcTime(400));
*/
/*
    Q3 - return the biggest num in an array


function getMax(arr) {
    let max = arr[0];
    for (i = 0; i < arr.length; i ++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max;
}

console.log(getMax([30, 590, 600]))
*/

/* 
    Q4 - reverse a string (somehow used a decrementing for loop by accident)

let newStr = ''

function reverseAString(str) {
    for (i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr;
}

console.log(reverseAString('abc'));
*/

/*
    Q5 - return array filled with 0's

// using for loop
function zeroArray(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        newArr[i] = 0)
    }
    return newArr
}

//using ".map"
function zeroArray(arr) {
let newArr = arr.map(elem => 0);
return newArr;
}

//using ".fill"
function zeroArray(arr) {
    return new Array(arr.length).fill(0);
}

console.log(zeroArray([5, 'this', 45, 667]));
*/

/*
    Q6 - filter out the apples 

// using for loop
function badApples(arr) {
    newArr = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== 'apples') {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// using '.filter'

function badApples(arr) {
    return arr.filter(elem => elem !== 'apples');
}

console.log(badApples(['oranges', 'apples', 'bananas', 'apples']));
*/

/* 
    Q6 - truthy values return true, falsy return false

//using for loop
function trueOrFalse (arr) {
let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (!!arr[i] == true) {
            newArr.push(arr[i] = true)
        } else if (!!arr[i] == false) {
            newArr.push(arr[i] = false)
        }
    }
    return newArr
}


//using '.map'
function trueOrFalse(arr) {
    return arr.map(elem => !!elem)
}

console.log(trueOrFalse(['', null, 6, 'apples', undefined, 8]));
*/