//Define logging parameters 

CTATConfiguration.set("SessionLog", "true");
CTATConfiguration.set("Logging", "ClientToLogServer");
CTATConfiguration.set("dataset_name", "LoggingData");
CTATConfiguration.set("dataset_level_type1", "pool");
CTATConfiguration.set("dataset_level_type2", "task");
CTATConfiguration.set("user_guid", "student1");

CTATConfiguration.set("log_service_url","http://192.168.2.100:20080/data.log");

/*
CTATConfiguration.set("auth_token", "authtoken1");
CTATConfiguration.set("school_name", "CMU");
CTATConfiguration.set("instructor_name", "A Teacher Name");
CTATConfiguration.set("class_name", "22-512");
*/

function startLogging(){
  var loggingLibrary= CTATCommShell.commShell.getLoggingLibrary();
  useDebugging=true;
	loggingLibrary.start ();

  loggingLibrary.assignLogListener (function logListener (aMessage)
  {
    console.log ("Log message: " + aMessage );

  });
}

//Define logging parameters as a class (not used)

class LoggingParameters {
  constructor(sessionLog, logging, datasetName, datasetLevelName1, datasetLevelType1, problemName, userGuid, sessionId, logServiceUrl) {
    this.sessionLog = sessionLog;
    this.logging = logging;
    this.datasetName = datasetName;
    this.datasetLevelName1 = datasetLevelName1;
    this.datasetLevelType1 = datasetLevelType1;
    this.problemName = problemName;
    this.userGuid = userGuid;
    this.sessionId = sessionId;
    this.logServiceUrl = logServiceUrl;
  }
}
