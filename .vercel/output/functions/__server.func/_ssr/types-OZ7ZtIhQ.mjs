//#region node_modules/.nitro/vite/services/ssr/assets/types-OZ7ZtIhQ.js
var APP_NAME = "Nova Church";
var CHURCH_NAME = "Nova Church";
var CHURCH_CITY = "Constantia, Cape Town";
var CHURCH_ADDRESS = "5 Eskol Avenue (off Strawberry Lane), Constantia";
var CHURCH_TAGLINE = "God is still making all things new.";
var CHURCH_WEBSITE = "https://novachurch.co.za/";
var CHURCH_EMAIL = "hello@novachurch.co.za";
var CHURCH_MAP = "https://maps.app.goo.gl/g6C6ADoiMv8oyqow9";
var CHURCH_WHATSAPP = "https://chat.whatsapp.com/Kd9Fhzw7LF56xOK305Xg1c";
var LAUNCH_TIMES = "08:30 or 10:30";
var SUNDAY_TIME = "09:30";
var CORE_VALUES = [
	{
		title: "Being Made New",
		body: "Jesus doesn’t just meet us once — he keeps changing us. There are no experts here, just people growing together."
	},
	{
		title: "Alive to His Spirit",
		body: "We were made to be filled with the presence of God. A people hungry, expectant in prayer, open to his power."
	},
	{
		title: "Anchored in Scripture",
		body: "In a world of a thousand voices, we anchor our lives in the living Story of God."
	},
	{
		title: "Life Together",
		body: "The church is most alive in homes and everyday relationships — known, supported, and formed together in Christ."
	},
	{
		title: "So Others May Live",
		body: "Nova exists not just for those already here, but for those still to join. When we scatter, we hope the good news does too."
	},
	{
		title: "A Heart For The Next",
		body: "Every person, of every age, should feel seen. We are especially focused on reaching and raising kids and teens."
	},
	{
		title: "No Passengers",
		body: "There are no spectators at Nova. Every gift matters, every act of service builds, and every voice has a place."
	}
];
var AGE_GROUPS = [
	{
		id: "little_ones",
		label: "Little Lights",
		ages: "0–2"
	},
	{
		id: "kids",
		label: "Nova Kids",
		ages: "3–12"
	},
	{
		id: "youth",
		label: "Teens",
		ages: "13–18"
	},
	{
		id: "young_adults",
		label: "Young adults",
		ages: "19–30"
	},
	{
		id: "adults",
		label: "Adults",
		ages: "31–55"
	},
	{
		id: "seniors",
		label: "Seniors",
		ages: "55+"
	}
];
var FUNDS = [
	{
		id: "general",
		label: "General fund",
		blurb: "Sunday worship, staff, and the everyday life of Nova."
	},
	{
		id: "missions",
		label: "Missions & A2",
		blurb: "Local outreach and the wider family of Acts 2 churches."
	},
	{
		id: "building",
		label: "Home",
		blurb: "Care of the Eskol Avenue land and the rooms still to come."
	},
	{
		id: "kids",
		label: "Kids & teens",
		blurb: "Nova Kids, teens, and a church that feels like wonder."
	}
];
var IMAGE_KEYS = [
	"sanctuary",
	"exterior",
	"kids",
	"table",
	"arch",
	"scripture",
	"music",
	"study"
];
function imageSrc(key) {
	return `/images/${IMAGE_KEYS.includes(key) ? key : "sanctuary"}.jpg`;
}
function isStaffRole(role) {
	return role === "pastor" || role === "staff";
}
function isOpsRole(role) {
	return role === "pastor" || role === "staff" || role === "volunteer";
}
function personName(p) {
	return `${p.firstName} ${p.lastName}`.trim();
}
//#endregion
export { isStaffRole as _, CHURCH_EMAIL as a, CHURCH_TAGLINE as c, CORE_VALUES as d, FUNDS as f, isOpsRole as g, imageSrc as h, CHURCH_CITY as i, CHURCH_WEBSITE as l, SUNDAY_TIME as m, APP_NAME as n, CHURCH_MAP as o, LAUNCH_TIMES as p, CHURCH_ADDRESS as r, CHURCH_NAME as s, AGE_GROUPS as t, CHURCH_WHATSAPP as u, personName as v };
