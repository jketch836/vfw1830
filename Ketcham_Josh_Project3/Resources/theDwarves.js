//Picture Gallery
var win = Ti.UI.createWindow({
	title: "The Hobbit Gallery",
	backgroundColor: "#000",
//	layout: "horizontal"

});
var navWindow =Ti.UI.iOS.createNavigationWindow({
	window: win
});

//Scroll
var viewContainer = Ti.UI.createScrollView({
	layout:"horizontal",
	width: Ti.UI.FILL,
	contentWidth: 315
});

//Gallery
var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var folderContents = gallery.getDirectoryListing();

var numberOfViews= folderContents.length;


for(var i=0; i<numberOfViews; i++){
	var newView = Ti.UI.createView({
		backgroundColor: "#545454",
		width: 76,
		height: 76,
		top:2,
		left:2,
		right:2
	});
	
	var cast = Ti.UI.createImageView({
		image: "images/" + folderContents[i]
	});
	
//	var newLabel = Ti.UI.createLabel({
//		color: "#00000",
//		textAlign: "center"
//	});

	newView.add(cast);
	viewContainer.add(newView);
	
}

viewContainer.add(newView);

//Main Menu Button
var mainMenu = Ti.UI.createLabel({
	text: "Back to Main Menu",
	color: "#fff",
	font: {fontsize: 30, fontFamily: "Arial", fontWeight: "bold"},
	center:0
});

var viewMainMenu = Ti.UI.createView({
	backgroundImage: "HcoverFoot.jpg",
	height: 20,
	bottom: 0
	});
viewMainMenu.add(mainMenu);

viewMainMenu.addEventListener("click", function(){
Ti.include('app.js');
});


win.add(viewContainer);
win.add(mainMenu);
win.add(viewMainMenu);
win.open();
navWindow.open();









//Images from http://www.moviemarkers.net/gallery/new-character-pictures-and-production-stills-for-the-hobbit/
//			  http://amandatolleson.deviantart.com
//			  http://heirsofdurin.files.wordpress.com/2013/09/filmsmaug.jpg
//			  http://cf.badassdigest.com/_uploads/images/30711/smaugoriginal__span.jpg
//			  https://p.gr-assets.com/540x540/fit/hostedimages/1379771157/295599.jpg