/*
var win = Ti.UI.createWindow({
	top:20,
	//layout: "horizontal"
});


var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "pics");
var folderContents = gallery.getDirectoryListing();


for (var i=0,j=folderContents.length; i<j; i++){
	var myImage = Ti.UI.createImageView({
	image: "pics/" + folderContents[i]
	});
	//win.add(myImage);
}


var numberOfViews=5;

for(var i=0; i<numberOfViews; i++){
	var positionValue= 10/5;
	var newView = Ti.UI.createView({
		backgroundColor:"#333",
		width: 100,
		height:100,
		top:positionValue,
		left:positionValue
	});
	var newLabel = Ti.UI.createLabel({
		text:i+1,
		color: "#fff",
		textAlign: "center"
	});
	newView.add(myImage);
	win.add(newView);
}



var numberOfViews = 20;


var viewContainer = Ti.UI.createScrollView({
	layout:"vertical",
	width: Ti.Platform.displayCaps.platformWidth,
	contentWidth: Ti.Platform.displayCaps.platformWidth
	
});


for(var i=0; i<numberOfViews; i++){
	var positionValue= 10/5;
	var newView = Ti.UI.createView({
		backgroundColor:"#333",
		width: 75,
		height:100,
		top:4,
		left:4,
		right: 4,
		bottom:4
	});
viewContainer.add(newView);
}


win.add(viewContainer);

win.open();

*/

var dwarves = [
	"http://th03.deviantart.net/fs71/PRE/i/2013/016/2/e/chibi__bombur_by_ijen_ekusas-d5rnm61.png",
	"http://th05.deviantart.net/fs71/PRE/i/2013/018/0/a/chibi__dwalin_by_ijen_ekusas-d5ruqfk.png",
	"http://th06.deviantart.net/fs70/PRE/i/2013/017/f/7/chibi__balin_by_ijen_ekusas-d5rr90h.png",
	"http://th03.deviantart.net/fs70/PRE/i/2013/008/3/5/chibi__thorin_by_ijen_ekusas-d5qwmlk.png"
];



var win = Ti.UI.createWindow({
	top:20,
	layout: "horizontal"
});

var theImage = Ti.UI.createImageView({
	image: dwarves[0]
});

var counter= 0;
var status;
var change;

var changeImage = function (){
	if(counter=== dwarves.length){
	counter = 0;
	} else {
	counter++;
	}
	theImage.image = dwarves[counter];
};

var start = function(){
	alert("Images Started");
	change = setInterval(changeImage, 1500);
	status = "start";
};

var stop = function(){
	alert("Stopped");
	clearInterval(change);
	status = "stop";
};

start();

win.addEventListener("click", function(){
	if(status === "stop"){
		start();
	} else{
		stop();
	}
});

win.add(theImage);
win.open();











//Images from http://www.deviantart.com/morelikethis/349114448
