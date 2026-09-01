import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as AGE_GROUPS, v as personName } from "./types-OZ7ZtIhQ.mjs";
import { v as listPeople } from "./api-CxaXKXSv.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Avatar } from "./avatar-CTaNIRcL.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/directory-Dxma7uA3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DirectoryPage() {
	const [people, setPeople] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	const [age, setAge] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		listPeople().then(setPeople);
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		return people.filter((p) => {
			const okAge = age === "all" || p.ageGroup === age;
			const s = q.trim().toLowerCase();
			const okQ = !s || personName(p).toLowerCase().includes(s) || (p.email || "").toLowerCase().includes(s);
			return okAge && okQ;
		});
	}, [
		people,
		q,
		age
	]);
	const groups = AGE_GROUPS.map((g) => ({
		...g,
		count: people.filter((p) => p.ageGroup === g.id).length
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "People",
			title: "Directory",
			description: "Age-group shepherding starts here. Filter the family, then take the conversation to Messages."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-col gap-3 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search names"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: age,
				onChange: (e) => setAge(e.target.value),
				className: "h-11 rounded-md border border-input bg-surface px-3 text-sm sm:w-56",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "all",
					children: "All ages"
				}), AGE_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: g.id,
					children: [
						g.label,
						" (",
						g.ages,
						")"
					]
				}, g.id))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 flex flex-wrap gap-2",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setAge(g.id),
				className: "rounded-full bg-secondary px-3 py-1.5 text-xs font-medium",
				children: [
					g.label,
					" · ",
					g.count
				]
			}, g.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-2",
			children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					name: personName(p),
					hue: p.avatarHue
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: personName(p)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted",
							children: p.bio || p.email || "Member"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "capitalize",
								children: p.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "warm",
								children: AGE_GROUPS.find((g) => g.id === p.ageGroup)?.label
							})]
						})
					]
				})]
			}, p.id))
		})
	] });
}
//#endregion
export { DirectoryPage as component };
