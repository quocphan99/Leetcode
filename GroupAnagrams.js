/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    /* @type {resultData} */
    let storedHash = {};

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];

        let hash = createHash(str);
        if (!storedHash[hash]) {
            storedHash[hash] = [str];
        } else {
            storedHash[hash].push(str);
        }
    }

    return Object.keys(storedHash).map(key => storedHash[key]);
};

let createHash = function (str) {
    
    let strs = str.split('');
    strs.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

    return strs.join('');
}

let strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));