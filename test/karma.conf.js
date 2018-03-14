const webpackConfig = require('../build/webpack.test.config');

module.exports = function (config) {
	var _config = {
		basePath: '',

		frameworks: ['mocha', 'chai'],

		mime: {
			'text/x-typescript': ['ts','tsx']
		},

		files: [
			{pattern: './main.ts', watched: false, include: true}
		],

		preprocessors: {
			'main.ts': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
		},

		webpackServer: {
			noInfo: true
		},

		reporters: ['progress', 'mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome_with_DataDir'],
		customLaunchers: {
			Chrome_with_DataDir: {
				base: 'Chrome',
				chromeDataDir: 'c:\\temp'
			}
		},
		singleRun: true
	};

	config.set(_config);
};