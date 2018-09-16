var titleInfo = {
	name: "Kenneth Jao",
	caption: "Product Developer",
	image: null
};

var sidebarInfo = [
	{
		name: "Info",
		subsections: [
			{
				name: "Name",
				value: "Kenneth Jao",
				icon: "fas fa-user"
			},
			{
				name: "Address",
				value: ["3911 Franklin Rd.","Bloomfield Hills, 48302", "Michigan USA"],
				icon: "fas fa-map-marker-alt"
			},
			{
				name: "Phone",
				value: "+1-(248)-749-3439",
				icon: "fas fa-phone"
			},
			{
				name: "Email",
				value: ["kennethjao01@gmail.com", "jaokenne@msu.edu"],
				icon: "fas fa-envelope"
			}
		]
	},
	{
		name: "Social",
		subsections: [
			{
				name: "Facebook",
				value: "https://goo.gl/5rxxhH",
				icon: "fab fa-facebook-f"
			}
		]
	}
];

var mainContInfo = [
	{
		name: "Education",
		icon: "fa-book-open",
		values: [
			{
				name: "International Academy, Bloomfield Hills",
				caption: "IB Diploma Graduate",
				date: "2014-2018",
				desc: "Graduated with 4.14 GPA, Programming Club Leader and Linguistics Club Leader",
			},
			{
				name: "Michigan State University, East Lansing",
				caption: "Majoring in Computer Engineering and Electrical Engineering",
				date: "2018-2022",
				desc: "Currently a freshman"
			}
		]
	},
	{
		name: "Skills",
		icon: "fa-wrench",
		values: [
			{
				name: "Graphic Design",
				caption: "Interface, logo, and background design",
				date: "Since 2012",
				desc: "Proficient with GIMP and Blender. Semi-proficient with Photoshop and After Effects." 
			},
			{
				name: "Programming",
				caption: "Software engineering",
				date: "Since 2014",
				desc: "Fluent in HTML, CSS, JavaScript and Python. Semi-proficient in C, C++. Can pick up languages and libraries with ease. Experience with both front-end and back-end devleopment." 
			},
			{
				name: "Music Composition",
				caption: "Arranging, composing, improvising of various genres",
				date: "Since 2014",
				desc: "12 years of violin and piano, self-taught guitar player. Proficient with FL Studio, and can compose music in all genres." 
			}

		]
	},
	{
		name: "Projects",
		icon: "fa-list-ol",
		values: [
			{
				name: "VR Arm Tracking Device",
				caption: "Virtual reality hardware creation",
				date: "2016",
				desc: "Arm tracking done through gyroscope IMUs, with 9 degrees of freedom. A testing game was created to demonstrate tracking capabilities." 
			},
			{
				name: "Hourglass",
				caption: "Collaborative School-Wide Online Planner",
				date: "2017",
				desc: "Online planning web app designed for academic use. Enabled users to have a collaborative planner specific to individual classes and teachers. " 
			},
			{
				name: "BinBin",
				caption: "Personal Cloud Web App",
				date: "2016",
				desc: "Personal cloud database web app created to ease file downlading and storage for personal servers." 
			},
			{
				name: "Haptic Feedback Through Wave Interference",
				caption: "Mathematical Investigation of Applications of Wave Interference",
				date: "2017",
				desc: "A mathematical proof and experimentation of controllable wave interference to induce correct superposition. Explored multiple applications including a possibility of simulating highly accurate haptic feedback." 
			}
		]
	}
];

var sidebarTop = document.querySelectorAll("#sidebar .topCont")[0];
var sidebarMid = document.querySelectorAll("#sidebar .midCont")[0];
var mainTop = document.querySelectorAll("#mainCont .topCont")[0];
var mainMid = document.querySelectorAll("#mainCont .midCont")[0];

function titleItems() {
	var name = el("h1", titleInfo.name.toUpperCase());
	mainTop.appendChild(name);
	var caption = el("h2", titleInfo.caption.toUpperCase());
	mainTop.appendChild(caption);
}

function mainItems() {
	mainContInfo.forEach(function(ele) {
		var subsection = el("div", "", "", "subsection");
		var circle = el("div", "", "", "subCircle");
		circle.appendChild(el("i", "", "", "fas " + ele.icon));
		subsection.appendChild(circle);
		subsection.appendChild(el("h2", ele.name.toUpperCase(), "", "subTitle"));
		ele.values.forEach(function(item) {
			var subValue = el("div", "", "", "subValue");
			subValue.appendChild(el("h3", item.date, "", ""));
			subValue.appendChild(el("h3", item.name, "", ""));
			subValue.appendChild(el("h3", item.caption, "", ""));
			subValue.appendChild(el("h3", item.desc, "", "")); 
			subsection.appendChild(subValue);
		});
		mainMid.appendChild(subsection);
	});
}

function sidebarItems() {
	sidebarInfo.forEach(function(ele) {
		var subsection = el("div", "", "", "subsection");
		subsection.appendChild(el("h2", ele.name.toUpperCase(), "", "subTitle"));
		ele.subsections.forEach(function(item) {
			var subValue = el("div", "", "", "subValue");
			subValue.appendChild(el("i", "", "", item.icon));
			subValue.appendChild(el("h3", item.name, "", ""));
			if(Array.isArray(item.value))  {
				item.value.forEach(function(val, index) {
					subValue.appendChild(el("h3", val, "", ""));
					if(item.value.length != index+1) subValue.appendChild(el("br"));
				});
			} else {
				subValue.appendChild(el("h3", item.value, "", ""));
			} 
			subsection.appendChild(subValue);
		});
		sidebarMid.appendChild(subsection);
	});
}

function el(DOM, textNode, id, className) {
	id = id || "";
	className = className || "";
	textNode = textNode || "";
	var element = document.createElement(DOM);
	if(id.length != 0) element.id = id;
	if(className.length != 0) element.className = className;
	if(textNode.length != 0) element.appendChild(document.createTextNode(textNode));
	return element;
}

titleItems();
sidebarItems();
mainItems();