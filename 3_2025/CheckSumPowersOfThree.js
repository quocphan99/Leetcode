/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {

    let remain = n;
    let curRemain = n;
    let maxCount = n;
    let powerArr = [];
    let hashMap = {};
    let counter = 0;
    while (remain >= 3) {


        while (remain >= 3){
            remain = remain / 3;
            counter++;
        }

        // counter already counted
        if (hashMap[counter]) return false;

        curRemain = curRemain - Math.pow(3, counter);
        remain = curRemain;

        powerArr.push(counter);
        hashMap[counter] = true;
        counter = 0;
    }

    if (remain == 1){
        powerArr.push(0);
        remain = 0;
    }

    console.log(powerArr);
    return remain == 0;
};

let input = 12;
let result = checkPowersOfThree(input);
console.log(result);