var starkMem =
	[
		{
			 title:'Eddard "Ned" Stark', 
			 info: "Eddard 'Ned' Stark was the head of the House Stark. However he was behead by King Jofferry Baratheon for the crime of treason."
		},
		{
			title: "Catelyn Tully", 
	 		info: "Catelyn Tully is the wife of Ned Stark. She has three sons (Robb, Bran, Rickon) and two daughters (Sansa and Arya). She was killed during the Red Wedding at the Twins by Lord Walter Frey."	
		},
		{
			title: "Robb Stark", 
	 		info: "Robb Stark is the first son to Eddard Stark. Upon his father's exacution by King Joffery Baratheon, Robb revolted and proclamied himself the King of the North."
		}
	];

var lannMem =	
	[
		{
			title: "Cersei Lannister", 
	 		info: "Cersei Lannister is the only daughter to Tywin Lannister. She has a twin brother named Jamie and is the Queen of the Seven Kingdoms."
		},
	 	{
	 		title: "Tyrion Lannister", 
	 		info: "Tyrion Lannister is the second son to Tywin Lannister. He has two older twin sibilings (Cersei and Jamie). Even though he is a dwarf, his cunning and sharp mind rivals that of his father's."
	 	},
	 	{
	 		title: "Jamie Lannister", 
	 		info: "Jamie Lannister is the first son to Tywin Lannister. He is the Lord Commander of the Kings Guard. He lost his right hand when he was a prisoner." 
	 	}	
	 ];
	 


var starkSection = Ti.UI.createTableViewSection ({
	headerTitle: "Stark",
	footerTitle: "			Winter is Comming",
	font: {fontsize: 14, fontFamily: "AmericanTypewriter"}
});

var lannisterSection = Ti.UI.createTableViewSection ({
	headerTitle: "Lannister",
	footerTitle: "			Hear us Roar",
	font: {fontsize: 14, fontFamily: "AmericanTypewriter"}
});


var myDataSetions = [starkSection, lannisterSection];
table.setData(myDataSetions);


var starkHouse = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundImage: "Stark.jpg",
		title: this.title,
	});
	var detailLabel = Ti.UI.createLabel({
		text: this.bio,
		backgroundColor: "#808080",
		borderRadius: 5,
		height: Ti.UI.SIZE
	});
	detailWindow.add(detailLabel);
	navWindow.openWindow(detailWindow, {animate: true});
};


var lannHouse = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundImage: "Lannister.jpg",
		title: this.title,
	});
	var detailLabel = Ti.UI.createLabel({
		text: this.bio,
		backgroundColor: "#8B0000",
		borderRadius: 5,
		height: Ti.UI.SIZE
	});
	detailWindow.add(detailLabel);
	navWindow.openWindow(detailWindow, {animate: true});
};



for(var i=0, j=starkMem.length; i<j; i++){
	var houseRow = Ti.UI.createTableViewRow({
		title: starkMem[i].title,
		bio: starkMem[i].info,
		font: {fontsize: 12, fontFamily: "AmericanTypewriter"},
	});
	starkSection.add(houseRow);
	houseRow.addEventListener("click", starkHouse);
};

for(var i=0, j=lannMem.length; i<j; i++){
	var houseRow = Ti.UI.createTableViewRow({
		title: lannMem[i].title,
		bio: lannMem[i].info,
		font: {fontsize: 12, fontFamily: "AmericanTypewriter"}
	});
	lannisterSection.add(houseRow);
	houseRow.addEventListener("click", lannHouse);
};

