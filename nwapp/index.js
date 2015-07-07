/**
 * index
 */
var gui = require('nw.gui');
var gitParser = require('change-view-service/parser');

gitParser.getHistory();

gui.Window.get().show();