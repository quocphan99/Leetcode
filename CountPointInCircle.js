/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        let counter = 0;
        
        for (let j = 0; j < points.length; j++) {
            let point = points[j];

            if ((point[0] - query[0]) * (point[0] - query[0]) + (point[1] - query[1]) * (point[1] - query[1]) <= query[2] * query[2]){
                counter++;
            }
        }

        result.push(counter);
    }

    return result;
};

let input1 = [];
input1.push([1,3],[3,3],[5,3],[2,2]);
let input2 = [];
input2.push([2,3,1],[4,3,1],[1,1,2]);

let result = countPoints(input1, input2);
console.log("Result: " + result);