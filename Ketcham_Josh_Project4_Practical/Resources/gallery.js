var menuWindow = Ti.UI.currentWindow;


//Next Image Button
var newImageView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 5,
	height:40,
	bottom:20,
	left:5,
	right:5,
	zIndex:10
});

var newImageLabel = Ti.UI.createLabel({
	text: "Next Image",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#000",
	center:0
});
newImageView.add(newImageLabel);


//Gallery Folder
var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "profilePic");
var folderContents = gallery.getDirectoryListing();


//image
var j = 10;

var imageView = Ti.UI.createImageView({
			image: "profilePic/" + folderContents[4],
			width: Ti.UI.SIZE / 2,
			height: 300,
			top: 10,
			zIndex:20
		});



	//Show pic
	newImageView.addEventListener("click", function(){
		var i = Math.floor(Math.random() * 10);
		
		while(i === notI){
			i = Math.floor(Math.random() * folderContents.length);
			};
				var notI = i;
				imageView.image = "profilePic/" + folderContents[i];
	});




menuWindow.add(newImageView);
menuWindow.add(imageView);