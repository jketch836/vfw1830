

var mWindow= Ti.UI.createWindow({
	title: "House Stark and Lannister"
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mWindow
});



var table= Ti.UI.createTableView();


mWindow.add(table);
navWindow.open();
var nobleHouse = require('HouseMembers');