var cWin = Ti.UI.currentWindow;

var noPointWin = Ti.UI.createWindow({
  backgroundColor: "#fff"
});


var style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;

var theIndicator = Ti.UI.createActivityIndicator({
	color: 'black',
	font: {fontSize: 22, fontFamily: "AmericanTypewriter", fontWeight: "bold"},
	message: 'Showing House History....',
	style:style,
	center: 0,
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE
});
noPointWin.add(theIndicator);

noPointWin.addEventListener('open', function (e) {
  theIndicator.show();
  setTimeout(function(){
    e.source.close();
    theIndicator.hide();
  }, 2000);
});


var bar1 = Titanium.UI.createButtonBar({
    labels:['Stark', 'Lannister'],
    backgroundColor:'#fff',
    top:10,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:175
});

bar1.addEventListener('click', function(kingdom){
//House Stark
	if(kingdom.index === 0){
		var starkWin = Ti.UI.createWindow({
			title: 'House Stark',
			font: {fontSize: 18, fontFamily: "AmericanTypewriter"},
			backgroundImage: "new/stark.png",
			backgroundColor: "#fff"
		});	
		
		var starkView = Ti.UI.createView({
			backgroundColor: '#fff',
			height: Ti.UI.SIZE,
			bottom: 80,
			opacity: .7
		});
		
		var starkLabel = Ti.UI.createLabel({
			text: "You have chosen House Stark! Read the books to find out their fate! Don't watch the TV show.",
			font: {fontSize: 14, fontFamily: "AmericanTypewriter", fontWeight: "bold", fontColor: "#000"},
		});
		
			//Sample View
			var nedPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var catPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var robbPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var sansaPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var ned = Ti.UI.createImageView({
				image: "new/NedStark.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#625f66"
			});
			
			var cat = Ti.UI.createImageView({
				image: "new/CatStark.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#625f66"
			});
			
			var robb = Ti.UI.createImageView({
				image: "new/robb3.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#625f66"
			});
			
			var sansa = Ti.UI.createImageView({
				image: "new/SansaStark.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#625f66"
			});
			nedPic.add(ned);
			catPic.add(cat);
			robbPic.add(robb);
			sansaPic.add(sansa);
			
			var starkPics = Ti.UI.createScrollableView({
				width: 130,
				height: 130,
				center:0,
				backgroundColor:"#fff",
				views: [nedPic, catPic, robbPic, sansaPic],
				showPagingControl: true,
				pagingControlColor: "#000"
			});
		starkView.add(starkLabel);
		starkWin.add(starkView, starkPics);
		cWin.nav.openWindow(starkWin);
		
		
	}else if(kingdom.index === 1){
		
	//House Lannister
	var lannWin = Ti.UI.createWindow({
		title: 'House Lannister',
		font: {fontSize: 18, fontFamily: "AmericanTypewriter"},
		backgroundImage: "new/lannister.png",
		backgroundColor: "#fff"
	});	
	
	var lannView = Ti.UI.createView({
		backgroundColor: '#fff',
		height: Ti.UI.SIZE,
		bottom: 100,
		opacity: .7
	});

	var lannLabel = Ti.UI.createLabel({
		text: "You have chosen House Lannister! Read the books to find out their fate! Don't watch the TV show.",
		font: {fontSize: 14, fontFamily: "AmericanTypewriter", fontWeight: "bold", fontColor: "#000"}
	});
			
			//Sample View
			var tywinPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var cerseiPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var jamiePic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var tyrionPic = Ti.UI.createView({
				backgroundColor: "#000"
			});
			
			var tywin = Ti.UI.createImageView({
				image: "new/TywLann.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#FF0000"
			});
			
			var cersei = Ti.UI.createImageView({
				image: "new/CerseiLann.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#FF0000"
			});
			
			var jamie = Ti.UI.createImageView({
				image: "new/JaimeLann.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#FF0000"
			});
			
			var tyrion = Ti.UI.createImageView({
				image: "new/TyrLann.jpg",
				height:Ti.UI.FIT,
				backgroundColor: "#FF0000"
			});
			tywinPic.add(tywin);
			cerseiPic.add(cersei);
			jamiePic.add(jamie);
			tyrionPic.add(tyrion);
			
			var lannPics = Ti.UI.createScrollableView({
				width: 130,
				height: 130,
				top: 130,
				backgroundColor:"#fff",
				views: [tywinPic, cerseiPic, jamiePic, tyrionPic],
				showPagingControl: true,
				pagingControlColor: "#252525"
			});
	lannView.add(lannLabel);
	lannWin.add(lannView, lannPics);
	cWin.nav.openWindow(lannWin, {animate: true});
};
});


var controlView = Ti.UI.createView({
	backgroundColor: '#fff',
	height: Ti.UI.SIZE,
	bottom: 0
	});
		
var controlLabel = Ti.UI.createLabel({
	text: '* ActivityIndicator and BarButton Ti.UI Control were used in the making of this app',
	font: {fontSize: 6, fontFamily: "AmericanTypewriter", fontColor: "#000"},
	});
	controlView.add(controlLabel);
	cWin.add(controlView);



cWin.add(bar1);
cWin.nav.openWindow(noPointWin, {animate: true});