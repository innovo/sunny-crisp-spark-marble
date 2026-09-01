import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as imageSrc } from "./types-OZ7ZtIhQ.mjs";
import { C as postNews, _ as listNews } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { r as formatDay } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Badge } from "./badge-Ce132_2Y.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
import { i as DialogTitle, n as DialogContent, r as DialogHeader, t as Dialog } from "./dialog-BiY6QB6M.mjs";
import { t as Textarea } from "./textarea-DknUm2JE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-BN5dz74u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsPage() {
	const me = useMe();
	const [posts, setPosts] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	function reload() {
		listNews().then(setPosts);
	}
	(0, import_react.useEffect)(reload, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Communications",
			title: "News",
			description: "The noticeboard. Short, pastoral, and easy to scan on a Sunday morning.",
			actions: me.isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => setOpen(true),
				children: "Post news"
			}) : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-5",
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)] md:grid md:grid-cols-[16rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: imageSrc(p.imageKey),
					alt: "",
					className: "h-40 w-full object-cover md:h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [p.pinned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "primary",
								children: "Pinned"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: formatDay(p.publishedAt) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-medium",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed",
							children: p.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: p.authorName
						})
					]
				})]
			}, p.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Post to the church" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-3",
				onSubmit: async (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					await postNews({ data: {
						title: String(fd.get("title")),
						body: String(fd.get("body"))
					} });
					setOpen(false);
					reload();
				},
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
							htmlFor: "body",
							children: "Body"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "body",
							name: "body",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						children: "Publish"
					})
				]
			})] })
		})
	] });
}
//#endregion
export { NewsPage as component };
