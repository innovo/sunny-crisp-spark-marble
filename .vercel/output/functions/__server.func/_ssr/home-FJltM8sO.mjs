import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCurrentUser } from "./use-current-user-DG6UNzh9.mjs";
import { h as imageSrc } from "./types-OZ7ZtIhQ.mjs";
import { D as ArrowRight, T as Baby, n as Users, v as HeartHandshake } from "../_libs/lucide-react.mjs";
import { o as getHome } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { a as formatWhen, i as formatMoney } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/home-FJltM8sO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const user = useCurrentUser();
	const fallback = useMe();
	const [me, setMe] = (0, import_react.useState)(fallback);
	const [events, setEvents] = (0, import_react.useState)([]);
	const [news, setNews] = (0, import_react.useState)([]);
	const [sermon, setSermon] = (0, import_react.useState)(null);
	const [teams, setTeams] = (0, import_react.useState)([]);
	const [given, setGiven] = (0, import_react.useState)(0);
	const [kids, setKids] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		getHome({ data: {
			name: user?.displayName,
			email: user?.primaryEmail
		} }).then((d) => {
			setMe(d.me);
			setEvents(d.events);
			setNews(d.news);
			setSermon(d.sermon);
			setTeams(d.teams);
			setGiven(d.givenCents);
			setKids(d.kidsOnSite);
		});
	}, [user]);
	const hour = (/* @__PURE__ */ new Date()).getHours();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Nova Church",
			title: `${hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"}, ${me.firstName}.`,
			description: me.role === "pastor" ? "You are signed in as pastor — the first account on this church. The house is yours to tend." : "Here is the week ahead. Come as you are."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					to: "/kids",
					label: "Kids on site",
					value: String(kids),
					icon: Baby
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					to: "/teams",
					label: "Your teams",
					value: teams.length ? teams.join(", ") : "None yet",
					icon: Users
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					to: "/give",
					label: "You have given",
					value: formatMoney(given),
					icon: HeartHandshake
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "This week"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "text-sm text-muted hover:text-fg",
						children: "All events"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: events.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events/$eventId",
						params: { eventId: String(ev.id) },
						className: "flex gap-4 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: imageSrc(ev.imageKey),
							alt: "",
							className: "h-28 w-28 shrink-0 object-cover sm:h-32 sm:w-36"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 py-3 pr-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: formatWhen(ev.startsAt)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-medium",
									children: ev.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm text-muted",
									children: ev.location
								}),
								ev.mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-primary",
									children: "You’re going"
								}) : null
							]
						})]
					}, ev.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-2xl font-medium",
					children: "Noticeboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: news.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/news",
						className: "block rounded-xl bg-surface p-4 shadow-[var(--shadow-card)]",
						children: [
							n.pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.14em] text-primary uppercase",
								children: "Pinned"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-medium",
								children: n.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-sm text-muted",
								children: n.excerpt
							})
						]
					}, n.id))
				})]
			})]
		}),
		sermon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/sermons",
			className: "mt-8 flex flex-col overflow-hidden rounded-2xl bg-primary text-primary-fg sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageSrc(sermon.imageKey),
				alt: "",
				className: "h-44 w-full object-cover sm:h-auto sm:w-56"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col justify-center p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] uppercase opacity-70",
						children: "Latest sermon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl font-medium",
						children: sermon.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm opacity-80",
						children: [
							sermon.speaker,
							" · ",
							sermon.scripture
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-4 inline-flex items-center gap-2 text-sm",
						children: ["Listen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})]
		}) : null,
		me.isOps ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kids",
					children: "Open check-in desk"
				})
			}), me.isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					children: "Post news"
				})
			}) : null]
		}) : null
	] });
}
function Stat({ to, label, value, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs tracking-wide uppercase",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 truncate font-display text-xl font-medium",
			children: value
		})]
	});
}
//#endregion
export { HomePage as component };
