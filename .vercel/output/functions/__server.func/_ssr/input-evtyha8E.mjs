import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-evtyha8E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	ref,
	className: cn("flex h-11 w-full rounded-md border border-input bg-surface px-3 text-sm text-fg shadow-sm transition-colors placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:opacity-50", className),
	...props
}));
Input.displayName = "Input";
//#endregion
export { Input as t };
