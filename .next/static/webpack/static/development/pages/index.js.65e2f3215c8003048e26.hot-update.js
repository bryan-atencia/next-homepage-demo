webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/CelebrityBanner.js":
/*!********************************************!*\
  !*** ./components/home/CelebrityBanner.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaG9tZS9DZWxlYnJpdHlCYW5uZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/CelebrityBanner.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_home_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/Header */ \"./components/home/Header.js\");\n/* harmony import */ var _components_home_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/Divider */ \"./components/home/Divider.js\");\n/* harmony import */ var _components_home_TrendBanners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/TrendBanners */ \"./components/home/TrendBanners.js\");\n/* harmony import */ var _components_home_VideoBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/VideoBanner */ \"./components/home/VideoBanner.js\");\n/* harmony import */ var _components_home_OptionsBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/OptionsBanner */ \"./components/home/OptionsBanner.js\");\n/* harmony import */ var _components_home_CelebrityBannerHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/CelebrityBannerHeader */ \"./components/home/CelebrityBannerHeader.js\");\n/* harmony import */ var _components_home_CelebrityBanner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home/CelebrityBanner */ \"./components/home/CelebrityBanner.js\");\n/* harmony import */ var _components_home_CelebrityBanner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_home_CelebrityBanner__WEBPACK_IMPORTED_MODULE_13__);\nvar _s = $RefreshSig$();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(function (theme) {\n  return {\n    homePage: {\n      // maxWidth: '1180px',\n      margin: '0 auto',\n      overflow: 'hidden'\n    },\n    homePageMainBodyGrid: _defineProperty({\n      padding: '0 40px'\n    }, theme.breakpoints.down('sm'), {\n      padding: '0'\n    })\n  };\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var classes = useStyles(props);\n  var _props$data = props.data,\n      homebanner = _props$data.homebanner,\n      trendbanners = _props$data.trendbanners,\n      videobanner = _props$data.videobanner,\n      optionbanners = _props$data.optionbanners,\n      options = _props$data.options,\n      celebritybanners = _props$data.celebritybanners,\n      mediabanners = _props$data.mediabanners;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    data: homebanner\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    margin: \"50\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Grid\"], {\n    className: classes.homePageMainBodyGrid\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_TrendBanners__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    data: trendbanners,\n    classData: classes\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    margin: \"50\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_VideoBanner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    data: videobanner,\n    classData: classes\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    margin: \"50\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_OptionsBanner__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    data: optionbanners,\n    classData: classes\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    margin: \"50\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_CelebrityBannerHeader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    classData: classes\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_Divider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    margin: \"23\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_home_CelebrityBanner__WEBPACK_IMPORTED_MODULE_13___default.a, {\n    data: celebrityBanners,\n    classData: classes,\n    app: app\n  }))));\n}, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImhvbWVQYWdlIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJob21lUGFnZU1haW5Cb2R5R3JpZCIsInBhZGRpbmciLCJicmVha3BvaW50cyIsImRvd24iLCJwcm9wcyIsImNsYXNzZXMiLCJkYXRhIiwiaG9tZWJhbm5lciIsInRyZW5kYmFubmVycyIsInZpZGVvYmFubmVyIiwib3B0aW9uYmFubmVycyIsIm9wdGlvbnMiLCJjZWxlYnJpdHliYW5uZXJzIiwibWVkaWFiYW5uZXJzIiwiY2VsZWJyaXR5QmFubmVycyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFlBQVEsRUFBRTtBQUNSO0FBQ0FDLFlBQU0sRUFBRSxRQUZBO0FBR1JDLGNBQVEsRUFBRTtBQUhGLEtBRDZCO0FBTXZDQyx3QkFBb0I7QUFDbEJDLGFBQU8sRUFBRTtBQURTLE9BRWpCTCxLQUFLLENBQUNNLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRmlCLEVBRWM7QUFDOUJGLGFBQU8sRUFBRTtBQURxQixLQUZkO0FBTm1CLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQWNlLDRFQUFDRyxLQUFELEVBQVc7QUFBQTs7QUFFdkIsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLENBQUNVLEtBQUQsQ0FBekI7QUFGdUIsb0JBYW5CQSxLQWJtQixDQUlyQkUsSUFKcUI7QUFBQSxNQUtuQkMsVUFMbUIsZUFLbkJBLFVBTG1CO0FBQUEsTUFNbkJDLFlBTm1CLGVBTW5CQSxZQU5tQjtBQUFBLE1BT25CQyxXQVBtQixlQU9uQkEsV0FQbUI7QUFBQSxNQVFuQkMsYUFSbUIsZUFRbkJBLGFBUm1CO0FBQUEsTUFTbkJDLE9BVG1CLGVBU25CQSxPQVRtQjtBQUFBLE1BVW5CQyxnQkFWbUIsZUFVbkJBLGdCQVZtQjtBQUFBLE1BV25CQyxZQVhtQixlQVduQkEsWUFYbUI7QUFldkIsc0JBQU8sMkRBQUMsMERBQUQscUJBQ0ksMkRBQUMsc0RBQUQscUJBQ0UsMkRBQUMsK0RBQUQ7QUFBUSxRQUFJLEVBQUdOO0FBQWYsSUFERixlQUVFLDJEQUFDLGdFQUFEO0FBQVMsVUFBTSxFQUFDO0FBQWhCLElBRkYsZUFHRSwyREFBQyxzREFBRDtBQUFNLGFBQVMsRUFBRUYsT0FBTyxDQUFDTDtBQUF6QixrQkFDRSwyREFBQyxxRUFBRDtBQUFjLFFBQUksRUFBRVEsWUFBcEI7QUFBbUMsYUFBUyxFQUFFSDtBQUE5QyxJQURGLGVBRUUsMkRBQUMsZ0VBQUQ7QUFBUyxVQUFNLEVBQUM7QUFBaEIsSUFGRixlQUdFLDJEQUFDLG9FQUFEO0FBQWEsUUFBSSxFQUFFSSxXQUFuQjtBQUFnQyxhQUFTLEVBQUVKO0FBQTNDLElBSEYsZUFJRSwyREFBQyxnRUFBRDtBQUFTLFVBQU0sRUFBQztBQUFoQixJQUpGLGVBS0UsMkRBQUMsdUVBQUQ7QUFBZSxRQUFJLEVBQUVLLGFBQXJCO0FBQW9DLGFBQVMsRUFBRUw7QUFBL0MsSUFMRixlQU1FLDJEQUFDLGdFQUFEO0FBQVMsVUFBTSxFQUFDO0FBQWhCLElBTkYsZUFPRSwyREFBQywrRUFBRDtBQUF1QixhQUFTLEVBQUVBO0FBQWxDLElBUEYsZUFRRSwyREFBQyxnRUFBRDtBQUFTLFVBQU0sRUFBQztBQUFoQixJQVJGLGVBU0UsMkRBQUMsd0VBQUQ7QUFBaUIsUUFBSSxFQUFFUyxnQkFBdkI7QUFBeUMsYUFBUyxFQUFFVCxPQUFwRDtBQUE2RCxPQUFHLEVBQUVVO0FBQWxFLElBVEYsQ0FIRixDQURKLENBQVA7QUFrQkYsQ0FqQ0Q7QUFBQSxVQUVtQnJCLFNBRm5CO0FBQUEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcblxuaW1wb3J0IHsgZ2V0SG9tZSB9IGZyb20gXCIuLi9mdW5jdGlvbnNcIlxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL0hlYWRlclwiXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL0RpdmlkZXJcIlxuaW1wb3J0IFRyZW5kQmFubmVycyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL1RyZW5kQmFubmVyc1wiXG5pbXBvcnQgVmlkZW9CYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9WaWRlb0Jhbm5lclwiXG5pbXBvcnQgT3B0aW9uc0Jhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL09wdGlvbnNCYW5uZXJcIlxuaW1wb3J0IENlbGVicml0eUJhbm5lckhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL0NlbGVicml0eUJhbm5lckhlYWRlclwiXG5pbXBvcnQgQ2VsZWJyaXR5QmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvQ2VsZWJyaXR5QmFubmVyXCJcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGhvbWVQYWdlOiB7XG4gICAgLy8gbWF4V2lkdGg6ICcxMTgwcHgnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGhvbWVQYWdlTWFpbkJvZHlHcmlkOiB7XG4gICAgcGFkZGluZzogJzAgNDBweCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMCdcbiAgICB9XG4gIH1cbn0pKVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcblxuICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcylcbiAgIGNvbnN0IHtcbiAgICAgZGF0YToge1xuICAgICAgIGhvbWViYW5uZXIsXG4gICAgICAgdHJlbmRiYW5uZXJzLFxuICAgICAgIHZpZGVvYmFubmVyLFxuICAgICAgIG9wdGlvbmJhbm5lcnMsXG4gICAgICAgb3B0aW9ucyxcbiAgICAgICBjZWxlYnJpdHliYW5uZXJzLFxuICAgICAgIG1lZGlhYmFubmVyc1xuICAgICB9XG4gICB9ID0gcHJvcHNcblxuICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgZGF0YT17IGhvbWViYW5uZXIgfSAgLz5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBtYXJnaW49XCI1MFwiIC8+XG4gICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVQYWdlTWFpbkJvZHlHcmlkfT5cbiAgICAgICAgICAgICAgICAgIDxUcmVuZEJhbm5lcnMgZGF0YT17dHJlbmRiYW5uZXJzfSAgY2xhc3NEYXRhPXtjbGFzc2VzfSAvPlxuICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbWFyZ2luPVwiNTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPFZpZGVvQmFubmVyIGRhdGE9e3ZpZGVvYmFubmVyfSBjbGFzc0RhdGE9e2NsYXNzZXN9IC8+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBtYXJnaW49XCI1MFwiIC8+XG4gICAgICAgICAgICAgICAgICA8T3B0aW9uc0Jhbm5lciBkYXRhPXtvcHRpb25iYW5uZXJzfSBjbGFzc0RhdGE9e2NsYXNzZXN9IC8+XG4gICAgICAgICAgICAgICAgICA8RGl2aWRlciBtYXJnaW49XCI1MFwiIC8+XG4gICAgICAgICAgICAgICAgICA8Q2VsZWJyaXR5QmFubmVySGVhZGVyIGNsYXNzRGF0YT17Y2xhc3Nlc30gLz5cbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIG1hcmdpbj1cIjIzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxDZWxlYnJpdHlCYW5uZXIgZGF0YT17Y2VsZWJyaXR5QmFubmVyc30gY2xhc3NEYXRhPXtjbGFzc2VzfSBhcHA9e2FwcH0gLz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgICAgIGRhdGE6IGF3YWl0IGdldEhvbWUoKVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})