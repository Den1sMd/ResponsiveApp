(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/accueil/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Accueil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.js [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const StatCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "310db1bac7ae1d48b5e57c4f2ccab88a16be332332422af176ee2ecfce16cf98") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "310db1bac7ae1d48b5e57c4f2ccab88a16be332332422af176ee2ecfce16cf98";
    }
    const { icon: Icon, title, value } = t0;
    let t1;
    if ($[1] !== Icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "w-16 h-16 text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = Icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-xl font-bold mt-5 text-center",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 31,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            fontSize: "3rem"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== value) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white font-extrabold mt-5",
            style: t3,
            children: value
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = value;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t1 || $[9] !== t2 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 w-full h-80 flex flex-col justify-center items-center rounded-2xl border border-gray-700 shadow-2xl p-4",
            children: [
                t1,
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t1;
        $[9] = t2;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
};
_c = StatCard;
function Accueil() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "310db1bac7ae1d48b5e57c4f2ccab88a16be332332422af176ee2ecfce16cf98") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "310db1bac7ae1d48b5e57c4f2ccab88a16be332332422af176ee2ecfce16cf98";
    }
    const [myclients, setMyclients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [money] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [parrainage, setParrainage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_AccueilUseEffect, t0);
    const logout = _AccueilLogout;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Accueil[useEffect()]": ()=>{
                const fetchProfile = {
                    "Accueil[useEffect() > fetchProfile]": async ()=>{
                        const token_0 = localStorage.getItem("token");
                        if (!token_0) {
                            return;
                        }
                        const res = await fetch("http://localhost:5000/getparain", {
                            method: "GET",
                            headers: {
                                "Authorization": `Bearer ${token_0}`
                            }
                        });
                        const data = await res.json();
                        if (res.ok) {
                            setMyclients(data.invited_count);
                            setParrainage(data.referral_code);
                            setPsn(data.psn_count);
                        } else {
                            console.error(data.error);
                        }
                    }
                }["Accueil[useEffect() > fetchProfile]"];
                fetchProfile();
            }
        })["Accueil[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Accueil[useEffect()]": ()=>{
                const targetDate = new Date("2025-12-15T00:00:00").getTime();
                const interval = setInterval({
                    "Accueil[useEffect() > setInterval()]": ()=>{
                        const now = new Date().getTime();
                        const difference = targetDate - now;
                        if (difference <= 0) {
                            clearInterval(interval);
                            setTimeLeft(0);
                        } else {
                            setTimeLeft(difference);
                        }
                    }
                }["Accueil[useEffect() > setInterval()]"], 1000);
                return ()=>clearInterval(interval);
            }
        })["Accueil[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const days = Math.floor(timeLeft / 86400000);
    const hours = Math.floor(timeLeft / 3600000 % 24);
    const minutes = Math.floor(timeLeft / 60000 % 60);
    const seconds = Math.floor(timeLeft / 1000 % 60);
    let t5;
    if ($[6] !== myclients) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: "Personnes invit\xE9s :",
            value: myclients
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[6] = myclients;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== money) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
            title: "Money :",
            value: money
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[8] = money;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            className: "w-16 h-16 text-blue-400 mt-4"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-xl font-bold mt-5",
            children: "Mes informations :"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-md font-bold mt-5",
            children: "Mon code de parrainage :"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t10;
    if ($[13] !== parrainage) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-800 w-full h-80 flex flex-col justify-start items-center rounded-2xl border border-gray-700 shadow-2xl p-6",
            children: [
                t7,
                t8,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 bg-stone-900 rounded-lg w-40 flex justify-center h-8 items-center px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-bold tracking-wider",
                        children: parrainage
                    }, void 0, false, {
                        fileName: "[project]/src/app/accueil/page.js",
                        lineNumber: 191,
                        columnNumber: 248
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 191,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[13] = parrainage;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t10 || $[16] !== t5 || $[17] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4",
            children: [
                t5,
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t5;
        $[17] = t6;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center p-3 flex-1 min-w-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-12 h-12 text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 209,
                    columnNumber: 74
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-xl font-bold mt-3 text-center",
                    children: "Informations"
                }, void 0, false, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 209,
                    columnNumber: 118
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-sm mt-3 text-center opacity-80 max-w-xs",
                    children: "- Chaque membre invité doit me follow sur x pour que son inscription soit comptée."
                }, void 0, false, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 209,
                    columnNumber: 195
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "w-12 h-12 text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-xl font-bold mt-3",
            children: "Timer"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[20] = t13;
        $[21] = t14;
    } else {
        t13 = $[20];
        t14 = $[21];
    }
    let t15;
    if ($[22] !== days || $[23] !== hours || $[24] !== minutes || $[25] !== seconds) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center p-3 flex-1 min-w-0 border-y md:border-y-0 md:border-x border-gray-700",
            children: [
                t13,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white text-2xl font-bold mt-5 text-center",
                    children: [
                        days,
                        "j ",
                        hours,
                        "h ",
                        minutes,
                        "m ",
                        seconds,
                        "s"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 227,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[22] = days;
        $[23] = hours;
        $[24] = minutes;
        $[25] = seconds;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
            className: "w-12 h-12 text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-xl font-bold mt-3",
            children: "Contact"
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[27] = t16;
        $[28] = t17;
    } else {
        t16 = $[27];
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center p-3 flex-1 min-w-0",
            children: [
                t16,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://x.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 cursor-pointer w-40 h-12 flex items-center justify-center gap-2 hover:scale-105",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/accueil/page.js",
                                lineNumber: 249,
                                columnNumber: 434
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg",
                                children: "X"
                            }, void 0, false, {
                                fileName: "[project]/src/app/accueil/page.js",
                                lineNumber: 249,
                                columnNumber: 465
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/accueil/page.js",
                        lineNumber: 249,
                        columnNumber: 168
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 249,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t15) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 mt-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-1 md:col-span-3 bg-gray-800 w-full flex flex-col md:flex-row justify-around items-stretch rounded-2xl border border-gray-700 shadow-2xl p-6 gap-6",
                children: [
                    t12,
                    t15,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/accueil/page.js",
                lineNumber: 256,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[30] = t15;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: logout,
                className: "bg-gradient-to-r from-red-400 to-red-900 mt-10 rounded-2xl w-60 h-10 cursor-pointer hover:from-red-500 hover:to-red-950 transform hover:scale-105 transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-bold text-white text-xl",
                    children: "Déconnexion"
                }, void 0, false, {
                    fileName: "[project]/src/app/accueil/page.js",
                    lineNumber: 264,
                    columnNumber: 227
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/accueil/page.js",
                lineNumber: 264,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t11 || $[34] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full min-h-screen flex justify-start items-center flex-col pt-10 pb-16 font-sans",
            children: [
                t11,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/accueil/page.js",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t19;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    return t21;
}
_s(Accueil, "R6qtO4h9jRTKy/UTL5iZ8uMo2pU=");
_c1 = Accueil;
function _AccueilLogout() {
    window.localStorage.clear();
    window.location.href = "/login";
}
function _AccueilUseEffect() {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/login";
    }
}
var _c, _c1;
__turbopack_context__.k.register(_c, "StatCard");
__turbopack_context__.k.register(_c1, "Accueil");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_accueil_page_5e2907bf.js.map