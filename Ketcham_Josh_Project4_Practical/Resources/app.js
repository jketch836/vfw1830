//Window
var mWin = Ti.UI.createWindow({
	backgroundImage:'westros.jpg',
	layout: "horizontal",
	title: "Menu",
	font: {fontSize: 24, fontFamily: "Georgia", fontColor: "FF0000", fontWeight: "bold"}
});

var navWin1 =Ti.UI.iOS.createNavigationWindow({
	window: mWin
});


var dataLaunch = require('launchPage');

//Main Code

navWin1.open();