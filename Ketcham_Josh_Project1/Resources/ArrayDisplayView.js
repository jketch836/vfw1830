//Variables
var noNames = 0;
var HouseNames = [
	"Arryn", 
	"Baratheon", 
	"Greyjoy", 
	"Lannister", 
	"Stark", 
	"Tyrell", 
	"Martell", 
	"Targaryen"
	];

//Functions
var nextHouse = function (){
	if (noNames === (HouseNames.length - 1)){
		noNames = 0;
		mainText.text = HouseNames[noNames];
	}else {
		noNames++;
		mainText.text = HouseNames[noNames];
	}
};

var prevHouse = function (){
	if (noNames === 0){
		noNames = (HouseNames.length - 1);
		mainText.text = HouseNames[noNames];
	}else {
		noNames--;
		mainText.text = HouseNames[noNames];
	}
};


//View
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

var mainText = Ti.UI.createLabel({
	//text: noNames + 1 + HouseNames[noNames],
	text: HouseNames[noNames],
	color: "#333",
	font: {fontsize: 16, fontFamily: "AmericanTypewriter"},
	height: 50,
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
previous.addEventListener("click", prevHouse);
next.addEventListener("click", nextHouse);
next.add(nextText);
previous.add(previousText);
mainView.add(mainText);

mainWindow.add(mainView);
mainWindow.add(next);
mainWindow.add(previous);


