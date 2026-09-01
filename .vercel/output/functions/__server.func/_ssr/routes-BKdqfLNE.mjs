import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCurrentUserState } from "./use-current-user-DG6UNzh9.mjs";
import { a as CHURCH_EMAIL, c as CHURCH_TAGLINE, d as CORE_VALUES, h as imageSrc, i as CHURCH_CITY, l as CHURCH_WEBSITE, m as SUNDAY_TIME, o as CHURCH_MAP, p as LAUNCH_TIMES, r as CHURCH_ADDRESS, s as CHURCH_NAME, u as CHURCH_WHATSAPP } from "./types-OZ7ZtIhQ.mjs";
import { D as ArrowRight, S as Clock, d as MessageCircle, m as Mail, p as MapPin } from "../_libs/lucide-react.mjs";
import { a as formatWhen } from "./utils-DIoohltr.mjs";
import { t as NovaMark } from "./nova-mark-nuJDREEz.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKdqfLNE.js
var import_jsx_runtime = require_jsx_runtime();
function sast(date, hour, minute = 0) {
	const hh = String(hour).padStart(2, "0");
	const mm = String(minute).padStart(2, "0");
	return (/* @__PURE__ */ new Date(`${date}T${hh}:${mm}:00+02:00`)).toISOString();
}
function plusMinutes(iso, minutes) {
	return new Date(new Date(iso).getTime() + minutes * 6e4).toISOString();
}
function publicHappenings() {
	const launchA = sast("2026-09-06", 8, 30);
	const launchB = sast("2026-09-06", 10, 30);
	const sun = sast("2026-09-13", 9, 30);
	const homes = sast("2026-09-10", 19, 0);
	return {
		events: [
			{
				id: 1,
				title: "Launch Sunday · 08:30",
				description: "The first gathering. Coffee, worship, and a word for a church just being born.",
				location: CHURCH_ADDRESS,
				startsAt: launchA,
				endsAt: plusMinutes(launchA, 90),
				visibility: "public",
				kind: "sunday",
				capacity: 400,
				ticketCents: 0,
				imageKey: "sanctuary",
				going: 0,
				mine: false
			},
			{
				id: 2,
				title: "Launch Sunday · 10:30",
				description: "The later launch gathering — same table, same hope. Kids and teens are especially welcome.",
				location: CHURCH_ADDRESS,
				startsAt: launchB,
				endsAt: plusMinutes(launchB, 90),
				visibility: "public",
				kind: "sunday",
				capacity: 400,
				ticketCents: 0,
				imageKey: "exterior",
				going: 0,
				mine: false
			},
			{
				id: 3,
				title: "Life together",
				description: "Homes, not a programme. A midweek table for people learning to belong.",
				location: "Homes across the Constantia valley",
				startsAt: homes,
				endsAt: plusMinutes(homes, 120),
				visibility: "public",
				kind: "midweek",
				capacity: 40,
				ticketCents: 0,
				imageKey: "study",
				going: 0,
				mine: false
			},
			{
				id: 4,
				title: "Sunday gathering · 09:30",
				description: "Every Sunday after launch. One gathering, one family.",
				location: CHURCH_ADDRESS,
				startsAt: sun,
				endsAt: plusMinutes(sun, 90),
				visibility: "public",
				kind: "sunday",
				capacity: 400,
				ticketCents: 0,
				imageKey: "arch",
				going: 0,
				mine: false
			}
		],
		sermon: {
			id: 1,
			title: "All things new",
			speaker: "Terran Williams",
			series: "All Things New",
			scripture: "Revelation 21:5",
			preachedAt: "2026-08-23",
			durationSeconds: 1860,
			description: "A launch-team word on the God who still makes all things new — including Cape Town, including you.",
			imageKey: "arch",
			transcript: ""
		}
	};
}
function Landing() {
	const { user, isPending } = useCurrentUserState();
	const { events, sermon } = publicHappenings();
	if (!isPending && user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/home" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between px-5 py-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-md bg-primary text-primary-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NovaMark, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl leading-none",
						children: "Nova"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							children: "Sign in"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							children: "Join us"
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative mx-4 overflow-hidden rounded-2xl md:mx-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/exterior.jpg",
						alt: "Nova Church at 5 Eskol Avenue, Constantia",
						className: "h-[28rem] w-full object-cover sm:h-[36rem]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 via-fg/30 to-fg/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-6 text-primary-fg sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.22em] uppercase opacity-80",
								children: "Launch Sunday · 6 September 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 max-w-2xl font-display text-4xl leading-[1.05] font-medium sm:text-6xl",
								children: "Fancy a fresh start?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-lg text-sm text-primary-fg/85 sm:text-base",
								children: CHURCH_TAGLINE
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "onDark",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login",
										children: ["Enter church ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "ghostDark",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#gatherings",
										children: "Launch Sunday"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-5xl gap-6 px-5 py-12 md:grid-cols-3 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						kicker: "Launch · 6 September",
						title: LAUNCH_TIMES,
						body: `Thereafter every Sunday at ${SUNDAY_TIME}. Coffee, worship, the Word.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						kicker: "Find us",
						title: "5 Eskol Avenue",
						body: `${CHURCH_ADDRESS}. Off Strawberry Lane in the Constantia valley.`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						kicker: "Kids",
						title: "Especially welcome",
						body: "Little Lights adjoining the hall. Nova Kids upstairs to Grade 7. Teens with us."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-5 pb-16 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.16em] text-muted uppercase",
						children: "New here? Us too."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
						children: "A church family just getting started."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
						children: [CHURCH_NAME, " is a growing community of ordinary people who share this conviction: God is still making all things new. Even you? Yes, absolutely. Whether you live close by or beyond the boerewors curtain — you are welcome to join us as we join the One who renews all things."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl italic text-primary",
						children: "All things new."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "gatherings",
				className: "mx-auto max-w-5xl px-5 pb-16 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.16em] text-muted uppercase",
						children: "Open to the city"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-medium",
						children: "Coming up"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: events.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: imageSrc(ev.imageKey),
								alt: "",
								className: "h-40 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-medium",
										children: ev.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 flex items-center gap-2 text-sm text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
											" ",
											formatWhen(ev.startsAt)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 flex items-center gap-2 text-sm text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
											" ",
											ev.location
										]
									})
								]
							})]
						}, ev.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-5 pb-16 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.16em] text-muted uppercase",
						children: "The foundations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-medium",
						children: "How we hope to live"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: CORE_VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium",
								children: v.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: v.body
							})]
						}, v.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-4 mb-16 overflow-hidden rounded-2xl bg-primary text-primary-fg md:mx-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: imageSrc(sermon.imageKey),
						alt: "",
						className: "h-56 w-full object-cover md:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.16em] uppercase opacity-70",
								children: "Meet our pastors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-medium",
								children: "Terran & Julie Williams"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed opacity-90",
								children: "Married over twenty years, parents of five, and church planters who have spent most of their adult lives in ministry. Nova is the new thing God is calling them to pioneer and co-lead — alongside A2, a global family of Acts 2 churches."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm italic opacity-80",
								children: [
									sermon.speaker,
									" · ",
									sermon.title,
									" · ",
									sermon.scripture
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Listen inside Nova"
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mb-16 grid max-w-5xl gap-4 px-5 md:grid-cols-3 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: CHURCH_MAP,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-medium",
								children: "Find the land"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: CHURCH_ADDRESS
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: CHURCH_WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-medium",
								children: "Follow along"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Join the WhatsApp list for news about Nova."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${CHURCH_EMAIL}`,
						className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-medium",
								children: "Say hello"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: CHURCH_EMAIL
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border px-5 py-10 text-sm text-muted md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-fg",
						children: CHURCH_NAME
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: [
							CHURCH_ADDRESS,
							" · ",
							CHURCH_CITY
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CHURCH_WEBSITE,
								className: "underline decoration-border underline-offset-4 hover:text-fg",
								children: "novachurch.co.za"
							}),
							" · ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${CHURCH_EMAIL}`,
								className: "hover:text-fg",
								children: CHURCH_EMAIL
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 italic",
						children: "All things new."
					})
				]
			})
		]
	});
}
function Fact({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.16em] text-muted uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-2xl font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { Landing as component };
