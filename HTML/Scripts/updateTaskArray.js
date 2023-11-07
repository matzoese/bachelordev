function taskLoader(){
    // read current array, remove last item, then set current array
    let currentArray = JSON.parse(sessionStorage.getItem("taskArray"));
    currentArray.pop();
    let currentArray_serialized = JSON.stringify(currentArray);
    sessionStorage.setItem("taskArray",currentArray_serialized);

    // if current array is not empty, go to last task in the array, else go to task finished interface
    if(currentArray.length>0){
        taskSrc = loadTask(currentArray[currentArray.length-1]);
    }
    else{
        taskSrc = "tasksFinished";
    }

    //logging for documentation
    console.log(JSON.parse(sessionStorage.getItem("taskArray")));
    console.log(taskSrc);
}
