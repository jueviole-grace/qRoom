"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar fonts = {\n    mono: \"'Menlo', monospace\"\n};\nvar config = {\n    initialColorMode: 'l',\n    useSystemColorMode: true\n};\nvar breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.createBreakpoints)({\n    sm: '40em',\n    md: '52em',\n    lg: '64em',\n    xl: '80em'\n});\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    colors: {\n        black: '#16161D'\n    },\n    fonts: fonts,\n    breakpoints: breakpoints\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMkQ7QUFDRDtBQUUxRCxHQUFLLENBQUNFLEtBQUssR0FBRyxDQUFDO0lBQUNDLElBQUksRUFBRyxDQUFrQjtBQUFFLENBQUM7QUFFNUMsR0FBSyxDQUFDQyxNQUFNLEdBQWUsQ0FBQztJQUMxQkMsZ0JBQWdCLEVBQUUsQ0FBRztJQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtBQUMxQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxXQUFXLEdBQUdOLHlFQUFpQixDQUFDLENBQUM7SUFDckNPLEVBQUUsRUFBRSxDQUFNO0lBQ1ZDLEVBQUUsRUFBRSxDQUFNO0lBQ1ZDLEVBQUUsRUFBRSxDQUFNO0lBQ1ZDLEVBQUUsRUFBRSxDQUFNO0FBQ1osQ0FBQztBQUVELEdBQUssQ0FBQ0MsS0FBSyxHQUFHWiw2REFBVyxDQUFDLENBQUM7SUFDekJJLE1BQU0sRUFBTkEsTUFBTTtJQUNOUyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxLQUFLLEVBQUUsQ0FBUztJQUNsQixDQUFDO0lBQ0RaLEtBQUssRUFBTEEsS0FBSztJQUNMSyxXQUFXLEVBQVhBLFdBQVc7QUFDYixDQUFDO0FBRUQsK0RBQWVLLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lLnRzeD83YzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lLCBUaGVtZUNvbmZpZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVCcmVha3BvaW50cyB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IGZvbnRzID0geyBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9XG5cbmNvbnN0IGNvbmZpZzpUaGVtZUNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2wnLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG59XG5cbmNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoe1xuICBzbTogJzQwZW0nLFxuICBtZDogJzUyZW0nLFxuICBsZzogJzY0ZW0nLFxuICB4bDogJzgwZW0nLFxufSlcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbmZpZywgXG4gIGNvbG9yczoge1xuICAgIGJsYWNrOiAnIzE2MTYxRCcsXG4gIH0sXG4gIGZvbnRzLFxuICBicmVha3BvaW50cyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJjcmVhdGVCcmVha3BvaW50cyIsImZvbnRzIiwibW9ubyIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIiwidGhlbWUiLCJjb2xvcnMiLCJibGFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ })

});