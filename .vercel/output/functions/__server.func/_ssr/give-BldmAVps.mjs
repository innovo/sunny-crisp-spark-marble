import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as FUNDS } from "./types-OZ7ZtIhQ.mjs";
import { S as myGiving, c as give } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { i as formatMoney } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/give-BldmAVps.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRESETS = [
	1e4,
	25e3,
	5e4,
	1e5
];
function GivePage() {
	const me = useMe();
	const [amount, setAmount] = (0, import_react.useState)(25e3);
	const [fund, setFund] = (0, import_react.useState)("general");
	const [method, setMethod] = (0, import_react.useState)("card");
	const [note, setNote] = (0, import_react.useState)("");
	const [anonymous, setAnonymous] = (0, import_react.useState)(false);
	const [recurring, setRecurring] = (0, import_react.useState)(false);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [totals, setTotals] = (0, import_react.useState)([]);
	const [done, setDone] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	function reload() {
		myGiving().then((d) => {
			setHistory(d.history);
			setTotals(d.totals);
		});
	}
	(0, import_react.useEffect)(reload, []);
	async function onGive(e) {
		e.preventDefault();
		setBusy(true);
		setDone(null);
		try {
			await give({ data: {
				amountCents: amount,
				fund,
				method,
				note: note || void 0,
				anonymous,
				recurring
			} });
			setDone(`Thank you. ${formatMoney(amount)} to ${FUNDS.find((f) => f.id === fund)?.label} is recorded. In production this step talks to PayFast, SnapScan, or Stripe.`);
			setNote("");
			reload();
		} catch (err) {
			setDone(err instanceof Error ? err.message : "Could not give");
		} finally {
			setBusy(false);
		}
	}
	const yearTotal = history.reduce((s, h) => s + h.amountCents, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Stewardship",
		title: "Give",
		description: "Nova is a family that shares. Gifts are private unless you choose otherwise."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: onGive,
			className: "space-y-5 lg:col-span-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
					children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setAmount(p),
						className: `h-12 rounded-md text-sm font-medium ${amount === p ? "bg-primary text-primary-fg" : "bg-secondary"}`,
						children: formatMoney(p)
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "custom",
						children: "Or another amount (R)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "custom",
						type: "number",
						min: 10,
						value: amount / 100,
						onChange: (e) => setAmount(Math.round(Number(e.target.value) * 100))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium",
						children: "Fund"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: FUNDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: `flex cursor-pointer gap-3 rounded-lg border p-3 ${fund === f.id ? "border-primary bg-surface" : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "fund",
								className: "mt-1",
								checked: fund === f.id,
								onChange: () => setFund(f.id)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: f.blurb
							})] })]
						}, f.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						["card", "Card"],
						["eft", "EFT"],
						["snapscan", "SnapScan"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMethod(id),
						className: `h-11 rounded-md text-sm ${method === id ? "bg-primary text-primary-fg" : "bg-secondary"}`,
						children: label
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "note",
						children: "Note (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "note",
						value: note,
						onChange: (e) => setNote(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: recurring,
						onChange: (e) => setRecurring(e.target.checked)
					}), "Make this monthly"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: anonymous,
						onChange: (e) => setAnonymous(e.target.checked)
					}), "Give without showing my name to staff"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					disabled: busy,
					children: busy ? "Processing…" : `Give ${formatMoney(amount)}`
				}),
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: done
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-muted uppercase",
							children: "Your giving"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-3xl",
							children: formatMoney(yearTotal)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted",
								children: "No gifts recorded yet."
							}) : history.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [FUNDS.find((f) => f.id === h.fund)?.label, h.recurring ? " · monthly" : ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatMoney(h.amountCents)
								})]
							}, h.id))
						})
					]
				}),
				me.isStaff && totals.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl bg-primary p-5 text-primary-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide uppercase opacity-70",
							children: "Staff · fund totals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: totals.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capitalize",
									children: t.fund
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatMoney(t.total)
								})]
							}, t.fund))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs opacity-70",
							children: "Individual named gifts stay with the pastor’s books, not this screen."
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted",
					children: "Section 18A receipts and debit orders belong in a later finance phase. This tab records intent and history so the rest of the house can be designed around it."
				})
			]
		})]
	})] });
}
//#endregion
export { GivePage as component };
