import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { E as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { y as listResources } from "./api-CxaXKXSv.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-CwuNFnEm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResourcesPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		listResources().then(setRows);
	}, []);
	const cats = [...new Set(rows.map((r) => r.category))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Library",
			title: "Resources",
			description: "Policies, handbooks, study notes, and the practical bits. One shelf, not twelve inboxes."
		}),
		cats.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: cat
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-border overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]",
				children: rows.filter((r) => r.category === cat).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: r.url || "#",
					className: "flex items-start justify-between gap-4 px-5 py-4 hover:bg-secondary/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: r.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: r.kind })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: r.description
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-4 shrink-0 text-muted" })]
				}) }, r.id))
			})]
		}, cat)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "safeguarding",
			className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: "Child protection, in brief"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every Nova Kids volunteer is screened and trained before they hold a room." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Two adults in every room. Doors with glass. No one-to-one closed spaces." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Pickup requires the code issued at check-in — never a badge worn by the child." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Disclosures go to the safeguarding lead the same day. Do not investigate alone." })
				]
			})]
		})
	] });
}
//#endregion
export { ResourcesPage as component };
