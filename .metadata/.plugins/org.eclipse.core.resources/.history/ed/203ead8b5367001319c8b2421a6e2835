var galleryView = Ti.UI.createView({
	backgroundColor: "#FF0000",
	borderRadius: 10,
	height:50,
	top:80,
	left:10,
	right:10,
	file: 'gallery.js'
});

var galleryLabel = Ti.UI.createLabel({
	text: "Picture Gallery",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#000",
	left:20
});

galleryView.addEventListener("click", function(event){
	var gWin = Ti.UI.createWindow({
		backgroundColor: "#FF0000",
		//layout: "horizontal",
		text: 'Gallery',
		font: {fontSize: 24, fontFamily: "Georgia"},
		url: event.source.file
	});
	navWin1.openWindow(gWin, {animate:true});
});



var bioView = Ti.UI.createView({
	backgroundColor: "#FFD700",
	borderRadius: 10,
	height:50,
	top:80,
	left:10,
	right:10,
	file: 'bioTable.js'
});

var bioLabel = Ti.UI.createLabel({
	text: "BioGraphy",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#000",
	left:20
});

bioView.addEventListener("click", function(event){
	var bioWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		url: event.source.file
	});
	navWin1.openWindow(bioWindow, {animate:true});
});



var customView = Ti.UI.createView({
	backgroundColor: "#808080",
	borderRadius: 10,
	height:50,
	top:80,
	left:10,
	right:10,
	file: 'custom.js'
});

var customLabel = Ti.UI.createLabel({
	text: "Custom ______",
	font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "bold"},
	color: "#fff",
	left:20
});

customView.addEventListener("click", function(event){
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		url: event.source.file
	});
	navWin1.open();
});














galleryView.add(galleryLabel);
bioView.add(bioLabel);
customView.add(customLabel);
mWin.add(galleryView);
mWin.add(bioView);
mWin.add(customView);