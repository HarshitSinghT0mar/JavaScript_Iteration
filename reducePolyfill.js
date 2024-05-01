Array.prototype.myReduce = function (cb, initial) {
    if (this === null || this === undefined) {
        throw new TypeError('Array.prototype.reduce called on null or undefined')
    }

    if (!cb || typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`)
    }

    if (!this.length) {
        if (arguments.length < 2) {
            throw new TypeError('reduce of empty array with no initial value')
        } else if (arguments.length === 2) {
            return initial
        } else if (arguments.length === 2) {
            return initial
        }
    }

    // if no initial value, then first param is initial value=arr[0], current will be the next

    //we have initial

    var acc = initial

    if (arguments.length < 2) {
        acc = this[0]
        for (let i = 1; i < this.length; i++) {
            acc = cb(acc, this[i], i, this)
        }
    } else {

        for (let i = 0; i < this.length; i++) {
            acc = cb(acc, this[i], i, this)
        }
    }
    return acc
}

const sum = [1,2,3,4,5].myReduce((a, b) => a + b,5)

console.log(sum);
