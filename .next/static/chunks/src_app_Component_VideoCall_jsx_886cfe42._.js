(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_Component_VideoCall_jsx_886cfe42._.js", {

"[project]/src/app/Component/VideoCall.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VideoCall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/agora-rtc-react/dist/agora-rtc-react.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function VideoCall() {
    _s();
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const [appId, setAppId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("4e4f366a04334ff19d2205abd577b0bb");
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("test");
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCalling, setIsCalling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [micOn, setMicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cameraOn, setCameraOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJoin"])({
        appid: appId,
        channel: channel,
        token: token || null
    }, isCalling);
    const [localMicrophoneTrack, setLocalMicrophoneTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localCameraTrack, setLocalCameraTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoCall.useEffect": ()=>{
            if ("object" !== "undefined" && (micOn || cameraOn)) {
                async function initTracks() {
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({
                            video: true,
                            audio: true
                        });
                        const micTrack = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createMicrophoneAudioTrack();
                        const camTrack = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createCameraVideoTrack();
                        setLocalMicrophoneTrack(micTrack);
                        setLocalCameraTrack(camTrack);
                    } catch (error) {
                        console.error("Error accessing camera/microphone:", error);
                    }
                }
                initTracks();
            }
        // if (micOn || cameraOn) {
        // }
        }
    }["VideoCall.useEffect"], [
        micOn,
        cameraOn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublish"])([
        localMicrophoneTrack,
        localCameraTrack
    ]);
    const remoteUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRemoteUsers"])();
    if (remoteUsers.length > 0) {
        console.log(remoteUsers, "remoteUsers");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6",
        children: isCalling ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 h-64 bg-gray-700 flex items-center justify-center rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalUser"], {
                                audioTrack: localMicrophoneTrack,
                                videoTrack: localCameraTrack,
                                cameraOn: cameraOn,
                                micOn: micOn,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-center",
                                    children: "You"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Component/VideoCall.jsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Component/VideoCall.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        remoteUsers.length > 0 ? remoteUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-64 h-64 bg-gray-700 flex items-center justify-center rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoteUser"], {
                                        user: user
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Component/VideoCall.jsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-center",
                                        children: user.uid
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Component/VideoCall.jsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, user.uid, true, {
                                fileName: "[project]/src/app/Component/VideoCall.jsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-64 h-64 bg-gray-700 flex items-center justify-center rounded-lg",
                            children: "Waiting for user..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/Component/VideoCall.jsx",
                            lineNumber: 86,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMicOn(!micOn),
                            className: `px-6 py-2 rounded-lg ${micOn ? "bg-green-500" : "bg-red-500"}`,
                            children: micOn ? "Mute Mic" : "Unmute Mic"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Component/VideoCall.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCameraOn(!cameraOn),
                            className: `px-6 py-2 rounded-lg ${cameraOn ? "bg-green-500" : "bg-red-500"}`,
                            children: cameraOn ? "Turn Off Camera" : "Turn On Camera"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Component/VideoCall.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsCalling(false),
                            className: "px-6 py-2 bg-red-600 rounded-lg",
                            children: "Leave Call"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Component/VideoCall.jsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Component/VideoCall.jsx",
            lineNumber: 63,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold",
                    children: "Join a Video Call"
                }, void 0, false, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: appId,
                    onChange: (e)=>setAppId(e.target.value),
                    placeholder: "Agora App ID",
                    className: "p-2 bg-gray-800 border border-gray-600 rounded-lg w-64"
                }, void 0, false, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: channel,
                    onChange: (e)=>setChannel(e.target.value),
                    placeholder: "Channel Name",
                    className: "p-2 bg-gray-800 border border-gray-600 rounded-lg w-64"
                }, void 0, false, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: token || "",
                    onChange: (e)=>setToken(e.target.value),
                    placeholder: "Token (Optional)",
                    className: "p-2 bg-gray-800 border border-gray-600 rounded-lg w-64"
                }, void 0, false, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsCalling(true),
                    className: "px-6 py-2 bg-blue-600 rounded-lg",
                    children: "Join Call"
                }, void 0, false, {
                    fileName: "[project]/src/app/Component/VideoCall.jsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Component/VideoCall.jsx",
            lineNumber: 118,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Component/VideoCall.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(VideoCall, "+D4Q0lANgjJ0Rdd3CsnAsypqmUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJoin"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublish"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$rtc$2d$react$2f$dist$2f$agora$2d$rtc$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRemoteUsers"]
    ];
});
_c = VideoCall;
var _c;
__turbopack_context__.k.register(_c, "VideoCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Component/VideoCall.jsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/Component/VideoCall.jsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_Component_VideoCall_jsx_886cfe42._.js.map