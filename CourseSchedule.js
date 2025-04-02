/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let map = {};
    let finishedCourseMap = {};

    for (let i = 0; i < numCourses; i++){
        map[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++){
        let [course, pre] = prerequisites[i];
        map[course].push(pre);
    }

    let finishedCourses = Object.keys(map).filter(course => map[course].length === 0);

    if (finishedCourses.length === 0) return false;
    if (finishedCourses.length === numCourses) return true;

    for (let i = 0; i < finishedCourses.length; i++){
        finishedCourseMap[finishedCourses[i]] = true;
    }

    let notFinishedCourses = Object.keys(map).filter(course => map[course].length > 0);
    notFinishedCourses.sort((a, b) => map[a].length - map[b].length);
    let flagFounded = true;
    let temp;

    while (notFinishedCourses.length > 0 && flagFounded){
        temp = [];
        flagFounded = false;
        
        for (let i = 0; i < notFinishedCourses.length; i++){
            let course = notFinishedCourses[i];
            let pre = map[course];
            let canFinish = pre.every(p => finishedCourseMap[p]);
            if (canFinish){
                finishedCourseMap[course] = true;
                flagFounded = true;
            } else {
                temp.push(course);
            }
        }
        notFinishedCourses = temp;
    }

    return notFinishedCourses.length === 0;
};

let numCourses = 2;
let prerequisites = [[1,0],[0,1]];

console.log(canFinish(numCourses, prerequisites));