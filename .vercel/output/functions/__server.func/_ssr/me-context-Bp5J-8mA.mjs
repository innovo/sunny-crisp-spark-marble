import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/me-context-Bp5J-8mA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var MeContext = (0, import_react.createContext)(null);
function useMe() {
	const me = (0, import_react.useContext)(MeContext);
	if (!me) throw new Error("useMe must be used inside the church app");
	return me;
}
//#endregion
export { useMe as n, MeContext as t };
