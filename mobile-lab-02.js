"use strict";
var tasks = ["Hazard", "Mark", "Diego"];
function addTasks(task) {
    var count;
    tasks.push(task);
    console.log("New Task " + task + " added");
    count = tasks.length;
    console.log(count);
    return tasks.length;
}
console.log(addTasks("hello"));
function listAllTask() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
console.log(listAllTask());
function deleteTasks(task) {
    var key = task;
    var index = task.indexOf(key, 0);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return task.length;
}
