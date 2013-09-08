global.fs = require("fs"),
global.express = require('express'),
global.http = require('http'),
global.path = require('path');

exports.Application = {
  Helpers: {
    merge_objects: function () {
      var target = {},
        args = arguments.length === 1 ? arguments[0] : arguments;
      for (var i = 0; i < args.length; ++i) {
        for (var attr in args[i]) { target[attr] = args[i][attr];}
      }
      return target;
    },

    require_tree: function (dirName) {
      var requees = fs.readdirSync(dirName).map(function(file) {
         return require(dirName + '/' + file);
      });
      return this.merge_objects(requees);
    }
  },
  root: path.resolve(__dirname + '/..'),
  Routes: {},
  app: express(),
  Config: {},
  Controllers: {},
  Models: {},
  main: function() { }
};


