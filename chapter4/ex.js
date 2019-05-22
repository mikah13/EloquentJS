// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end


function range(start, end, step = 1) {
    let length = end - start + 1;

    let array = new Array(length).fill('').map((e, i) => start + i);

    let result = [];
    for (let i = 0; i < length - 1; i += Math.abs(i)) {
        result.push(array[i])
    }
    return step >= 0 ? result : result.reverse();



}

function sum(array) {
    return array.reduce((acc, cur) => acc + cur);
}