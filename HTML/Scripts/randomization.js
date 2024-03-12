/*taskPoolAmount = 1; //Amount of task pools with different combinations of class and topic
taskAmount = 1; //Amount of tasks per task pool
const tasks = [];
const taskPools = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//This function returns an array of task pool numbers in a random order
function randomizeTaskPools(){
    while (taskPools.length<taskPoolAmount){
        generateNewTaskPool(taskPoolAmount);
    }
    return taskPools
}

//This function returns a random number for a task pool that has not been generated yet for taskPools
function generateNewTaskPool(){
    let x = getRandomInt(taskPoolAmount);
    for(let i=0; i<taskPools.length;i++){
        if (taskPools[i]==x){
            return
        }
    }
    taskPools.push(x);
}

//This function returns a random task number for each task pool as an array
function randomizeTasks(){
    for(let i = 0; i<taskPools.length;i++){
        tasks[i]=getRandomInt(taskAmount);
    }
    return tasks
}

//This function returns an array of arrays consisting of task pool number and task number
function generateTaskBatch(){
    randomizeTaskPools();
    randomizeTasks();
    const taskBatch = [];
    for(let i = 0; i<taskPools.length;i++){
        taskBatch.push([taskPools[i],tasks[i]]);
    }
    return taskBatch
}


function loadTask([a,b]){
    let taskLink = 'pool'+a+'Task'+b;
    return taskLink
}


//Testing outputs
console.log(generateTaskBatch());
*/

//Generate the file names directly
const topics = ['L','V'];
const difficulties = 2;
const taskPools = [];
const randomizedTasks = [];
const taskAmount = topics.length*difficulties; //amount of tasks to cover every task pool
const tasksPerPool = 3; //Amount of tasks per task pool

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Generate all combinations of topics and difficulties and store in taskPools

function generateTaskPools(){
    for (i = 0; i<topics.length; i++){
        for (j = 0; j<difficulties;j++){
            taskPools.push([topics[i],'C'+(j+1)])
        }
    }
}

//This function returns a random task pool which has not been generated yet (e.g [V, C0])
function generateRandomizedTaskPool(){
    generateTaskPools();
    let x = getRandomInt(taskAmount)
    for(let i=0; i<randomizedTasks.length;i++){
        if (randomizedTasks[i]==taskPools[x]){
            return
        }
    }
    randomizedTasks.push(taskPools[x]);
}

//Generates the task batch for the user
function generateTaskBatch(){

    while(randomizedTasks.length<taskAmount)
        generateRandomizedTaskPool();

    //adds specific task number for each task pool
    for(i=0; i<taskAmount;i++){
        x = getRandomInt(tasksPerPool);
        randomizedTasks[i][0]=randomizedTasks[i][0]+(x+1);
    }
    
    return randomizedTasks
}

function loadTask([a,b]){
    let taskLink = a+b;
    return taskLink
}



//Testing
//generateTaskBatch();
//console.log(randomizedTasks);