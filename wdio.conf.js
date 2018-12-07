exports.config = {

  specs: [
      './test/features/**/*.feature',
  ],
  exclude: [
      // 'path/to/excluded/files'
  ],
  maxInstances: 1,

  capabilities: [{
      maxInstances: 1,
      browserName: 'chrome',
      metadata: {
          browser: {
              name: 'chrome',
              version: '70'
          },
          device: 'Ubuntu 18.04',
          platform: {
              name: 'Linux',
              version: '18.04'
          }
      },
  }],
  sync: true,
  // Level of logging verbosity: silent | verbose | command | data | result |
  logLevel: 'error',
  coloredLogs: true,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'cucumber',
  reporters: ['cucumber'],
  reporters: ['multiple-cucumber-html'],
  reporterOptions: {
    htmlReporter: {
        jsonFolder: './tmp',
        reportFolder: './reports',
        pageTitle: "Test Reports",
        reportName: "Test Reports",
        pageFooter: "<div><p>Test Automation</p></div>"
    },
 },
  cucumberOpts: {
      backtrace: false,
      compiler: [
          'js:babel-register',
      ],
      failAmbiguousDefinitions: true,
      failFast: false,
      ignoreUndefinedDefinitions: false,
      name: [],
      snippets: true,
      source: true,
      profile: [],
      require: [
          './src/steps/given.js',
          './src/steps/then.js',
          './src/steps/when.js'
      ],
      snippetSyntax: undefined,
      strict: true,
      tagExpression: 'not @Pending',
      tagsInTitle: false,
      timeout: 20000,
  },

  before: function before() {
      const chai = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
  },

};
