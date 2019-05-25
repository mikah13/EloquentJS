/**
 * Write a class Vec that represents a vector 
 * in two-dimensional space. It takes x and y 
 * parameters (numbers), which it should save 
 * to properties of the same name.
 * Give the Vec prototype two methods, 
 * plus and minus, that take another vector 
 * as a parameter and return a new vector
 *  that has the sum or difference of the two 
 * vectors’ (this and the parameter) x and
 *  y values.
 */
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus = (vec) => {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus = (vec) => {
        return new Vec(vec.x - this.x, vec.y - this.y)
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


}
Vec.prototype.toString = function() {
    return { this: x, this: y };
}

// Your code here.

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


/**
 * Write a class called Group (since Set is already taken). 
 * Like Set, it has add, delete, and has methods. Its constructor
 *  creates an empty group, add adds a value to the group 
 * (but only if it isn’t already a member), delete removes
 *  its argument from the group (if it was a member), and has 
 * returns a Boolean value indicating whether its argument is a member of the group.
 *  Use the === operator, or something equivalent such as indexOf,
 *  to determine whether two values are the same.
 */

class Group {
    constructor() {
        this.array = [];
    }

    contain = el => {
        return this.array.indexOf(el) !== -1;
    }
    static from = array => {
        let group = new Group();
        array.forEach(el => {
            if (!group.has(el)) {
                group.add(el);
            }
        })
        return group;
    }

    has = el => {
        return this.contain(el);
    }

    add = el => {
        if (!this.has(el)) {
            this.array.push(el)
        }
    }

    delete = el => {
        if (this.has(el)) {
            this.array.splice(this.array.indexOf(el), 1);
        }
    }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false