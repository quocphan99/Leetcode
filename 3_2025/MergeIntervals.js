/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let curInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let nextInterval = intervals[i];

        if (curInterval[1] >= nextInterval[0]) {
            curInterval[1] = Math.max(curInterval[1], nextInterval[1]);
        } else {
            result.push(curInterval);
            curInterval = nextInterval;
        }
    }

    result.push(curInterval);
    return result;
};

intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals)); // [[1,6],[8,10],[15,18]]