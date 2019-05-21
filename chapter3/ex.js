//Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    return Math.min(a, b);
}

// Check if a number is Even
function isEven(n) {
    n = Math.abs(n);
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    }

    n = n - 2;
    return isEven(n);
}

// Count char in a string
function countBs(str) {
    return str.split('').filter(e => e === 'B').length;
}

function countChar(str, chr) {
    return str.split('').filter(e => e === chr).length;
}