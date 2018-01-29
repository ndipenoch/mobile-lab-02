let tasks: Array<string> = ["Hazard","Mark","Diego"]; 

function addTasks(task:string): number{

    let count:number;
    tasks.push(task);

 console.log("New Task "+task+" added")
 count = tasks.length;
 console.log(count);

   return  tasks.length

}
console.log(addTasks("hello"));

function listAllTask(){
    tasks.forEach(function(task){
        console.log(task)
    })
}

console.log(listAllTask());

function deleteTasks(task:string): number{

    let key: string=task;
    let index:number=task.indexOf(key,0);
    if(index>-1){
        tasks.splice(index,1);
    }
    return task.length;

}


