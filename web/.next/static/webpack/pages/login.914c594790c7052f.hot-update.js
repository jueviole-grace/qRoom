"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/utils/createURQLClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createURQLClient.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createURQLClient\": function() { return /* binding */ createURQLClient; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isServer */ \"./src/utils/isServer.ts\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction invalidateMessages(cache) {\n    var allFields = cache.inspectFields(\"Query\");\n    var fieldInfos = allFields.filter(function(info) {\n        return info.fieldName === \"messagesByRoom\";\n    });\n    fieldInfos.forEach(function(fi) {\n        cache.invalidate(\"Query\", \"messagesByRoom\", fi.arguments || {});\n    });\n}\nvar errorExchange = function(param1) {\n    var forward = param1.forward;\n    return function(ops$) {\n        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.pipe)(forward(ops$), (0,wonka__WEBPACK_IMPORTED_MODULE_4__.tap)(function(param) {\n            var error = param.error;\n            if (error === null || error === void 0 ? void 0 : error.message.includes(\"not authenticated\")) {\n                next_router__WEBPACK_IMPORTED_MODULE_0___default().replace(\"/login\");\n            }\n        }));\n    };\n};\nvar createURQLClient = function(ssrExchange, ctx) {\n    var cookie = \"\";\n    if ((0,_isServer__WEBPACK_IMPORTED_MODULE_1__.isServer)()) {\n        var ref, ref1;\n        cookie = ctx === null || ctx === void 0 ? void 0 : (ref = ctx.req) === null || ref === void 0 ? void 0 : (ref1 = ref.headers) === null || ref1 === void 0 ? void 0 : ref1.cookie;\n    }\n    return {\n        url: \"http://localhost:4000/graphql\",\n        fetchOptions: {\n            credentials: \"include\",\n            headers: cookie ? {\n                cookie: cookie\n            } : undefined\n        },\n        exchanges: [\n            urql__WEBPACK_IMPORTED_MODULE_5__.dedupExchange,\n            (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__.cacheExchange)({\n                keys: {\n                    Messages: function() {\n                        return n;\n                    }\n                },\n                updates: {\n                    Mutation: {\n                        messagesByRoom: function(_result, args, cache, info) {\n                            invalidateMessages(cache);\n                        },\n                        login: function(_result, _args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.login.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.login.user\n                                    };\n                                }\n                            });\n                            invalidateMessages(cache);\n                        },\n                        logout: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function() {\n                                return {\n                                    me: null\n                                };\n                            });\n                        },\n                        register: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.register.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.register.user\n                                    };\n                                }\n                            });\n                        }\n                    }\n                }\n            }),\n            errorExchange,\n            ssrExchange,\n            urql__WEBPACK_IMPORTED_MODULE_5__.fetchExchange, \n        ]\n    };\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE1BQU0sQ0FBQztvQ0FDTixNQUFNLENBQUMsQ0FBQzt3Q0FDTkcsRUFBRSxFQUFFRixNQUFNLENBQUNLLFFBQVEsQ0FBQ0YsSUFBSTtvQ0FDMUIsQ0FBQztnQ0FDSCxDQUFDOzRCQUNILENBQUM7d0JBRUwsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0RoQyxhQUFhO1lBQ2JRLFdBQVc7WUFDWDNCLCtDQUFhO1FBQ2YsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jcmVhdGVVUlFMQ2xpZW50LnRzPzg4MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZGVkdXBFeGNoYW5nZSwgRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2UgfSBmcm9tIFwidXJxbFwiO1xyXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlIH0gZnJvbSBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIjtcclxuaW1wb3J0IHsgcGlwZSwgdGFwIH0gZnJvbSBcIndvbmthXCI7XHJcbmltcG9ydCB7IENhY2hlIH0gZnJvbSBcIkB1cnFsL2V4Y2hhbmdlLWdyYXBoY2FjaGVcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xyXG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgTG9naW5NdXRhdGlvbixcclxuICBNZURvY3VtZW50LFxyXG4gIE1lUXVlcnksXHJcbiAgUmVnaXN0ZXJNdXRhdGlvbixcclxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuXHJcbmZ1bmN0aW9uIGludmFsaWRhdGVNZXNzYWdlcyhjYWNoZTogQ2FjaGUpIHtcclxuICBjb25zdCBhbGxGaWVsZHMgPSBjYWNoZS5pbnNwZWN0RmllbGRzKFwiUXVlcnlcIik7XHJcbiAgY29uc3QgZmllbGRJbmZvcyA9IGFsbEZpZWxkcy5maWx0ZXIoXHJcbiAgICAoaW5mbykgPT4gaW5mby5maWVsZE5hbWUgPT09IFwibWVzc2FnZXNCeVJvb21cIlxyXG4gICk7XHJcbiAgZmllbGRJbmZvcy5mb3JFYWNoKChmaSkgPT4ge1xyXG4gICAgY2FjaGUuaW52YWxpZGF0ZShcIlF1ZXJ5XCIsIFwibWVzc2FnZXNCeVJvb21cIiwgZmkuYXJndW1lbnRzIHx8IHt9KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgZXJyb3JFeGNoYW5nZTogRXhjaGFuZ2UgPVxyXG4gICh7IGZvcndhcmQgfSkgPT5cclxuICAob3BzJCkgPT4ge1xyXG4gICAgcmV0dXJuIHBpcGUoXHJcbiAgICAgIGZvcndhcmQob3BzJCksXHJcbiAgICAgIHRhcCgoeyBlcnJvciB9KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcclxuICAgICAgICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVVUlFMQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnksIGN0eDogYW55KSA9PiB7XHJcbiAgbGV0IGNvb2tpZSA9IFwiXCI7XHJcbiAgaWYgKGlzU2VydmVyKCkpIHtcclxuICAgIGNvb2tpZSA9IGN0eD8ucmVxPy5oZWFkZXJzPy5jb29raWU7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWxcIixcclxuICAgIGZldGNoT3B0aW9uczoge1xyXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXHJcbiAgICAgIGhlYWRlcnM6IGNvb2tpZSA/IHsgY29va2llIH0gOiB1bmRlZmluZWQsXHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2VzOiBbXHJcbiAgICAgIGRlZHVwRXhjaGFuZ2UsXHJcbiAgICAgIGNhY2hlRXhjaGFuZ2Uoe1xyXG4gICAgICAgIGtleXM6e1xyXG4gICAgICAgICAgTWVzc2FnZXMgOiAoKSA9PiBuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICBtZXNzYWdlc0J5Um9vbTogKFxyXG4gICAgICAgICAgICAgIF9yZXN1bHQ6IGFueSxcclxuICAgICAgICAgICAgICBhcmdzOiBhbnksXHJcbiAgICAgICAgICAgICAgY2FjaGU6IENhY2hlLFxyXG4gICAgICAgICAgICAgIGluZm86IGFueVxyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICBpbnZhbGlkYXRlTWVzc2FnZXMoY2FjaGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dpbjogKF9yZXN1bHQ6IGFueSwgX2FyZ3M6IGFueSwgY2FjaGU6IENhY2hlLCBpbmZvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubG9naW4uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZU1lc3NhZ2VzKGNhY2hlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdDogYW55LCBhcmdzOiBhbnksIGNhY2hlOiBDYWNoZSwgaW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiAoeyBtZTogbnVsbCB9KVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdDogYW55LCBhcmdzOiBhbnksIGNhY2hlOiBDYWNoZSwgaW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZ2lzdGVyLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5yZWdpc3Rlci51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgZXJyb3JFeGNoYW5nZSxcclxuICAgICAgc3NyRXhjaGFuZ2UsXHJcbiAgICAgIGZldGNoRXhjaGFuZ2UsXHJcbiAgICBdLFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJkZWR1cEV4Y2hhbmdlIiwiZmV0Y2hFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJwaXBlIiwidGFwIiwiaXNTZXJ2ZXIiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsIk1lRG9jdW1lbnQiLCJpbnZhbGlkYXRlTWVzc2FnZXMiLCJjYWNoZSIsImFsbEZpZWxkcyIsImluc3BlY3RGaWVsZHMiLCJmaWVsZEluZm9zIiwiZmlsdGVyIiwiaW5mbyIsImZpZWxkTmFtZSIsImZvckVhY2giLCJmaSIsImludmFsaWRhdGUiLCJhcmd1bWVudHMiLCJlcnJvckV4Y2hhbmdlIiwiZm9yd2FyZCIsIm9wcyQiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJjcmVhdGVVUlFMQ2xpZW50Iiwic3NyRXhjaGFuZ2UiLCJjdHgiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJleGNoYW5nZXMiLCJrZXlzIiwiTWVzc2FnZXMiLCJuIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibWVzc2FnZXNCeVJvb20iLCJfcmVzdWx0IiwiYXJncyIsImxvZ2luIiwiX2FyZ3MiLCJxdWVyeSIsInJlc3VsdCIsImVycm9ycyIsIm1lIiwidXNlciIsImxvZ291dCIsInJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createURQLClient.ts\n");

/***/ })

});