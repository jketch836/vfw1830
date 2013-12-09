
var mainWindow = Ti.UI.createWindow();
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});

//Data
var myData = 
	{
		"friuts":{
		"headTitle": "Friuts",
		"footTitle": "Buy this Stuff",
		"rowData": 
			[
				{
					title: "Apples",
					desc: "This is apples the friut, not the tech company"
				},
				{
					title: "Bananas",
					desc: "This is bananas",
				}
			]
		},
			
		"Vegies":{
		"headTitle": "Vegies",
		"footTitle": "Buy this Stuff",
		"rowData": 
			[
					{
						title: "Carrot",
						desc: "This is a carrot. It has a crunchy thingy"
					},
					{
						title: "Potatoes",
						desc: "This is potato, not a toy",
					}
			]
		}
	};

//Table

var table= Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});



//getDetail Func

var getDetail = function(){
	
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		title: this.title,
		font: {fontSize: 18, fontFamily: "Arial"}
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 12, fontFamily: "Arial"}
	});
	
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow, {animate: true});
};

var theSections = [];

//Get the data


for (var n in myData) {
	var tableSection = Ti.UI.createTableViewSection ({
		headerTitle: myData[n].headTitle,
		footerTitle: myData[n].footTitle
	});
	for(var i = 0, j = myData[n].rowData.length; i<j; i++){
		var theRow = Ti.UI.createTableViewRow({
			title: myData[n].rowData[i].title,
			desc: myData[n].rowData[i].desc,
			hasChild: true
		});
		tableSection.add(theRow);
		theRow.addEventListener("click", getDetail);
	};
	theSections.push(tableSection);
}


table.setData(theSections);
mainWindow.add(table);
navWindow.open();




/*
 var mainWindow = Ti.UI.createWindow();

Ti.UI.setBackgroundColor("white");

//create listView
var listView = Ti.UI.createListView({
	top: 20,
	backgroundColor: "#fff"
});

//create listSection
var cars = Ti.UI.createListSection({
	headerTitle: "Cars"
});

//Data

var carsData = [
		{properties: {title: "Kia", image: "kia.jpg", accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}},
		{properties: {title: "BMW", image: "bmw.png", accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DETAIL}}	
			   ];

cars.setItems(carsData);
listView.sections = [cars];

var domesticSection = Ti.UI.createListSection({
	headerTitle: "domesticCars"
});
var domesticCars = [
	{properties: {title: "Ford"}},
	{properties: {title: "Chevy"}}
];

domesticSection.setItems(domesticCars);
listView.appendSection(domesticSection);




mainWindow.add(listView);
mainWindow.open();

 */
