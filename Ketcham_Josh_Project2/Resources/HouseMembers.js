var houseData =
{
		"Stark":{
		"headTitle": "			House Stark",
		"footTitle": "		   -- Winter is Coming--",
		"houseRow": 
			[
				{
					title:"Eddard 'Ned' Stark", 
					info: "Eddard 'Ned' Stark was the head of the House Stark. He was considered by many to be an honest, honorable man. However he was behead by King Jofferry Baratheon for the crime of treason.",
					housePicture: "Stark.jpg"
				},
				{
					title: "Catelyn 'Cat' Stark", 
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
			 		info: "Sansa Stark is the eldest daughter and second child of Lady Catelyn and Lord Eddard Stark.Sansa enjoys proper 'lady-like' pursuits, and is good at sewing, embroidering, poetry, and music.",	
					housePicture: "Stark.jpg"
				},
			]
	
},
		"Lannister":{
		"headTitle": "			House Lannister",
		"footTitle": "		   -- Hear us Roar --",
		"houseRow": 
			[
				{
					title: "Tywin Lannister", 
			 		info: "Tywin Lannister is the lord of House Lannister, the Lord Paramount of the Westerlands, and the richest man in the Seven Kingdoms. He married Joanna Lannister and their first children were the fraternal twins Cersei and Jaime. She died after giving birth to Tyrion.",
					housePicture: "Lannister.jpg"

				},
				{
					title: "Cersei Lannister", 
			 		info: "Cersei is technically her parents' oldest child, although her twin Jaime was born mere moments later. Cersei has been haunted since childhood by a prophecy made by a wise woman who was reputed to have magical powers. Shortly after the conclusion of Robert's Rebellion, a marriage was arranged between Cersei and Robert Baratheon in order to seal the royal house's alliance with House Lannister.",
					housePicture: "Lannister.jpg"

				},
				{
			 		title: "Jamie Lannister", 
			 		info: "Jaime is the eldest son of Lady Joanna and Lord Tywin Lannister. He and his twin sister Cersei were inseparable in their early childhood. At the age of eleven, Jaime was sent to Crakehall to squire for old Lord Sumner Crakehall. Two years later, while still a squire, he won his first tourney melee.", 
			 		housePicture: "Lannister.jpg"
			 	},	
			 	{
			 		title: "Tyrion Lannister", 
			 		info: "Tyrion Lannister is the youngest son of Joanna Lannister and Lord Tywin Lannister.He is a dwarf, causing him problems and persecution (being referred to derisively by various names, such as 'the Imp' and 'The Halfman'). This is mitigated by his intellect and his family's wealth and power.",
			 		housePicture: "Lannister.jpg"
			 	}
			]
		}
};




var theDualHouse = [];



houseTable.addEventListener("click", function(houseEvent){
	var houseWindow = Ti.UI.createWindow({
		title: houseEvent.source.title,
		font: {fontSize: 18, fontFamily: "AmericanTypewriter"},
		backgroundImage: houseEvent.source.housePicture,
	});
	var houseLabel = Ti.UI.createLabel({
		text: houseEvent.source.info,
		font: {fontSize: 12, fontFamily: "AmericanTypewriter"},
		backgroundColor: "#808080",
		borderRadius: 5,
		height: Ti.UI.SIZE,
		bottom: 120
	});	
	houseWindow.add(houseLabel);
	navWindow.openWindow(houseWindow, {animate: true});
});


for (var n in houseData) {
	var tableSec = Ti.UI.createTableViewSection ({
		headerTitle: houseData[n].headTitle,
		footerTitle: houseData[n].footTitle
	});
		for(var i = 0, j = houseData[n].houseRow.length; i<j; i++){
			var theRows = Ti.UI.createTableViewRow({
				title: houseData[n].houseRow[i].title,
				info: houseData[n].houseRow[i].info,
				housePicture: houseData[n].houseRow[i].housePicture,
				font: {fontSize: 12, fontFamily: "Arial"}
			});
			tableSec.add(theRows);
	};
	theDualHouse.push(tableSec);
}


houseTable.setData(theDualHouse);
