import { o as __toESM } from "./_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "./_libs/@radix-ui/react-collection+[...].mjs";
import { d as useRouterState, m as Outlet, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { i as signOut } from "./_ssr/client-B40BzJxt.mjs";
import { n as useCurrentUserState } from "./_ssr/use-current-user-DG6UNzh9.mjs";
import { C as Calendar, T as Baby, _ as House, b as FolderOpen, d as MessageCircle, f as Menu, g as Library, h as LogOut, n as Users, r as UserRound, t as X, u as Newspaper, v as HeartHandshake, x as Ellipsis, y as Headphones } from "./_libs/lucide-react.mjs";
import { s as getMe } from "./_ssr/api-CxaXKXSv.mjs";
import { t as MeContext } from "./_ssr/me-context-Bp5J-8mA.mjs";
import { t as RedirectToSignIn } from "./_ssr/gates-CBujfI_M.mjs";
import { n as cn, o as initials } from "./_ssr/utils-DIoohltr.mjs";
import { n as NovaWordmark } from "./_ssr/nova-mark-nuJDREEz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app-Bzp4jYcd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-fg/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 bg-surface shadow-[var(--shadow-card)] focus:outline-none", side === "right" && "inset-y-0 right-0 h-full w-[min(100%,22rem)] p-5", side === "bottom" && "inset-x-0 bottom-0 max-h-[85vh] rounded-t-2xl p-5", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 grid size-11 place-items-center rounded-md text-muted hover:bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-xl font-medium", className),
		...props
	});
}
var primary = [
	{
		to: "/home",
		label: "Home",
		icon: House
	},
	{
		to: "/events",
		label: "Events",
		icon: Calendar
	},
	{
		to: "/kids",
		label: "Kids",
		icon: Baby
	},
	{
		to: "/sermons",
		label: "Sermons",
		icon: Headphones
	},
	{
		to: "/give",
		label: "Give",
		icon: HeartHandshake
	}
];
var more = [
	{
		to: "/news",
		label: "News",
		icon: Newspaper
	},
	{
		to: "/groups",
		label: "Groups",
		icon: Users
	},
	{
		to: "/teams",
		label: "Teams",
		icon: FolderOpen
	},
	{
		to: "/directory",
		label: "Directory",
		icon: UserRound
	},
	{
		to: "/messages",
		label: "Messages",
		icon: MessageCircle
	},
	{
		to: "/resources",
		label: "Resources",
		icon: Library
	}
];
function NavLink({ to, label, icon: Icon, onClick }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const active = pathname === to || to !== "/home" && pathname.startsWith(to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		onClick,
		className: cn("flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors", active ? "bg-primary text-primary-fg" : "text-fg/80 hover:bg-secondary"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-4",
			strokeWidth: 1.75
		}), label]
	});
}
function AppShell({ me, children }) {
	const [moreOpen, setMoreOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const account = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-lg bg-secondary/70 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/profile",
			onClick: () => setMenuOpen(false),
			className: "flex min-w-0 flex-1 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-10 place-items-center rounded-full bg-primary text-sm font-medium text-primary-fg",
				children: initials(me.displayName)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-sm font-medium",
					children: me.displayName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-xs text-muted capitalize",
					children: me.role
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Sign out",
			disabled: signingOut,
			className: "grid size-11 place-items-center rounded-md text-muted hover:bg-surface",
			onClick: () => {
				setSigningOut(true);
				signOut().catch(() => setSigningOut(false));
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
		})]
	});
	const sidebar = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-2 pt-1 pb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NovaWordmark, { subtitle: "Constantia" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-1 flex-col gap-6 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: primary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						...item,
						onClick: () => setMenuOpen(false)
					}, item.to))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 px-3 text-[11px] font-medium tracking-[0.14em] text-faint uppercase",
					children: "Church life"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						...item,
						onClick: () => setMenuOpen(false)
					}, item.to))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: account
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "fixed inset-y-0 left-0 hidden w-60 border-r border-border bg-surface p-4 lg:flex",
				children: sidebar
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					"data-print-hide": true,
					className: "sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-bg/90 px-4 backdrop-blur-md lg:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-md hover:bg-secondary",
							onClick: () => setMenuOpen(true),
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-medium",
							children: "Nova"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/profile",
							className: "grid size-11 place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 place-items-center rounded-full bg-primary text-xs font-medium text-primary-fg",
								children: initials(me.displayName)
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "mx-auto w-full max-w-5xl px-4 pt-5 pb-28 lg:px-8 lg:pt-8 lg:pb-12",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"data-print-hide": true,
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 px-2 pt-1 pb-[max(0.4rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid grid-cols-5",
					children: [primary.slice(0, 4).map((item) => {
						const active = pathname === item.to || pathname.startsWith(item.to + "/");
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium", active ? "text-primary" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							}), item.label]
						}) }, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setMoreOpen(true),
						className: cn("flex h-14 w-full flex-col items-center justify-center gap-0.5 text-[11px] font-medium", more.some((m) => pathname === m.to) || pathname === "/give" || pathname === "/profile" ? "text-primary" : "text-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-5" }), "More"]
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: menuOpen,
				onOpenChange: setMenuOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "right",
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "sr-only",
						children: "Menu"
					}), sidebar]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: moreOpen,
				onOpenChange: setMoreOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "mb-4",
						children: "Church life"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 pb-4",
						children: [
							...more,
							{
								to: "/give",
								label: "Give",
								icon: HeartHandshake
							},
							{
								to: "/profile",
								label: "Profile",
								icon: UserRound
							}
						].map((item) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: () => setMoreOpen(false),
								className: "flex h-20 flex-col items-center justify-center gap-2 rounded-lg bg-secondary text-sm font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: 1.75
								}), item.label]
							}, item.to);
						})
					})]
				})
			})
		]
	});
}
function AuthGate({ children }) {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-40 animate-pulse rounded-md bg-bg-warm" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-xl bg-bg-warm" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-24 animate-pulse rounded-xl bg-bg-warm" })
			]
		})
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function AppLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChurchFrame, {}) });
}
function ChurchFrame() {
	const { user } = useCurrentUserState();
	const [me, setMe] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!user) return;
		getMe({ data: {
			name: user.displayName,
			email: user.primaryEmail
		} }).then(setMe).catch((e) => setError(e instanceof Error ? e.message : "Could not load profile"));
	}, [user]);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: error
		})
	});
	if (!me) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 animate-pulse rounded-md bg-bg-warm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-48 animate-pulse rounded-xl bg-bg-warm" })]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeContext.Provider, {
		value: me,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
			me,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})
	});
}
//#endregion
export { AppLayout as component };
