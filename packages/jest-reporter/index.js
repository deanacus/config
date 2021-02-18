class Reporter {
  constructor(globalConfig, options) {
    this.config = globalConfig;
  }

  onRunStart(aggregatedResults, options) {
    console.log('onRunStart');
  }

  onTestStart(test) {
    console.log('onTestStart');
  }

  onTestResult(test, testResult, aggregatedResults) {
    console.log('onTestResult');
  }

  onRunComplete(test, runResults) {
    console.log('onRunComplete');
  }

  getLastError() {
    console.log('getLastError');
  }
}
