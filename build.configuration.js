module.exports = {
  dist_dir: 'dist',
	karma_bootstrap_js: 'karma-require-conf.js',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    mocha: [ 'src/**/*.spec.js' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
    ]
  },

  vendor_files: {
    js: [
        'bower_components/angular/angular.js'
    ],
    css: [
    ],
    assets: [
    ]
  }
};