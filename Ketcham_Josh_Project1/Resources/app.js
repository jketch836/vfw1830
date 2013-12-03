
//Windows
var mainWindow = Ti.UI.createWindow({
	title: "GoT Window",
	backgroundImage: "silver.jpg",
	backgroundRepeat: false
	,
});


//Views
var HouseSigil = Ti.UI.createView({
	backgroundColor: "#545454",
	borderRadius: 10,
	height: 40,
	top: 20,
	right: 5,
	left: 5
});

var mainView = Ti.UI.createView({
	backgroundColor: "#FFFFFF",
	borderRadius: 10,
	height: Titanium.UI.SIZE,
	right: 5,
	left: 5,
});

var previous = Ti.UI.createView({
	backgroundColor: "#545454",
	borderRadius: 5,
	height: Titanium.UI.SIZE,
	bottom: 50,
	right: 200,
	left: 0
});

var next = Ti.UI.createView({
	backgroundColor: "#545454",
	borderRadius: 5,
	height: Titanium.UI.SIZE,
	bottom: 50,
	right: 0,
	left: 200
});


//Labels
var HouseSigilText = Ti.UI.createLabel({
	text: "House Sigil",
	color: "#FFFFFF",
	font: {fontsize: 20, fontFamily: "AmericanTypewriter"},
	height: 40,
	center: 0
});

var mainText = Ti.UI.createLabel({
	text: "House Stark",
	color: "#333",
	font: {fontsize: 16, fontFamily: "AmericanTypewriter"},
	height: 30,
	center: 0
});

var previousText = Ti.UI.createLabel({
	text: "Previous",
	color: "#FFFFFF",
	font: {fontsize: 14, fontFamily: "AmericanTypewriter"},
	height: 30,
	center: 0
});

var nextText = Ti.UI.createLabel({
	text: "Next",
	color: "#FFFFFF",
	font: {fontsize: 14, fontFamily: "AmericanTypewriter"},
	height: 30,
	center: 0
});


//Main Code
next.add(nextText);
previous.add(previousText);
mainView.add(mainText);
HouseSigil.add(HouseSigilText);
mainWindow.add(HouseSigil);
mainWindow.add(mainView);
mainWindow.add(next);
mainWindow.add(previous);
mainWindow.open();