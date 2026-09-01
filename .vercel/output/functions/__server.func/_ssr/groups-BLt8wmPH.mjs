import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as imageSrc } from "./types-OZ7ZtIhQ.mjs";
import { h as listGroups, l as joinGroup } from "./api-CxaXKXSv.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/groups-BLt8wmPH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GroupsPage() {
	const [groups, setGroups] = (0, import_react.useState)([]);
	function reload() {
		listGroups().then(setGroups);
	}
	(0, import_react.useEffect)(reload, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Formation",
		title: "Groups & midweek",
		description: "Homes, teens, and the tables where most of the church actually happens."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 md:grid-cols-2",
		children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageSrc(g.imageKey),
				alt: "",
				className: "h-36 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "warm",
							children: g.meets
						}), g.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "primary",
							children: "Joined"
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-2xl font-medium",
						children: g.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: g.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							g.location,
							g.leaderName ? ` · led by ${g.leaderName}` : "",
							" · ",
							g.memberCount,
							" people"
						]
					}),
					!g.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						onClick: async () => {
							await joinGroup({ data: g.id });
							reload();
						},
						children: "Join this group"
					}) : null
				]
			})]
		}, g.id))
	})] });
}
//#endregion
export { GroupsPage as component };
