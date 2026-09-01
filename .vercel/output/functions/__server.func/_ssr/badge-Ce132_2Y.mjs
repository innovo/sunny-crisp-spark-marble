import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-Ce132_2Y.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "muted", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", tone === "primary" && "bg-primary text-primary-fg", tone === "muted" && "bg-secondary text-muted", tone === "warm" && "bg-bg-warm text-fg", className),
		...props
	});
}
//#endregion
export { Badge as t };
