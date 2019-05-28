/**
 * Write a function that wraps this clunky function 
 * and just keeps trying until a call succeeds,
 *  after which it returns the result.
 */

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    let done = false;
    let num = Math.random();
    while (!done) {
        try {
            if (num < 0.2) {
                done = true;
            } else {
                throw new MultiplicatorUnitFailure("Klunk");
            }
        } catch (ex) {
            console.log(ex);
            num = Math.random();
        }
    }
    return a * b;
}

console.log(reliableMultiply(8, 8));
// → 64

/**
 * Write a function called withBoxUnlocked that takes a 
 * function value as argument, unlocks the box, runs 
 * the function, and then ensures that the box is locked 
 * again before returning, regardless of whether the argument 
 * function returned normally or threw an exception.
 */
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    // Your code here.
    box.unlock();
    try {
        body();
    } catch (ex) {
        console.log(ex);
    } finally {
        box.lock();
    }


}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true