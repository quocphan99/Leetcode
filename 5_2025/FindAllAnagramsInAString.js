/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    // prepare
    let resultList = createFrequencyCountList(p);
    let hashMap = {};
    for (let i = 0; i < p.length; i++) {
        let char = p[i];
        hashMap[char] = true;
    }

    let markedList = [];
    markedList.length = s.length;
    markedList.fill(true);    

    // pre process
    let curIndex = 0;
    while (curIndex < s.length) {
        if (!hashMap[s[curIndex]]) {
            markedList.fill(false, curIndex - p.length + 1, curIndex);
        }
        curIndex++;
    }
    
    let result = [];
    for (let i = 0; i < s.length - p.length + 1; i++) {
        if (markedList[i] && checkAnagramAtIndex(s, resultList, i, p.length)) {
            result.push(i);
        }
    }

    return result;
};

let checkAnagramAtIndex = function(s, resultList, index, length) {
    let str = s.slice(index, index + length);
    let arr = createFrequencyCountList(str);

    return compareTwoList(resultList, arr);
}

let createFrequencyCountList = function (str) {
    let arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        arr[str.charCodeAt(i) - 97]++;
    }

    return arr;
}

let compareTwoList = function (list1, list2) {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) {
            return false;
        }
    }

    return true;
}

let s = "aaabb";
let p = "bb";
console.log(findAnagrams(s, p)); // Output: [0, 6]