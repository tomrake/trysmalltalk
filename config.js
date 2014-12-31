/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "helios/showdown": "bower_components/showdown/src/showdown",
    "jquery": "bower_components/jquery/jquery",
    "requireJS": "node_modules/requirejs/require",
    "codemirror": "bower_components/codemirror",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui.min",
    "require-css": "bower_components/require-css",
    "amber_lib/es5-shim": "bower_components/es5-shim",
    "mousetrap": "bower_components/mousetrap/mousetrap",
    "bootstrap2.3.2": "bower_components/bootstrap2.3.2/bootstrap",
    "jquery.blockUI": "bower_components/blockui/jquery.blockUI",
    "helios": "bower_components/helios/src",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "amber": "bower_components/amber/support",
    "amber_vm": "bower_components/amber/support/deprecated-vm-files",
    "amber_vm/_st": "bower_components/amber/support/deprecated-vm-files/as-receiver",
    "amber_css": "bower_components/amber/support/resources",
    "amber_core": "bower_components/amber/src",
    "amber-ide-starter-dialog": "bower_components/amber-ide-starter-dialog/lib/idestarter",
    "amber-trysmalltalk": "src"
  },
  "rjs_comment1": "require.min should be removed",
  "rjs_comment2": "it's backward compatibility hack if config finds",
  "rjs_comment3": "support/requirejs before node_modules/requirejs;",
  "rjs_comment4": "the former will go away in 0.14.0",
  "shim": {
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery"
      ]
    },
    "bootstrap2.3.2/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap2.3.2/css/bootstrap"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  },
  "map": {
    "*": {
      "css": "require-css/css"
    }
  }
});