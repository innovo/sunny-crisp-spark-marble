import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qr-code-CMJQm9nQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = /* @__PURE__ */ __toESM(require_lib());
function QrMark({ value, size = 180, className }) {
	const [src, setSrc] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let alive = true;
		import_lib.toDataURL(value, {
			width: size * 2,
			margin: 1,
			color: {
				dark: "#1f1b16",
				light: "#faf7f2"
			}
		}).then((url) => {
			if (alive) setSrc(url);
		});
		return () => {
			alive = false;
		};
	}, [value, size]);
	if (!src) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("bg-secondary", className),
		style: {
			width: size,
			height: size
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		width: size,
		height: size,
		alt: `QR code ${value}`,
		className: cn("rounded-md bg-surface", className)
	});
}
//#endregion
export { QrMark as t };
