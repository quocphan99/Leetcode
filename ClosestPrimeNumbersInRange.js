/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    
    let primeArr = [];
    for (let i = left; i <= right; i++) {
        if (isPrime(i)){
            primeArr.push(i);
        }
    }


    if (primeArr.length < 2) return [-1, -1];
    if (primeArr.length == 2) return primeArr;

    let curIndex = 0;
    let minDelta = Number.MAX_VALUE;
    for (let i = 1; i < primeArr.length; i++) {
        
        let curDelta = primeArr[i] - primeArr[i - 1];

        if (curDelta < minDelta){
            minDelta = curDelta;
            curIndex = i;
        }
    }

    return [primeArr[curIndex - 1], primeArr[curIndex]];
};


let isPrime = function(n){
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n <= 3) return true;  // 2 and 3 are prime

    if (n % 2 === 0 || n % 3 === 0) return false; // Exclude multiples of 2 and 3

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

let left = 19;
let right = 31;

console.log("Result: " + closestPrimes(left, right));