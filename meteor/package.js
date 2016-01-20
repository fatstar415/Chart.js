// package metadata file for Meteor.js
'use strict';

var packageName = 'fatstar415:chart';  // https://atmospherejs.com/fatstar415/chart
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: 'A fork of Chart.js (official) - Responsive, simple, clean and interactive charts using HTML5 <canvas>',
  version: packageJson.version,
  git: 'https://github.com/fatstar415/Chart.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('Chart');
  api.addFiles([
    'Chart.js',
    'meteor/export.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
