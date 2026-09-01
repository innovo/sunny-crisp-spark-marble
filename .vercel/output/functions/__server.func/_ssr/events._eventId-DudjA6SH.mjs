import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as imageSrc } from "./types-OZ7ZtIhQ.mjs";
import { p as MapPin, w as CalendarPlus } from "../_libs/lucide-react.mjs";
import { n as Route$1 } from "./router-05Y12lSN.mjs";
import { T as rsvpEvent, a as getEvent, t as cancelRsvp } from "./api-CxaXKXSv.mjs";
import { a as formatWhen, i as formatMoney } from "./utils-DIoohltr.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._eventId-DudjA6SH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventDetail() {
	const { eventId } = Route$1.useParams();
	const id = Number(eventId);
	const [event, setEvent] = (0, import_react.useState)(null);
	const [roster, setRoster] = (0, import_react.useState)([]);
	const [tickets, setTickets] = (0, import_react.useState)(1);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)(null);
	function reload() {
		getEvent({ data: id }).then((d) => {
			setEvent(d.event);
			setRoster(d.roster);
		});
	}
	(0, import_react.useEffect)(reload, [id]);
	if (!event) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80 animate-pulse rounded-xl bg-bg-warm" });
	const paid = event.ticketCents > 0;
	const ics = buildIcs(event);
	const gcal = googleCal(event);
	async function onRsvp() {
		setBusy(true);
		setMessage(null);
		try {
			const res = await rsvpEvent({ data: {
				eventId: id,
				tickets
			} });
			setMessage(paid ? `Tickets reserved. ${formatMoney(res.paidCents)} recorded (demo payment — connect PayFast or Stripe to take live cards).` : "You’re on the list. We’ll see you there.");
			reload();
		} catch (e) {
			setMessage(e instanceof Error ? e.message : "Could not register");
		} finally {
			setBusy(false);
		}
	}
	async function onCancel() {
		setBusy(true);
		await cancelRsvp({ data: id });
		setMessage("Registration cancelled.");
		setBusy(false);
		reload();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/events",
			className: "text-sm text-muted hover:text-fg",
			children: "← Events"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageSrc(event.imageKey),
				alt: "",
				className: "h-56 w-full object-cover sm:h-72"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: event.visibility === "public" ? "Open" : "Members" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "warm",
							children: event.kind
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-medium tracking-tight",
						children: event.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: formatWhen(event.startsAt)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
							" ",
							event.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl leading-relaxed",
						children: event.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							event.going,
							" going",
							event.capacity ? ` · ${event.capacity} capacity` : "",
							paid ? ` · ${formatMoney(event.ticketCents)} per ticket` : " · Free"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-end gap-3",
						children: [
							paid && !event.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "tickets",
									children: "Tickets"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "tickets",
									type: "number",
									min: 1,
									max: 8,
									value: tickets,
									onChange: (e) => setTickets(Number(e.target.value)),
									className: "w-24"
								})]
							}) : null,
							event.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								disabled: busy,
								onClick: onCancel,
								children: "Cancel my place"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: busy,
								onClick: onRsvp,
								children: paid ? `Purchase · ${formatMoney(event.ticketCents * tickets)}` : "Register"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: gcal,
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "size-4" }), " Google Calendar"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: ics,
									download: `${event.title}.ics`,
									children: "Download .ics"
								})
							})
						]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: message
					}) : null
				]
			})]
		}),
		roster.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: "Serving roster"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 divide-y divide-border rounded-xl bg-surface shadow-[var(--shadow-card)]",
				children: roster.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between px-5 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [" · ", r.team]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: r.seat
					})]
				}, r.seat + r.name))
			})]
		}) : null
	] });
}
function googleCal(ev) {
	const start = compact(ev.startsAt);
	const end = compact(ev.endsAt);
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text: ev.title,
		dates: `${start}/${end}`,
		location: ev.location,
		details: ev.description
	}).toString()}`;
}
function compact(iso) {
	return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}
function buildIcs(ev) {
	const ics = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"BEGIN:VEVENT",
		`DTSTART:${compact(ev.startsAt)}`,
		`DTEND:${compact(ev.endsAt)}`,
		`SUMMARY:${ev.title}`,
		`LOCATION:${ev.location}`,
		`DESCRIPTION:${ev.description.replace(/\n/g, " ")}`,
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	return URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
}
//#endregion
export { EventDetail as component };
