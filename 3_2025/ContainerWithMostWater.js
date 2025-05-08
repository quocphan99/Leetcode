/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    if (height.length == 2){
        return Math.min(height[0], height[1]);
    }

    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;
    while (left < right){
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

let height = [1,1];
console.log(maxArea(height));