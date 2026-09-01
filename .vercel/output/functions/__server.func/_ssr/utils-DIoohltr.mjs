import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-DIoohltr.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function initials(name) {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "·";
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function formatMoney(cents, currency = "ZAR") {
	return new Intl.NumberFormat("en-ZA", {
		style: "currency",
		currency,
		maximumFractionDigits: cents % 100 === 0 ? 0 : 2
	}).format(cents / 100);
}
function formatWhen(iso) {
	const d = new Date(iso);
	return new Intl.DateTimeFormat("en-ZA", {
		weekday: "short",
		day: "numeric",
		month: "short",
		hour: "2-digit",
		minute: "2-digit"
	}).format(d);
}
function formatDay(iso) {
	const d = new Date(iso.includes("T") ? iso : iso + "T12:00:00");
	return new Intl.DateTimeFormat("en-ZA", {
		weekday: "long",
		day: "numeric",
		month: "long"
	}).format(d);
}
function ageYears(birthday) {
	if (!birthday) return null;
	const b = /* @__PURE__ */ new Date(birthday + "T12:00:00");
	const now = /* @__PURE__ */ new Date();
	let age = now.getFullYear() - b.getFullYear();
	const m = now.getMonth() - b.getMonth();
	if (m < 0 || m === 0 && now.getDate() < b.getDate()) age -= 1;
	return age;
}
//#endregion
export { formatWhen as a, formatMoney as i, cn as n, initials as o, formatDay as r, ageYears as t };
