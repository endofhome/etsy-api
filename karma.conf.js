module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/unit/*.js'
    ],

    exclude: [],

    port: 3000,

    browsers: [
      'PhantomJS'
    ],

    plugins: [
    ],

	preprocessors: {
	},

    singleRun: false,

    colors: true,

    logLevel: config.LOG_INFO

  });
};
