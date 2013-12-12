//Main Window
Ti.UI.setBackgroundColor("white");

var mWindow= Ti.UI.createWindow({
	title: "Main Window",
	backgroundImage: "Hcover.jpg",
	backgroundRepeat: false

});
var navWindow =Ti.UI.iOS.createNavigationWindow({
	window: mWindow
});

//Label
var viewChar = Ti.UI.createLabel({
	text: "View Characters",
	color: "#fff",
	font: {fontsize: 30, fontFamily: "Arial", fontWeight: "bold"},
	center:0
});

//View
var viewPics = Ti.UI.createView({
	backgroundImage: "HcoverFoot.jpg",
	height: 30,
	bottom: 0
	});
viewPics.add(viewChar);

viewPics.addEventListener("click", function(){
Ti.include('theDwarves.js');
});


//Main Code
mWindow.add(viewChar);
mWindow.add(viewPics);
mWindow.open();
navWindow.open();
