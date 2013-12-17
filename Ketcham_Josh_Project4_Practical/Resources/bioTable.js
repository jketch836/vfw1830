var menuWindow = Ti.UI.currentWindow;

var houseData =
{
		"Stark":
	{
		"houseRow": 
			[
				{
					title:"Eddard 'Ned' Stark", 
					info: "Eddard 'Ned' Stark was the head of the House Stark. He was considered by many to be an honest, honorable man. However he was behead by King Jofferry Baratheon for the crime of treason.",
					profilePic: "profilePic/Ned_Stark_1.jpg",
					housePicture: "stark.png"
				}
			]
	
	},
		"Lannister":
	{
		"houseRow": 
			[
				{
					title: "Tywin Lannister", 
			 		info: "Tywin Lannister is the lord of House Lannister, the Lord Paramount of the Westerlands, and the richest man in the Seven Kingdoms. He married Joanna Lannister and their first children were the fraternal twins Cersei and Jaime. She died after giving birth to Tyrion.",
					profilePic: "profilePic/Tywin_Lannister_1.jpg",
					housePicture: "lannister.png"

				}
			]
	},
		"Targaryen":
	{
		"houseRow": 
			[
				{
					title:"Danery's Targaryen", 
					info: ".",
					profilePic: "profilePic/Tywin_Lannister_1.jpg",
					housePicture: "targaryen.PNG"
				}
			]
	
	},
};


var houseTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.PLAIN
});



var theDualHouse = [];


houseTable.addEventListener("click", function(houseEvent){
	var houseWindow = Ti.UI.createWindow({
		title: houseEvent.source.title,
		font: {fontSize: 18, fontFamily: "AmericanTypewriter"},
		backgroundImage: houseEvent.source.housePicture,
		backgroundColor: "#fff"
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
	menuWindow.openWindow(houseWindow, {animate: true});
});


for (var n in houseData) {
	var tableSec = Ti.UI.createTableViewSection ({
		
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
menuWindow.add(houseTable);


