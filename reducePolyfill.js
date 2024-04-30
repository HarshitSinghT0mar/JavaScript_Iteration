Array.prototype.myReduce = function (cb,initial) {
    if (this === null || this === undefined) {
    throw new TypeError('Array.prototype.reduce called on null or undefined')
    }
    
    if (!cb || typeof cb !== 'function') {
        throw new TypeError(`${cb} is not a function`)
    }

    if (!this.length) {
        if (arguments.length < 2) {
            throw new TypeError('reduce of empty array with no initial value')
        } else if(arguments.length===2) {
            return initial
        }
    }
   
}

