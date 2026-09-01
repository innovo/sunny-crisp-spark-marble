import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn, o as initials } from "./utils-DIoohltr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/avatar-CTaNIRcL.js
var import_jsx_runtime = require_jsx_runtime();
function Avatar({ name, hue = 140, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-grid shrink-0 place-items-center rounded-full font-medium text-primary", size === "sm" ? "size-8 text-[11px]" : size === "lg" ? "size-14 text-lg" : "size-10 text-xs", className),
		style: { background: `oklch(0.92 0.03 ${hue})` },
		"aria-hidden": true,
		children: initials(name)
	});
}
//#endregion
export { Avatar as t };
