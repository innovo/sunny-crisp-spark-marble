import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn, t as authClient } from "./client-B40BzJxt.mjs";
import { n as useCurrentUserState } from "./use-current-user-DG6UNzh9.mjs";
import { t as GROK_PROVIDERS } from "./server-jOK3FcNM.mjs";
import { c as CHURCH_TAGLINE, n as APP_NAME, s as CHURCH_NAME } from "./types-OZ7ZtIhQ.mjs";
import { t as NovaMark } from "./nova-mark-nuJDREEz.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CaQDh9Wv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { user, isPending } = useCurrentUserState();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (!isPending && user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/home" });
	async function onEmail(e) {
		e.preventDefault();
		setError(null);
		setBusy(true);
		try {
			if (mode === "up") {
				const res = await authClient.signUp.email({
					email,
					password,
					name: name || email.split("@")[0]
				});
				if (res.error) throw new Error(res.error.message || "Could not create account");
			} else {
				const res = await authClient.signIn.email({
					email,
					password
				});
				if (res.error) throw new Error(res.error.message || "Could not sign in");
			}
			window.location.href = "/home";
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong");
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-dvh bg-bg lg:grid lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative hidden overflow-hidden lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/sanctuary.jpg",
					alt: "Nova gathering space in morning light",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-between p-10 text-primary-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display text-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NovaMark, { className: "size-6" }), APP_NAME]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-[0.18em] uppercase opacity-80",
						children: "Welcome home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl leading-[1.05] font-medium",
						children: CHURCH_TAGLINE
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex min-h-dvh items-center justify-center px-5 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-8 inline-flex items-center gap-2 font-display text-2xl text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NovaMark, { className: "size-6" }), APP_NAME]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: "Sign in"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Members, volunteers, and staff of ",
							CHURCH_NAME,
							"."
						]
					}),
					isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-11 animate-pulse rounded-md bg-bg-warm" }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-3",
						children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							className: "w-full",
							onClick: () => signIn(p.providerId, { callbackURL: "/home" }),
							children: ["Continue with ", p.label]
						}, p.providerId))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-6 flex items-center gap-3 text-xs tracking-wide text-faint uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							"or with email",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "space-y-3",
						onSubmit: onEmail,
						children: [
							mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									value: name,
									onChange: (e) => setName(e.target.value),
									autoComplete: "name"
								})]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									autoComplete: "email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "password",
									type: "password",
									required: true,
									minLength: 8,
									value: password,
									onChange: (e) => setPassword(e.target.value),
									autoComplete: mode === "up" ? "new-password" : "current-password"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-destructive",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full",
								disabled: busy,
								children: busy ? "Please wait…" : mode === "up" ? "Create account" : "Sign in with email"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-4 text-sm text-muted hover:text-fg",
						onClick: () => setMode(mode === "up" ? "in" : "up"),
						children: mode === "up" ? "Already have an account? Sign in" : "New here? Create an account"
					})
				]
			})
		})]
	});
}
//#endregion
export { Login as component };
