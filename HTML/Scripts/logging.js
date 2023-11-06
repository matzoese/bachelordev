//Define logging parameters as a class

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
