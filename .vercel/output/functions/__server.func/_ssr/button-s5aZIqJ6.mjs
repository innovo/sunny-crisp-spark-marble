import { o as __toESM } from "../_runtime.mjs";
import { n as Slot, o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-s5aZIqJ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary-hover shadow-sm",
			secondary: "bg-secondary text-secondary-foreground hover:bg-bg-warm",
			outline: "border border-border bg-surface text-fg hover:bg-secondary",
			ghost: "text-fg hover:bg-secondary",
			destructive: "bg-destructive text-primary-fg hover:opacity-90",
			onDark: "bg-surface text-fg hover:bg-bg-warm shadow-sm",
			ghostDark: "border border-primary-fg/50 text-primary-fg hover:bg-primary-fg/10"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { Button as t };
