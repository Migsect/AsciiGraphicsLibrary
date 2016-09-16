"use strict";

var gulp = require("gulp");
var requireDir = require("require-dir");

requireDir("gulp_tasks");

gulp.task("default", ["start-server"]);
