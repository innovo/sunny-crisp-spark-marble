import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as imageSrc } from "./types-OZ7ZtIhQ.mjs";
import { i as createEvent, m as listEvents } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { a as formatWhen, i as formatMoney } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-BiY6QB6M.mjs";
import { t as Textarea } from "./textarea-DknUm2JE.mjs";
import { t as EmptyState } from "./empty-state-CHOyqWDj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-B3gVHLbn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const me = useMe();
	const [events, setEvents] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	function reload() {
		listEvents().then(setEvents);
	}
	(0, import_react.useEffect)(reload, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Gather",
			title: "Events",
			description: "Sundays, life together, and the nights we open the doors.",
			actions: me.isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "New event"
			}) : null
		}),
		!events ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-xl bg-bg-warm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-xl bg-bg-warm" })]
		}) : events.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			title: "Nothing on the calendar",
			description: "Staff can add the next gathering from this page."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: events.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/events/$eventId",
				params: { eventId: String(ev.id) },
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imageSrc(ev.imageKey),
					alt: "",
					className: "h-40 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: ev.visibility === "public" ? "Open" : "Members" }),
								ev.ticketCents > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "primary",
									children: formatMoney(ev.ticketCents)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "warm",
									children: "Free"
								}),
								ev.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "primary",
									children: "Going"
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-xl font-medium",
							children: ev.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: formatWhen(ev.startsAt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: ev.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-faint",
							children: [ev.going, " going"]
						})
					]
				})]
			}, ev.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateEventDialog, {
			open,
			onOpenChange: setOpen,
			onCreated: () => {
				setOpen(false);
				reload();
			}
		})
	] });
}
function CreateEventDialog({ open, onOpenChange, onCreated }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		setBusy(true);
		setError(null);
		try {
			const starts = String(fd.get("starts"));
			const ends = String(fd.get("ends") || starts);
			await createEvent({ data: {
				title: String(fd.get("title")),
				description: String(fd.get("description")),
				location: String(fd.get("location")),
				startsAt: new Date(starts).toISOString(),
				endsAt: new Date(ends).toISOString(),
				visibility: fd.get("visibility") === "public" ? "public" : "members",
				kind: String(fd.get("kind") || "special"),
				ticketCents: Math.round(Number(fd.get("price") || 0) * 100),
				imageKey: "sanctuary"
			} });
			onCreated();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not create event");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New event" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-3",
			onSubmit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "title",
						children: "Title"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "title",
						name: "title",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "description",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "description",
						name: "description",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "location",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "location",
						name: "location",
						defaultValue: "5 Eskol Avenue, Constantia",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "starts",
							children: "Starts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "starts",
							name: "starts",
							type: "datetime-local",
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ends",
							children: "Ends"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ends",
							name: "ends",
							type: "datetime-local"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "visibility",
							children: "Who can come"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "visibility",
							name: "visibility",
							className: "h-11 w-full rounded-md border border-input bg-surface px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "members",
								children: "Members"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "public",
								children: "Open to the city"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "price",
							children: "Ticket (R, 0 = free)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "price",
							name: "price",
							type: "number",
							min: 0,
							step: "1",
							defaultValue: 0
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "hidden",
					name: "kind",
					value: "special"
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-destructive",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "w-full",
					disabled: busy,
					children: busy ? "Saving…" : "Publish event"
				})
			]
		})] })
	});
}
//#endregion
export { EventsPage as component };
