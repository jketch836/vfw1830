//Main Window
Ti.UI.setBackgroundColor("white");

var mWin= Ti.UI.createWindow({
	title: "Main Window",
	backgroundImage: "Hcover.jpg",
	backgroundRepeat: false

});

var navWindow1 =Ti.UI.iOS.createNavigationWindow({
	window: mWin
});


//Sample View
var samplePic1 = Ti.UI.createView({
	backgroundColor: "#000"
});

var samplePic2 = Ti.UI.createView({
	backgroundColor: "#48b"
});

var samplePic3 = Ti.UI.createView({
	backgroundColor: "#246"
});

var viewImage1 = Ti.UI.createImageView({
	image: "images/Bilbo.jpg",
	height:150,
	width: 200
});

var viewImage2 = Ti.UI.createImageView({
	image: "images/Smaug1937.jpg",
	height:150,
	width: 200
});

var viewImage3 = Ti.UI.createImageView({
	image: "images/the-hobbit-photo1.jpg",
	height:Ti.UI.FIT,
	backgroundColor: "#625f66"
});


samplePic1.add(viewImage1);
samplePic2.add(viewImage2);
samplePic3.add(viewImage3);


var samplePics = Ti.UI.createScrollableView({
	width: 130,
	height: 130,
	top: 133,
	backgroundColor:"#fff",
	views: [samplePic1, samplePic2, samplePic3],
	showPagingControl: true,
	pagingControlColor: "#252525"
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

// viewPics.addEventListener("click", function(){
// Ti.include('theDwarves.js');
// handle();
// });

var data = require('theDwarves');
//Main Code
mWin.add(viewPics);
mWin.add(samplePics);
navWindow1.open();

