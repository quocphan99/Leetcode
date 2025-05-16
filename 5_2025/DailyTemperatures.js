/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let topTemperatures = [temperatures.length - 1];
    let result = [0];

    for (let i = temperatures.length - 2; i >= 0; i--) {
        let curTemp = temperatures[i];

        topTemperatures = insertToArray(topTemperatures, temperatures, i);

        if (topTemperatures.length == 1) {
            result.push(0);
        } else {
            if (temperatures[topTemperatures[topTemperatures.length - 1]] == curTemp) {
                result.push(topTemperatures[topTemperatures.length - 2] - i);
            } else {
                result.push(topTemperatures[topTemperatures.length - 1] - i);
            }
        }
    }

    return result.reverse();
}

let insertToArray = function(arr, temp, index) {

    for (let i = arr.length - 1; i >= 0; i--) {

        if (temp[arr[i]] > temp[index]) {
            arr.push(index);
            return arr;
        } else if (temp[arr[i]] == temp[index]) {
            arr[i] = index;
            return arr;
        } else {
            arr.pop();
        }
    }

    return [index];
}

temperatures = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]