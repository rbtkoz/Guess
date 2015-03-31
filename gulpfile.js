//require gulp and assign it to var gulp
var gulp = require("gulp");
//require gulp browserify and assign to var
var browserify = require("gulp-browserify");

//set up a task called scripts
//the src input of this is going to be the app.js file
gulp.task("scripts", function(){
  //the src input of this is going to be the app.js file
  //going to be piped into browserify(we defined above and is a function)
  //will be output to destination dist
  //added stringify through browserify to use html files
  gulp.src("scripts/app.js").pipe(browserify()).pipe(gulp.dest("dist"))
});
  //create gulp task watch, that watches and executes scripts task
gulp.task("watch", function(){
  gulp.watch("./scripts/**", ["scripts"]);
  gulp.watch("./html/**", ["scripts"]);


})

//when you run gulp, run default taks, which will run scripts and watch

gulp.task("default",["scripts", "watch"])
//keep gulp running during production and look out for errors
