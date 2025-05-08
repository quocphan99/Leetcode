/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

let obj = function(key, value) {
    this.key = key;
    this.value = value;
}

let Heap = function() {
    this.data = [];
}

Heap.prototype.push = function(val) {
    this.data.push(val);
    this.bubbleUp();
}

Heap.prototype.pop = function() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.data.length > 0) {
        this.data[0] = end;
        this.bubbleDown();
    }
    return top;
}

Heap.prototype.bubbleUp = function() {
    let index = this.data.length - 1;
    const element = this.data[index];
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.data[parentIndex];
        if (element.value <= parent.value) break;
        this.data[index] = parent;
        index = parentIndex;
    }
    this.data[index] = element;
}

Heap.prototype.bubbleDown = function() {
    let index = 0;
    const length = this.data.length;
    const element = this.data[0];
    while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIndex < length) {
            leftChild = this.data[leftChildIndex];
            if (leftChild.value > element.value) {
                swap = leftChildIndex;
            }
        }

        if (rightChildIndex < length) {
            rightChild = this.data[rightChildIndex];
            if ((swap === null && rightChild.value > element.value) || (swap !== null && rightChild.value > leftChild.value)) {
                swap = rightChildIndex;
            }
        }

        if (swap === null) break;

        this.data[index] = this.data[swap];
        index = swap;
    }
    this.data[index] = element;
}

var topKFrequent = function(nums, k) {
    
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    let heap = new Heap();
    for (let key in map) {
        heap.push(new obj(key, map[key]));
    }

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(heap.pop().key));
    }

    return result;
};


let nums = [1];
let k = 1;
console.log(topKFrequent(nums, k)); // Output: [1, 2]