import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Search, o as QrCode, s as Printer } from "../_libs/lucide-react.mjs";
import { E as scanCheckIn, k as todayCheckins, n as checkInChild, p as listChildren, r as checkOutChild, w as registerChild } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { n as cn, t as ageYears } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-BiY6QB6M.mjs";
import { t as EmptyState } from "./empty-state-CHOyqWDj.mjs";
import { t as QrMark } from "./qr-code-CMJQm9nQ.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kids-CI0ij8Rf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("inline-flex h-11 items-center gap-1 rounded-lg bg-secondary p-1", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium text-muted transition-colors data-[state=active]:bg-surface data-[state=active]:text-fg data-[state=active]:shadow-sm", className),
		...props
	});
}
var TabsContent = Content;
var SERVICES = [
	"Sunday 09:30",
	"Launch 08:30",
	"Launch 10:30"
];
function KidsPage() {
	const me = useMe();
	const [children, setChildren] = (0, import_react.useState)([]);
	const [checkins, setCheckins] = (0, import_react.useState)([]);
	const [service, setService] = (0, import_react.useState)(SERVICES[0]);
	const [q, setQ] = (0, import_react.useState)("");
	const [scan, setScan] = (0, import_react.useState)("");
	const [badge, setBadge] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [walkOpen, setWalkOpen] = (0, import_react.useState)(false);
	async function reload() {
		const [c, k] = await Promise.all([listChildren(), todayCheckins()]);
		setChildren(c);
		setCheckins(k);
	}
	(0, import_react.useEffect)(() => {
		reload().catch((e) => setError(e instanceof Error ? e.message : "Could not load"));
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return children;
		return children.filter((c) => `${c.firstName} ${c.lastName}`.toLowerCase().includes(s));
	}, [children, q]);
	const onSite = checkins.filter((c) => !c.checkedOutAt);
	const byRoom = onSite.reduce((acc, c) => {
		(acc[c.room] ||= []).push(c);
		return acc;
	}, {});
	async function onCheckIn(childId) {
		setError(null);
		try {
			const res = await checkInChild({ data: {
				childId,
				serviceLabel: service
			} });
			setBadge(res);
			await reload();
		} catch (e) {
			setError(e instanceof Error ? e.message : "Check-in failed");
		}
	}
	async function onScan(e) {
		e.preventDefault();
		setError(null);
		try {
			const res = await scanCheckIn({ data: {
				qrToken: scan,
				serviceLabel: service
			} });
			setBadge(res);
			setScan("");
			await reload();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Scan failed");
		}
	}
	async function onOut(id, code) {
		try {
			await checkOutChild({ data: {
				checkinId: id,
				pickupCode: code
			} });
			await reload();
		} catch (e) {
			setError(e instanceof Error ? e.message : "Check-out failed");
		}
	}
	function printRoster() {
		window.print();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nova Kids",
			title: "Check-in",
			description: "QR badges, pickup codes, and a printed roster for the rooms. Works with any Wi‑Fi printer via the browser.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setWalkOpen(true),
					children: "Walk-in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					onClick: printRoster,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), " Print roster"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "service",
					className: "text-muted",
					children: "Service"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					id: "service",
					value: service,
					onChange: (e) => setService(e.target.value),
					className: "h-11 rounded-md border border-input bg-surface px-3 text-sm",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					tone: "primary",
					children: [onSite.length, " in rooms"]
				})
			]
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 text-sm text-destructive",
			children: error
		}) : null,
		me.isOps ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: onScan,
			className: "mb-6 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: scan,
				onChange: (e) => setScan(e.target.value.toUpperCase()),
				placeholder: "Scan or type a QR token (HL-……)",
				className: "font-mono"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-4" }), " Check in"]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "register",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "register",
						children: "Register"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "onsite",
						children: "On site"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "badges",
						children: "QR badges"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "register",
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-3.5 left-3 size-4 text-faint" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search by name",
							className: "pl-10"
						})]
					}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: "No children yet",
						description: "Add your child, or use Walk-in for a guest family.",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setWalkOpen(true),
							children: "Add a child"
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]",
						children: filtered.map((c) => {
							const age = ageYears(c.birthday);
							const current = onSite.find((k) => k.childPeopleId === c.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-wrap items-center gap-3 px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-medium",
										children: [
											c.firstName,
											" ",
											c.lastName
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											age != null ? `${age} yrs` : "Age unknown",
											c.parentName ? ` · ${c.parentName}` : "",
											c.allergies ? ` · Allergy: ${c.allergies}` : ""
										]
									})]
								}), current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: "primary",
									children: ["In ", current.room]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => onCheckIn(c.id),
									children: "Check in"
								})]
							}, c.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "onsite",
					className: "mt-4",
					id: "print-area",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "print:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mb-1 hidden font-display text-2xl print:block",
								children: ["Nova Kids roster · ", service]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 hidden text-sm text-muted print:block",
								children: [(/* @__PURE__ */ new Date()).toLocaleDateString("en-ZA"), " · Keep pickup codes at the desk, never on the child."]
							}),
							Object.keys(byRoom).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								title: "Rooms are empty",
								description: "Check children in from Register or by scanning a badge."
							}) : Object.entries(byRoom).map(([room, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-medium",
									children: room
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "mt-2 w-full text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-2 font-medium",
												children: "Child"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-2 font-medium",
												children: "Allergy"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-2 font-medium",
												children: "Pickup"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "py-2 font-medium print:hidden" })
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2",
												children: c.childName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2",
												children: c.allergies || "—"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 font-mono tracking-widest",
												children: c.pickupCode
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "py-2 print:hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													variant: "outline",
													onClick: () => onOut(c.id, c.pickupCode),
													children: "Check out"
												})
											})
										]
									}, c.id)) })]
								})]
							}, room))
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "badges",
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-sm text-muted",
							children: "Print these for the household fridge. Scanning the code at the desk checks the child in."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex items-center gap-4 rounded-xl bg-surface p-4 shadow-[var(--shadow-card)] print:break-inside-avoid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrMark, {
									value: c.qrToken,
									size: 112
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-lg font-medium",
										children: [
											c.firstName,
											" ",
											c.lastName
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tracking-wider text-muted",
										children: c.qrToken
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted",
										children: "Nova Church · Nova Kids"
									}),
									c.allergies ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs font-medium text-destructive",
										children: ["Allergy: ", c.allergies]
									}) : null
								] })]
							}, c.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-4",
							variant: "secondary",
							onClick: () => window.print(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), " Print badges"]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: Boolean(badge),
			onOpenChange: () => setBadge(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [badge.childName, " is in"] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						badge.room,
						" · ",
						badge.serviceLabel
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrMark, {
							value: badge.qrToken,
							size: 180
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Show this code at pickup"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-5xl tracking-[0.2em]",
							children: badge.pickupCode
						}),
						badge.allergies ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium text-destructive",
							children: ["Allergy: ", badge.allergies]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => window.print(),
							children: "Print badge"
						})
					]
				})
			] }) : null })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkInDialog, {
			open: walkOpen,
			onOpenChange: setWalkOpen,
			onCreated: async (id) => {
				setWalkOpen(false);
				await onCheckIn(id);
			}
		})
	] });
}
function WalkInDialog({ open, onOpenChange, onCreated }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setBusy(true);
		const res = await registerChild({ data: {
			firstName: String(fd.get("firstName")),
			lastName: String(fd.get("lastName")),
			birthday: String(fd.get("birthday") || "") || void 0,
			allergies: String(fd.get("allergies") || "") || void 0,
			walkIn: true
		} });
		setBusy(false);
		onCreated(res.id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Walk-in child" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-3",
			onSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "firstName",
							children: "First name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "firstName",
							name: "firstName",
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "lastName",
							children: "Last name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "lastName",
							name: "lastName",
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "birthday",
						children: "Birthday"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "birthday",
						name: "birthday",
						type: "date"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "allergies",
						children: "Allergies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "allergies",
						name: "allergies",
						placeholder: "None"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					disabled: busy,
					children: busy ? "Saving…" : "Add and check in"
				})
			]
		})] })
	});
}
//#endregion
export { KidsPage as component };
