import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-DknUm2JE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-28 w-full rounded-md border border-input bg-surface px-3 py-2 text-sm text-fg shadow-sm placeholder:text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", className),
	...props
}));
Textarea.displayName = "Textarea";
//#endregion
export { Textarea as t };
