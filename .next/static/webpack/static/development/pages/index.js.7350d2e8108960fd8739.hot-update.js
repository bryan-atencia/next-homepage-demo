webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout.js */ \"./components/layout.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_home_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Header.js */ \"./components/home/Header.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])(function (theme) {\n  return {\n    image: {\n      background: \"grey\",\n      height: \"250px\",\n      width: \"250px\",\n      borderRadius: \"50%\",\n      backgroundColor: \"#ffe5b4\"\n    },\n    actionText: {\n      textTransform: \"uppercase\",\n      textAlign: \"center\",\n      borderBottom: \"1px solid\",\n      width: \"fit-content\",\n      margin: \"10px auto\",\n      color: \"black\"\n    },\n    actionLink: {\n      color: \"black\",\n      textDecoration: \"none\"\n    },\n    mainGrid: {\n      maxWidth: \"775px\",\n      margin: \"50px 0\"\n    }\n  };\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var classes = useStyles(props);\n  var data = props.data;\n  console.log(data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Grid\"], {\n    className: classes.texting\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Header_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    data: data.homebanner,\n    classData: classes\n  })));\n}, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImltYWdlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiYWN0aW9uVGV4dCIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJib3JkZXJCb3R0b20iLCJtYXJnaW4iLCJjb2xvciIsImFjdGlvbkxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1haW5HcmlkIiwibWF4V2lkdGgiLCJwcm9wcyIsImNsYXNzZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRleHRpbmciLCJob21lYmFubmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUMsTUFETjtBQUVMQyxZQUFNLEVBQUMsT0FGRjtBQUdMQyxXQUFLLEVBQUMsT0FIRDtBQUlMQyxrQkFBWSxFQUFDLEtBSlI7QUFLTEMscUJBQWUsRUFBQztBQUxYLEtBRGdDO0FBUXZDQyxjQUFVLEVBQUU7QUFDVkMsbUJBQWEsRUFBQyxXQURKO0FBRVZDLGVBQVMsRUFBQyxRQUZBO0FBR1ZDLGtCQUFZLEVBQUMsV0FISDtBQUlWTixXQUFLLEVBQUMsYUFKSTtBQUtWTyxZQUFNLEVBQUMsV0FMRztBQU1WQyxXQUFLLEVBQUM7QUFOSSxLQVIyQjtBQWdCdkNDLGNBQVUsRUFBRTtBQUNWRCxXQUFLLEVBQUMsT0FESTtBQUVWRSxvQkFBYyxFQUFDO0FBRkwsS0FoQjJCO0FBb0J2Q0MsWUFBUSxFQUFFO0FBQ1JDLGNBQVEsRUFBQyxPQUREO0FBRVJMLFlBQU0sRUFBQztBQUZDO0FBcEI2QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUEwQmUsNEVBQUNNLEtBQUQsRUFBVztBQUFBOztBQUV2QixNQUFNQyxPQUFPLEdBQUdwQixTQUFTLENBQUNtQixLQUFELENBQXpCO0FBRnVCLE1BR2ZFLElBSGUsR0FHTkYsS0FITSxDQUdmRSxJQUhlO0FBSXZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLHNCQUFPLDJEQUFDLDZEQUFELHFCQUNJLDJEQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFHRCxPQUFPLENBQUNJO0FBQTFCLGtCQUNBLDJEQUFDLGtFQUFEO0FBQVEsUUFBSSxFQUFFSCxJQUFJLENBQUNJLFVBQW5CO0FBQStCLGFBQVMsRUFBRUw7QUFBMUMsSUFEQSxDQURKLENBQVA7QUFNRixDQVhEO0FBQUEsVUFFbUJwQixTQUZuQjtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcblxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5cbmltcG9ydCB7IGdldEhvbWUgfSBmcm9tIFwiLi4vZnVuY3Rpb25zXCJcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL0hlYWRlci5qc1wiXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBpbWFnZToge1xuICAgIGJhY2tncm91bmQ6XCJncmV5XCIsXG4gICAgaGVpZ2h0OlwiMjUwcHhcIixcbiAgICB3aWR0aDpcIjI1MHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOlwiNTAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZTViNFwiXG4gIH0sXG4gIGFjdGlvblRleHQ6IHtcbiAgICB0ZXh0VHJhbnNmb3JtOlwidXBwZXJjYXNlXCIsXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4gICAgYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkXCIsXG4gICAgd2lkdGg6XCJmaXQtY29udGVudFwiLFxuICAgIG1hcmdpbjpcIjEwcHggYXV0b1wiLFxuICAgIGNvbG9yOlwiYmxhY2tcIlxuICB9LFxuICBhY3Rpb25MaW5rOiB7XG4gICAgY29sb3I6XCJibGFja1wiLFxuICAgIHRleHREZWNvcmF0aW9uOlwibm9uZVwiXG4gIH0sXG4gIG1haW5HcmlkOiB7XG4gICAgbWF4V2lkdGg6XCI3NzVweFwiLFxuICAgIG1hcmdpbjpcIjUwcHggMFwiXG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcblxuICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcylcbiAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHNcbiAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICByZXR1cm4gPExheW91dD5cbiAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXsgY2xhc3Nlcy50ZXh0aW5nIH0+XG4gICAgICAgICAgICAgIDxIZWFkZXIgZGF0YT17ZGF0YS5ob21lYmFubmVyfSBjbGFzc0RhdGE9e2NsYXNzZXN9IC8+IFxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0xheW91dD5cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZmFsbGJhY2s6IHRydWUsXG4gICAgICBkYXRhOiBhd2FpdCBnZXRIb21lKClcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})