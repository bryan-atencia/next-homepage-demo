webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/TrendBanners.js":
/*!*****************************************!*\
  !*** ./components/home/TrendBanners.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ \"./components/home/Divider.js\");\n/* harmony import */ var _misc_TrendTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../misc/TrendTile */ \"./components/misc/TrendTile.js\");\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    homePageTrendBannerTiles: _defineProperty({\n      maxWidth: '32%'\n    }, theme.breakpoints.down('xs'), {\n      maxWidth: '100%'\n    }),\n    homePageTrendingBannerTitleWrapper: _defineProperty({\n      textAlign: 'left'\n    }, theme.breakpoints.down('sm'), {\n      textAlign: 'center'\n    }),\n    trendBannerTitleBold: _objectSpread({}, theme.typography.h2Alt),\n    homePageTrendingBannerTitle: _objectSpread({}, theme.typography.h2AltLight),\n    homePageTrendingBannerSubtitle: _defineProperty({\n      textAlign: 'left',\n      maxWidth: '80%'\n    }, theme.breakpoints.down('sm'), {\n      textAlign: 'center',\n      margin: '0 auto'\n    }),\n    tilesGrid: _defineProperty({}, theme.breakpoints.down(\"sm\"), {\n      maxWidth: \"95%\",\n      margin: \"0 auto\"\n    }),\n    trendBannerLazyBlock: _defineProperty({}, theme.breakpoints.up(\"md\"), {\n      minHeight: \"650px\"\n    })\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var data = props.data,\n      classData = props.classData;\n  var classes = useStyles(props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    className: classData.homePage\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    component: \"h2\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.trendBannerTitleBold, classes.homePageTrendingBannerTitleWrapper)\n  }, \"New \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.homePageTrendingBannerTitle\n  }, \"Shirts and Ties\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    className: classes.homePageTrendingBannerSubtitle,\n    variant: \"h5\"\n  }, \"A round-up of strong trends and notable\\xA0new arrivals\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Divider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    margin: \"25\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    justify: \"space-between\",\n    className: classes.tilesGrid\n  }, data.map(function (x, y) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      key: y,\n      container: true,\n      item: true,\n      xs: 12,\n      sm: 4,\n      className: classes.homePageTrendBannerTiles\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_TrendTile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      data: x\n    }));\n  })));\n}, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvVHJlbmRCYW5uZXJzLmpzPzZkM2MiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaG9tZVBhZ2VUcmVuZEJhbm5lclRpbGVzIiwibWF4V2lkdGgiLCJicmVha3BvaW50cyIsImRvd24iLCJob21lUGFnZVRyZW5kaW5nQmFubmVyVGl0bGVXcmFwcGVyIiwidGV4dEFsaWduIiwidHJlbmRCYW5uZXJUaXRsZUJvbGQiLCJ0eXBvZ3JhcGh5IiwiaDJBbHQiLCJob21lUGFnZVRyZW5kaW5nQmFubmVyVGl0bGUiLCJoMkFsdExpZ2h0IiwiaG9tZVBhZ2VUcmVuZGluZ0Jhbm5lclN1YnRpdGxlIiwibWFyZ2luIiwidGlsZXNHcmlkIiwidHJlbmRCYW5uZXJMYXp5QmxvY2siLCJ1cCIsIm1pbkhlaWdodCIsInByb3BzIiwiZGF0YSIsImNsYXNzRGF0YSIsImNsYXNzZXMiLCJob21lUGFnZSIsImNsYXNzbmFtZXMiLCJtYXAiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLDRCQUF3QjtBQUN0QkMsY0FBUSxFQUFFO0FBRFksT0FFckJGLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGcUIsRUFFVTtBQUM5QkYsY0FBUSxFQUFFO0FBRG9CLEtBRlYsQ0FEZTtBQU92Q0csc0NBQWtDO0FBQ2hDQyxlQUFTLEVBQUU7QUFEcUIsT0FFL0JOLEtBQUssQ0FBQ0csV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGK0IsRUFFQTtBQUM5QkUsZUFBUyxFQUFFO0FBRG1CLEtBRkEsQ0FQSztBQWF2Q0Msd0JBQW9CLG9CQUNmUCxLQUFLLENBQUNRLFVBQU4sQ0FBaUJDLEtBREYsQ0FibUI7QUFnQnZDQywrQkFBMkIsb0JBQ3RCVixLQUFLLENBQUNRLFVBQU4sQ0FBaUJHLFVBREssQ0FoQlk7QUFtQnZDQyxrQ0FBOEI7QUFDNUJOLGVBQVMsRUFBRSxNQURpQjtBQUU1QkosY0FBUSxFQUFFO0FBRmtCLE9BRzNCRixLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBSDJCLEVBR0k7QUFDOUJFLGVBQVMsRUFBRSxRQURtQjtBQUU5Qk8sWUFBTSxFQUFFO0FBRnNCLEtBSEosQ0FuQlM7QUEyQnZDQyxhQUFTLHNCQUNOZCxLQUFLLENBQUNHLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRE0sRUFDeUI7QUFDOUJGLGNBQVEsRUFBQyxLQURxQjtBQUU5QlcsWUFBTSxFQUFDO0FBRnVCLEtBRHpCLENBM0I4QjtBQWlDdkNFLHdCQUFvQixzQkFDakJmLEtBQUssQ0FBQ0csV0FBTixDQUFrQmEsRUFBbEIsQ0FBcUIsSUFBckIsQ0FEaUIsRUFDWTtBQUM1QkMsZUFBUyxFQUFFO0FBRGlCLEtBRFo7QUFqQ21CLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBd0NlLDRFQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNoQkMsSUFEZ0IsR0FDSUQsS0FESixDQUNoQkMsSUFEZ0I7QUFBQSxNQUNWQyxTQURVLEdBQ0lGLEtBREosQ0FDVkUsU0FEVTtBQUV4QixNQUFNQyxPQUFPLEdBQUd2QixTQUFTLENBQUNvQixLQUFELENBQXpCO0FBRUUsc0JBQU8sMkRBQUMsc0RBQUQ7QUFBTSxhQUFTLEVBQUVFLFNBQVMsQ0FBQ0U7QUFBM0Isa0JBQ0csMkRBQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUMsSUFEWjtBQUVFLGFBQVMsRUFBRUMsaURBQVUsQ0FDbkJGLE9BQU8sQ0FBQ2Qsb0JBRFcsRUFFbkJjLE9BQU8sQ0FBQ2hCLGtDQUZXO0FBRnZCLDBCQU1NO0FBQU0sYUFBUyxFQUFFZ0IsT0FBTyxDQUFDWDtBQUF6Qix1QkFOTixDQURILGVBU0csMkRBQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVXLE9BQU8sQ0FBQ1QsOEJBQS9CO0FBQStELFdBQU8sRUFBQztBQUF2RSwrREFUSCxlQVlLLDJEQUFDLGdEQUFEO0FBQVMsVUFBTSxFQUFDO0FBQWhCLElBWkwsZUFhSywyREFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUMsZUFBeEI7QUFBd0MsYUFBUyxFQUFHUyxPQUFPLENBQUNQO0FBQTVELEtBQ0dLLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2xCLHdCQUNFLDJEQUFDLHNEQUFEO0FBQ0UsU0FBRyxFQUFFQSxDQURQO0FBRUUsZUFBUyxNQUZYO0FBR0UsVUFBSSxNQUhOO0FBSUUsUUFBRSxFQUFFLEVBSk47QUFLRSxRQUFFLEVBQUUsQ0FMTjtBQU1FLGVBQVMsRUFBRUwsT0FBTyxDQUFDcEI7QUFOckIsb0JBT0UsMkRBQUMsdURBQUQ7QUFBVyxVQUFJLEVBQUV3QjtBQUFqQixNQVBGLENBREY7QUFXRCxHQVpBLENBREgsQ0FiTCxDQUFQO0FBNkJELENBakNIO0FBQUEsVUFFa0IzQixTQUZsQjtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL1RyZW5kQmFubmVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1ha2VTdHlsZXMsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmltcG9ydCBEaXZpZGVyIGZyb20gJy4vRGl2aWRlcidcbmltcG9ydCBUcmVuZFRpbGUgZnJvbSAnLi4vbWlzYy9UcmVuZFRpbGUnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBob21lUGFnZVRyZW5kQmFubmVyVGlsZXM6IHtcbiAgICBtYXhXaWR0aDogJzMyJScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfVxuICB9LFxuICBob21lUGFnZVRyZW5kaW5nQmFubmVyVGl0bGVXcmFwcGVyOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfVxuICB9LFxuICB0cmVuZEJhbm5lclRpdGxlQm9sZDoge1xuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuaDJBbHRcbiAgfSxcbiAgaG9tZVBhZ2VUcmVuZGluZ0Jhbm5lclRpdGxlOiB7XG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5oMkFsdExpZ2h0XG4gIH0sXG4gIGhvbWVQYWdlVHJlbmRpbmdCYW5uZXJTdWJ0aXRsZToge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG1heFdpZHRoOiAnODAlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nXG4gICAgfVxuICB9LFxuICB0aWxlc0dyaWQ6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgbWF4V2lkdGg6XCI5NSVcIixcbiAgICAgIG1hcmdpbjpcIjAgYXV0b1wiXG4gICAgfVxuICB9LFxuICB0cmVuZEJhbm5lckxhenlCbG9jazoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgbWluSGVpZ2h0OiBcIjY1MHB4XCIsXG4gICAgfVxuICB9XG59KSlcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgY2xhc3NEYXRhIH0gPSBwcm9wc1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHByb3BzKVxuXG4gICAgcmV0dXJuIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3NEYXRhLmhvbWVQYWdlfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcy50cmVuZEJhbm5lclRpdGxlQm9sZCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMuaG9tZVBhZ2VUcmVuZGluZ0Jhbm5lclRpdGxlV3JhcHBlclxuICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgIE5ldyA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZVBhZ2VUcmVuZGluZ0Jhbm5lclRpdGxlfT5TaGlydHMgYW5kIFRpZXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVQYWdlVHJlbmRpbmdCYW5uZXJTdWJ0aXRsZX0gdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgQSByb3VuZC11cCBvZiBzdHJvbmcgdHJlbmRzIGFuZCBub3RhYmxlwqBuZXcgYXJyaXZhbHNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIG1hcmdpbj1cIjI1XCIgLz5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBjbGFzc05hbWU9eyBjbGFzc2VzLnRpbGVzR3JpZCB9PlxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKCh4LCB5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgICAgc209ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZVBhZ2VUcmVuZEJhbm5lclRpbGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVuZFRpbGUgZGF0YT17eH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/TrendBanners.js\n");

/***/ })

})