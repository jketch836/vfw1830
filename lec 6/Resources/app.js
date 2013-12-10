/*
var mainWindow = Ti.UI.createWindow();

Ti.UI.setBackgroundColor("white");
var listview= Ti.UI.createListView({backgroundColor:"#fff", top:20});


var toDo= 
	[
		{
			id: "homework", 
			name: "Homework",
			icon: "homework.jpg"	
		},
		{
			id: "Mow Lawn", 
			name: "Mow Lawn",
			icon: "MowLawn.jpg"	
		},
		{
			id: "Clean Pool", 
			name: "Clean Pool",
			icon: "CleanPool.jpg"	
		},
		{
			id: "Clean Garage", 
			name: "Clean Garage",
			icon: "CleanGarage.jpg"	
		}
	];


var data = [];
for (var i=0, j=toDo.length; i<j; i++){
	data.push(
	{
		properties: 
			{
				itemId: toDo[i].id,
				title: toDo[i].name, 
				image: toDo[i].icon, 
				accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
				color: "black"
			}
	}
	);
};


var listSection = Ti.UI.createListSection();
listSection.setItems(data);

listview.sections = [listSection];

mainWindow.add(listview);
mainWindow.open();
*/


// ListView Template
var toggle = function(e){
	var item = listSection.getItemAt(e.itemIndex);
	if(item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE){
		item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
	} else {
		item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
	}
	listSection.updateItemAt(e.itemIndex, item);
};


myTemplate = {
	childTemplates:
	[
		{
			type: "Ti.UI.ImageView",
			bindId: 'pic',
			properties:
			{
				width: 50,
				height: 50,
				left: 0,
				top:0
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'info',
			properties:
			{
				color: "black",
				font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
				left: 60,
				top: 0
			}
		},
		{
			type: "Ti.UI.Label",
			bindId: 'es_info',
			properties:
			{
				color: "grey",
				font: {fontSize: 14, fontFamily: "Arial"},
				left: 60,
				top: 25
			}
		}
	],
	events: {
		click: toggle
	}
};


var mainWindow= Ti.UI.createWindow();
Ti.UI.setBackgroundColor ("white");
//ListView
var listView = Ti.UI.createListView({
	top:20,
	templates:{'defaultTemplate': myTemplate},
	defaultItemTemplate: 'defaultTemplate'
});

var listSections = [];

//Create ListView Section

var fruits= Ti.UI.createListSection({
	headerTitle: "Friut / Frutas"
});


//Data
var friutData = 
	[
		{
			info:
				{
					text:"Apple"
				},
			es_info:
				{
					text: "Manzana"
				},
			pic:
				{
					image: "apple.png"
				},	
			properties:
				{
					height: 100,
					backgroundColor: "#fff"
				}					
		},
		{
			info:
				{
					text:"Banana"
				},
			es_info:
				{
					text: "Banana"
				},
			pic:
				{
					image: "banana.png"
				}	
		}
	];


fruits.setItems(friutData);
listSections.push(fruits);
listView.sections = listSections;


mainWindow.add(listView);
mainWindow.open();



var vegies= Ti.UI.createListSection({
	headerTitle: "Vegies / Verduras"
});


//Data
var vegiesData = 
	[
		{
			info:
				{
					text:"Carrots"
				},
			es_info:
				{
					text: "Zanahorias"
				},
			pic:
				{
					image: "carrot.png"
				},
		},
		{
			info:
				{
					text:"Potatoes"
				},
			es_info:
				{
					text: "Patatas"
				},
			pic:
				{
					image: "potatoes.png"
				}	
		}
	];



vegies.setItems(vegiesData);
listView.appendSection(vegies);

