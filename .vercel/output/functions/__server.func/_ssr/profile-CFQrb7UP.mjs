import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as AGE_GROUPS } from "./types-OZ7ZtIhQ.mjs";
import { A as updateProfile } from "./api-CxaXKXSv.mjs";
import { n as useMe } from "./me-context-Bp5J-8mA.mjs";
import { n as UserButton } from "./gates-CBujfI_M.mjs";
import { t as PageHeader } from "./page-header-BB6z9Yon.mjs";
import { t as Avatar } from "./avatar-CTaNIRcL.mjs";
import { t as Input } from "./input-evtyha8E.mjs";
import { t as Button } from "./button-s5aZIqJ6.mjs";
import { t as Label } from "./label-CgdQtKn0.mjs";
import { t as Textarea } from "./textarea-DknUm2JE.mjs";
import { t as QrMark } from "./qr-code-CMJQm9nQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CFQrb7UP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const me = useMe();
	const [firstName, setFirst] = (0, import_react.useState)(me.firstName);
	const [lastName, setLast] = (0, import_react.useState)(me.lastName);
	const [phone, setPhone] = (0, import_react.useState)(me.phone || "");
	const [bio, setBio] = (0, import_react.useState)(me.bio || "");
	const [ageGroup, setAge] = (0, import_react.useState)(me.ageGroup);
	const [birthday, setBirthday] = (0, import_react.useState)(me.birthday || "");
	const [address, setAddress] = (0, import_react.useState)(me.address || "");
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSave(e) {
		e.preventDefault();
		setBusy(true);
		await updateProfile({ data: {
			firstName,
			lastName,
			phone,
			bio,
			ageGroup,
			birthday: birthday || void 0,
			address
		} });
		setBusy(false);
		setSaved(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "You",
		title: "Profile",
		description: "How Nova knows you. Keep this kind, and current."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: onSave,
			className: "space-y-3 lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "first",
							children: "First name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "first",
							value: firstName,
							onChange: (e) => setFirst(e.target.value),
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "last",
							children: "Last name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "last",
							value: lastName,
							onChange: (e) => setLast(e.target.value)
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						value: phone,
						onChange: (e) => setPhone(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "age",
						children: "Age group"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "age",
						value: ageGroup,
						onChange: (e) => setAge(e.target.value),
						className: "h-11 w-full rounded-md border border-input bg-surface px-3 text-sm",
						children: AGE_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: g.id,
							children: g.label
						}, g.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "birthday",
						children: "Birthday"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "birthday",
						type: "date",
						value: birthday,
						onChange: (e) => setBirthday(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "address",
						children: "Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "address",
						value: address,
						onChange: (e) => setAddress(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "bio",
						children: "A sentence about you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "bio",
						value: bio,
						onChange: (e) => setBio(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: busy,
					children: busy ? "Saving…" : "Save profile"
				}),
				saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Saved. Refresh to see it on the home greeting."
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						name: `${firstName} ${lastName}`,
						hue: me.avatarHue,
						size: "lg",
						className: "mx-auto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-display text-xl",
						children: [
							firstName,
							" ",
							lastName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted capitalize",
						children: me.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 text-center shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Your member QR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrMark, {
							value: me.qrToken,
							size: 160
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs tracking-wider text-muted",
						children: me.qrToken
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { ProfilePage as component };
