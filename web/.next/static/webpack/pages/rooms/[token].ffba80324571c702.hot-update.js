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

/***/ "./src/components/messageSections.tsx":
/*!********************************************!*\
  !*** ./src/components/messageSections.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageSections\": function() { return /* binding */ MessageSections; }\n/* harmony export */ });\n/* harmony import */ var D_Programming_Programming_github_QRoom_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Programming_Programming_github_QRoom_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Programming_Programming_github_QRoom_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _inputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputField */ \"./src/components/inputField.tsx\");\n/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messageBox */ \"./src/components/messageBox.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MessageSections = function(param1) {\n    var token = param1.token;\n    _s();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useMeQuery)(), 1), meData = ref[0];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useCreateMessageMutation)(), 2), newMessage = ref1[1];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useMessagesByRoomQuery)({\n        variables: {\n            token: token\n        }\n    }), 1), data = ref2[0].data;\n    var ref3 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useUserByIdMutation)(), 2), getUser = ref3[1];\n    var body = null;\n    if (!(data === null || data === void 0 ? void 0 : data.messagesByRoom)) {} else {\n        var _this1 = _this;\n        body = data.messagesByRoom.map(function(object) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_messageBox__WEBPACK_IMPORTED_MODULE_6__.MessageBox, {\n                author: object.owner,\n                variant: object.owner === meData.data.me.username ? 'me' : 'they',\n                children: object.message\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                lineNumber: 28,\n                columnNumber: 21\n            }, _this1));\n        });\n    }\n    var lastMessage = document.return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        flexDirection: 'column',\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                flex: '0.9',\n                backgroundColor: 'green.100',\n                p: 2,\n                overflowX: 'hidden',\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    id: \"holder\",\n                    height: '60vh',\n                    p: 4,\n                    children: body\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                flex: '0.1',\n                p: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n                    initialValues: {\n                        text: \"\"\n                    },\n                    onSubmit: function() {\n                        var _ref = _asyncToGenerator(D_Programming_Programming_github_QRoom_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, param) {\n                            var setErrors, message;\n                            return D_Programming_Programming_github_QRoom_qRoom_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        setErrors = param.setErrors;\n                                        if (!(values.text !== ' ')) {\n                                            _ctx.next = 11;\n                                            break;\n                                        }\n                                        if (!values.text.trim()) {\n                                            _ctx.next = 9;\n                                            break;\n                                        }\n                                        _ctx.next = 5;\n                                        return newMessage({\n                                            token: token,\n                                            text: values.text\n                                        });\n                                    case 5:\n                                        message = _ctx.sent;\n                                        window.scrollTo(0, document.getElementById('holder').scrollHeight);\n                                        _ctx.next = 10;\n                                        break;\n                                    case 9:\n                                        {\n                                            setErrors({\n                                                text: \"Cannot be empty\"\n                                            });\n                                        }\n                                    case 10:\n                                        values.text = \"\";\n                                    case 11:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee);\n                        }));\n                        return function(values, _) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                            alignContent: 'center',\n                            justifyContent: 'center',\n                            flexDirection: 'row',\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_inputField__WEBPACK_IMPORTED_MODULE_5__.InputField, {\n                                    name: \"text\",\n                                    placeholder: \"text\",\n                                    label: \"\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    type: \"submit\",\n                                    ml: 2,\n                                    mt: 2,\n                                    p: 4,\n                                    backgroundColor: 'teal',\n                                    variant: 'ghost',\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming\\\\Programming\\\\github QRoom\\\\qRoom\\\\web\\\\src\\\\components\\\\messageSections.tsx\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, _this));\n};\n_s(MessageSections, \"Pp2QhXslhVXwK9MREKiFxeuR5Nw=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useCreateMessageMutation,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useMessagesByRoomQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_4__.useUserByIdMutation\n    ];\n});\n_c = MessageSections;\nvar _c;\n$RefreshReg$(_c, \"MessageSections\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlU2VjdGlvbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNmO0FBRVo7QUFDcUc7QUFDckY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDLEdBQUssQ0FBQ1ksZUFBZSxHQUFvQixRQUFRLFNBQUssQ0FBQztRQUFaQyxLQUFLLFVBQUxBLEtBQUs7O0lBQ3JELEdBQUssQ0FBWU4sR0FBWSxrQkFBWkEsOERBQVUsUUFBcEJPLE1BQU0sR0FBSVAsR0FBWTtJQUMzQixHQUFLLENBQWtCRCxJQUEwQixrQkFBMUJBLDRFQUF3QixRQUF0Q1MsVUFBVSxHQUFJVCxJQUEwQjtJQUNqRCxHQUFLLENBQVlFLElBSWYsa0JBSmVBLDBFQUFzQixDQUFDLENBQUM7UUFDdkNRLFNBQVMsRUFBQyxDQUFDO1lBQ1RILEtBQUssRUFBQ0EsS0FBSztRQUNiLENBQUM7SUFDSCxDQUFDLE9BSk9JLElBQUksR0FBS1QsSUFJZixJQUpNUyxJQUFJO0lBS1osR0FBSyxDQUFlUixJQUFxQixrQkFBckJBLHVFQUFtQixRQUE5QlMsT0FBTyxHQUFJVCxJQUFxQjtJQUN6QyxHQUFHLENBQUNVLElBQUksR0FBRyxJQUFJO0lBQ2YsRUFBRSxJQUFFRixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFFRyxjQUFjLEdBQUMsQ0FBQyxDQUV6QixNQUFJLENBQUM7O1FBQ0hELElBQUksR0FDREYsSUFBSSxDQUFDRyxjQUFjLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO1lBQ25DLE1BQU0sNkVBQUdYLG1EQUFVO2dCQUFDWSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0UsS0FBSztnQkFBRUMsT0FBTyxFQUFFSCxNQUFNLENBQUNFLEtBQUssS0FBS1YsTUFBTSxDQUFDRyxJQUFJLENBQUNTLEVBQUUsQ0FBQ0MsUUFBUSxHQUFHLENBQUksTUFBRyxDQUFNOzBCQUFHTCxNQUFNLENBQUNNLE9BQU87Ozs7OztRQUM5SCxDQUFDO0lBRVAsQ0FBQztJQUNELEdBQUcsQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQzFCQyxNQUFNLDZFQUNIN0Isa0RBQUk7UUFBQzhCLGFBQWEsRUFBRSxDQUFROzt3RkFDMUJoQyxpREFBRztnQkFBQ2lDLElBQUksRUFBRSxDQUFLO2dCQUFFQyxlQUFlLEVBQUUsQ0FBVztnQkFBRUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLFNBQVMsRUFBRSxDQUFRO3NHQUN0RXBDLGlEQUFHO29CQUFDcUMsRUFBRSxFQUFDLENBQVE7b0JBQUNDLE1BQU0sRUFBRSxDQUFNO29CQUFFSCxDQUFDLEVBQUUsQ0FBQzs4QkFDbkNoQixJQUFJOzs7Ozs7Ozs7Ozt3RkFHUG5CLGlEQUFHO2dCQUFDaUMsSUFBSSxFQUFFLENBQUs7Z0JBQUVFLENBQUMsRUFBRSxDQUFDO3NHQUNuQi9CLDBDQUFNO29CQUNQbUMsYUFBYSxFQUFFLENBQUNDO3dCQUFBQSxJQUFJLEVBQUMsQ0FBRTtvQkFBQSxDQUFDO29CQUN4QkMsUUFBUTtpTkFDTixRQUFRLFNBQURDLE1BQU0sU0FBa0IsQ0FBQztnQ0FBaEJDLFNBQVMsRUFHYmYsT0FBTzs7Ozt3Q0FISGUsU0FBUyxTQUFUQSxTQUFTOzhDQUNwQkQsTUFBTSxDQUFDRixJQUFJLEtBQUssQ0FBRzs7Ozs2Q0FDZEUsTUFBTSxDQUFDRixJQUFJLENBQUVJLElBQUk7Ozs7OytDQUNDN0IsVUFBVSxDQUFDLENBQUNGOzRDQUFBQSxLQUFLLEVBQUNBLEtBQUs7NENBQUUyQixJQUFJLEVBQUNFLE1BQU0sQ0FBQ0YsSUFBSTt3Q0FBQSxDQUFDOzt3Q0FBMURaLE9BQU87d0NBQ2JpQixNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUVoQixRQUFRLENBQUNpQixjQUFjLENBQUMsQ0FBUSxTQUFFQyxZQUFZOzs7O3dDQUUvRCxDQUFDOzRDQUNITCxTQUFTLENBQUMsQ0FBQ0g7Z0RBQUFBLElBQUksRUFBQyxDQUFpQjs0Q0FBQSxDQUFDO3dDQUNwQyxDQUFDOzt3Q0FDREUsTUFBTSxDQUFDRixJQUFJLEdBQUcsQ0FBRTs7Ozs7O3dCQUVwQixDQUFDO3dDQVhNRSxNQUFNOzs7OzBHQWNadkMsd0NBQUk7OEdBQ0FELGtEQUFJOzRCQUFDK0MsWUFBWSxFQUFFLENBQVE7NEJBQUdDLGNBQWMsRUFBRSxDQUFROzRCQUFFbEIsYUFBYSxFQUFFLENBQUs7OzRHQUM5RXRCLG1EQUFVO29DQUNYeUMsSUFBSSxFQUFDLENBQU07b0NBQ1hDLFdBQVcsRUFBQyxDQUFNO29DQUNsQkMsS0FBSyxFQUFDLENBQUU7Ozs7Ozs0R0FFTHBELG9EQUFNO29DQUFDcUQsSUFBSSxFQUFDLENBQVE7b0NBQUNDLEVBQUUsRUFBRSxDQUFDO29DQUFFQyxFQUFFLEVBQUUsQ0FBQztvQ0FBRXJCLENBQUMsRUFBRSxDQUFDO29DQUFFRCxlQUFlLEVBQUUsQ0FBTTtvQ0FBRVQsT0FBTyxFQUFFLENBQU87OENBQUUsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pHLENBQUM7R0EzRFliLGVBQWU7O1FBQ1RMLDBEQUFVO1FBQ0ZELHdFQUF3QjtRQUM5QkUsc0VBQXNCO1FBS25CQyxtRUFBbUI7OztLQVI5QkcsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlU2VjdGlvbnMudHN4PzVmM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRXhhY3QsIHVzZUNyZWF0ZU1lc3NhZ2VNdXRhdGlvbiwgdXNlTWVRdWVyeSwgdXNlTWVzc2FnZXNCeVJvb21RdWVyeSwgdXNlVXNlckJ5SWRNdXRhdGlvbn0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSAnLi9pbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgTWVzc2FnZUJveCB9IGZyb20gJy4vbWVzc2FnZUJveCc7XHJcblxyXG5pbnRlcmZhY2UgdG9rZW57XHJcbiAgdG9rZW46c3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlU2VjdGlvbnM6IFJlYWN0LkZDPHRva2VuPiA9ICh7dG9rZW59KSA9PiB7XHJcbiAgY29uc3QgW21lRGF0YV0gPSB1c2VNZVF1ZXJ5KClcclxuICAgIGNvbnN0IFssIG5ld01lc3NhZ2VdID0gdXNlQ3JlYXRlTWVzc2FnZU11dGF0aW9uKClcclxuICAgIGNvbnN0IFt7ZGF0YX1dID0gdXNlTWVzc2FnZXNCeVJvb21RdWVyeSh7XHJcbiAgICAgIHZhcmlhYmxlczp7XHJcbiAgICAgICAgdG9rZW46dG9rZW5cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IFssIGdldFVzZXJdID0gdXNlVXNlckJ5SWRNdXRhdGlvbigpXHJcbiAgICBsZXQgYm9keSA9IG51bGxcclxuICAgIGlmKCFkYXRhPy5tZXNzYWdlc0J5Um9vbSl7XHJcbiAgICAgIFxyXG4gICAgfWVsc2V7XHJcbiAgICAgICBib2R5ID0gKFxyXG4gICAgICAgICAgZGF0YS5tZXNzYWdlc0J5Um9vbS5tYXAoKG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxNZXNzYWdlQm94IGF1dGhvcj17b2JqZWN0Lm93bmVyfSB2YXJpYW50PXtvYmplY3Qub3duZXIgPT09IG1lRGF0YS5kYXRhLm1lLnVzZXJuYW1lID8gJ21lJyA6ICd0aGV5J30+e29iamVjdC5tZXNzYWdlfTwvTWVzc2FnZUJveD4pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgKVxyXG4gICAgfVxyXG4gICAgdmFyIGxhc3RNZXNzYWdlID0gZG9jdW1lbnQuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPXsnY29sdW1uJ30+XHJcbiAgICAgICAgPEJveCBmbGV4PXsnMC45J30gYmFja2dyb3VuZENvbG9yPXsnZ3JlZW4uMTAwJ30gcD17Mn0gb3ZlcmZsb3dYPXsnaGlkZGVuJ30+XHJcbiAgICAgICAgICA8Qm94IGlkPSdob2xkZXInIGhlaWdodD17JzYwdmgnfSBwPXs0fT5cclxuICAgICAgICAgICB7Ym9keX0gXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IGZsZXg9eycwLjEnfSBwPXsyfT5cclxuICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3t0ZXh0OlwiXCJ9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9e1xyXG4gICAgICAgICAgICBhc3luYyAodmFsdWVzLCB7c2V0RXJyb3JzfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHZhbHVlcy50ZXh0ICE9PSAnICcpe1xyXG4gICAgICAgICAgICAgICAgaWYoISEodmFsdWVzLnRleHQpLnRyaW0oKSl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBuZXdNZXNzYWdlKHt0b2tlbjp0b2tlbiwgdGV4dDp2YWx1ZXMudGV4dH0pXHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9sZGVyJykuc2Nyb2xsSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzKHt0ZXh0OlwiQ2Fubm90IGJlIGVtcHR5XCJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnRleHQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ25Db250ZW50PXsnY2VudGVyJ30gIGp1c3RpZnlDb250ZW50PXsnY2VudGVyJ30gZmxleERpcmVjdGlvbj17J3Jvdyd9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dEZpZWxkIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ndGV4dCdcclxuICAgICAgICAgICAgICBsYWJlbD0nJ1xyXG4gICAgICAgICAgICAgIC8gPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIG1sPXsyfSBtdD17Mn0gcD17NH0gYmFja2dyb3VuZENvbG9yPXsndGVhbCd9IHZhcmlhbnQ9eydnaG9zdCd9PlNlbmQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiRmxleCIsIkZvcm0iLCJGb3JtaWsiLCJSZWFjdCIsInVzZUNyZWF0ZU1lc3NhZ2VNdXRhdGlvbiIsInVzZU1lUXVlcnkiLCJ1c2VNZXNzYWdlc0J5Um9vbVF1ZXJ5IiwidXNlVXNlckJ5SWRNdXRhdGlvbiIsIklucHV0RmllbGQiLCJNZXNzYWdlQm94IiwiTWVzc2FnZVNlY3Rpb25zIiwidG9rZW4iLCJtZURhdGEiLCJuZXdNZXNzYWdlIiwidmFyaWFibGVzIiwiZGF0YSIsImdldFVzZXIiLCJib2R5IiwibWVzc2FnZXNCeVJvb20iLCJtYXAiLCJvYmplY3QiLCJhdXRob3IiLCJvd25lciIsInZhcmlhbnQiLCJtZSIsInVzZXJuYW1lIiwibWVzc2FnZSIsImxhc3RNZXNzYWdlIiwiZG9jdW1lbnQiLCJyZXR1cm4iLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJhY2tncm91bmRDb2xvciIsInAiLCJvdmVyZmxvd1giLCJpZCIsImhlaWdodCIsImluaXRpYWxWYWx1ZXMiLCJ0ZXh0Iiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJ0cmltIiwid2luZG93Iiwic2Nyb2xsVG8iLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEhlaWdodCIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibmFtZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJ0eXBlIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/messageSections.tsx\n");

/***/ })

});