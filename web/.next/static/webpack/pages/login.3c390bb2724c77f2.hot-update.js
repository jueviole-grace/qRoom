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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createURQLClient\": function() { return /* binding */ createURQLClient; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isServer */ \"./src/utils/isServer.ts\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction invalidateMessages(cache) {\n    var allFields = cache.inspectFields(\"Query\");\n    var fieldInfos = allFields.filter(function(info) {\n        return info.fieldName === \"messagesByRoom\";\n    });\n    fieldInfos.forEach(function(fi) {\n        cache.invalidate(\"Query\", \"messagesByRoom\", fi.arguments || {});\n    });\n}\nvar errorExchange = function(param1) {\n    var forward = param1.forward;\n    return function(ops$) {\n        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.pipe)(forward(ops$), (0,wonka__WEBPACK_IMPORTED_MODULE_4__.tap)(function(param) {\n            var error = param.error;\n            if (error === null || error === void 0 ? void 0 : error.message.includes(\"not authenticated\")) {\n                next_router__WEBPACK_IMPORTED_MODULE_0___default().replace(\"/login\");\n            }\n        }));\n    };\n};\nvar createURQLClient = function(ssrExchange, ctx) {\n    var cookie = \"\";\n    if ((0,_isServer__WEBPACK_IMPORTED_MODULE_1__.isServer)()) {\n        var ref, ref1;\n        cookie = ctx === null || ctx === void 0 ? void 0 : (ref = ctx.req) === null || ref === void 0 ? void 0 : (ref1 = ref.headers) === null || ref1 === void 0 ? void 0 : ref1.cookie;\n    }\n    return {\n        url: \"http://localhost:4000/graphql\",\n        fetchOptions: {\n            credentials: \"include\",\n            headers: cookie ? {\n                cookie: cookie\n            } : undefined\n        },\n        exchanges: [\n            urql__WEBPACK_IMPORTED_MODULE_5__.dedupExchange,\n            (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__.cacheExchange)({\n                keys: {\n                    Messages: function() {\n                        return null;\n                    }\n                },\n                updates: {\n                    Mutation: {\n                        messagesByRoom: function(_result, args, cache, info) {\n                            invalidateMessages(cache);\n                        },\n                        login: function(_result, _args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.login.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.login.user\n                                    };\n                                }\n                            });\n                            invalidateMessages(cache);\n                        },\n                        logout: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function() {\n                                return {\n                                    me: null\n                                };\n                            });\n                        },\n                        register: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_2__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.register.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.register.user\n                                    };\n                                }\n                            });\n                        }\n                    }\n                }\n            }),\n            errorExchange,\n            ssrExchange,\n            urql__WEBPACK_IMPORTED_MODULE_5__.fetchExchange, \n        ]\n    };\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLENBQUM7b0NBQ04sTUFBTSxDQUFDLENBQUM7d0NBQ05HLEVBQUUsRUFBRUYsTUFBTSxDQUFDSyxRQUFRLENBQUNGLElBQUk7b0NBQzFCLENBQUM7Z0NBQ0gsQ0FBQzs0QkFDSCxDQUFDO3dCQUVMLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQUNEL0IsYUFBYTtZQUNiUSxXQUFXO1lBQ1gzQiwrQ0FBYTtRQUNmLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvY3JlYXRlVVJRTENsaWVudC50cz84ODBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGRlZHVwRXhjaGFuZ2UsIEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlIH0gZnJvbSBcInVycWxcIjtcclxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gXCJ3b25rYVwiO1xyXG5pbXBvcnQgeyBDYWNoZSB9IGZyb20gXCJAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlXCI7XHJcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSBcIi4vaXNTZXJ2ZXJcIjtcclxuaW1wb3J0IHsgYmV0dGVyVXBkYXRlUXVlcnkgfSBmcm9tIFwiLi9iZXR0ZXJVcGRhdGVRdWVyeVwiO1xyXG5pbXBvcnQge1xyXG4gIExvZ2luTXV0YXRpb24sXHJcbiAgTWVEb2N1bWVudCxcclxuICBNZVF1ZXJ5LFxyXG4gIFJlZ2lzdGVyTXV0YXRpb24sXHJcbn0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5mdW5jdGlvbiBpbnZhbGlkYXRlTWVzc2FnZXMoY2FjaGU6IENhY2hlKSB7XHJcbiAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhcIlF1ZXJ5XCIpO1xyXG4gIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKFxyXG4gICAgKGluZm8pID0+IGluZm8uZmllbGROYW1lID09PSBcIm1lc3NhZ2VzQnlSb29tXCJcclxuICApO1xyXG4gIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcclxuICAgIGNhY2hlLmludmFsaWRhdGUoXCJRdWVyeVwiLCBcIm1lc3NhZ2VzQnlSb29tXCIsIGZpLmFyZ3VtZW50cyB8fCB7fSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVycm9yRXhjaGFuZ2U6IEV4Y2hhbmdlID1cclxuICAoeyBmb3J3YXJkIH0pID0+XHJcbiAgKG9wcyQpID0+IHtcclxuICAgIHJldHVybiBwaXBlKFxyXG4gICAgICBmb3J3YXJkKG9wcyQpLFxyXG4gICAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvcj8ubWVzc2FnZS5pbmNsdWRlcyhcIm5vdCBhdXRoZW50aWNhdGVkXCIpKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVVJRTENsaWVudCA9IChzc3JFeGNoYW5nZTogYW55LCBjdHg6IGFueSkgPT4ge1xyXG4gIGxldCBjb29raWUgPSBcIlwiO1xyXG4gIGlmIChpc1NlcnZlcigpKSB7XHJcbiAgICBjb29raWUgPSBjdHg/LnJlcT8uaGVhZGVycz8uY29va2llO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXHJcbiAgICBmZXRjaE9wdGlvbnM6IHtcclxuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxyXG4gICAgICBoZWFkZXJzOiBjb29raWUgPyB7IGNvb2tpZSB9IDogdW5kZWZpbmVkLFxyXG4gICAgfSxcclxuICAgIGV4Y2hhbmdlczogW1xyXG4gICAgICBkZWR1cEV4Y2hhbmdlLFxyXG4gICAgICBjYWNoZUV4Y2hhbmdlKHtcclxuICAgICAgICBrZXlzOntcclxuICAgICAgICAgIE1lc3NhZ2VzIDogKCkgPT4gbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlczoge1xyXG4gICAgICAgICAgTXV0YXRpb246IHtcclxuICAgICAgICAgICAgbWVzc2FnZXNCeVJvb206IChcclxuICAgICAgICAgICAgICBfcmVzdWx0OiBhbnksXHJcbiAgICAgICAgICAgICAgYXJnczogYW55LFxyXG4gICAgICAgICAgICAgIGNhY2hlOiBDYWNoZSxcclxuICAgICAgICAgICAgICBpbmZvOiBhbnlcclxuICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZU1lc3NhZ2VzKGNhY2hlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9naW46IChfcmVzdWx0OiBhbnksIF9hcmdzOiBhbnksIGNhY2hlOiBDYWNoZSwgaW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9naW5NdXRhdGlvbiwgTWVRdWVyeT4oXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgICAgIHsgcXVlcnk6IE1lRG9jdW1lbnQgfSxcclxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWU6IHJlc3VsdC5sb2dpbi51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGludmFsaWRhdGVNZXNzYWdlcyhjYWNoZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ291dDogKF9yZXN1bHQ6IGFueSwgYXJnczogYW55LCBjYWNoZTogQ2FjaGUsIGluZm86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ2luTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gKHsgbWU6IG51bGwgfSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWdpc3RlcjogKF9yZXN1bHQ6IGFueSwgYXJnczogYW55LCBjYWNoZTogQ2FjaGUsIGluZm86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxyXG4gICAgICAgICAgICAgICAgY2FjaGUsXHJcbiAgICAgICAgICAgICAgICB7IHF1ZXJ5OiBNZURvY3VtZW50IH0sXHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIGVycm9yRXhjaGFuZ2UsXHJcbiAgICAgIHNzckV4Y2hhbmdlLFxyXG4gICAgICBmZXRjaEV4Y2hhbmdlLFxyXG4gICAgXSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUm91dGVyIiwiZGVkdXBFeGNoYW5nZSIsImZldGNoRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwicGlwZSIsInRhcCIsImlzU2VydmVyIiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJNZURvY3VtZW50IiwiaW52YWxpZGF0ZU1lc3NhZ2VzIiwiY2FjaGUiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsImluZm8iLCJmaWVsZE5hbWUiLCJmb3JFYWNoIiwiZmkiLCJpbnZhbGlkYXRlIiwiYXJndW1lbnRzIiwiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiY3JlYXRlVVJRTENsaWVudCIsInNzckV4Y2hhbmdlIiwiY3R4IiwiY29va2llIiwicmVxIiwiaGVhZGVycyIsInVybCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwiZXhjaGFuZ2VzIiwia2V5cyIsIk1lc3NhZ2VzIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibWVzc2FnZXNCeVJvb20iLCJfcmVzdWx0IiwiYXJncyIsImxvZ2luIiwiX2FyZ3MiLCJxdWVyeSIsInJlc3VsdCIsImVycm9ycyIsIm1lIiwidXNlciIsImxvZ291dCIsInJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/createURQLClient.ts\n");

/***/ })

});