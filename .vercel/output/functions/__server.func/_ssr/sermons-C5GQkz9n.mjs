import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as imageSrc } from "./types-OZ7ZtIhQ.mjs";
import { c as Play, l as Pause } from "../_libs/lucide-react.mjs";
import { b as listSermons } from "./api-CxaXKXSv.mjs";
import { r as formatDay } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sermons-C5GQkz9n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SermonsPage() {
	const [sermons, setSermons] = (0, import_react.useState)([]);
	const [current, setCurrent] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		listSermons().then((rows) => {
			setSermons(rows);
			setCurrent(rows[0] ?? null);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Listen",
			title: "Sermons",
			description: "Sunday’s word, kept for the week. Terran, Julie, and whoever God raises to teach."
		}),
		current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, { sermon: current }) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-3",
			children: sermons.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setCurrent(s),
				className: "flex w-full gap-4 overflow-hidden rounded-xl bg-surface text-left shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imageSrc(s.imageKey),
					alt: "",
					className: "h-24 w-24 shrink-0 object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-3 pr-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: s.series
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								s.speaker,
								" · ",
								s.scripture,
								" · ",
								formatDay(s.preachedAt)
							]
						})
					]
				})]
			}, s.id))
		})
	] });
}
function Player({ sermon }) {
	const audio = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [t, setT] = (0, import_react.useState)(0);
	const [clip, setClip] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setPlaying(false);
		setT(0);
		setClip(0);
		if (audio.current) {
			audio.current.pause();
			audio.current.currentTime = 0;
		}
	}, [sermon.id]);
	const duration = clip > 0 ? clip : sermon.durationSeconds;
	const pct = Math.min(100, t / duration * 100);
	const mm = (n) => {
		const m = Math.floor(n / 60);
		const s = Math.floor(n % 60);
		return `${m}:${String(s).padStart(2, "0")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden rounded-2xl bg-primary text-primary-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[18rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: imageSrc(sermon.imageKey),
				alt: "",
				className: "h-48 w-full object-cover md:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "warm",
						children: sermon.series
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed opacity-90",
						children: sermon.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
						ref: audio,
						src: "/audio/reflection.wav",
						onTimeUpdate: () => setT(audio.current?.currentTime ?? 0),
						onLoadedMetadata: () => {
							const d = audio.current?.duration ?? 0;
							if (d && Number.isFinite(d)) setClip(d);
						},
						onEnded: () => setPlaying(false)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							size: "icon",
							className: "size-14 rounded-full",
							onClick: () => {
								const el = audio.current;
								if (!el) return;
								if (playing) {
									el.pause();
									setPlaying(false);
								} else {
									el.play();
									setPlaying(true);
								}
							},
							children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5 ml-0.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-primary-fg/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-primary-fg",
									style: { width: `${pct}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-xs tabular-nums opacity-70",
								children: [
									mm(t),
									" / ",
									mm(duration)
								]
							})]
						})]
					}),
					sermon.transcript ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer text-sm opacity-80",
							children: "Transcript"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed opacity-90",
							children: sermon.transcript
						})]
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { SermonsPage as component };
