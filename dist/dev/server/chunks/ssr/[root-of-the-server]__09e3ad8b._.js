module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatPhoneNumber",
    ()=>formatPhoneNumber,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/--+/g, '-').trim();
}
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    }
    return phone;
}
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant = 'primary', size = 'md', children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg', {
            'bg-blue-900 text-white hover:bg-blue-950 focus:ring-blue-700': variant === 'primary',
            'bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-600': variant === 'secondary',
            'border-2 border-slate-400 text-slate-700 hover:bg-slate-100 focus:ring-slate-500': variant === 'outline',
            'text-slate-700 hover:bg-slate-100 focus:ring-slate-400': variant === 'ghost',
            'bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-400': variant === 'danger'
        }, {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-8 py-3.5 text-lg': size === 'lg'
        }, className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
;
}),
"[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant = 'default', children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-white transition-all duration-200 rounded-lg', {
            'border border-slate-300': variant === 'default',
            'border-2 border-slate-300': variant === 'bordered',
            'border border-slate-300 shadow-md': variant === 'elevated'
        }, className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Card.displayName = 'Card';
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-6 pb-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = 'CardHeader';
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = 'CardFooter';
;
}),
"[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>Container
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Container({ className, size = 'lg', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mx-auto px-4 sm:px-6 lg:px-8', {
            'max-w-3xl': size === 'sm',
            'max-w-5xl': size === 'md',
            'max-w-7xl': size === 'lg',
            'max-w-full': size === 'full'
        }, className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Container.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Badge({ className, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center px-2.5 py-0.5 text-xs font-medium', {
            'bg-slate-200 text-slate-800': variant === 'default',
            'bg-emerald-100 text-emerald-800': variant === 'success',
            'bg-amber-100 text-amber-800': variant === 'warning',
            'bg-red-100 text-red-800': variant === 'danger',
            'bg-blue-100 text-blue-800': variant === 'info'
        }, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Accordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Accordion({ items, className }) {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('space-y-3', className),
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-slate-300 overflow-hidden bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                        className: "w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-slate-800 pr-4",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Accordion.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0', openIndex === index && 'rotate-180')
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Accordion.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Accordion.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('overflow-hidden transition-all duration-300', openIndex === index ? 'max-h-96' : 'max-h-0'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 pt-0 text-slate-600 leading-relaxed",
                            children: item.answer
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Accordion.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Accordion.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/ui/Accordion.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Accordion.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/Pagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Pagination({ currentPage, totalPages, baseUrl }) {
    const pages = [];
    for(let i = 1; i <= totalPages; i++){
        if (i === 1 || i === totalPages || i >= currentPage - 1 && i <= currentPage + 1) {
            pages.push(i);
        } else if (i === currentPage - 2 && currentPage > 3 || i === currentPage + 2 && currentPage < totalPages - 2) {
            pages.push('...');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex justify-center items-center gap-2 mt-12",
        children: [
            currentPage > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `${baseUrl}?sayfa=${currentPage - 1}`,
                className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors",
                children: "← Önceki"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Pagination.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this),
            pages.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: page === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 text-slate-400",
                        children: "...·"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Pagination.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `${baseUrl}?sayfa=${page}`,
                        className: `px-4 py-2 font-medium rounded-lg transition-colors ${page === currentPage ? 'bg-blue-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-900 hover:text-blue-900'}`,
                        children: page
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Pagination.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/ui/Pagination.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)),
            currentPage < totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `${baseUrl}?sayfa=${currentPage + 1}`,
                className: "px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors",
                children: "Sonraki →"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Pagination.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Pagination.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Pagination.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/src/data/cities.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allCities",
    ()=>allCities,
    "cities",
    ()=>cities,
    "getCityBySlug",
    ()=>getCityBySlug,
    "getCityDistricts",
    ()=>getCityDistricts,
    "mediumPriorityCities",
    ()=>mediumPriorityCities,
    "priorityCities",
    ()=>priorityCities
]);
const cities = [
    {
        id: 'izmir',
        name: 'İzmir',
        slug: 'izmir',
        plateCode: '35',
        population: 4425789,
        priority: 'high',
        coordinates: {
            lat: 38.4237,
            lng: 27.1428
        },
        description: 'İzmir, Ege\'nin incisi olarak binlerce haneye teknik servis hizmeti sunmaktadır. Bornova, Karşıyaka, Konak, Alsancak gibi merkez ilçelerde ve tüm ilçelerde profesyonel servis ekibimizle hizmetinizdeyiz.',
        districts: [
            {
                id: 'bornova',
                name: 'Bornova',
                slug: 'bornova',
                citySlug: 'izmir'
            },
            {
                id: 'karsiyaka',
                name: 'Karşıyaka',
                slug: 'karsiyaka',
                citySlug: 'izmir'
            },
            {
                id: 'konak',
                name: 'Konak',
                slug: 'konak',
                citySlug: 'izmir'
            },
            {
                id: 'buca',
                name: 'Buca',
                slug: 'buca',
                citySlug: 'izmir'
            },
            {
                id: 'cigli',
                name: 'Çiğli',
                slug: 'cigli',
                citySlug: 'izmir'
            },
            {
                id: 'gaziemir',
                name: 'Gaziemir',
                slug: 'gaziemir',
                citySlug: 'izmir'
            },
            {
                id: 'balcova',
                name: 'Balçova',
                slug: 'balcova',
                citySlug: 'izmir'
            },
            {
                id: 'narlidere',
                name: 'Narlıdere',
                slug: 'narlidere',
                citySlug: 'izmir'
            },
            {
                id: 'torbali',
                name: 'Torbalı',
                slug: 'torbali',
                citySlug: 'izmir'
            },
            {
                id: 'menderes',
                name: 'Menderes',
                slug: 'menderes',
                citySlug: 'izmir'
            }
        ]
    },
    {
        id: 'manisa',
        name: 'Manisa',
        slug: 'manisa',
        plateCode: '45',
        population: 1463755,
        priority: 'high',
        coordinates: {
            lat: 38.6191,
            lng: 27.4289
        },
        description: 'Manisa\'da merkez ve tüm ilçelerinde teknik servis hizmeti sunuyoruz. Şehzadeler, Yunusemre ve diğer ilçelerde profesyonel ekibimizle zamanında yanınızdayız.',
        districts: [
            {
                id: 'sehzadeler',
                name: 'Şehzadeler',
                slug: 'sehzadeler',
                citySlug: 'manisa'
            },
            {
                id: 'yunusemre',
                name: 'Yunusemre',
                slug: 'yunusemre',
                citySlug: 'manisa'
            },
            {
                id: 'akhisar',
                name: 'Akhisar',
                slug: 'akhisar',
                citySlug: 'manisa'
            },
            {
                id: 'salihli',
                name: 'Salihli',
                slug: 'salihli',
                citySlug: 'manisa'
            },
            {
                id: 'soma',
                name: 'Soma',
                slug: 'soma',
                citySlug: 'manisa'
            },
            {
                id: 'turgutlu',
                name: 'Turgutlu',
                slug: 'turgutlu',
                citySlug: 'manisa'
            },
            {
                id: 'alas',
                name: 'Alaşehir',
                slug: 'alas',
                citySlug: 'manisa'
            },
            {
                id: 'saruhanli',
                name: 'Saruhanlı',
                slug: 'saruhanli',
                citySlug: 'manisa'
            }
        ]
    },
    {
        id: 'istanbul',
        name: 'İstanbul',
        slug: 'istanbul',
        plateCode: '34',
        population: 15636290,
        priority: 'high',
        coordinates: {
            lat: 41.0082,
            lng: 28.9784
        },
        description: 'İstanbul\'un Avrupa ve Anadolu yakasında tüm ilçelerinde teknik servis hizmeti. Kadıköy, Beşiktaş, Ataşehir ve diğer tüm ilçelerde profesyonel ekibimizle hizmetinizdeyiz.',
        districts: [
            {
                id: 'kadikoy',
                name: 'Kadıköy',
                slug: 'kadikoy',
                citySlug: 'istanbul'
            },
            {
                id: 'besiktas',
                name: 'Beşiktaş',
                slug: 'besiktas',
                citySlug: 'istanbul'
            },
            {
                id: 'atasehir',
                name: 'Ataşehir',
                slug: 'atasehir',
                citySlug: 'istanbul'
            },
            {
                id: 'uskudar',
                name: 'Üsküdar',
                slug: 'uskudar',
                citySlug: 'istanbul'
            },
            {
                id: 'maltepe',
                name: 'Maltepe',
                slug: 'maltepe',
                citySlug: 'istanbul'
            },
            {
                id: 'pendik',
                name: 'Pendik',
                slug: 'pendik',
                citySlug: 'istanbul'
            },
            {
                id: 'fatih',
                name: 'Fatih',
                slug: 'fatih',
                citySlug: 'istanbul'
            },
            {
                id: 'beyoglu',
                name: 'Beyoğlu',
                slug: 'beyoglu',
                citySlug: 'istanbul'
            },
            {
                id: 'basaksehir',
                name: 'Başakşehir',
                slug: 'basaksehir',
                citySlug: 'istanbul'
            },
            {
                id: 'sariyer',
                name: 'Sarıyer',
                slug: 'sariyer',
                citySlug: 'istanbul'
            }
        ]
    },
    {
        id: 'ankara',
        name: 'Ankara',
        slug: 'ankara',
        plateCode: '06',
        population: 5787415,
        priority: 'high',
        coordinates: {
            lat: 39.9334,
            lng: 32.8597
        },
        description: 'Ankara\'da Çankaya, Keçiören, Mamak ve tüm ilçelerde profesyonel teknik servis hizmeti.',
        districts: [
            {
                id: 'cankaya',
                name: 'Çankaya',
                slug: 'cankaya',
                citySlug: 'ankara'
            },
            {
                id: 'kecioren',
                name: 'Keçiören',
                slug: 'kecioren',
                citySlug: 'ankara'
            },
            {
                id: 'mamak',
                name: 'Mamak',
                slug: 'mamak',
                citySlug: 'ankara'
            },
            {
                id: 'yenimahalle',
                name: 'Yenimahalle',
                slug: 'yenimahalle',
                citySlug: 'ankara'
            },
            {
                id: 'sincan',
                name: 'Sincan',
                slug: 'sincan',
                citySlug: 'ankara'
            },
            {
                id: 'polatli',
                name: 'Polatlı',
                slug: 'polatli',
                citySlug: 'ankara'
            },
            {
                id: 'cubuk',
                name: 'Çubuk',
                slug: 'cubuk',
                citySlug: 'ankara'
            },
            {
                id: 'elmadag',
                name: 'Elmadağ',
                slug: 'elmadag',
                citySlug: 'ankara'
            }
        ]
    },
    {
        id: 'bursa',
        name: 'Bursa',
        slug: 'bursa',
        plateCode: '16',
        population: 3106953,
        priority: 'high',
        coordinates: {
            lat: 40.1826,
            lng: 29.0665
        },
        description: 'Bursa\'da merkez ve tüm ilçelerinde beyaz eşya, kombi ve klima servis hizmeti.',
        districts: [
            {
                id: 'nilufer',
                name: 'Nilüfer',
                slug: 'nilufer',
                citySlug: 'bursa'
            },
            {
                id: 'osmangazi',
                name: 'Osmangazi',
                slug: 'osmangazi',
                citySlug: 'bursa'
            },
            {
                id: 'yildirim',
                name: 'Yıldırım',
                slug: 'yildirim',
                citySlug: 'bursa'
            },
            {
                id: 'gemlik',
                name: 'Gemlik',
                slug: 'gemlik',
                citySlug: 'bursa'
            },
            {
                id: 'mudanya',
                name: 'Mudanya',
                slug: 'mudanya',
                citySlug: 'bursa'
            },
            {
                id: 'inegol',
                name: 'İnegöl',
                slug: 'inegol',
                citySlug: 'bursa'
            },
            {
                id: 'orhangazi',
                name: 'Orhangazi',
                slug: 'orhangazi',
                citySlug: 'bursa'
            }
        ]
    },
    {
        id: 'antalya',
        name: 'Antalya',
        slug: 'antalya',
        plateCode: '07',
        population: 2631525,
        priority: 'high',
        coordinates: {
            lat: 36.8969,
            lng: 30.7133
        },
        description: 'Antalya\'da Alanya, Konyaaltı, Muratpaşa ve tüm ilçelerde teknik servis hizmeti.',
        districts: [
            {
                id: 'konyaalti',
                name: 'Konyaaltı',
                slug: 'konyaalti',
                citySlug: 'antalya'
            },
            {
                id: 'muratpasa',
                name: 'Muratpaşa',
                slug: 'muratpasa',
                citySlug: 'antalya'
            },
            {
                id: 'alanya',
                name: 'Alanya',
                slug: 'alanya',
                citySlug: 'antalya'
            },
            {
                id: 'kemer',
                name: 'Kemer',
                slug: 'kemer',
                citySlug: 'antalya'
            },
            {
                id: 'serik',
                name: 'Serik',
                slug: 'serik',
                citySlug: 'antalya'
            },
            {
                id: 'manavgat',
                name: 'Manavgat',
                slug: 'manavgat',
                citySlug: 'antalya'
            },
            {
                id: 'kumluca',
                name: 'Kumluca',
                slug: 'kumluca',
                citySlug: 'antalya'
            }
        ]
    },
    {
        id: 'adana',
        name: 'Adana',
        slug: 'adana',
        plateCode: '01',
        population: 2274805,
        priority: 'medium',
        coordinates: {
            lat: 37.0017,
            lng: 35.3213
        },
        description: 'Adana\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'seyhan',
                name: 'Seyhan',
                slug: 'seyhan',
                citySlug: 'adana'
            },
            {
                id: 'yuregir',
                name: 'Yüreğir',
                slug: 'yuregir',
                citySlug: 'adana'
            },
            {
                id: 'cukurova',
                name: 'Çukurova',
                slug: 'cukurova',
                citySlug: 'adana'
            },
            {
                id: 'saimbeyli',
                name: 'Saimbeyli',
                slug: 'saimbeyli',
                citySlug: 'adana'
            }
        ]
    },
    {
        id: 'gaziantep',
        name: 'Gaziantep',
        slug: 'gaziantep',
        plateCode: '27',
        population: 2104000,
        priority: 'medium',
        coordinates: {
            lat: 37.0662,
            lng: 37.3833
        },
        description: 'Gaziantep\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'sehitkamil',
                name: 'Şehitkamil',
                slug: 'sehitkamil',
                citySlug: 'gaziantep'
            },
            {
                id: 'sehitler',
                name: 'Şehitler',
                slug: 'sehitler',
                citySlug: 'gaziantep'
            },
            {
                id: 'nizip',
                name: 'Nizip',
                slug: 'nizip',
                citySlug: 'gaziantep'
            },
            {
                id: 'islahiye',
                name: 'İslahiye',
                slug: 'islahiye',
                citySlug: 'gaziantep'
            }
        ]
    },
    {
        id: 'konya',
        name: 'Konya',
        slug: 'konya',
        plateCode: '42',
        population: 2235614,
        priority: 'medium',
        coordinates: {
            lat: 37.8746,
            lng: 32.4932
        },
        description: 'Konya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'selcuklu',
                name: 'Selçuklu',
                slug: 'selcuklu',
                citySlug: 'konya'
            },
            {
                id: 'meram',
                name: 'Meram',
                slug: 'meram',
                citySlug: 'konya'
            },
            {
                id: 'karatay',
                name: 'Karatay',
                slug: 'karatay',
                citySlug: 'konya'
            },
            {
                id: 'cumra',
                name: 'Çumra',
                slug: 'cumra',
                citySlug: 'konya'
            },
            {
                id: 'aksehir',
                name: 'Akşehir',
                slug: 'aksehir',
                citySlug: 'konya'
            }
        ]
    },
    {
        id: 'kayseri',
        name: 'Kayseri',
        slug: 'kayseri',
        plateCode: '38',
        population: 1436244,
        priority: 'medium',
        coordinates: {
            lat: 38.7312,
            lng: 35.4787
        },
        description: 'Kayseri\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'kocasinan',
                name: 'Kocasinan',
                slug: 'kocasinan',
                citySlug: 'kayseri'
            },
            {
                id: 'melikgazi',
                name: 'Melikgazi',
                slug: 'melikgazi',
                citySlug: 'kayseri'
            },
            {
                id: 'talas',
                name: 'Talas',
                slug: 'talas',
                citySlug: 'kayseri'
            },
            {
                id: 'sarıoglan',
                name: 'Sarıoğlan',
                slug: 'sarioglan',
                citySlug: 'kayseri'
            }
        ]
    },
    {
        id: 'mersin',
        name: 'Mersin',
        slug: 'mersin',
        plateCode: '33',
        population: 1898237,
        priority: 'medium',
        coordinates: {
            lat: 36.8,
            lng: 34.6333
        },
        description: 'Mersin\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'akdeniz',
                name: 'Akdeniz',
                slug: 'akdeniz',
                citySlug: 'mersin'
            },
            {
                id: 'yenisehir',
                name: 'Yenişehir',
                slug: 'yenisehir',
                citySlug: 'mersin'
            },
            {
                id: 'toroslar',
                name: 'Toroslar',
                slug: 'toroslar',
                citySlug: 'mersin'
            },
            {
                id: 'tarsus',
                name: 'Tarsus',
                slug: 'tarsus',
                citySlug: 'mersin'
            },
            {
                id: 'silifke',
                name: 'Silifke',
                slug: 'silifke',
                citySlug: 'mersin'
            }
        ]
    },
    {
        id: 'eskişehir',
        name: 'Eskişehir',
        slug: 'eskisehir',
        plateCode: '26',
        population: 906617,
        priority: 'medium',
        coordinates: {
            lat: 39.7667,
            lng: 30.5256
        },
        description: 'Eskişehir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'odunpazarı',
                name: 'Odunpazarı',
                slug: 'odunpazari',
                citySlug: 'eskisehir'
            },
            {
                id: 'tepebasi',
                name: 'Tepebaşı',
                slug: 'tepebasi',
                citySlug: 'eskisehir'
            },
            {
                id: ' Sivrihisar',
                name: 'Sivrihisar',
                slug: 'sivrihisar',
                citySlug: 'eskisehir'
            }
        ]
    },
    {
        id: 'denizli',
        name: 'Denizli',
        slug: 'denizli',
        plateCode: '20',
        population: 1050116,
        priority: 'medium',
        coordinates: {
            lat: 37.7765,
            lng: 29.0864
        },
        description: 'Denizli\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'pamukkale',
                name: 'Pamukkale',
                slug: 'pamukkale',
                citySlug: 'denizli'
            },
            {
                id: 'merkezefendi',
                name: 'Merkezefendi',
                slug: 'merkezefendi',
                citySlug: 'denizli'
            },
            {
                id: 'acipayam',
                name: 'Acıpayam',
                slug: 'acipayam',
                citySlug: 'denizli'
            }
        ]
    },
    {
        id: 'samsun',
        name: 'Samsun',
        slug: 'samsun',
        plateCode: '55',
        population: 1377304,
        priority: 'medium',
        coordinates: {
            lat: 41.2928,
            lng: 36.3313
        },
        description: 'Samsun\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'ilkadim',
                name: 'İlkadım',
                slug: 'ilkadim',
                citySlug: 'samsun'
            },
            {
                id: 'atakum',
                name: 'Atakum',
                slug: 'atakum',
                citySlug: 'samsun'
            },
            {
                id: 'canik',
                name: 'Canik',
                slug: 'canik',
                citySlug: 'samsun'
            },
            {
                id: 'bafra',
                name: 'Bafra',
                slug: 'bafra',
                citySlug: 'samsun'
            }
        ]
    },
    {
        id: 'kahramanmaras',
        name: 'Kahramanmaraş',
        slug: 'kahramanmaras',
        plateCode: '46',
        population: 1156128,
        priority: 'medium',
        coordinates: {
            lat: 37.5858,
            lng: 36.9371
        },
        description: 'Kahramanmaraş\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'dulkadiroglu',
                name: 'Dulkadiroğlu',
                slug: 'dulkadiroglu',
                citySlug: 'kahramanmaras'
            },
            {
                id: 'onikisubat',
                name: 'Onikişubat',
                slug: 'onikisubat',
                citySlug: 'kahramanmaras'
            },
            {
                id: 'elbistan',
                name: 'Elbistan',
                slug: 'elbistan',
                citySlug: 'kahramanmaras'
            }
        ]
    },
    {
        id: 'diyarbakir',
        name: 'Diyarbakır',
        slug: 'diyarbakir',
        plateCode: '21',
        population: 1779365,
        priority: 'medium',
        coordinates: {
            lat: 37.9144,
            lng: 40.2306
        },
        description: 'Diyarbakır\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'yenişehir',
                name: 'Yenişehir',
                slug: 'yenisehir',
                citySlug: 'diyarbakir'
            },
            {
                id: 'bağlar',
                name: 'Bağlar',
                slug: 'baglar',
                citySlug: 'diyarbakir'
            },
            {
                id: 'kayapınar',
                name: 'Kayapınar',
                slug: 'kayapinar',
                citySlug: 'diyarbakir'
            }
        ]
    },
    {
        id: 'sakarya',
        name: 'Sakarya',
        slug: 'sakarya',
        plateCode: '54',
        population: 1060865,
        priority: 'medium',
        coordinates: {
            lat: 40.694,
            lng: 30.4358
        },
        description: 'Sakarya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'adapazarı',
                name: 'Adapazarı',
                slug: 'adapazari',
                citySlug: 'sakarya'
            },
            {
                id: 'serdivan',
                name: 'Serdivan',
                slug: 'serdivan',
                citySlug: 'sakarya'
            },
            {
                id: 'akyazi',
                name: 'Akyazı',
                slug: 'akyazi',
                citySlug: 'sakarya'
            }
        ]
    },
    {
        id: 'trabzon',
        name: 'Trabzon',
        slug: 'trabzon',
        plateCode: '61',
        population: 807903,
        priority: 'medium',
        coordinates: {
            lat: 41.0027,
            lng: 39.7168
        },
        description: 'Trabzon\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'ortahisar',
                name: 'Ortahisar',
                slug: 'ortahisar',
                citySlug: 'trabzon'
            },
            {
                id: 'akçaabat',
                name: 'Akçaabat',
                slug: 'akcaabat',
                citySlug: 'trabzon'
            },
            {
                id: 'of',
                name: 'Of',
                slug: 'of',
                citySlug: 'trabzon'
            }
        ]
    },
    {
        id: 'malatya',
        name: 'Malatya',
        slug: 'malatya',
        plateCode: '44',
        population: 808692,
        priority: 'medium',
        coordinates: {
            lat: 38.3552,
            lng: 38.3095
        },
        description: 'Malatya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'yeşilyurt',
                name: 'Yeşilyurt',
                slug: 'yesilyurt',
                citySlug: 'malatya'
            },
            {
                id: 'battalgazi',
                name: 'Battalgazi',
                slug: 'battalgazi',
                citySlug: 'malatya'
            },
            {
                id: 'doğanşehir',
                name: 'Doğanşehir',
                slug: 'dogansehir',
                citySlug: 'malatya'
            }
        ]
    },
    {
        id: 'tekirdağ',
        name: 'Tekirdağ',
        slug: 'tekirdag',
        plateCode: '59',
        population: 1090828,
        priority: 'medium',
        coordinates: {
            lat: 40.9833,
            lng: 27.5167
        },
        description: 'Tekirdağ\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'süleymanpaşa',
                name: 'Süleymanpaşa',
                slug: 'suleymanpasa',
                citySlug: 'tekirdag'
            },
            {
                id: 'çorlu',
                name: 'Çorlu',
                slug: 'corlu',
                citySlug: 'tekirdag'
            },
            {
                id: 'çerkezköy',
                name: 'Çerkezköy',
                slug: 'cerkezkoy',
                citySlug: 'tekirdag'
            }
        ]
    },
    {
        id: 'aydin',
        name: 'Aydın',
        slug: 'aydin',
        plateCode: '09',
        population: 1123410,
        priority: 'medium',
        coordinates: {
            lat: 37.856,
            lng: 27.8416
        },
        description: 'Aydın\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'efeler',
                name: 'Efeler',
                slug: 'efeler',
                citySlug: 'aydin'
            },
            {
                id: 'nazilli',
                name: 'Nazilli',
                slug: 'nazilli',
                citySlug: 'aydin'
            },
            {
                id: 'söke',
                name: 'Söke',
                slug: 'soke',
                citySlug: 'aydin'
            }
        ]
    },
    {
        id: 'balikesir',
        name: 'Balıkesir',
        slug: 'balikesir',
        plateCode: '10',
        population: 1245130,
        priority: 'medium',
        coordinates: {
            lat: 39.6484,
            lng: 27.8826
        },
        description: 'Balıkesir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'altieylül',
                name: 'Altıeylül',
                slug: 'altieylul',
                citySlug: 'balikesir'
            },
            {
                id: 'karesi',
                name: 'Karesi',
                slug: 'karesi',
                citySlug: 'balikesir'
            },
            {
                id: 'bandırma',
                name: 'Bandırma',
                slug: 'bandirma',
                citySlug: 'balikesir'
            }
        ]
    },
    {
        id: 'kutahya',
        name: 'Kütahya',
        slug: 'kutahya',
        plateCode: '43',
        population: 578640,
        priority: 'low',
        coordinates: {
            lat: 39.4242,
            lng: 29.9833
        },
        description: 'Kütahya\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'kutahya'
            },
            {
                id: 'tavşanlı',
                name: 'Tavşanlı',
                slug: 'tavsanh',
                citySlug: 'kutahya'
            }
        ]
    },
    {
        id: 'canakkale',
        name: 'Çanakkale',
        slug: 'canakkale',
        plateCode: '17',
        population: 559383,
        priority: 'low',
        coordinates: {
            lat: 40.1553,
            lng: 26.4142
        },
        description: 'Çanakkale\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'canakkale'
            },
            {
                id: 'biga',
                name: 'Biga',
                slug: 'biga',
                citySlug: 'canakkale'
            }
        ]
    },
    {
        id: 'sivas',
        name: 'Sivas',
        slug: 'sivas',
        plateCode: '58',
        population: 621301,
        priority: 'low',
        coordinates: {
            lat: 39.7477,
            lng: 37.0179
        },
        description: 'Sivas\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'sivas'
            },
            {
                id: 'şarkışla',
                name: 'Şarkışla',
                slug: 'sarkisla',
                citySlug: 'sivas'
            }
        ]
    },
    {
        id: 'corum',
        name: 'Çorum',
        slug: 'corum',
        plateCode: '19',
        population: 526282,
        priority: 'low',
        coordinates: {
            lat: 40.5489,
            lng: 34.9533
        },
        description: 'Çorum\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'corum'
            },
            {
                id: 'osmancik',
                name: 'Osmancık',
                slug: 'osmancik',
                citySlug: 'corum'
            }
        ]
    },
    {
        id: 'nigde',
        name: 'Niğde',
        slug: 'nigde',
        plateCode: '51',
        population: 362071,
        priority: 'low',
        coordinates: {
            lat: 37.9667,
            lng: 34.6939
        },
        description: 'Niğde\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'nigde'
            },
            {
                id: 'bor',
                name: 'Bor',
                slug: 'bor',
                citySlug: 'nigde'
            }
        ]
    },
    {
        id: 'usak',
        name: 'Uşak',
        slug: 'usak',
        plateCode: '64',
        population: 373183,
        priority: 'low',
        coordinates: {
            lat: 38.6823,
            lng: 29.4082
        },
        description: 'Uşak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'usak'
            },
            {
                id: 'banaz',
                name: 'Banaz',
                slug: 'banaz',
                citySlug: 'usak'
            }
        ]
    },
    {
        id: 'zonguldak',
        name: 'Zonguldak',
        slug: 'zonguldak',
        plateCode: '67',
        population: 596053,
        priority: 'low',
        coordinates: {
            lat: 41.4564,
            lng: 31.7987
        },
        description: 'Zonguldak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'zonguldak'
            },
            {
                id: 'eregli',
                name: 'Ereğli',
                slug: 'eregli',
                citySlug: 'zonguldak'
            }
        ]
    },
    {
        id: 'kirsehir',
        name: 'Kırşehir',
        slug: 'kirsehir',
        plateCode: '40',
        population: 243042,
        priority: 'low',
        coordinates: {
            lat: 39.1425,
            lng: 34.1709
        },
        description: 'Kırşehir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'kirsehir'
            }
        ]
    },
    {
        id: 'kirkkale',
        name: 'Kırıkkale',
        slug: 'kirkkale',
        plateCode: '71',
        population: 277729,
        priority: 'low',
        coordinates: {
            lat: 39.8468,
            lng: 33.5153
        },
        description: 'Kırıkkale\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'kirkkale'
            }
        ]
    },
    {
        id: 'erzincan',
        name: 'Erzincan',
        slug: 'erzincan',
        plateCode: '24',
        population: 237185,
        priority: 'low',
        coordinates: {
            lat: 39.75,
            lng: 39.5
        },
        description: 'Erzincan\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'erzincan'
            }
        ]
    },
    {
        id: 'karaman',
        name: 'Karaman',
        slug: 'karaman',
        plateCode: '70',
        population: 258838,
        priority: 'low',
        coordinates: {
            lat: 37.1759,
            lng: 33.2287
        },
        description: 'Karaman\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'karaman'
            }
        ]
    },
    {
        id: ' Nevşehir',
        name: 'Nevşehir',
        slug: 'nevsehir',
        plateCode: '50',
        population: 308003,
        priority: 'low',
        coordinates: {
            lat: 38.6939,
            lng: 34.6857
        },
        description: 'Nevşehir\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'nevsehir'
            }
        ]
    },
    {
        id: 'kars',
        name: 'Kars',
        slug: 'kars',
        plateCode: '36',
        population: 274289,
        priority: 'low',
        coordinates: {
            lat: 40.6167,
            lng: 43.1
        },
        description: 'Kars\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'kars'
            }
        ]
    },
    {
        id: 'aksaray',
        name: 'Aksaray',
        slug: 'aksaray',
        plateCode: '68',
        population: 412245,
        priority: 'low',
        coordinates: {
            lat: 38.3687,
            lng: 34.037
        },
        description: 'Aksaray\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'aksaray'
            }
        ]
    },
    {
        id: 'yozgat',
        name: 'Yozgat',
        slug: 'yozgat',
        plateCode: '66',
        population: 418650,
        priority: 'low',
        coordinates: {
            lat: 39.8181,
            lng: 34.8147
        },
        description: 'Yozgat\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'yozgat'
            }
        ]
    },
    {
        id: 'cankiri',
        name: 'Çankırı',
        slug: 'cankiri',
        plateCode: '18',
        population: 195789,
        priority: 'low',
        coordinates: {
            lat: 40.6013,
            lng: 33.6134
        },
        description: 'Çankırı\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'cankiri'
            }
        ]
    },
    {
        id: 'artvin',
        name: 'Artvin',
        slug: 'artvin',
        plateCode: '08',
        population: 166143,
        priority: 'low',
        coordinates: {
            lat: 41.1828,
            lng: 41.8183
        },
        description: 'Artvin\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'artvin'
            }
        ]
    },
    {
        id: 'sanliurfa',
        name: 'Şanlıurfa',
        slug: 'sanliurfa',
        plateCode: '63',
        population: 2061355,
        priority: 'medium',
        coordinates: {
            lat: 37.1591,
            lng: 38.7969
        },
        description: 'Şanlıurfa\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'haliliye',
                name: 'Haliliye',
                slug: 'haliliye',
                citySlug: 'sanliurfa'
            },
            {
                id: 'eyyubiye',
                name: 'Eyyübiye',
                slug: 'eyyubiye',
                citySlug: 'sanliurfa'
            },
            {
                id: 'karaköprü',
                name: 'Karaköprü',
                slug: 'karakopru',
                citySlug: 'sanliurfa'
            }
        ]
    },
    {
        id: 'kocaeli',
        name: 'Kocaeli',
        slug: 'kocaeli',
        plateCode: '41',
        population: 1958237,
        priority: 'high',
        coordinates: {
            lat: 40.8533,
            lng: 29.8815
        },
        description: 'Kocaeli\'nde merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'izmit',
                name: 'İzmit',
                slug: 'izmit',
                citySlug: 'kocaeli'
            },
            {
                id: 'gebze',
                name: 'Gebze',
                slug: 'gebze',
                citySlug: 'kocaeli'
            },
            {
                id: 'körfez',
                name: 'Körfez',
                slug: 'korfez',
                citySlug: 'kocaeli'
            },
            {
                id: 'gölcük',
                name: 'Gölcük',
                slug: 'golcuk',
                citySlug: 'kocaeli'
            }
        ]
    },
    {
        id: 'rize',
        name: 'Rize',
        slug: 'rize',
        plateCode: '53',
        population: 344359,
        priority: 'low',
        coordinates: {
            lat: 41.0201,
            lng: 40.5234
        },
        description: 'Rize\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'rize'
            },
            {
                id: 'çayeli',
                name: 'Çayeli',
                slug: 'cayeli',
                citySlug: 'rize'
            }
        ]
    },
    {
        id: 'duzce',
        name: 'Düzce',
        slug: 'duzce',
        plateCode: '81',
        population: 395679,
        priority: 'low',
        coordinates: {
            lat: 40.8438,
            lng: 31.1565
        },
        description: 'Düzce\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'duzce'
            },
            {
                id: 'akçakoca',
                name: 'Akçakoca',
                slug: 'akcakoca',
                citySlug: 'duzce'
            }
        ]
    },
    {
        id: 'bitlis',
        name: 'Bitlis',
        slug: 'bitlis',
        plateCode: '13',
        population: 349581,
        priority: 'low',
        coordinates: {
            lat: 38.4004,
            lng: 42.1095
        },
        description: 'Bitlis\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'bitlis'
            }
        ]
    },
    {
        id: 'siirt',
        name: 'Siirt',
        slug: 'siirt',
        plateCode: '56',
        population: 331670,
        priority: 'low',
        coordinates: {
            lat: 37.9333,
            lng: 41.95
        },
        description: 'Siirt\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'siirt'
            }
        ]
    },
    {
        id: 'kilis',
        name: 'Kilis',
        slug: 'kilis',
        plateCode: '79',
        population: 142490,
        priority: 'low',
        coordinates: {
            lat: 36.7184,
            lng: 37.1212
        },
        description: 'Kilis\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'kilis'
            }
        ]
    },
    {
        id: 'hakkari',
        name: 'Hakkari',
        slug: 'hakkari',
        plateCode: '30',
        population: 280991,
        priority: 'low',
        coordinates: {
            lat: 37.5744,
            lng: 43.7408
        },
        description: 'Hakkari\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'hakkari'
            }
        ]
    },
    {
        id: 'kirklareli',
        name: 'Kırklareli',
        slug: 'kirklareli',
        plateCode: '39',
        population: 361836,
        priority: 'low',
        coordinates: {
            lat: 41.7333,
            lng: 27.2167
        },
        description: 'Kırklareli\'nde merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'kirklareli'
            },
            {
                id: 'lüleburgaz',
                name: 'Lüleburgaz',
                slug: 'luleburgaz',
                citySlug: 'kirklareli'
            }
        ]
    },
    {
        id: 'bingol',
        name: 'Bingöl',
        slug: 'bingol',
        plateCode: '12',
        population: 282324,
        priority: 'low',
        coordinates: {
            lat: 38.8855,
            lng: 40.4966
        },
        description: 'Bingöl\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'bingol'
            }
        ]
    },
    {
        id: 'tunceli',
        name: 'Tunceli',
        slug: 'tunceli',
        plateCode: '62',
        population: 88481,
        priority: 'low',
        coordinates: {
            lat: 39.1079,
            lng: 39.5401
        },
        description: 'Tunceli\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'tunceli'
            }
        ]
    },
    {
        id: 'mus',
        name: 'Muş',
        slug: 'mus',
        plateCode: '49',
        population: 405228,
        priority: 'low',
        coordinates: {
            lat: 38.9462,
            lng: 41.7539
        },
        description: 'Muş\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'mus'
            }
        ]
    },
    {
        id: 'batman',
        name: 'Batman',
        slug: 'batman',
        plateCode: '72',
        population: 635178,
        priority: 'low',
        coordinates: {
            lat: 37.8812,
            lng: 41.1351
        },
        description: 'Batman\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'batman'
            }
        ]
    },
    {
        id: 'sirnak',
        name: 'Şırnak',
        slug: 'sirnak',
        plateCode: '73',
        population: 537762,
        priority: 'low',
        coordinates: {
            lat: 37.4187,
            lng: 42.4918
        },
        description: 'Şırnak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'sirnak'
            }
        ]
    },
    {
        id: ' Agri',
        name: 'Ağrı',
        slug: 'agri',
        plateCode: '04',
        population: 528399,
        priority: 'low',
        coordinates: {
            lat: 39.7191,
            lng: 43.0503
        },
        description: 'Ağrı\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'agri'
            }
        ]
    },
    {
        id: 'yalova',
        name: 'Yalova',
        slug: 'yalova',
        plateCode: '77',
        population: 288078,
        priority: 'low',
        coordinates: {
            lat: 40.65,
            lng: 29.2667
        },
        description: 'Yalova\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'yalova'
            }
        ]
    },
    {
        id: 'karabuk',
        name: 'Karabük',
        slug: 'karabuk',
        plateCode: '78',
        population: 249287,
        priority: 'low',
        coordinates: {
            lat: 41.2061,
            lng: 32.6204
        },
        description: 'Karabük\'te merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'karabuk'
            }
        ]
    },
    {
        id: 'bartin',
        name: 'Bartın',
        slug: 'bartin',
        plateCode: '74',
        population: 198999,
        priority: 'low',
        coordinates: {
            lat: 41.6344,
            lng: 32.3375
        },
        description: 'Bartın\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'bartin'
            }
        ]
    },
    {
        id: 'ardahan',
        name: 'Ardahan',
        slug: 'ardahan',
        plateCode: '75',
        population: 97465,
        priority: 'low',
        coordinates: {
            lat: 41.1105,
            lng: 42.7022
        },
        description: 'Ardahan\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'ardahan'
            }
        ]
    },
    {
        id: 'gumushane',
        name: 'Gümüşhane',
        slug: 'gumushane',
        plateCode: '29',
        population: 169166,
        priority: 'low',
        coordinates: {
            lat: 40.4386,
            lng: 39.5086
        },
        description: 'Gümüşhane\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'gumushane'
            }
        ]
    },
    {
        id: 'caycuma',
        name: 'Zonguldak',
        slug: 'caycuma',
        plateCode: '67',
        population: 150188,
        priority: 'low',
        coordinates: {
            lat: 41.4271,
            lng: 32.3274
        },
        description: 'Zonguldak\'ta merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'caycuma',
                name: 'Çaycuma',
                slug: 'caycuma',
                citySlug: 'caycuma'
            }
        ]
    },
    {
        id: 'amasra',
        name: 'Bartın',
        slug: 'amasra',
        plateCode: '74',
        population: 57454,
        priority: 'low',
        coordinates: {
            lat: 41.6297,
            lng: 32.3865
        },
        description: 'Bartın Amasra\'da teknik servis hizmeti.',
        districts: [
            {
                id: 'amasra',
                name: 'Amasra',
                slug: 'amasra',
                citySlug: 'amasra'
            }
        ]
    },
    {
        id: 'karasu',
        name: 'Sakarya',
        slug: 'karasu',
        plateCode: '54',
        population: 64008,
        priority: 'low',
        coordinates: {
            lat: 41.1962,
            lng: 30.6844
        },
        description: 'Sakarya Karasu\'da teknik servis hizmeti.',
        districts: [
            {
                id: 'karasu',
                name: 'Karasu',
                slug: 'karasu',
                citySlug: 'karasu'
            }
        ]
    },
    {
        id: 'edremit',
        name: 'Balıkesir',
        slug: 'edremit',
        plateCode: '10',
        population: 148341,
        priority: 'low',
        coordinates: {
            lat: 39.5967,
            lng: 27.0181
        },
        description: 'Balıkesir Edremit\'te teknik servis hizmeti.',
        districts: [
            {
                id: 'edremit',
                name: 'Edremit',
                slug: 'edremit',
                citySlug: 'edremit'
            }
        ]
    },
    {
        id: 'bodrum',
        name: 'Muğla',
        slug: 'bodrum',
        plateCode: '48',
        population: 180044,
        priority: 'low',
        coordinates: {
            lat: 37.0343,
            lng: 27.4305
        },
        description: 'Muğla Bodrum\'da teknik servis hizmeti.',
        districts: [
            {
                id: 'bodrum',
                name: 'Bodrum',
                slug: 'bodrum',
                citySlug: 'bodrum'
            }
        ]
    },
    {
        id: 'marmaris',
        name: 'Muğla',
        slug: 'marmaris',
        plateCode: '48',
        population: 94685,
        priority: 'low',
        coordinates: {
            lat: 36.8568,
            lng: 28.2745
        },
        description: 'Muğla Marmaris\'te teknik servis hizmeti.',
        districts: [
            {
                id: 'marmaris',
                name: 'Marmaris',
                slug: 'marmaris',
                citySlug: 'marmaris'
            }
        ]
    },
    {
        id: 'fethiye',
        name: 'Muğla',
        slug: 'fethiye',
        plateCode: '48',
        population: 161691,
        priority: 'low',
        coordinates: {
            lat: 36.6217,
            lng: 29.2394
        },
        description: 'Muğla Fethiye\'de teknik servis hizmeti.',
        districts: [
            {
                id: 'fethiye',
                name: 'Fethiye',
                slug: 'fethiye',
                citySlug: 'fethiye'
            }
        ]
    },
    {
        id: 'kusadasi',
        name: 'Aydın',
        slug: 'kusadasi',
        plateCode: '09',
        population: 68782,
        priority: 'low',
        coordinates: {
            lat: 37.8656,
            lng: 27.8418
        },
        description: 'Aydın Kuşadası\'nda teknik servis hizmeti.',
        districts: [
            {
                id: 'kusadasi',
                name: 'Kuşadası',
                slug: 'kusadasi',
                citySlug: 'kusadasi'
            }
        ]
    },
    {
        id: 'cesme',
        name: 'İzmir',
        slug: 'cesme',
        plateCode: '35',
        population: 46667,
        priority: 'low',
        coordinates: {
            lat: 38.3256,
            lng: 26.3074
        },
        description: 'İzmir Çeşme\'de teknik servis hizmeti.',
        districts: [
            {
                id: 'cesme',
                name: 'Çeşme',
                slug: 'cesme',
                citySlug: 'cesme'
            }
        ]
    },
    {
        id: 'cappadocia',
        name: 'Nevşehir',
        slug: 'cappadocia',
        plateCode: '50',
        population: 5000,
        priority: 'low',
        coordinates: {
            lat: 38.6431,
            lng: 34.8289
        },
        description: 'Nevşehir Kapadokya bölgesinde teknik servis hizmeti.',
        districts: [
            {
                id: 'ürgüp',
                name: 'Ürgüp',
                slug: 'urgup',
                citySlug: 'cappadocia'
            },
            {
                id: 'gülşehir',
                name: 'Gülşehir',
                slug: 'gulsehir',
                citySlug: 'cappadocia'
            }
        ]
    },
    {
        id: 'urgup',
        name: 'Nevşehir',
        slug: 'urgup',
        plateCode: '50',
        population: 35411,
        priority: 'low',
        coordinates: {
            lat: 38.6313,
            lng: 34.9085
        },
        description: 'Nevşehir Ürgüp\'te teknik servis hizmeti.',
        districts: [
            {
                id: 'urgup',
                name: 'Ürgüp',
                slug: 'urgup',
                citySlug: 'urgup'
            }
        ]
    },
    {
        id: 'safranbolu',
        name: 'Karabük',
        slug: 'safranbolu',
        plateCode: '78',
        population: 64395,
        priority: 'low',
        coordinates: {
            lat: 41.2495,
            lng: 32.6844
        },
        description: 'Karabük Safranbolu\'nda teknik servis hizmeti.',
        districts: [
            {
                id: 'safranbolu',
                name: 'Safranbolu',
                slug: 'safranbolu',
                citySlug: 'safranbolu'
            }
        ]
    },
    {
        id: 'uludag',
        name: 'Bursa',
        slug: 'uludag',
        plateCode: '16',
        population: 5000,
        priority: 'low',
        coordinates: {
            lat: 40.0833,
            lng: 29.0833
        },
        description: 'Bursa Uludağ\'da teknik servis hizmeti.',
        districts: [
            {
                id: 'uludag',
                name: 'Uludağ',
                slug: 'uludag',
                citySlug: 'uludag'
            }
        ]
    },
    {
        id: 'palandoken',
        name: 'Erzurum',
        slug: 'palandoken',
        plateCode: '25',
        population: 35000,
        priority: 'low',
        coordinates: {
            lat: 39.8972,
            lng: 41.2678
        },
        description: 'Erzurum Palandöken\'de teknik servis hizmeti.',
        districts: [
            {
                id: 'palandoken',
                name: 'Palandöken',
                slug: 'palandoken',
                citySlug: 'palandoken'
            }
        ]
    },
    {
        id: 'erzurum',
        name: 'Erzurum',
        slug: 'erzurum',
        plateCode: '25',
        population: 762112,
        priority: 'low',
        coordinates: {
            lat: 39.9043,
            lng: 41.2679
        },
        description: 'Erzurum\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'palandoken',
                name: 'Palandöken',
                slug: 'palandoken',
                citySlug: 'erzurum'
            },
            {
                id: 'yakutiye',
                name: 'Yakutiye',
                slug: 'yakutiye',
                citySlug: 'erzurum'
            }
        ]
    },
    {
        id: 'mardin',
        name: 'Mardin',
        slug: 'mardin',
        plateCode: '47',
        population: 862757,
        priority: 'low',
        coordinates: {
            lat: 37.3212,
            lng: 40.7245
        },
        description: 'Mardin\'de merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'artuklu',
                name: 'Artuklu',
                slug: 'artuklu',
                citySlug: 'mardin'
            },
            {
                id: 'nusaybin',
                name: 'Nusaybin',
                slug: 'nusaybin',
                citySlug: 'mardin'
            }
        ]
    },
    {
        id: 'van',
        name: 'Van',
        slug: 'van',
        plateCode: '65',
        population: 1100190,
        priority: 'low',
        coordinates: {
            lat: 38.4891,
            lng: 43.4089
        },
        description: 'Van\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'tuşba',
                name: 'Tuşba',
                slug: 'tusba',
                citySlug: 'van'
            },
            {
                id: 'edremit',
                name: 'Edremit',
                slug: 'edremit',
                citySlug: 'van'
            }
        ]
    },
    {
        id: 'elazig',
        name: 'Elazığ',
        slug: 'elazig',
        plateCode: '23',
        population: 587960,
        priority: 'low',
        coordinates: {
            lat: 38.681,
            lng: 39.2264
        },
        description: 'Elazığ\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'elazig'
            }
        ]
    },
    {
        id: 'hatay',
        name: 'Hatay',
        slug: 'hatay',
        plateCode: '31',
        population: 1605953,
        priority: 'medium',
        coordinates: {
            lat: 36.4018,
            lng: 36.3498
        },
        description: 'Hatay\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'antakya',
                name: 'Antakya',
                slug: 'antakya',
                citySlug: 'hatay'
            },
            {
                id: 'iskenderun',
                name: 'İskenderun',
                slug: 'iskenderun',
                citySlug: 'hatay'
            }
        ]
    },
    {
        id: 'isparta',
        name: 'Isparta',
        slug: 'isparta',
        plateCode: '32',
        population: 445325,
        priority: 'low',
        coordinates: {
            lat: 37.7648,
            lng: 30.5566
        },
        description: 'Isparta\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'isparta'
            }
        ]
    },
    {
        id: 'afyon',
        name: 'Afyonkarahisar',
        slug: 'afyon',
        plateCode: '03',
        population: 736912,
        priority: 'low',
        coordinates: {
            lat: 38.7312,
            lng: 30.5387
        },
        description: 'Afyonkarahisar\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'afyon'
            }
        ]
    },
    {
        id: 'bolu',
        name: 'Bolu',
        slug: 'bolu',
        plateCode: '14',
        population: 320014,
        priority: 'low',
        coordinates: {
            lat: 40.7355,
            lng: 31.6061
        },
        description: 'Bolu\'da merkez ve tüm ilçelerinde teknik servis hizmeti.',
        districts: [
            {
                id: 'merkez',
                name: 'Merkez',
                slug: 'merkez',
                citySlug: 'bolu'
            }
        ]
    },
    {
        id: 'amkara',
        name: 'Ankara',
        slug: 'ankara',
        plateCode: '06',
        population: 5787415,
        priority: 'high',
        coordinates: {
            lat: 39.9334,
            lng: 32.8597
        },
        description: 'Ankara\'da merkez ve tüm ilçelerinde profesyonel teknik servis hizmeti.',
        districts: [
            {
                id: 'cankaya',
                name: 'Çankaya',
                slug: 'cankaya',
                citySlug: 'ankara'
            },
            {
                id: 'kecioren',
                name: 'Keçiören',
                slug: 'kecioren',
                citySlug: 'ankara'
            },
            {
                id: 'mamak',
                name: 'Mamak',
                slug: 'mamak',
                citySlug: 'ankara'
            }
        ]
    }
];
const getCityBySlug = (slug)=>{
    return cities.find((city)=>city.slug === slug);
};
const getCityDistricts = (citySlug)=>{
    const city = getCityBySlug(citySlug);
    return city?.districts || [];
};
const priorityCities = cities.filter((city)=>city.priority === 'high');
const mediumPriorityCities = cities.filter((city)=>city.priority === 'medium');
const allCities = cities;
}),
"[project]/src/hooks/useCityDetection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCityDetection",
    ()=>useCityDetection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cities.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useCityDetection() {
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const detectCity = async ()=>{
            // Check localStorage first
            const stored = localStorage.getItem('userCity');
            if (stored) {
                const parsed = JSON.parse(stored);
                setCity(parsed);
                setLoading(false);
                return;
            }
            try {
                // Try to get city from IP
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (data.city) {
                    const cityName = data.city.toLowerCase();
                    // Find matching Turkish city
                    const matchedCity = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cities"].find((c)=>c.name.toLowerCase().includes(cityName) || cityName.includes(c.name.toLowerCase()));
                    if (matchedCity) {
                        const cityData = {
                            name: matchedCity.name,
                            slug: matchedCity.slug
                        };
                        setCity(cityData);
                        localStorage.setItem('userCity', JSON.stringify(cityData));
                    }
                }
            } catch (error) {
                console.log('Could not detect city');
            }
            setLoading(false);
        };
        detectCity();
    }, []);
    const setManualCity = (cityName, citySlug)=>{
        const cityData = {
            name: cityName,
            slug: citySlug
        };
        setCity(cityData);
        localStorage.setItem('userCity', JSON.stringify(cityData));
    };
    return {
        city,
        loading,
        setManualCity
    };
}
}),
"[project]/src/components/CityProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CityProvider",
    ()=>CityProvider,
    "useCity",
    ()=>useCity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCityDetection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCityDetection.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const CityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    city: null,
    loading: true,
    setManualCity: ()=>{}
});
function useCity() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CityContext);
}
function CityProvider({ children }) {
    const { city, loading, setManualCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCityDetection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCityDetection"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CityContext.Provider, {
        value: {
            city,
            loading,
            setManualCity
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/CityProvider.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CityProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const navigation = [
    {
        name: 'Ana Sayfa',
        href: '/'
    }
];
const services = [
    {
        name: 'Beyaz Eşya Servisi',
        href: '/beyaz-esya-servisi',
        slug: 'beyaz-esya-servisi'
    },
    {
        name: 'Bulaşık Makinesi Servisi',
        href: '/bulasik-makinesi-servisi',
        slug: 'bulasik-makinesi-servisi'
    },
    {
        name: 'Buzdolabı Servisi',
        href: '/buzdolabi-servisi',
        slug: 'buzdolabi-servisi'
    },
    {
        name: 'Çamaşır Makinesi Servisi',
        href: '/camasir-makinesi-servisi',
        slug: 'camasir-makinesi-servisi'
    },
    {
        name: 'Kombi Servisi',
        href: '/kombi-servisi',
        slug: 'kombi-servisi'
    },
    {
        name: 'Klima Servisi',
        href: '/klima-servisi',
        slug: 'klima-servisi'
    }
];
const otherNav = [
    {
        name: 'Blog',
        href: '/blog'
    },
    {
        name: 'Bölgeler',
        href: '/servis-bolgeleri'
    },
    {
        name: 'İletişim',
        href: '/iletisim'
    }
];
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [citySelectorOpen, setCitySelectorOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const servicesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { city, loading, setManualCity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CityProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCity"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleClickOutside(event) {
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setServicesOpen(false);
            }
            if (cityRef.current && !cityRef.current.contains(event.target)) {
                setCitySelectorOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const getServiceUrl = (href)=>{
        if (city && href !== '/blog' && href !== '/servis-bolgeleri' && href !== '/iletisim' && href !== '/') {
            return `/${city.slug}${href}`;
        }
        return href;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm",
        children: [
            city && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-900 to-blue-800 text-white text-sm py-2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4 text-blue-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: city.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-200",
                                        children: "için servis sayfasındasınız"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/servis-bolgeleri",
                                className: "hover:underline font-medium text-white/90",
                                children: "Diğer şehirler →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-20 lg:h-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "En Yakın Servis Hizmetleri",
                                    width: 220,
                                    height: 70,
                                    className: "h-16 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden xl:flex items-center gap-1",
                                children: [
                                    navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50/80 transition-colors rounded-lg",
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: servicesRef,
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setServicesOpen(!servicesOpen),
                                                className: "flex items-center gap-1.5 px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50/80 transition-colors rounded-lg",
                                                children: [
                                                    "Hizmetlerimiz",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Header.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden z-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "py-2",
                                                    children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: getServiceUrl(service.href),
                                                            onClick: ()=>setServicesOpen(false),
                                                            className: "block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors",
                                                            children: service.name
                                                        }, service.name, false, {
                                                            fileName: "[project]/src/components/layout/Header.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    otherNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50/80 transition-colors rounded-lg",
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+908503041517",
                                        className: "flex items-center gap-2 text-blue-900 font-bold text-lg hover:text-blue-700 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "0850 304 15 17"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "shadow-lg shadow-blue-900/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: city ? `/${city.slug}/iletisim` : '/iletisim',
                                            className: "text-white font-bold",
                                            children: "Servis Çağır"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg",
                                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 31
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 160,
                                    columnNumber: 59
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden border-t border-slate-200 py-4 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "space-y-1",
                                children: [
                                    navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "block px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50",
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-slate-200 pt-3 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider",
                                                children: "Hizmetlerimiz"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: getServiceUrl(service.href),
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    className: "block px-4 py-3 pl-8 text-sm font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50",
                                                    children: service.name
                                                }, service.name, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    otherNav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "block px-4 py-3 text-base font-semibold text-slate-800 hover:text-blue-900 hover:bg-blue-50",
                                            children: item.name
                                        }, item.name, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t border-slate-200 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+908503041517",
                                        className: "flex items-center gap-3 text-blue-900 font-bold text-lg mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Header.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "0850 304 15 17"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: city ? `/${city.slug}/iletisim` : '/iletisim',
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "text-white font-bold",
                                            children: "Servis Çağır"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Header.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceById",
    ()=>getServiceById,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "services",
    ()=>services
]);
const services = [
    {
        id: 'beyaz-esya',
        name: 'Beyaz Eşya Servisi',
        slug: 'beyaz-esya-servisi',
        description: 'Beyaz eşya servis hizmetlerimiz buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi ve ankastre cihazları kapsamaktadır. Tüm marka ve modeller için profesyonel teknik destek sunuyoruz.',
        shortDescription: 'Buzdolabı, çamaşır makinesi, bulaşık makinesi ve tüm beyaz eşya markaları için profesyonel servis hizmeti.',
        keywords: [
            'beyaz eşya servisi',
            'buzdolabı servisi',
            'çamaşır makinesi servisi',
            'bulaşık makinesi servisi',
            'ankastre servisi'
        ],
        icon: 'WashingMachine'
    },
    {
        id: 'kombi',
        name: 'Kombi Servisi',
        slug: 'kombi-servisi',
        description: 'Kombi servis hizmetlerimiz kombi arıza tamiri, bakım, montaj ve tesisat işlemlerini kapsamaktadır. Doğalgaz kombi, yoğuşmalı kombi ve elektrikli kombi tüm markalar için hizmet sunuyoruz.',
        shortDescription: 'Tüm kombi markaları için arıza tamiri, bakım ve montaj hizmetleri.',
        keywords: [
            'kombi servisi',
            'kombi arıza',
            'kombi bakım',
            'doğalgaz kombi servisi',
            'yoğuşmalı kombi'
        ],
        icon: 'Flame'
    },
    {
        id: 'klima',
        name: 'Klima Servisi',
        slug: 'klima-servisi',
        description: 'Klima servis hizmetlerimiz klima arıza tamiri, bakım, montaj ve gaz dolumu kapsamaktadır. Split klima, multi split, VRF ve merkezi klima sistemleri için profesyonel destek sunuyoruz.',
        shortDescription: 'Klima arıza, bakım, montaj ve gaz dolumu hizmetleri.',
        keywords: [
            'klima servisi',
            'klima arıza',
            'klima bakım',
            'klima montaj',
            'klima gaz dolumu'
        ],
        icon: 'Snowflake'
    }
];
const getServiceBySlug = (slug)=>{
    return services.find((service)=>service.slug === slug);
};
const getServiceById = (id)=>{
    return services.find((service)=>service.id === id);
};
}),
"[project]/src/data/brands.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allBrands",
    ()=>allBrands,
    "brands",
    ()=>brands,
    "getBrandsByCategory",
    ()=>getBrandsByCategory
]);
const brands = [
    {
        id: 'arcelik',
        name: 'Arçelik',
        logo: 'arcelik',
        category: 'beyaz-esya'
    },
    {
        id: 'beko',
        name: 'Beko',
        logo: 'beko',
        category: 'beyaz-esya'
    },
    {
        id: 'vestel',
        name: 'Vestel',
        logo: 'vestel',
        category: 'beyaz-esya'
    },
    {
        id: 'grundig',
        name: 'Grundig',
        logo: 'grundig',
        category: 'beyaz-esya'
    },
    {
        id: 'lg',
        name: 'LG',
        logo: 'lg',
        category: 'beyaz-esya'
    },
    {
        id: 'samsung',
        name: 'Samsung',
        logo: 'samsung',
        category: 'beyaz-esya'
    },
    {
        id: 'bosch',
        name: 'Bosch',
        logo: 'bosch',
        category: 'beyaz-esya'
    },
    {
        id: 'siemens',
        name: 'Siemens',
        logo: 'siemens',
        category: 'beyaz-esya'
    },
    {
        id: 'electrolux',
        name: 'Electrolux',
        logo: 'electrolux',
        category: 'beyaz-esya'
    },
    {
        id: ' candy',
        name: 'Candy',
        logo: 'candy',
        category: 'beyaz-esya'
    },
    {
        id: 'ariston',
        name: 'Ariston',
        logo: 'ariston',
        category: 'beyaz-esya'
    },
    {
        id: 'hotpoint',
        name: 'Hotpoint',
        logo: 'hotpoint',
        category: 'beyaz-esya'
    },
    {
        id: 'vietnam',
        name: 'Viessmann',
        logo: 'viessmann',
        category: 'kombi'
    },
    {
        id: 'buderus',
        name: 'Buderus',
        logo: 'buderus',
        category: 'kombi'
    },
    {
        id: 'vaillant',
        name: 'Vaillant',
        logo: 'vaillant',
        category: 'kombi'
    },
    {
        id: 'demirdokum',
        name: 'DemirDöküm',
        logo: 'demirdokum',
        category: 'kombi'
    },
    {
        id: 'baymak',
        name: 'Baymak',
        logo: 'baymak',
        category: 'kombi'
    },
    {
        id: 'alarko',
        name: 'Alarko',
        logo: 'alarko',
        category: 'kombi'
    },
    {
        id: 'ferroli',
        name: 'Ferroli',
        logo: 'ferroli',
        category: 'kombi'
    },
    {
        id: 'immergas',
        name: 'Immergas',
        logo: 'immergas',
        category: 'kombi'
    },
    {
        id: 'airfel',
        name: 'Airfel',
        logo: 'airfel',
        category: 'kombi'
    },
    {
        id: 'protherm',
        name: 'Protherm',
        logo: 'protherm',
        category: 'kombi'
    },
    {
        id: 'daikin',
        name: 'Daikin',
        logo: 'daikin',
        category: 'klima'
    },
    {
        id: 'mitsubishi',
        name: 'Mitsubishi',
        logo: 'mitsubishi',
        category: 'klima'
    },
    {
        id: 'lg-klima',
        name: 'LG',
        logo: 'lg',
        category: 'klima'
    },
    {
        id: 'samsung-klima',
        name: 'Samsung',
        logo: 'samsung',
        category: 'klima'
    },
    {
        id: 'panasonic',
        name: 'Panasonic',
        logo: 'panasonic',
        category: 'klima'
    },
    {
        id: 'sharp',
        name: 'Sharp',
        logo: 'sharp',
        category: 'klima'
    },
    {
        id: 'toshiba',
        name: 'Toshiba',
        logo: 'toshiba',
        category: 'klima'
    },
    {
        id: 'carrier',
        name: 'Carrier',
        logo: 'carrier',
        category: 'klima'
    },
    {
        id: 'midea',
        name: 'Midea',
        logo: 'midea',
        category: 'klima'
    },
    {
        id: 'klimeks',
        name: 'Klimeks',
        logo: 'klimeks',
        category: 'klima'
    }
];
const getBrandsByCategory = (category)=>{
    return brands.filter((brand)=>brand.category === category);
};
const allBrands = brands;
}),
"[project]/src/data/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faqs",
    ()=>faqs,
    "serviceFAQs",
    ()=>serviceFAQs,
    "trustItems",
    ()=>trustItems
]);
const faqs = [
    {
        question: 'Servis çağırmadan önce nelere dikkat etmeliyim?',
        answer: 'Cihazınızda herhangi bir arıza belirtisi gördüğünüzde önce cihazın fişini çekip tekrar takmayı deneyebilirsiniz. Eğer sorun devam ediyorsa, bizi arayarak uzman ekibimizden destek alabilirsiniz. Arıza kodları için ilgili sayfamızı ziyaret edebilirsiniz.'
    },
    {
        question: 'Servis randevusu ne kadar sürede gelir?',
        answer: 'Şehir merkezlerinde genellikle 2-4 saat içinde, ilçe ve kırsal bölgelerde ise 24 saat içinde servis ekibimizi adresinize yönlendiriyoruz. Acil durumlar için hızlı servis seçeneğimiz mevcuttur.'
    },
    {
        question: 'Servis ücreti ne kadar?',
        answer: 'Servis ücreti arızanın türüne, cihaz marka ve modeline göre değişiklik göstermektedir. İlk keşif ve arıza tespiti için size şeffaf fiyat bilgisi sunuyoruz. Yerinde tespit sonrası onayınız alarak işleme başlıyoruz.'
    },
    {
        question: 'Parça değişimi gerektiğinde orijinal parça kullanılıyor mu?',
        answer: 'Evet, cihazınızın markasına uygun orijinal yedek parça kullanıyoruz. Parça değişimi sonrası garanti belgesi düzenlenmektedir.'
    },
    {
        question: 'Hizmet verilen bölgeler neresidir?',
        answer: 'Türkiye genelinde İzmir, Manisa, İstanbul, Ankara, Bursa, Antalya, Adana, Konya, Gaziantep ve Kayseri başta olmak üzere 81 ilde hizmet sunuyoruz. Detaylı bölge bilgisi için Servis Bölgeleri sayfamızı inceleyebilirsiniz.'
    },
    {
        question: 'Garanti kapsamında işlem yapılıyor mu?',
        answer: 'Cihazınızın garanti süresi içinde olması durumunda, üretici firma garantisi kapsamında işlem yapılabilmektedir. Garanti belgesi ve satın alma tarihi ile birlikte bizi arayarak randevu oluşturabilirsiniz.'
    }
];
const serviceFAQs = {
    'beyaz-esya-servisi': [
        {
            question: 'Buzdolabım soğutmuyor, ne yapmalıyım?',
            answer: 'Buzdolabınızın soğutmama sorunu birçok nedenden kaynaklanabilir. Öncelikle termostat ayarını kontrol edin, havalandırma menfezlerinin kapalı olmadığından emin olun. Sorun devam ediyorsa servis çağırın.'
        },
        {
            question: 'Çamaşır makinesi su almıyor, neden?',
            answer: 'Su vanasının açık olduğundan, tahliye hortumunun doğru takıldığından emin olun. Su basıncı düşükse de bu sorun yaşanabilir. Eğer bu kontrolleri yaptıysanız ve sorun devam ediyorsa teknik servisi arayın.'
        },
        {
            question: 'Bulaşık makinesi yıkama yapmıyor, ne yapmalıyım?',
            answer: 'Önce programın doğru seçildiğinden emin olun. Drenaj hortumunu kontrol edin, tıkanıklık olmadığından emin olun. Gerekirse cihazı resetleyip tekrar deneyin.'
        }
    ],
    'kombi-servisi': [
        {
            question: 'Kombim neden ısıtmıyor?',
            answer: 'Kombinin ısıtmama sorunu basınç düşüklüğü, hava birikimi, sensör arızası veya ateşleme problemi gibi nedenlerden kaynaklanabilir. Önce basınç göstergesini kontrol edin, düşükse su ekleyin. Sorun devam ederse servisi arayın.'
        },
        {
            question: 'Kombi arıza kodu ne anlama geliyor?',
            answer: 'Her kombi markasının farklı arıza kodları vardır. Genel olarak E01 ateşleme, E03 sensör, E05 basınç, E10 su basıncı anlamına gelir. Detaylı bilgi için Arıza Kodları sayfamızı inceleyebilirsiniz.'
        },
        {
            question: 'Kombi bakımı ne sıklıkla yapılmalı?',
            answer: 'Kombinizin verimli çalışması ve ömrünü uzatmak için yılda en az bir kez (ideal olarak ısıtma sezonu başında) profesyonel bakım yaptırmanızı öneriyoruz.'
        }
    ],
    'klima-servisi': [
        {
            question: 'Klima soğutmuyor, ne yapmalıyım?',
            answer: 'Önce filtrelerin temiz olduğundan emin olun. Modun doğru ayarlandığını (soğutma modunda olduğunu) kontrol edin. Gaz seviyesi düşük olabilir, bu durumda gaz dolumu gerekir. Sorun devam ediyorsa servisi arayın.'
        },
        {
            question: 'Klima kaç derecede çalışmalı?',
            answer: 'Klimalar genellikle 16-30°C arasında ayarlanabilir. Enerji verimliliği ve konfor açısından yazın 24-26°C, kışın 20-22°C idealdir. Bu ayarlar hem konforunuzu sağlar hem de enerji tasarrufu yapmanıza yardımcı olur.'
        },
        {
            question: 'Klima gazı ne zaman doldurulmalı?',
            answer: 'Klima gazı, soğutma kapasitesinin düşmesi, eriyen buz kristalleri veya sesli çalışma gibi belirtilerle anlaşılabilir. Genellikle 2-3 yılda bir kontrol edilmesi önerilir.'
        }
    ]
};
const trustItems = [
    {
        icon: 'Shield',
        title: 'Garanti Belgeli Hizmet',
        description: 'Tüm işlemlerimiz garanti kapsamındadır. Parça değişimlerinde orijinal yedek parça kullanıyoruz.'
    },
    {
        icon: 'Clock',
        title: 'Hızlı Servis',
        description: 'Şehir merkezlerinde 2-4 saat içinde adresinizdeyiz. Acil durumlar için hızlı müdahale ekibimiz hazır.'
    },
    {
        icon: 'Wrench',
        title: 'Uzman Ekip',
        description: 'Alanında deneyimli, sertifikalı teknik ekibimiz tüm marka ve modeller için profesyonel destek sunar.'
    },
    {
        icon: 'Receipt',
        title: 'Şeffaf Fiyat',
        description: 'İşlem öncesi size detaylı fiyat bilgisi sunuyoruz. Gizli ücret yok, tam fatura ile hizmet.'
    },
    {
        icon: 'MapPin',
        title: 'Geniş Kapsama',
        description: 'Türkiye genelinde 10+ il ve 50+ ilçede hizmet sunuyoruz. Size en yakın ekibimizi yönlendiriyoruz.'
    },
    {
        icon: 'Headphones',
        title: '7/24 İletişim',
        description: 'Haftanın 7 günü, günün 24 saatı müşteri hizmetlerimizden destek alabilirsiniz.'
    }
];
}),
"[project]/src/data/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$brands$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/brands.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cities.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Footer() {
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gradient-to-b from-slate-50 to-white text-slate-900 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -right-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logo.png",
                                            alt: "En Yakın Servis Hizmetleri",
                                            width: 200,
                                            height: 70,
                                            className: "h-14 w-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-700 text-sm leading-relaxed mb-6",
                                        children: "Türkiye genelinde beyaz eşya, kombi ve klima servis hizmetlerinde güvenilir adresiniz. Profesyonel ekibimiz ve hızlı servis anlayışımızla yanınızdayız."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "w-4 h-4 text-blue-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 40,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+908503041517",
                                                        className: "text-blue-900 font-semibold hover:text-blue-700 transition-colors",
                                                        children: "0850 304 15 17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "w-4 h-4 text-blue-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:info@enyakinservishizmetleri.com",
                                                        className: "text-blue-900 font-semibold hover:text-blue-700 transition-colors",
                                                        children: "info@enyakinservishizmetleri.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-4 h-4 text-blue-900"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-700 font-medium",
                                                        children: "7/24 Hizmet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-900 font-bold mb-5 text-lg flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-5 bg-blue-900 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            "Hizmetlerimiz"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/${service.slug}`,
                                                        className: "text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 21
                                                            }, this),
                                                            service.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this)
                                                }, service.id, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/ariza-kodlari",
                                                    className: "text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Arıza Kodları"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-900 font-bold mb-5 text-lg flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-5 bg-blue-900 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            "Servis Bölgeleri"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cities"].slice(0, 6).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/${city.slug}`,
                                                        className: "text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 21
                                                            }, this),
                                                            city.name,
                                                            " Teknik Servis"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                }, city.id, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/servis-bolgeleri",
                                                    className: "text-sm text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Tüm Bölgeler →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-900 font-bold mb-5 text-lg flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-5 bg-blue-900 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            "Kurumsal"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: [
                                            {
                                                name: 'Hakkımızda',
                                                href: '/hakkimizda'
                                            },
                                            {
                                                name: 'İletişim',
                                                href: '/iletisim'
                                            },
                                            {
                                                name: 'Servis Bölgeleri',
                                                href: '/servis-bolgeleri'
                                            },
                                            {
                                                name: 'Blog',
                                                href: '/blog'
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "text-sm text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-900 transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this),
                                                        item.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.name, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-8 border-t border-slate-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-700 font-medium",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-900 font-bold",
                                            children: "En Yakın Servis Hizmetleri"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 158,
                                            columnNumber: 44
                                        }, this),
                                        ". Tüm hakları saklıdır."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-600",
                                    children: "Bu site üzerinde sunulan hizmetler, bağımsız servis sağlayıcıları tarafından verilmektedir."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-center gap-4 mb-4 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gizlilik-politikasi",
                                className: "text-blue-900 hover:text-blue-700 font-medium",
                                children: "Gizlilik Politikası"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 170,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 173,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gizlilik-politikasi",
                                className: "text-blue-900 hover:text-blue-700 font-medium",
                                children: "KVKK Aydınlatma Metni"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 174,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-400",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 177,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/iletisim",
                                className: "text-blue-900 hover:text-blue-700 font-medium",
                                children: "İletişim"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 178,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 169,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-slate-900 mb-3 text-sm",
                        children: "En Yakın Servis Hizmetleri - Yasal Uyarı ve Bilgilendirme"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 183,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 text-slate-700",
                        children: "Bu site, adı geçen markaların resmi veya yetkili servisi değildir. Sunulan hizmetler özel / bağımsız teknik servis kapsamında verilmektedir. Marka isimleri ve logoları, tüketiciyi bilgilendirme amacıyla kullanılmaktadır."
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 187,
                        columnNumber: 7
                    }, this),
                    !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsExpanded(true),
                        className: "inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-700 transition-colors font-bold",
                        children: [
                            "Devamını oku",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Footer.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-slate-700",
                                children: "Bu internet sitesi üzerinden sunulan tüm hizmetler, ilgili marka veya markaların resmi, yetkili, ana servis ya da üretici destek ağı kapsamında yer almamaktadır. En Yakın Servis Hizmetleri; üretici, ithalatçı veya distribütör firmalardan tamamen bağımsız olarak faaliyet gösteren, özel servis statüsünde hizmet sunan bir teknik servis kuruluşudur."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-slate-700",
                                children: "Sunulan teknik servis hizmetleri; bakım, onarım, arıza tespiti, parça değişimi ve teknik destek işlemlerini kapsamakta olup, ağırlıklı olarak garanti süresi sona ermiş cihazlar için ücretli olarak sağlanmaktadır."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-5 text-slate-700",
                                children: "Kullanıcılar, siteyi ziyaret ederek ve hizmet talebi oluşturarak bu bilgilendirme ve yasal uyarı metnini okumuş ve kabul etmiş sayılır."
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsExpanded(false),
                                className: "inline-flex items-center gap-1.5 text-blue-900 hover:text-blue-700 transition-colors font-bold",
                                children: [
                                    "Kısalt",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Footer.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Footer.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Footer.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/layout/StickyCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickyCTA",
    ()=>StickyCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function StickyCTA({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed bottom-4 right-4 z-50 flex flex-col gap-3', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "tel:+908503041517",
                className: "flex items-center gap-2 bg-blue-900 text-white px-4 py-3 shadow-lg hover:bg-blue-950 transition-all duration-200 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/StickyCTA.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm hidden sm:inline",
                        children: "Hemen Ara"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/StickyCTA.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/StickyCTA.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "https://wa.me/905321234567",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 bg-green-600 text-white px-4 py-3 shadow-lg hover:bg-green-700 transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/StickyCTA.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm hidden sm:inline",
                        children: "WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/StickyCTA.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/StickyCTA.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/StickyCTA.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/data/markalar.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allBrands",
    ()=>allBrands,
    "brands",
    ()=>brands,
    "getBrandBySlug",
    ()=>getBrandBySlug,
    "getBrandsByCategory",
    ()=>getBrandsByCategory
]);
const brands = [
    // Beyaz Eşya Markaları
    {
        id: 'arcelik',
        name: 'Arçelik',
        slug: 'arcelik-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Arçelik beyaz eşya servis hizmetleri'
    },
    {
        id: 'beko',
        name: 'Beko',
        slug: 'beko-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Beko beyaz eşya servis hizmetleri'
    },
    {
        id: 'vestel',
        name: 'Vestel',
        slug: 'vestel-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Vestel beyaz eşya servis hizmetleri'
    },
    {
        id: 'grundig',
        name: 'Grundig',
        slug: 'grundig-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Grundig beyaz eşya servis hizmetleri'
    },
    {
        id: 'lg',
        name: 'LG',
        slug: 'lg-beyaz-esya',
        category: 'beyaz-esya',
        description: 'LG beyaz eşya servis hizmetleri'
    },
    {
        id: 'samsung',
        name: 'Samsung',
        slug: 'samsung-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Samsung beyaz eşya servis hizmetleri'
    },
    {
        id: 'bosch',
        name: 'Bosch',
        slug: 'bosch-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Bosch beyaz eşya servis hizmetleri'
    },
    {
        id: 'siemens',
        name: 'Siemens',
        slug: 'siemens-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Siemens beyaz eşya servis hizmetleri'
    },
    {
        id: 'electrolux',
        name: 'Electrolux',
        slug: 'electrolux-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Electrolux beyaz eşya servis hizmetleri'
    },
    {
        id: 'candy',
        name: 'Candy',
        slug: 'candy-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Candy beyaz eşya servis hizmetleri'
    },
    {
        id: 'ariston',
        name: 'Ariston',
        slug: 'ariston-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Ariston beyaz eşya servis hizmetleri'
    },
    {
        id: 'hotpoint',
        name: 'Hotpoint',
        slug: 'hotpoint-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Hotpoint beyaz eşya servis hizmetleri'
    },
    {
        id: 'profilo',
        name: 'Profilo',
        slug: 'profilo-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Profilo beyaz eşya servis hizmetleri'
    },
    {
        id: 'altus',
        name: 'Altus',
        slug: 'altus-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Altus beyaz eşya servis hizmetleri'
    },
    {
        id: 'regal',
        name: 'Regal',
        slug: 'regal-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Regal beyaz eşya servis hizmetleri'
    },
    {
        id: 'aeg',
        name: 'AEG',
        slug: 'aeg-beyaz-esya',
        category: 'beyaz-esya',
        description: 'AEG beyaz eşya servis hizmetleri'
    },
    {
        id: 'amana',
        name: 'Amana',
        slug: 'amana-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Amana beyaz eşya servis hizmetleri'
    },
    {
        id: 'falke',
        name: 'Falke',
        slug: 'falke-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Falke beyaz eşya servis hizmetleri'
    },
    {
        id: 'franke',
        name: 'Franke',
        slug: 'franke-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Franke beyaz eşya servis hizmetleri'
    },
    {
        id: 'gaggenau',
        name: 'Gaggenau',
        slug: 'gaggenau-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Gaggenau beyaz eşya servis hizmetleri'
    },
    {
        id: 'indesit',
        name: 'Indesit',
        slug: 'indesit-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Indesit beyaz eşya servis hizmetleri'
    },
    {
        id: 'lambert',
        name: 'Lambert',
        slug: 'lambert-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Lambert beyaz eşya servis hizmetleri'
    },
    {
        id: 'miele',
        name: 'Miele',
        slug: 'miele-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Miele beyaz eşya servis hizmetleri'
    },
    {
        id: 'philips',
        name: 'Philips',
        slug: 'philips-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Philips beyaz eşya servis hizmetleri'
    },
    {
        id: 'seg',
        name: 'SEG',
        slug: 'seg-beyaz-esya',
        category: 'beyaz-esya',
        description: 'SEG beyaz eşya servis hizmetleri'
    },
    {
        id: 'sony',
        name: 'Sony',
        slug: 'sony-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Sony beyaz eşya servis hizmetleri'
    },
    {
        id: 'subzero',
        name: 'Sub-Zero',
        slug: 'subzero-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Sub-Zero beyaz eşya servis hizmetleri'
    },
    {
        id: 'sunny',
        name: 'Sunny',
        slug: 'sunny-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Sunny beyaz eşya servis hizmetleri'
    },
    {
        id: 'teka',
        name: 'Teka',
        slug: 'teka-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Teka beyaz eşya servis hizmetleri'
    },
    {
        id: 'westinghouse',
        name: 'Westinghouse',
        slug: 'westinghouse-beyaz-esya',
        category: 'beyaz-esya',
        description: 'Westinghouse beyaz eşya servis hizmetleri'
    },
    // Kombi Markaları
    {
        id: 'viessmann',
        name: 'Viessmann',
        slug: 'viessmann-kombi',
        category: 'kombi',
        description: 'Viessmann kombi servis hizmetleri'
    },
    {
        id: 'buderus',
        name: 'Buderus',
        slug: 'buderus-kombi',
        category: 'kombi',
        description: 'Buderus kombi servis hizmetleri'
    },
    {
        id: 'vaillant',
        name: 'Vaillant',
        slug: 'vaillant-kombi',
        category: 'kombi',
        description: 'Vaillant kombi servis hizmetleri'
    },
    {
        id: 'demirdokum',
        name: 'DemirDöküm',
        slug: 'demirdokum-kombi',
        category: 'kombi',
        description: 'DemirDöküm kombi servis hizmetleri'
    },
    {
        id: 'baymak',
        name: 'Baymak',
        slug: 'baymak-kombi',
        category: 'kombi',
        description: 'Baymak kombi servis hizmetleri'
    },
    {
        id: 'alarko',
        name: 'Alarko',
        slug: 'alarko-kombi',
        category: 'kombi',
        description: 'Alarko kombi servis hizmetleri'
    },
    {
        id: 'ferroli',
        name: 'Ferroli',
        slug: 'ferroli-kombi',
        category: 'kombi',
        description: 'Ferroli kombi servis hizmetleri'
    },
    {
        id: 'immergas',
        name: 'Immergas',
        slug: 'immergas-kombi',
        category: 'kombi',
        description: 'Immergas kombi servis hizmetleri'
    },
    {
        id: 'airfel',
        name: 'Airfel',
        slug: 'airfel-kombi',
        category: 'kombi',
        description: 'Airfel kombi servis hizmetleri'
    },
    {
        id: 'protherm',
        name: 'Protherm',
        slug: 'protherm-kombi',
        category: 'kombi',
        description: 'Protherm kombi servis hizmetleri'
    },
    {
        id: 'eca',
        name: 'E.C.A',
        slug: 'eca-kombi',
        category: 'kombi',
        description: 'E.C.A kombi servis hizmetleri'
    },
    {
        id: 'warmhaus',
        name: 'Warmhaus',
        slug: 'warmhaus-kombi',
        category: 'kombi',
        description: 'Warmhaus kombi servis hizmetleri'
    },
    {
        id: 'baxi',
        name: 'Baxi',
        slug: 'baxi-kombi',
        category: 'kombi',
        description: 'Baxi kombi servis hizmetleri'
    },
    {
        id: 'baykan',
        name: 'Baykan',
        slug: 'baykan-kombi',
        category: 'kombi',
        description: 'Baykan kombi servis hizmetleri'
    },
    {
        id: 'termoteknik',
        name: 'Termoteknik',
        slug: 'termoteknik-kombi',
        category: 'kombi',
        description: 'Termoteknik kombi servis hizmetleri'
    },
    // Klima Markaları
    {
        id: 'daikin',
        name: 'Daikin',
        slug: 'daikin-klima',
        category: 'klima',
        description: 'Daikin klima servis hizmetleri'
    },
    {
        id: 'mitsubishi',
        name: 'Mitsubishi',
        slug: 'mitsubishi-klima',
        category: 'klima',
        description: 'Mitsubishi klima servis hizmetleri'
    },
    {
        id: 'lg-klima',
        name: 'LG',
        slug: 'lg-klima',
        category: 'klima',
        description: 'LG klima servis hizmetleri'
    },
    {
        id: 'samsung-klima',
        name: 'Samsung',
        slug: 'samsung-klima',
        category: 'klima',
        description: 'Samsung klima servis hizmetleri'
    },
    {
        id: 'panasonic',
        name: 'Panasonic',
        slug: 'panasonic-klima',
        category: 'klima',
        description: 'Panasonic klima servis hizmetleri'
    },
    {
        id: 'sharp',
        name: 'Sharp',
        slug: 'sharp-klima',
        category: 'klima',
        description: 'Sharp klima servis hizmetleri'
    },
    {
        id: 'toshiba',
        name: 'Toshiba',
        slug: 'toshiba-klima',
        category: 'klima',
        description: 'Toshiba klima servis hizmetleri'
    },
    {
        id: 'carrier',
        name: 'Carrier',
        slug: 'carrier-klima',
        category: 'klima',
        description: 'Carrier klima servis hizmetleri'
    },
    {
        id: 'midea-klima',
        name: 'Midea',
        slug: 'midea-klima',
        category: 'klima',
        description: 'Midea klima servis hizmetleri'
    },
    {
        id: 'klimeks',
        name: 'Klimeks',
        slug: 'klimeks-klima',
        category: 'klima',
        description: 'Klimeks klima servis hizmetleri'
    },
    {
        id: 'fujitsu',
        name: 'Fujitsu',
        slug: 'fujitsu-klima',
        category: 'klima',
        description: 'Fujitsu klima servis hizmetleri'
    },
    {
        id: 'gree',
        name: 'Gree',
        slug: 'gree-klima',
        category: 'klima',
        description: 'Gree klima servis hizmetleri'
    },
    {
        id: 'airfel-klima',
        name: 'Airfel',
        slug: 'airfel-klima',
        category: 'klima',
        description: 'Airfel klima servis hizmetleri'
    },
    {
        id: 'alarko-klima',
        name: 'Alarko',
        slug: 'alarko-klima',
        category: 'klima',
        description: 'Alarko klima servis hizmetleri'
    }
];
const getBrandBySlug = (slug)=>{
    return brands.find((brand)=>brand.slug === slug);
};
const getBrandsByCategory = (category)=>{
    return brands.filter((brand)=>brand.category === category);
};
const allBrands = brands;
}),
"[project]/src/components/layout/PageSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageSidebar",
    ()=>PageSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$markalar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/markalar.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const serviceLinks = [
    {
        name: 'Beyaz Eşya Servisi',
        slug: 'beyaz-esya-servisi',
        desc: 'Beyaz eşya teknik servis teknisyeni arıza tespitinde'
    },
    {
        name: 'Bulaşık Makinesi Servisi',
        slug: 'beyaz-esya-servisi',
        desc: 'Bulaşık makinesi servisinde yerinde müdahale'
    },
    {
        name: 'Buzdolabı Servisi',
        slug: 'beyaz-esya-servisi',
        desc: 'Buzdolabı soğutma arızası için servis ekibi'
    },
    {
        name: 'Çamaşır Makinesi Servisi',
        slug: 'beyaz-esya-servisi',
        desc: 'Çamaşır makinesi tambur arızası servisi'
    },
    {
        name: 'Kombi Servisi',
        slug: 'kombi-servisi',
        desc: 'Kombi bakımı ve arıza onarım ustası'
    },
    {
        name: 'Klima Servisi',
        slug: 'klima-servisi',
        desc: 'Klima montaj ve bakım servisi'
    }
];
function PageSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (pathname === '/') return null;
    const beyazEsyaMarkalari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$markalar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrandsByCategory"])('beyaz-esya').slice(0, 8);
    const kombiMarkalari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$markalar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrandsByCategory"])('kombi').slice(0, 8);
    const klimaMarkalari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$markalar$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBrandsByCategory"])('klima').slice(0, 8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-slate-200 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Container"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-4 grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-blue-900 uppercase tracking-wide mb-3",
                                children: "Popüler Markalar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-slate-500 uppercase",
                                        children: "Beyaz Eşya"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: beyazEsyaMarkalari.map((marka)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/marka/${marka.slug}`,
                                                className: "text-xs text-slate-600 hover:text-blue-900",
                                                children: marka.name
                                            }, marka.id, false, {
                                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-slate-500 uppercase mt-1",
                                        children: "Kombi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: kombiMarkalari.map((marka)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/marka/${marka.slug}`,
                                                className: "text-xs text-slate-600 hover:text-blue-900",
                                                children: marka.name
                                            }, marka.id, false, {
                                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-slate-500 uppercase mt-1",
                                        children: "Klima"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: klimaMarkalari.map((marka)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/marka/${marka.slug}`,
                                                className: "text-xs text-slate-600 hover:text-blue-900",
                                                children: marka.name
                                            }, marka.id, false, {
                                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-blue-900 uppercase tracking-wide mb-3",
                                children: "Hizmetlerimiz"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: serviceLinks.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${service.slug}`,
                                        className: "block text-sm text-slate-600 hover:text-blue-900 hover:underline",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: service.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/PageSidebar.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PageSidebar.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/PageSidebar.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/PageSidebar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CookieConsent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsent",
    ()=>CookieConsent,
    "useCookieConsent",
    ()=>useCookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.js [app-ssr] (ecmascript) <export default as Cookie>");
'use client';
;
;
;
;
function CookieConsent() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(()=>{
                setIsVisible(true);
                setIsAnimating(true);
            }, 1000);
            return ()=>clearTimeout(timer);
        }
    }, []);
    const handleAccept = ()=>{
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setIsAnimating(false);
        setTimeout(()=>setIsVisible(false), 300);
    };
    const handleDecline = ()=>{
        localStorage.setItem('cookieConsent', 'declined');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        setIsAnimating(false);
        setTimeout(()=>setIsVisible(false), 300);
    };
    const handleClose = ()=>{
        setIsAnimating(false);
        setTimeout(()=>setIsVisible(false), 300);
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ease-out ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-start md:items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                        className: "w-7 h-7 text-blue-900"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-slate-900 mb-2",
                                        children: "Çerez Kullanımı"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 text-sm leading-relaxed mb-2",
                                        children: [
                                            "Sitemizde size en iyi deneyimi sunmak için çerezler kullanıyoruz. Çerezler, site kullanımını analiz etmek ve içeriği kişiselleştirmek için kullanılır. Çerez kullanımını kabul ederek,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/gizlilik-politikasi",
                                                className: "text-blue-900 underline hover:no-underline font-medium",
                                                children: "Gizlilik Politikamızı"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CookieConsent.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            "kabul etmiş olursunuz."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500",
                                        children: "İstediğiniz zaman çerez tercihlerinizi değiştirebilirsiniz."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 w-full md:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: handleDecline,
                                        className: "whitespace-nowrap",
                                        children: "Reddet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: handleAccept,
                                        className: "whitespace-nowrap bg-blue-900 hover:bg-blue-800",
                                        children: "Kabul Et"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 transition-colors md:hidden",
                                "aria-label": "Kapat",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CookieConsent.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Kullandığımız çerezler: Gerekli çerezler (site çalışması için), Analitik çerezler (site kullanımı), Fonksiyonel çerezler (tercihleriniz)."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CookieConsent.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CookieConsent.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CookieConsent.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CookieConsent.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CookieConsent.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function useCookieConsent() {
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedConsent = localStorage.getItem('cookieConsent');
        setConsent(storedConsent);
    }, []);
    return {
        consent,
        hasConsented: consent === 'accepted',
        hasDeclined: consent === 'declined'
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09e3ad8b._.js.map