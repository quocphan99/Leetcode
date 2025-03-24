/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) return 0;
    let map = {};


    let max = 0;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        
        let char = s[i];
        if (map[char] != null) {
            i = map[char];
            
            if (counter > max) {
                max = counter;
            }
            counter = 0;
            map = {};
        } else {
            map[char] = i;
            counter++;
        }
    }

    return counter > max ? counter : max;
};

let input = "p";
console.log(lengthOfLongestSubstring(input));