import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { D as sendMessage, f as listChannels, g as listMessages } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { n as cn } from "./utils-DIoohltr.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-DdeP6hGM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MessagesPage() {
	const me = useMe();
	const [channels, setChannels] = (0, import_react.useState)([]);
	const [active, setActive] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [body, setBody] = (0, import_react.useState)("");
	const end = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		listChannels().then((rows) => {
			setChannels(rows);
			setActive(rows[0]?.id ?? null);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		listMessages({ data: active }).then(setMessages);
	}, [active]);
	(0, import_react.useEffect)(() => {
		end.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages.length]);
	const current = channels.find((c) => c.id === active);
	async function onSend(e) {
		e.preventDefault();
		if (!active || !body.trim()) return;
		const text = body;
		setBody("");
		await sendMessage({ data: {
			channelId: active,
			body: text
		} });
		const rows = await listMessages({ data: active });
		setMessages(rows);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Connect",
		title: "Messages",
		description: "Channels for the whole church, your age group, and the teams you serve on. Not a second WhatsApp — a quieter room."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)] lg:grid-cols-[16rem_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "border-b border-border lg:border-r lg:border-b-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "max-h-48 overflow-y-auto p-2 lg:max-h-[32rem]",
				children: channels.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setActive(c.id),
					className: cn("flex h-11 w-full items-center rounded-md px-3 text-left text-sm", active === c.id ? "bg-primary text-primary-fg" : "hover:bg-secondary"),
					children: c.name
				}) }, c.id))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex min-h-[24rem] flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: current?.name ?? "Choose a channel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted capitalize",
						children: current?.kind
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-3 overflow-y-auto p-4",
					children: [messages.map((m) => {
						const mine = m.userId === me.userId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("max-w-[85%]", mine && "ml-auto"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-1 text-[11px] text-muted",
								children: m.authorName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-lg px-3 py-2 text-sm whitespace-pre-wrap", mine ? "bg-primary text-primary-fg" : "bg-secondary"),
								children: m.body
							})]
						}, m.id);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: end })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onSend,
					className: "flex gap-2 border-t border-border p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: body,
						onChange: (e) => setBody(e.target.value),
						placeholder: "Write a note to this room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Send"
					})]
				})
			]
		})]
	})] });
}
//#endregion
export { MessagesPage as component };
