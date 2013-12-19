//Window
var cWin = Ti.UI.currentWindow;
var notI;

//Next Image Button
var newImageView = Ti.UI.createView({
	backgroundColor: "#252525",
	borderRadius: 5,
	height:60,
	bottom:0,
	left:5,
	right:5
});

var newImageLabel = Ti.UI.createLabel({
	text: "Next Image",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#fff",
	center:0
});
newImageView.add(newImageLabel);


//Gallery Folder
var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "profilePic");
var folderContents = gallery.getDirectoryListing();


//Pics
var imageView = Ti.UI.createImageView({
			image: "profilePic/" + folderContents[4],
			width: Ti.UI.SIZE / 2,
			height: 300,
			top: 10
	});
//	imageView.push(imageArray);
//Randomize Pics
	newImageView.addEventListener("click", function(){
		var i = Math.floor(Math.random() * folderContents.length);
		
		while(notI === i){
		var i = Math.floor(Math.random(imageView.image) * folderContents.length);
			};
		imageView.image = "profilePic/" + folderContents[i];
		notI = i;
	});



cWin.add(newImageView);
cWin.add(imageView);
