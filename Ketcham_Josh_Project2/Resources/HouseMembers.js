var houseData =
{
		"Stark":{
		"headTitle": "			House Stark",
		"footTitle": "			Winter is Coming",
		"houseRow": 
			[
				{
					 title:'Eddard "Ned" Stark', 
					 info: "Eddard 'Ned' Stark was the head of the House Stark. He was considered by many to be an honest, honorable man. However he was behead by King Jofferry Baratheon for the crime of treason.",
					 housePicture: "Stark.jpg"
				},
				{
					title: "Catelyn Tully", 
			 		info: "Catelyn Tully is the wife of Ned Stark. She has three sons (Robb, Bran, Rickon) and two daughters (Sansa and Arya). She was killed during the Red Wedding at the Twins by Lord Walter Frey.",	
					housePicture: "Stark.jpg"
				},
				{
					title: "Robb Stark", 
			 		info: "Robb Stark is the first son to Eddard Stark. Upon his father's exacution by King Joffery Baratheon, Robb revolted and proclamied himself the King of the North.",
					housePicture: "Stark.jpg"
				},
				{
					title: "Sansa Stark", 
			 		info: "Sansa Stark is the eldist daughter of Ned and Catelyn. She is beautiful and traveled with her father to Kings Landing when he was the King's Hand. Since his death she has been living in the Red Keep with the House Lannister.",	
					housePicture: "Stark.jpg"
				},
			]
	
},
		"Lannister":{
		"headTitle": "			House Lannister",
		"footTitle": "			Hear us Roar",
		"houseRow": 
			[
				{
					title: "Cersei Lannister", 
			 		info: "Cersei Lannister is the only daughter to Tywin Lannister. She has a twin brother named Jamie, has three children (Joffery, Mycella, and Tommen), and is the Queen of the Seven Kingdoms.",
					housePicture: "Lannister.jpg"
				},
			 	{
			 		title: "Tyrion Lannister", 
			 		info: "Tyrion Lannister is the second son to Tywin Lannister. He has two older twin sibilings (Cersei and Jamie). Even though he is a dwarf, his cunning and sharp mind rivals that of his father's.",
			 		housePicture: "Lannister.jpg"
			 	},
			 	{
			 		title: "Jamie Lannister", 
			 		info: "Jamie Lannister is the first son to Tywin Lannister. He is the twin brother to Cersei. He is the Lord Commander of the Kings Guard. He lost his right hand when he was a prisoner.", 
			 		housePicture: "Lannister.jpg"
			 	}	
			]
		}
};


var houseRules = function(){
	var houseWindow = Ti.UI.createWindow({
		title: this.title,
		font: {fontSize: 18, fontFamily: "AmericanTypewriter"},
		backgroundImage: this.picture,
	});
	var houseLabel = Ti.UI.createLabel({
		text: this.info,
		font: {fontSize: 12, fontFamily: "AmericanTypewriter"},
		backgroundColor: "#808080",
		borderRadius: 5,
		height: Ti.UI.SIZE,
		bottom: 120
	});
	houseWindow.add(houseLabel);
	navWindow.openWindow(houseWindow, {animate: true});
};


var theDualHouse = [];


for (var n in houseData) {
	var tableSec = Ti.UI.createTableViewSection ({
		headerTitle: houseData[n].headTitle,
		footerTitle: houseData[n].footTitle
	});
		for(var i = 0, j = houseData[n].houseRow.length; i<j; i++){
			var theRows = Ti.UI.createTableViewRow({
				title: houseData[n].houseRow[i].title,
				info: houseData[n].houseRow[i].info,
				picture: houseData[n].houseRow[i].housePicture,
				font: {fontSize: 10, fontFamily: "AmericanTypewriter"},
				hasChild: true
			});
			tableSec.add(theRows);
			theRows.addEventListener("click", houseRules);
	};
	theDualHouse.push(tableSec);
}

houseTable.setData(theDualHouse);
