This document briefly explains how to add your own python tasks for the tutor. 

First, download and install CTAT on your machine. For this follow the steps in this tutorial: 
https://github.com/CMUCTAT/CTAT/wiki/Quick-Start#download-ctat

Once you are done, start by creating the interfaces for your tasks via the CTAT HTML Editor:  
https://cdn.ctat.cs.cmu.edu/html-editor/editor.html
You will have to connect your google drive in order to save your created interfaces to your local storage.

Use the predefined blueprint smallTaskBP.ed.html for simple tasks, or bigTaskBP.ed.html for bigger tasks. 
They can be found in the HTML folder of the project. Both already contain the general style of the tutor, 
the specific task you will have to add by yourself. Change topic, level and task to your specific values,
and try to keep the general style of the other tasks. For example, if your topic is data types you could 
name your task D1C1, the first letter representing the topic, and the second the difficulty.The first 
number then represents the specific task in the task pool "Data Types, Level 1".

The Editor provides a rather simple drag and drop system, where you can add text fields, inputs, 
buttons etc. to your interface by simply clicking on them in the component window and dragging them into 
the interface, so you should be able to implement the task interface without any problems.

Once you finished the interface, you will have to implement the CTAT functionalities, like hint messages, 
right or wrong inputs and correct paths. This will be explained in the next paragraph:

-First, open CTAT for HTML and Flash on your computer. 
-Second, under File, click on Launch HTML Interface and choose your html file for which you want to 
 implement the CTAT functionalities. A window with your interface will be opened in your browser, and
 you will see that you have an empty graph window in your CTAT application.
-Next, click on Graph, and then on Create Start State, for which you will be asked to supply a problem 
 name. Choose a name that represents your task. 
-After you created your start state, you can demonstrate your correct answers in your interface in your
 browser. Make sure that Author Mode is on "Demonstrate" in your CTAT application, which is above the 
 graph window. You will see that after you input some values into your interface, states are being created
 in your graph. Those states represent all the states a student can reach in your interface.
-When you defined all correct inputs, make sure to click on done in the end. The path you defined now 
 represents the correct way a student can solve your task.
-If you have multiple correct inputs for an input field, make sure that you define them aswell. You can
 jump to an earlier state in your graph by simply clicking on it.
-You can also add inputs to your path which you think will be common mistakes. For that, you first have to
 demonstrate that value and after that click on the input above the state you just created, and change the 
 action type to Incorrect Action. This will allow you to define a specific hint message just for this 
 wrong step.
-For other inputs that you cannot foresee, you can still define hint messages for every state in your
 graph. For that click on the input above the state, and click on "Edit Hint and Success Messages". There
 you can add hints for the specific step of the task, which you think could be helpful for the students.
-Save your graph via "File -> Save Graph" and choose a name for your graph. This brd file will be the one
 you will need to include in the html interface.

If you did all these steps, the basic functionalities of CTAT should now be working. Feel free to add more 
hints etc. to your graph if you feel like it would be helpful. 

You can now add the html file of your interface to the rest of the tasks in the HTML folder. Make sure to
also include the styles.css file which is automatically generated from the HTML Editor and add it to the 
Assets folder, and add your brd file you created earlier to the FinalBRDs folder.

Once you added your html files, add this to the html code of every task below the predefined scripts: 

<!--own script-->
    
<script src="Scripts/randomization.js"></script>
<script src="Scripts/updateTaskArray.js"></script>
<script src="Scripts/logging.js"></script>
<script>

//Initializing variables needed for our tutor, e.g. question file for the given problem
       
    var myVars =
    {
        question_file: "../FinalBRDs/^brdFile.brd", //change brdFile.brd to the brd file of this task
        tutoring_service_communication: "javascript"
    };

//Defining logging parameters for this task

    CTATConfiguration.set("dataset_level_name1", "^Topic"); //Change topic (e.g. "Data Types")
    CTATConfiguration.set("dataset_level_name2", "^Level"); //difficulty (e.g. "C1")
    CTATConfiguration.set("problem_name", "^ProblemName");  //and the problem name (e.g. "D1C1")

// The CTAT JavaScript code looks for a ctatOnload() function and executes it automatically if it is defined in our tutor.

    function ctatOnload() {
    initTutor(myVars);
    startLogging();
    }
        
//Script for loading the randomized task

    taskLoader();

//done function which determines what happens when the problem is finished

    function myDoneFunction (msg)
    { 
        // Add a problem summary 'msg' xml in case
        // I need to get more information about how well the student did

        location.href = taskSrc+".html";
    }
 
</script>

Also, add this to the beginning of the body segment:

onload="CTATCommShell.commShell.assignDoneProcessor(myDoneFunction);"

So instead of only having:

<body class="body-initial prevent-draggable silex-runtime silex-published">

You will need: 

<body class="body-initial prevent-draggable silex-runtime silex-published" onload="CTATCommShell.commShell.assignDoneProcessor(myDoneFunction);">

Finally, add this script in the body section below all of the ctat content:

<script>
    // update progress bar
    let taskArray_deserialized = JSON.parse(sessionStorage.getItem("taskArray"));

    if(taskArray_deserialized.length>1){
        document.getElementById("progress").innerHTML = "You have "+taskArray_deserialized.length+" more tasks left";
    }else if(taskArray_deserialized.length>1==1){
        document.getElementById("progress").innerHTML = "You have "+taskArray_deserialized.length+" more task left";
    }   
    else{
        document.getElementById("progress").innerHTML = "This is your last task!";
    } 
</script>

In the end, you will have to adapt some variables in the randomization file:
-topics: Please add the name of your topic into the array (how you named the topic in your file names)
-difficulties: If you added another difficulty to all topics, please increment the difficulties variable
-tasksPerPool: If you have more tasks in each task pool, please increment tasksPerPool to the number of tasks

Take into consideration that each task pool has to have the same amount of tasks for the randomization to work.

If you followed all the steps correctly, your task should now be loaded into the tutor. If you still have
some problems with the html file, compare your file to the ones that are already defined, maybe you will
spot a difference there.
