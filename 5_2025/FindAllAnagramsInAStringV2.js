/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // window sliding
    let resultMap = {};

    for (let i = 0; i < p.length; i++) {
        let char = p[i];
        resultMap[char] = (resultMap[char] || 0) + 1;
    }

    let counter = Object.keys(resultMap).length;
    let begin = 0;
    let end = 0;

    let result = [];

    while(end < s.length) {
        let char = s[end];
        if (resultMap[char] !== undefined) {
            resultMap[char]--;
            if (resultMap[char] === 0) {
                counter--;
            }
        }

        end++;

        while(counter === 0) {
            let char = s[begin];
            if (resultMap[char] !== undefined) {
                resultMap[char]++;
                if (resultMap[char] > 0) {
                    counter++;
                }
            }

            if (end - begin === p.length) {
                result.push(begin);
            }
            begin++;
        }
    }

    return result;
};


let s = "aaabb";
let p = "bb";
console.log(findAnagrams(s, p)); // Output: [0, 6]