viewPics.addEventListener("click", function(){	
navWindow1.openWindow(gWin, {animate:true});
handle();
});


//Picture Gallery
var gWin = Ti.UI.createWindow({
	title: "The Hobbit Gallery"
});
// var navWindow2 =Ti.UI.iOS.createNavigationWindow({
	// window: gWin
// });


//Gallery
var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var folderContents = gallery.getDirectoryListing();




//Scroll
var viewContainer = Ti.UI.createScrollView({
	layout:"horizontal",
	width: "100%",
	contentWidth: 315,
	backgroundColor: "#fff"
});


//Small to Big Pic
function handle (){
	// Small Pic
	for(var i=0, j = folderContents.length; i<j; i++){
		var newView = Ti.UI.createView({
			backgroundColor: "#545454",
			image: "images/" + folderContents[i],
			title: folderContents[i],
			font: {fontsize: 30, fontFamily: "Arial", fontWeight: "bold"},
			width: 76,
			height: 76,
			top:2,
			left:2,
			right:2,
			link: false
		});
		
		var cast = Ti.UI.createImageView({
			image: newView.image,
			title: newView.title,
			width:100,
			heigth:100,
			link: true
		});
		newView.add(cast);
		viewContainer.add(newView);
	}


};


	//Big pic
	viewContainer.addEventListener("click", function(event){
		console.log(event.source.title);
		if(event.source.link === true){	
			var newWindow = Ti.UI.createWindow({
				title: event.source.title,
				backgroundColor: "8a8a8a"
			});
			var picView = Ti.UI.createImageView({
				image: event.source.image,
				borderColor:"#252525",
				width: Ti.Platform.displayCaps.setPlatformWidth,
				height: Ti.Platform.displayCaps.setPlatormHeight
			});	

			newWindow.add(picView);
			navWindow1.openWindow(newWindow, {animate:true});
		}
	});




gWin.add(viewContainer);
//navWindow2.open();







//Images from http://www.moviemarkers.net/gallery/new-character-pictures-and-production-stills-for-the-hobbit/
//			  http://amandatolleson.deviantart.com
//			  http://heirsofdurin.files.wordpress.com/2013/09/filmsmaug.jpg
//			  http://cf.badassdigest.com/_uploads/images/30711/smaugoriginal__span.jpg
//			  https://p.gr-assets.com/540x540/fit/hostedimages/1379771157/295599.jpg