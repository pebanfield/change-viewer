/**
 * index
 */
var gui = require('nw.gui');
var gitParser = require('change-view-service');

console.log("gitParser.getHistory = " + gitParser.getHistory);
var testPath =
  '/Users/pebanfield/PROJECTS/PERSONAL/change-view/change-view-service/test/data';
gitParser.getHistory(testPath).then(function(commits){

  var commitOne = commits[0];

  console.log("one = " + commitOne.revision);

}).catch(function(e) {
  //Generic catch-the rest, error wasn't TypeError nor
  //ReferenceError
  console.log("error : " + e);
});

gui.Window.get().show();