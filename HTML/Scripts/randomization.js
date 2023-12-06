const taskPools = [];
const tasks = [];

taskPoolAmount = 1; //Amount of task pools with different combinations of class and topic
taskAmount = 1; //Amount of tasks per task pool

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//This function returns an array of task pool numbers in a random order
function randomizeTaskPools(){
    while (taskPools.length<taskPoolAmount){
        generateNewTaskPool(taskPoolAmount);    
    }
    return taskPools;
}

//This function returns a random number for a task pool that has not been generated yet for taskPools
function generateNewTaskPool(){
    let x = getRandomInt(taskPoolAmount);
    for(let i=0; i<taskPools.length;i++){
        if (taskPools[i]==x){
            return;
        }
    }
    taskPools.push(x);
}

//This function returns a random task number for each task pool as an array
function randomizeTasks(){
    for(let i = 0; i<taskPools.length;i++){
        tasks[i]=getRandomInt(taskAmount);
    }
    return tasks;
}

//This function returns an array of arrays consisting of task pool number and task number
function generateTaskBatch(){
    randomizeTaskPools();
    randomizeTasks();
    const taskBatch = [];
    for(let i = 0; i<taskPools.length;i++){
        taskBatch.push([taskPools[i],tasks[i]])
    }
    return taskBatch;
}


function loadTask([a,b]){
    let taskLink = 'pool'+a+'Task'+b;
    return taskLink;
}


//Testing outputs
//console.log(generateTaskBatch());