

var mWindow= Ti.UI.createWindow({
	title: "House Stark and Lannister",

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