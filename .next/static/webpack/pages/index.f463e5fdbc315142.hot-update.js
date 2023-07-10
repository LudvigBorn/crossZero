"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/game.js":
/*!*********************************!*\
  !*** ./components/game/game.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-cell */ \"./components/game/game-cell.jsx\");\n/* harmony import */ var _game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.module.css */ \"./components/game/game.module.css\");\n/* harmony import */ var _game_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    _s();\n    const { cells, currentStep, winnerSequence, handleCellClick, handleResetClick, winnerSymbol, isDraw } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_3__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_info__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                winnerSymbol: winnerSymbol,\n                isDraw: isDraw,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"/Users/ludvigborn/Projects/03.07.23/cross-zero/components/game/game.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col \",\n                children: cells.map((symbol, index)=>{\n                    var _winnerSequence;\n                    const isWinner = (_winnerSequence = winnerSequence) === null || _winnerSequence === void 0 ? void 0 : _winnerSequence.includes(index);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_cell__WEBPACK_IMPORTED_MODULE_1__.GameCell, {\n                        symbol: symbol,\n                        isWinner: isWinner,\n                        onClick: ()=>handleCellClick(index)\n                    }, index, false, {\n                        fileName: \"/Users/ludvigborn/Projects/03.07.23/cross-zero/components/game/game.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ludvigborn/Projects/03.07.23/cross-zero/components/game/game.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_game_module_css__WEBPACK_IMPORTED_MODULE_4___default().reset),\n                onClick: handleResetClick,\n                children: \"Сбросить\"\n            }, void 0, false, {\n                fileName: \"/Users/ludvigborn/Projects/03.07.23/cross-zero/components/game/game.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ludvigborn/Projects/03.07.23/cross-zero/components/game/game.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"smwIE29fBzotKNUiuD1jUFbOMzs=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_3__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFDRDtBQUNVO0FBRXpDLFNBQVNJOztJQUNkLE1BQU0sRUFDSkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLGNBQWMsRUFDZEMsZUFBZSxFQUNmQyxnQkFBZ0IsRUFDaEJDLFlBQVksRUFDWkMsTUFBTSxFQUNQLEdBQUdSLDZEQUFZQTtJQUVoQixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLGdEQUFRQTtnQkFDUFMsY0FBY0E7Z0JBQ2RDLFFBQVFBO2dCQUNSTCxhQUFhQTs7Ozs7OzBCQUVmLDhEQUFDTTtnQkFBSUMsV0FBVTswQkFDWlIsTUFBTVMsR0FBRyxDQUFDLENBQUNDLFFBQVFDO3dCQUNEVDtvQkFBakIsTUFBTVUsWUFBV1Ysa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCVyxRQUFRLENBQUNGO29CQUMxQyxxQkFDRSw4REFBQ2hCLGdEQUFRQTt3QkFFUGUsUUFBUUE7d0JBQ1JFLFVBQVVBO3dCQUNWRSxTQUFTLElBQU1YLGdCQUFnQlE7dUJBSDFCQTs7Ozs7Z0JBTVg7Ozs7OzswQkFFRiw4REFBQ0k7Z0JBQU9QLFdBQVdYLCtEQUFlO2dCQUFFaUIsU0FBU1Y7MEJBQWtCOzs7Ozs7Ozs7Ozs7QUFLckU7R0FwQ2dCTDs7UUFTVkQseURBQVlBOzs7S0FURkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUuanM/NzA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQ2VsbCB9IGZyb20gXCIuL2dhbWUtY2VsbFwiO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tIFwiLi9nYW1lLWluZm9cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYW1lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tIFwiLi91c2UtZ2FtZS1zdGF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3Qge1xuICAgIGNlbGxzLFxuICAgIGN1cnJlbnRTdGVwLFxuICAgIHdpbm5lclNlcXVlbmNlLFxuICAgIGhhbmRsZUNlbGxDbGljayxcbiAgICBoYW5kbGVSZXNldENsaWNrLFxuICAgIHdpbm5lclN5bWJvbCxcbiAgICBpc0RyYXcsXG4gIH0gPSB1c2VHYW1lU3RhdGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTQwJz5cbiAgICAgIDxHYW1lSW5mb1xuICAgICAgICB3aW5uZXJTeW1ib2w9e3dpbm5lclN5bWJvbH1cbiAgICAgICAgaXNEcmF3PXtpc0RyYXd9XG4gICAgICAgIGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCAnPlxuICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNXaW5uZXIgPSB3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgc3ltYm9sPXtzeW1ib2x9XG4gICAgICAgICAgICAgIGlzV2lubmVyPXtpc1dpbm5lcn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGluZGV4KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbXCJyZXNldFwiXX0gb25DbGljaz17aGFuZGxlUmVzZXRDbGlja30+XG4gICAgICAgINCh0LHRgNC+0YHQuNGC0YxcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdhbWVDZWxsIiwiR2FtZUluZm8iLCJzdHlsZXMiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lIiwiY2VsbHMiLCJjdXJyZW50U3RlcCIsIndpbm5lclNlcXVlbmNlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaGFuZGxlUmVzZXRDbGljayIsIndpbm5lclN5bWJvbCIsImlzRHJhdyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInN5bWJvbCIsImluZGV4IiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game.js\n"));

/***/ })

});