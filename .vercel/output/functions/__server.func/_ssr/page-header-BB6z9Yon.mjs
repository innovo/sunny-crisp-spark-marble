import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-BB6z9Yon.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ kicker, title, description, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 text-[11px] font-medium tracking-[0.16em] text-muted uppercase",
					children: kicker
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl leading-tight font-medium tracking-tight text-fg sm:text-4xl",
					children: title
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-muted sm:text-base",
					children: description
				}) : null
			]
		}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex shrink-0 flex-wrap items-center gap-2",
			children: actions
		}) : null]
	});
}
//#endregion
export { PageHeader as t };
