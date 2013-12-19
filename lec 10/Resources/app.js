// // 
// // var eMail = Ti.UI.createEmailDialog({
	// // subject:"The Game has Begun"
// // 	
// // });
// // 
// // 
// // eMail.addEventListener("complete", function(){
// // 	
// // });
// 
// var mWin = Ti.UI.createWindow({
	// backgroundColor: '#333'
// });
// 
// // var coverFlowView = Titanium.UI.createCoverFlowView({
    // // images:['Tyrion_Lannister_2.jpg','Tywin_Lannister_1.jpg','Tywin_Lannister_2.jpg','Dwalin.jpg','Fili.jpg','Gandalf.jpg'],
    // // backgroundColor:'#000'
// // 
// // });
// 
 // for(var i=0, j = folderContents.length; i<j; i++){
		// var newView = Ti.UI.createView({
			// image: "images/" + folderContents[i],
			// font: {fontsize: 30, fontFamily: "Arial", fontWeight: "bold"},
			// width: Ti.UI.SIZE,
			// height: Ti.UI.SIZE,
			// top:2,
			// left:2,
			// right:2
		// });
		// var coverFlowView = Titanium.UI.createCoverFlowView({
   			 // image: "images/" + folderContents[i],
    		 // backgroundColor:'#000'
    		// });
    	// newView.add(coverFlowView);
    	// mWin.add(newView);
// };
// 
// 
// mWin.add(coverFlowView);
// mWin.open();
// 
// 
// 
// 
// 
// // var coverFlowView = Titanium.UI.createCoverFlowView({
    // // images:['images/' + folderContents],
    // // backgroundColor:'#000'
// // 
// // });
// 
 // // //Gallery
// // var gallery= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
// // var folderContents = gallery.getDirectoryListing();
// 
// // var newArray= [];
// // 
// // for(var i=0, j = folderContents.length; i<j; i++){
		// // var newView = Ti.UI.createWindow({
			// // image: "images/" + folderContents[i],
			// // font: {fontsize: 30, fontFamily: "Arial", fontWeight: "bold"},
			// // width: Ti.UI.SIZE,
			// // height: Ti.UI.SIZE,
			// // top:2,
			// // left:2,
			// // right:2
		// // });
		// // var coverFlowView = Titanium.UI.createCoverFlowView({
   			 // // image: "images/" + folderContents[i],
    		 // // backgroundColor:'#000'
    		// // });
    	// // newView.add(coverFlowView);
    	// // mWin.add(newView);
// // };
// // 
// // 
// // coverFlowView.addEventListner("click", function(event){
	// // if (event.source.link === true){
// // 		
// // 
// // });	
// 
// 
// 
// 
// 
// 
// 
		// // var coverFlowView = Titanium.UI.iOS.createCoverFlowView({
		    // // backgroundImage: "images/" + folderContents[i],
		    // // backgroundColor:'#fff'
		// // });
		// // newView.add(coverFlowView);
		// // mWin.add(newView);
// // 	



Ti.UI.backgroundColor = 'white';

var win1 = Ti.UI.createWindow({
  backgroundColor: 'blue'
});

var win2 = Ti.UI.createWindow({
  backgroundColor: 'yellow',
  fullscreen: true
});

var style;
if (Ti.Platform.name === 'iPhone OS'){
  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
}
else {
  style = Ti.UI.ActivityIndicatorStyle.DARK;
}
var activityIndicator = Ti.UI.createActivityIndicator({
  color: 'green',
  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
  message: 'Loading...',
  style:style,
  center:0,
  height:Ti.UI.SIZE,
  width:Ti.UI.SIZE
});

// The activity indicator must be added to a window or view for it to appear
win2.add(activityIndicator);

// eventListeners must always be loaded before the event is likely to fire
// hence, the open() method must be positioned before the window is opened
win2.addEventListener('open', function (e) {
  activityIndicator.show();
  // do some work that takes 6 seconds
  // ie. replace the following setTimeout block with your code
  setTimeout(function(){
    e.source.close();
    activityIndicator.hide();
  }, 6000);
});

win1.open();
win2.open();