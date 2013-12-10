

var mWindow= Ti.UI.createWindow({
	title: "Noble Houses of Westros",

});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mWindow
});

var houseTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.PLAIN
});


mWindow.add(houseTable);
navWindow.open();
var nobleHouse = require('HouseMembers');