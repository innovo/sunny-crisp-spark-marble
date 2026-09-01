import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nova-mark-nuJDREEz.js
var import_jsx_runtime = require_jsx_runtime();
function NovaMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-5", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "currentColor",
			transform: "translate(16 16)",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-6.2",
				y: "-6.2",
				width: "12.4",
				height: "12.4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-6.2",
				y: "-6.2",
				width: "12.4",
				height: "12.4",
				transform: "rotate(45)"
			})]
		})
	});
}
function NovaWordmark({ subtitle, inverted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-9 place-items-center rounded-md", inverted ? "bg-primary-fg text-primary" : "bg-primary text-primary-fg"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NovaMark, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block font-display text-lg leading-none font-medium",
			children: "Nova"
		}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-[11px] tracking-[0.14em] text-muted uppercase",
			children: subtitle
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 block text-[11px] tracking-[0.14em] text-muted uppercase",
			children: "Church"
		})] })]
	});
}
//#endregion
export { NovaWordmark as n, NovaMark as t };
