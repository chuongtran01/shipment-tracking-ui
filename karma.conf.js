// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {

  // Default browsers to run tests in
  let browsers = ['Chrome'];

  // Check if the CI flag is set in the environment variables
  if (process.env.CI) {
    browsers = ['ChromeHeadlessCI'];
  }

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/file-transfer-ui-angular'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcov' }
      ]
    },
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['progress', 'kjhtml', 'coverage-istanbul', 'junit'],
    junitReporter: {
      outputDir: 'coverage',
      outputFile: 'junit.xml',
      useBrowserName: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: browsers,
    singleRun: false,
    restartOnFileChange: true
  });
};
