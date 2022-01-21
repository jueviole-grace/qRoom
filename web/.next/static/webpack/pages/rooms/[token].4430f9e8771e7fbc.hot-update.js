"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rooms/[token]",{

/***/ "./src/pages/rooms/[token].tsx":
/*!*************************************!*\
  !*** ./src/pages/rooms/[token].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _components_messageSections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/messageSections */ \"./src/components/messageSections.tsx\");\n/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wrapper */ \"./src/components/wrapper.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createURQLClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/createURQLClient */ \"./src/utils/createURQLClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Room = function(param) {\n    var token = param.token;\n    _s();\n    // console.log(token);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery)(), 1), meData = ref[0];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRoomQuery)({\n        variables: {\n            token: token\n        }\n    }), 1), roomData = ref1[0];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useDeleteRoomMutation)(), 2), deleteRoom = ref2[1];\n    var body = null;\n    if (!meData) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"pls login\"\n        }, void 0, false);\n    }\n    if (roomData.fetching) {}\n    if (roomData.data) {\n        body = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wrapper__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n            variant: \"large\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                    justifyContent: \"space-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            border: \"1px\",\n                            p: 4,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    children: \"Room details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    children: [\n                                        \"Room Name :\",\n                                        roomData.data.room.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: function() {\n                                deleteRoom({\n                                    id: roomData.data.room.id\n                                });\n                                router.push(\"/\");\n                            },\n                            backgroundColor: \"red.400\",\n                            variant: \"ghost\",\n                            children: \"delete room\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    mt: 4,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messageSections__WEBPACK_IMPORTED_MODULE_3__.MessageSections, {\n                        token: \"\".concat(token)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        variant: \"large\",\n        children: body\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\qRoom\\\\web\\\\src\\\\pages\\\\rooms\\\\[token].tsx\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, _this));\n};\n_s(Room, \"bDYAB30j8L+MtXNXp4sOnAFF4fo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useRoomQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.useDeleteRoomMutation\n    ];\n});\n_c = Room;\nRoom.getInitialProps = function(param) {\n    var query = param.query;\n    return {\n        token: query.token\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_8__.withUrqlClient)(_utils_createURQLClient__WEBPACK_IMPORTED_MODULE_6__.createURQLClient)(Room));\nvar _c;\n$RefreshReg$(_c, \"Room\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFFaEI7QUFDSDtBQUNTO0FBQ2tCO0FBQ2hCO0FBS2xCO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELEdBQUssQ0FBQ2EsSUFBSSxHQUFnQyxRQUFRLFFBQU8sQ0FBQztRQUFiQyxLQUFLLFNBQUxBLEtBQUs7O0lBQ2hELEVBQXNCO0lBQ3RCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQVlLLEdBQVksa0JBQVpBLDhEQUFVLFFBQXBCTSxNQUFNLEdBQUlOLEdBQVk7SUFDN0IsR0FBSyxDQUFjQyxJQUlqQixrQkFKaUJBLGdFQUFZLENBQUMsQ0FBQztRQUMvQk0sU0FBUyxFQUFFLENBQUM7WUFDVkgsS0FBSyxFQUFFQSxLQUFLO1FBQ2QsQ0FBQztJQUNILENBQUMsT0FKTUksUUFBUSxHQUFJUCxJQUlqQjtJQUNGLEdBQUssQ0FBa0JGLElBQXVCLGtCQUF2QkEseUVBQXFCLFFBQW5DVSxVQUFVLEdBQUlWLElBQXVCO0lBQzlDLEdBQUcsQ0FBQ1csSUFBSSxHQUFHLElBQUk7SUFDZixFQUFFLEdBQUdKLE1BQU0sRUFBRSxDQUFDO1FBQ1pJLElBQUk7c0JBQUssQ0FBUzs7SUFDcEIsQ0FBQztJQUNELEVBQUUsRUFBRUYsUUFBUSxDQUFDRyxRQUFRLEVBQUUsQ0FBQyxDQUN2QjtJQUNELEVBQUUsRUFBRUgsUUFBUSxDQUFDSSxJQUFJLEVBQUUsQ0FBQztRQUNsQkYsSUFBSSwrRUFDRFosd0RBQU87WUFBQ2UsT0FBTyxFQUFDLENBQU87OzRGQUNyQnJCLGtEQUFJO29CQUFDc0IsY0FBYyxFQUFFLENBQWU7O29HQUNsQ3hCLGlEQUFHOzRCQUFDeUIsTUFBTSxFQUFFLENBQUs7NEJBQUVDLENBQUMsRUFBRSxDQUFDOzs0R0FDckJ2QixrREFBSTs4Q0FBQyxDQUFZOzs7Ozs7NEdBQ2pCQSxrREFBSTs7d0NBQUMsQ0FBVzt3Q0FBQ2UsUUFBUSxDQUFDSSxJQUFJLENBQUNLLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7OztvR0FFMUMzQixvREFBTTs0QkFDTDRCLE9BQU8sRUFBRSxRQUFRLEdBQUYsQ0FBQztnQ0FDZFYsVUFBVSxDQUFDLENBQUM7b0NBQUNXLEVBQUUsRUFBRVosUUFBUSxDQUFDSSxJQUFJLENBQUNLLElBQUksQ0FBQ0csRUFBRTtnQ0FBQyxDQUFDO2dDQUN4Q2YsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDLENBQUc7NEJBQ2pCLENBQUM7NEJBQ0RDLGVBQWUsRUFBRSxDQUFTOzRCQUMxQlQsT0FBTyxFQUFFLENBQU87c0NBQ2pCLENBRUQ7Ozs7Ozs7Ozs7Ozs0RkFFRHZCLGlEQUFHO29CQUFDaUMsRUFBRSxFQUFFLENBQUM7MEdBQ1AxQix3RUFBZTt3QkFBQ08sS0FBSyxFQUFHLEdBQVEsT0FBTkEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJeEMsQ0FBQztJQUVELE1BQU0sNkVBQUVSLHNEQUFNO1FBQUNpQixPQUFPLEVBQUMsQ0FBTztrQkFBRUgsSUFBSTs7Ozs7O0FBQ3RDLENBQUM7R0EzQ0tQLElBQUk7O1FBRU9SLGtEQUFTO1FBQ1BLLDBEQUFVO1FBQ1JDLDREQUFZO1FBS1JGLHFFQUFxQjs7O0tBVHhDSSxJQUFJO0FBNkNWQSxJQUFJLENBQUNxQixlQUFlLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLO0lBQzdCLE1BQU0sQ0FBQyxDQUFDO1FBQ05yQixLQUFLLEVBQUVxQixLQUFLLENBQUNyQixLQUFLO0lBQ3BCLENBQUM7QUFDSCxDQUFDO0FBRUQsK0RBQWVWLHlEQUFjLENBQUNRLHFFQUFnQixFQUFFQyxJQUFJLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcm9vbXMvW3Rva2VuXS50c3g/NmEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVzc2FnZVNlY3Rpb25zXCI7XHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93cmFwcGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlRGVsZXRlUm9vbU11dGF0aW9uLFxyXG4gIHVzZU1lUXVlcnksXHJcbiAgdXNlUm9vbVF1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVVUlFMQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NyZWF0ZVVSUUxDbGllbnRcIjtcclxuXHJcbmNvbnN0IFJvb206IE5leHRQYWdlPHsgdG9rZW46IHN0cmluZyB9PiA9ICh7IHRva2VuIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW21lRGF0YV0gPSB1c2VNZVF1ZXJ5KCk7XHJcbiAgY29uc3QgW3Jvb21EYXRhXSA9IHVzZVJvb21RdWVyeSh7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBbLCBkZWxldGVSb29tXSA9IHVzZURlbGV0ZVJvb21NdXRhdGlvbigpO1xyXG4gIGxldCBib2R5ID0gbnVsbDtcclxuICBpZiAoIW1lRGF0YSkge1xyXG4gICAgYm9keSA9IDw+cGxzIGxvZ2luPC8+O1xyXG4gIH1cclxuICBpZiAocm9vbURhdGEuZmV0Y2hpbmcpIHtcclxuICB9XHJcbiAgaWYgKHJvb21EYXRhLmRhdGEpIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxXcmFwcGVyIHZhcmlhbnQ9XCJsYXJnZVwiPlxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0+XHJcbiAgICAgICAgICA8Qm94IGJvcmRlcj17XCIxcHhcIn0gcD17NH0+XHJcbiAgICAgICAgICAgIDxUZXh0PlJvb20gZGV0YWlsczwvVGV4dD5cclxuICAgICAgICAgICAgPFRleHQ+Um9vbSBOYW1lIDp7cm9vbURhdGEuZGF0YS5yb29tLm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBkZWxldGVSb29tKHsgaWQ6IHJvb21EYXRhLmRhdGEucm9vbS5pZCB9KTtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJyZWQuNDAwXCJ9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgZGVsZXRlIHJvb21cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICA8Qm94IG10PXs0fT5cclxuICAgICAgICAgIDxNZXNzYWdlU2VjdGlvbnMgdG9rZW49e2Ake3Rva2VufWB9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExheW91dCB2YXJpYW50PVwibGFyZ2VcIj57Ym9keX08L0xheW91dD47XHJcbn07XHJcblxyXG5Sb29tLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHF1ZXJ5LnRva2VuIGFzIHN0cmluZyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVVJRTENsaWVudCkoUm9vbSk7XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiVGV4dCIsIndpdGhVcnFsQ2xpZW50IiwidXNlUm91dGVyIiwiTGF5b3V0IiwiTWVzc2FnZVNlY3Rpb25zIiwiV3JhcHBlciIsInVzZURlbGV0ZVJvb21NdXRhdGlvbiIsInVzZU1lUXVlcnkiLCJ1c2VSb29tUXVlcnkiLCJjcmVhdGVVUlFMQ2xpZW50IiwiUm9vbSIsInRva2VuIiwicm91dGVyIiwibWVEYXRhIiwidmFyaWFibGVzIiwicm9vbURhdGEiLCJkZWxldGVSb29tIiwiYm9keSIsImZldGNoaW5nIiwiZGF0YSIsInZhcmlhbnQiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsInAiLCJyb29tIiwibmFtZSIsIm9uQ2xpY2siLCJpZCIsInB1c2giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtdCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/rooms/[token].tsx\n");

/***/ })

});