/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if (s.length == 1) return s;
    
    let oddResult = [...Array(s.length).keys()];    
    let curLengthOdd = 0;

    // for odd number of characters
    while (oddResult.length > 0) {
        curLengthOdd += 1;
        
        let newResult = [];

        // remove first and last element
        for (let i = 0; i < oddResult.length; i++) {
            
            let index = oddResult[i];

            if (index - curLengthOdd < 0 || index + curLengthOdd >= s.length) continue;
            if (s[index - curLengthOdd] == s[index + curLengthOdd]) {
                newResult.push(index);
            }
        }

        if (newResult.length == 0) {
            curLengthOdd -= 1;
            break;
        } else {
            oddResult = newResult;
        }
    }

    // for even number of characters
    let evenResult = [];
    let curLengthEven = -1;

    // pre filter for even number
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            evenResult.push(i);
        }
    }

    if (evenResult.length > 0) {
        curLengthEven = 0;
    }

    while (evenResult.length > 0) {
        curLengthEven += 1;
        
        let newResult = [];

        // remove first and last element
        for (let i = 0; i < evenResult.length; i++) {
            
            let index = evenResult[i];
            if (index - curLengthEven < 0 || index + 1 + curLengthEven >= s.length) continue;

            if (s[index - curLengthEven] == s[index + 1 + curLengthEven]) {
                newResult.push(index);
            }
        }

        if (newResult.length == 0) {
            curLengthEven -= 1;
            break;
        } else {
            evenResult = newResult;
        }
    }

    let isEven = curLengthEven >= curLengthOdd;
    let curLength = isEven ? curLengthEven : curLengthOdd;;
    let result = isEven ? evenResult : oddResult;

    if (isEven){
        return s.substring(result[0] - curLength, result[0] + curLength + 2);
    } else {
        return s.substring(result[0] - curLength, result[0] + curLength + 1);
    }
};

let input = "tattarrattat";
console.log(longestPalindrome(input));