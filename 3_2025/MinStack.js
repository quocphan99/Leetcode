
var MinStack = function() {
    this.stack = [];
    this.curMin = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.curMin == null) {
        this.curMin = val;
    } else {
        this.curMin = Math.min(val, this.curMin);
    }

    this.stack.push({val: val, min: this.curMin});
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length == 1) {
        this.curMin = null;
    } else {
        this.curMin = this.stack[this.stack.length - 2].min;
    }
    return this.stack.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min;
};
