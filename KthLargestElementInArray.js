/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heap = [];

    for (let i = 0; i < nums.length; i++) {
        heap.push(nums[i]);

        let curIndex = i;

        // heapify-down
        let parent = Math.floor((i - 1) / 2);
        if (parent < 0) continue;

        while (heap[parent] < heap[curIndex]) {

            // swap
            let tmp = heap[parent];
            heap[parent] = heap[curIndex];
            heap[curIndex] = tmp;

            curIndex = parent;

            parent = Math.floor((curIndex - 1) / 2);
            if (parent < 0) break;
        }
    }

    for (let i = 0; i < k - 1; i++) {
        let last = heap.pop();
        heap[0] = last;

        let curIndex = 0;

        // heapify-up
        while (true) {
            let left = 2 * curIndex + 1;
            let right = 2 * curIndex + 2;
            let largest = curIndex;

            if (left < heap.length && heap[left] > heap[largest]) {
                largest = left;
            }

            if (right < heap.length && heap[right] > heap[largest]) {
                largest = right;
            }

            if (largest == curIndex) break;

            // swap
            let tmp = heap[curIndex];
            heap[curIndex] = heap[largest];
            heap[largest] = tmp;

            curIndex = largest;
        }
    }

    return heap[0];
};

let nums = [3,2,3,1,2,4,5,5,6];
let k = 4;

console.log(findKthLargest(nums, k));