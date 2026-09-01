import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { O as setAvailability, d as listAvailability, u as joinTeam, x as listTeams } from "./api-CxaXKXSv.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/teams-CGLzzMKj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function upcomingSundays(n = 8) {
	const days = [];
	const d = /* @__PURE__ */ new Date();
	const add = (7 - d.getDay()) % 7;
	d.setDate(d.getDate() + add);
	for (let i = 0; i < n; i++) {
		const x = new Date(d);
		x.setDate(d.getDate() + i * 7);
		days.push(x.toISOString().slice(0, 10));
	}
	return days;
}
function TeamsPage() {
	const [teams, setTeams] = (0, import_react.useState)([]);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	function reload() {
		listTeams().then(setTeams);
	}
	(0, import_react.useEffect)(reload, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Serve",
		title: "Teams",
		description: "Say when you can serve. Leads see the calendar; the Sunday roster is built from it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: teams.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: t.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: t.members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							tone: m.seat === "lead" ? "primary" : "muted",
							children: [m.name, m.seat === "lead" ? " · lead" : ""]
						}, m.peopleId))
					})
				] }), t.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setOpenId(openId === t.id ? null : t.id),
					children: openId === t.id ? "Hide calendar" : "My availability"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: async () => {
						await joinTeam({ data: t.id });
						reload();
					},
					children: "Join team"
				})]
			}), openId === t.id && t.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Availability, { teamId: t.id }) : null]
		}, t.id))
	})] });
}
function Availability({ teamId }) {
	const days = upcomingSundays();
	const [map, setMap] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		listAvailability({ data: teamId }).then((rows) => {
			const next = {};
			for (const r of rows) next[r.day] = r.status;
			setMap(next);
		});
	}, [teamId]);
	async function cycle(day) {
		const cur = map[day];
		const next = cur === "available" ? "unavailable" : cur === "unavailable" ? "maybe" : "available";
		setMap({
			...map,
			[day]: next
		});
		await setAvailability({ data: {
			teamId,
			day,
			status: next
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
		children: days.map((day) => {
			const status = map[day] || "unset";
			const label = (/* @__PURE__ */ new Date(day + "T12:00:00")).toLocaleDateString("en-ZA", {
				weekday: "short",
				day: "numeric",
				month: "short"
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => cycle(day),
				className: "rounded-lg border border-border px-3 py-3 text-left text-sm hover:bg-secondary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 capitalize text-muted",
					children: status === "unset" ? "tap to set" : status
				})]
			}, day);
		})
	});
}
//#endregion
export { TeamsPage as component };
