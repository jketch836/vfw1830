

//Windows
var mainWindow = Ti.UI.createWindow({
	title: "GoT Window",
	backgroundImage: "Real-Iron-Throne-from-Game-of-Thrones-series_2.jpg",
	backgroundRepeat: false
});

//Label
var HouseSigilText = Ti.UI.createLabel({
	text: "Noble Houses",
	color: "#FFFFFF",
	font: {fontsize: 20, fontFamily: "AmericanTypewriter"},
	height: 40,
	center: 0
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



//Main Code
HouseSigil.add(HouseSigilText);
mainWindow.add(HouseSigil);
mainWindow.open();
var theHouse= require("ArrayDisplayView");
