// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######


let length = 7;
let char = '#'
for (let i = 1; i < length; i++) {
    printStar(i, char);
}


function printStar(n, char) {
    str = '';
    for (let i = 0; i < n; i++) {
        str += char;
    }
    console.log(str);
}



// FIZZBUZZ

function divisiblyByThree(n) {
    return n % 3 === 0 && n % 5 !== 0;
}

function divisibleByFive(n) {
    return n % 5 === 0 && n % 3 !== 0;
}

function divisibleByThreeAndFive(n) {
    return n % 3 === 0 && n % 3 === 0;
}

let array = new Array(100).fill('').map((e, i) => i + 1);
array.forEach(e => {
    if (divisiblyByThree(e)) {
        console.log("Fizz");
    } else if (divisibleByFive(e)) {
        console.log("Buzz");
    } else if (divisibleByThreeAndFive(e)) {
        console.log("FizzBuzz");
    }
})


// CHESSBOARD
let size = 8;
let board = new Array(size).fill('').map((e, r) => new Array(size).fill('').map((c, i) => {
    if (r % 2 === 0) {
        if (i % 2 === 0) {
            return ' ';
        }
        return '#';
    } else {
        if (i % 2 === 0) {
            return '#';
        }
        return ' ';
    }
}));

board.forEach(r => {
    printLine(r);
})

function printLine(arr) {
    console.log(arr.join(''));
}