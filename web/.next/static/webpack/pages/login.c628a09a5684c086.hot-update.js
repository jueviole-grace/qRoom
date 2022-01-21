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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createURQLClient\": function() { return /* binding */ createURQLClient; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isServer */ \"./src/utils/isServer.ts\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction invalidateMessages(cache) {\n    var allFields = cache.inspectFields(\"Query\");\n    var fieldInfos = allFields.filter(function(info) {\n        return info.fieldName === \"messagesByRoom\";\n    });\n    fieldInfos.forEach(function(fi) {\n        cache.invalidate(\"Query\", \"messagesByRoom\", fi.arguments || {});\n    });\n}\nvar errorExchange = function(param1) {\n    var forward = param1.forward;\n    return function(ops$) {\n        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.pipe)(forward(ops$), (0,wonka__WEBPACK_IMPORTED_MODULE_4__.tap)(function(param) {\n            var error = param.error;\n            if (error === null || error === void 0 ? void 0 : error.message.includes(\"not authenticated\")) {\n                next_router__WEBPACK_IMPORTED_MODULE_0___default().replace(\"/login\");\n            }\n        }));\n    };\n};\nvar createURQLClient = function(ssrExchange, ctx) {\n    var cookie = \"\";\n    if ((0,_isServer__WEBPACK_IMPORTED_MODULE_1__.isServer)()) {\n        var ref, ref1;\n        cookie = ctx === null || ctx === void 0 ? void 0 : (ref = ctx.req) === null || ref === void 0 ? void 0 : (ref1 = ref.headers) === null || ref1 === void 0 ? void 0 : ref1.cookie;\n    }\n    return {\n        url: \"http://localhost:4000/graphql\",\n        fetchOptions: {\n            credentials: \"include\",\n            headers: cookie ? {\n                cookie: cookie\n            } : undefined\n        },\n        exchanges: [\n            urql__WEBPACK_IMPORTED_MODULE_5__.dedupExchange,\n            (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__.cacheExchange)({\n                updates: {\n                    Mutation: {\n                        createMessage: function(_result, args, cache, info) {\n                            invalidateMessages(cache);\n                        },\n                        login: function(_result, _args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.login.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.login.user\n                                    };\n                                }\n                            });\n                            invalidateMessages(cache);\n                        },\n                        logout: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function() {\n                                return {\n                                    me: null\n                                };\n                            });\n                        },\n                        register: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.register.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.register.user\n                                    };\n                                }\n                            });\n                        }\n                    }\n                }\n            }),\n            errorExchange,\n            ssrExchange,\n            urql__WEBPACK_IMPORTED_MODULE_5__.fetchExchange, \n        ]\n    };\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQixDQUFDO2dDQUNILENBQUM7NEJBQ0gsQ0FBQzt3QkFFTCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFDRDdCLGFBQWE7WUFDYlEsV0FBVztZQUNYM0IsK0NBQWE7UUFDZixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVSUUxDbGllbnQudHM/ODgwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBkZWR1cEV4Y2hhbmdlLCBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSB9IGZyb20gXCJ1cnFsXCI7XHJcbmltcG9ydCB7IGNhY2hlRXhjaGFuZ2UgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tIFwid29ua2FcIjtcclxuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xyXG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gXCIuL2lzU2VydmVyXCI7XHJcbmltcG9ydCB7IGJldHRlclVwZGF0ZVF1ZXJ5IH0gZnJvbSBcIi4vYmV0dGVyVXBkYXRlUXVlcnlcIjtcclxuaW1wb3J0IHtcclxuICBMb2dpbk11dGF0aW9uLFxyXG4gIE1lRG9jdW1lbnQsXHJcbiAgTWVRdWVyeSxcclxuICBSZWdpc3Rlck11dGF0aW9uLFxyXG59IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5cclxuZnVuY3Rpb24gaW52YWxpZGF0ZU1lc3NhZ2VzKGNhY2hlOiBDYWNoZSkge1xyXG4gIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoXCJRdWVyeVwiKTtcclxuICBjb25zdCBmaWVsZEluZm9zID0gYWxsRmllbGRzLmZpbHRlcihcclxuICAgIChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gXCJtZXNzYWdlc0J5Um9vbVwiXHJcbiAgKTtcclxuICBmaWVsZEluZm9zLmZvckVhY2goKGZpKSA9PiB7XHJcbiAgICBjYWNoZS5pbnZhbGlkYXRlKFwiUXVlcnlcIiwgXCJtZXNzYWdlc0J5Um9vbVwiLCBmaS5hcmd1bWVudHMgfHwge30pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9XHJcbiAgKHsgZm9yd2FyZCB9KSA9PlxyXG4gIChvcHMkKSA9PiB7XHJcbiAgICByZXR1cm4gcGlwZShcclxuICAgICAgZm9yd2FyZChvcHMkKSxcclxuICAgICAgdGFwKCh7IGVycm9yIH0pID0+IHtcclxuICAgICAgICBpZiAoZXJyb3I/Lm1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYXV0aGVudGljYXRlZFwiKSkge1xyXG4gICAgICAgICAgUm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVSUUxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSwgY3R4OiBhbnkpID0+IHtcclxuICBsZXQgY29va2llID0gXCJcIjtcclxuICBpZiAoaXNTZXJ2ZXIoKSkge1xyXG4gICAgY29va2llID0gY3R4Py5yZXE/LmhlYWRlcnM/LmNvb2tpZTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4gICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBhcyBjb25zdCxcclxuICAgICAgaGVhZGVyczogY29va2llID8geyBjb29raWUgfSA6IHVuZGVmaW5lZCxcclxuICAgIH0sXHJcbiAgICBleGNoYW5nZXM6IFtcclxuICAgICAgZGVkdXBFeGNoYW5nZSxcclxuICAgICAgY2FjaGVFeGNoYW5nZSh7XHJcbiAgICAgICBcclxuICAgICAgICB1cGRhdGVzOiB7XHJcbiAgICAgICAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgICAgICBjcmVhdGVNZXNzYWdlOiAoXHJcbiAgICAgICAgICAgICAgX3Jlc3VsdDogYW55LFxyXG4gICAgICAgICAgICAgIGFyZ3M6IGFueSxcclxuICAgICAgICAgICAgICBjYWNoZTogQ2FjaGUsXHJcbiAgICAgICAgICAgICAgaW5mbzogYW55XHJcbiAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgIGludmFsaWRhdGVNZXNzYWdlcyhjYWNoZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ2luOiAoX3Jlc3VsdDogYW55LCBfYXJnczogYW55LCBjYWNoZTogQ2FjaGUsIGluZm86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpbnZhbGlkYXRlTWVzc2FnZXMoY2FjaGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dvdXQ6IChfcmVzdWx0OiBhbnksIGFyZ3M6IGFueSwgY2FjaGU6IENhY2hlLCBpbmZvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgICgpID0+ICh7IG1lOiBudWxsIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0OiBhbnksIGFyZ3M6IGFueSwgY2FjaGU6IENhY2hlLCBpbmZvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PihcclxuICAgICAgICAgICAgICAgIGNhY2hlLFxyXG4gICAgICAgICAgICAgICAgeyBxdWVyeTogTWVEb2N1bWVudCB9LFxyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBlcnJvckV4Y2hhbmdlLFxyXG4gICAgICBzc3JFeGNoYW5nZSxcclxuICAgICAgZmV0Y2hFeGNoYW5nZSxcclxuICAgIF0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJvdXRlciIsImRlZHVwRXhjaGFuZ2UiLCJmZXRjaEV4Y2hhbmdlIiwiY2FjaGVFeGNoYW5nZSIsInBpcGUiLCJ0YXAiLCJpc1NlcnZlciIsImJldHRlclVwZGF0ZVF1ZXJ5IiwiTWVEb2N1bWVudCIsImludmFsaWRhdGVNZXNzYWdlcyIsImNhY2hlIiwiYWxsRmllbGRzIiwiaW5zcGVjdEZpZWxkcyIsImZpZWxkSW5mb3MiLCJmaWx0ZXIiLCJpbmZvIiwiZmllbGROYW1lIiwiZm9yRWFjaCIsImZpIiwiaW52YWxpZGF0ZSIsImFyZ3VtZW50cyIsImVycm9yRXhjaGFuZ2UiLCJmb3J3YXJkIiwib3BzJCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwicmVwbGFjZSIsImNyZWF0ZVVSUUxDbGllbnQiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsInVuZGVmaW5lZCIsImV4Y2hhbmdlcyIsInVwZGF0ZXMiLCJNdXRhdGlvbiIsImNyZWF0ZU1lc3NhZ2UiLCJfcmVzdWx0IiwiYXJncyIsImxvZ2luIiwiX2FyZ3MiLCJxdWVyeSIsInJlc3VsdCIsImVycm9ycyIsIm1lIiwidXNlciIsImxvZ291dCIsInJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createURQLClient.ts\n");

/***/ })

});