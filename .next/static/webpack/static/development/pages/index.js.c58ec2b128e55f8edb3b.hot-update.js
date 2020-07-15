webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/VideoBanner.js":
/*!****************************************!*\
  !*** ./components/home/VideoBanner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    homePageVideoBannerRoot: {\n      width: \"100%\",\n      height: \"375px\",\n      '& img': {\n        height: 'auto',\n        width: '100%'\n      }\n    },\n    homePageVideoBannerTextGrid: _defineProperty({}, theme.breakpoints.down('sm'), {\n      marginTop: '30px'\n    }),\n    homePageVideoBannerHeaderLevelOne: _objectSpread(_objectSpread({}, theme.typography.h2Alt), {}, {\n      margin: '25px 0 0px'\n    }),\n    homePageVideoBannerHeaderLevelTwo: _objectSpread(_objectSpread({}, theme.typography.h2AltLight), {}, {\n      margin: '0 0 25px'\n    }),\n    homePageVideoBannerActionText: _objectSpread(_objectSpread({}, theme.links.ctaLink), {}, {\n      margin: '0 auto',\n      padding: '3px 0'\n    })\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var classData = props.classData,\n      data = props.data;\n  var classes = useStyles(props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    className: classData.homePage,\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 8,\n    justify: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    component: \"iframe\",\n    height: 350,\n    width: 500,\n    onClick: function onClick() {\n      return home.videoBannerClicked(data);\n    },\n    classes: {\n      root: classes.homePageVideoBannerRoot,\n      media: \"homePageMedia\"\n    },\n    alt: \"Behind the Shoot\",\n    title: \"Behind the Shoot\",\n    src: data.mediaurl\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    item: true,\n    xs: 12,\n    sm: 12,\n    md: 4,\n    justify: \"center\",\n    align: \"center\",\n    className: classes.homePageVideoBannerTextGrid\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    justify: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    align: \"center\",\n    variant: \"h4\"\n  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    align: \"center\",\n    component: \"h2\",\n    className: classes.homePageVideoBannerHeaderLevelOne\n  }, data.header_level_one), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    align: \"center\",\n    component: \"h2\",\n    className: classes.homePageVideoBannerHeaderLevelTwo\n  }, data.header_level_two), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    align: \"center\",\n    variant: \"h4\",\n    className: classes.homePageVideoBannerActionText\n  }, data.actiontext))));\n}, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvVmlkZW9CYW5uZXIuanM/NjE5MiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJob21lUGFnZVZpZGVvQmFubmVyUm9vdCIsIndpZHRoIiwiaGVpZ2h0IiwiaG9tZVBhZ2VWaWRlb0Jhbm5lclRleHRHcmlkIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWFyZ2luVG9wIiwiaG9tZVBhZ2VWaWRlb0Jhbm5lckhlYWRlckxldmVsT25lIiwidHlwb2dyYXBoeSIsImgyQWx0IiwibWFyZ2luIiwiaG9tZVBhZ2VWaWRlb0Jhbm5lckhlYWRlckxldmVsVHdvIiwiaDJBbHRMaWdodCIsImhvbWVQYWdlVmlkZW9CYW5uZXJBY3Rpb25UZXh0IiwibGlua3MiLCJjdGFMaW5rIiwicGFkZGluZyIsInByb3BzIiwiY2xhc3NEYXRhIiwiZGF0YSIsImNsYXNzZXMiLCJob21lUGFnZSIsImhvbWUiLCJ2aWRlb0Jhbm5lckNsaWNrZWQiLCJyb290IiwibWVkaWEiLCJtZWRpYXVybCIsInRpdGxlIiwiaGVhZGVyX2xldmVsX29uZSIsImhlYWRlcl9sZXZlbF90d28iLCJhY3Rpb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQywyQkFBdUIsRUFBRTtBQUN2QkMsV0FBSyxFQUFDLE1BRGlCO0FBRXZCQyxZQUFNLEVBQUMsT0FGZ0I7QUFHdkIsZUFBUztBQUNQQSxjQUFNLEVBQUUsTUFERDtBQUVQRCxhQUFLLEVBQUU7QUFGQTtBQUhjLEtBRGM7QUFTdkNFLCtCQUEyQixzQkFDeEJKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEd0IsRUFDTztBQUM5QkMsZUFBUyxFQUFFO0FBRG1CLEtBRFAsQ0FUWTtBQWN2Q0MscUNBQWlDLGtDQUM1QlIsS0FBSyxDQUFDUyxVQUFOLENBQWlCQyxLQURXO0FBRS9CQyxZQUFNLEVBQUU7QUFGdUIsTUFkTTtBQWtCdkNDLHFDQUFpQyxrQ0FDNUJaLEtBQUssQ0FBQ1MsVUFBTixDQUFpQkksVUFEVztBQUUvQkYsWUFBTSxFQUFFO0FBRnVCLE1BbEJNO0FBc0J2Q0csaUNBQTZCLGtDQUN4QmQsS0FBSyxDQUFDZSxLQUFOLENBQVlDLE9BRFk7QUFFM0JMLFlBQU0sRUFBRSxRQUZtQjtBQUczQk0sYUFBTyxFQUFFO0FBSGtCO0FBdEJVLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBNEJlLDRFQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUVkQyxTQUZjLEdBRU9ELEtBRlAsQ0FFZEMsU0FGYztBQUFBLE1BRUhDLElBRkcsR0FFT0YsS0FGUCxDQUVIRSxJQUZHO0FBR3RCLE1BQU1DLE9BQU8sR0FBR3ZCLFNBQVMsQ0FBQ29CLEtBQUQsQ0FBekI7QUFFQSxzQkFBTywyREFBQyxzREFBRDtBQUFNLGFBQVMsRUFBRUMsU0FBUyxDQUFDRyxRQUEzQjtBQUFxQyxhQUFTO0FBQTlDLGtCQUNDLDJEQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFxQyxNQUFFLEVBQUUsQ0FBekM7QUFBNEMsV0FBTyxFQUFDO0FBQXBELGtCQUNFLDJEQUFDLDJEQUFEO0FBQVcsYUFBUyxFQUFDLFFBQXJCO0FBQ1csVUFBTSxFQUFFLEdBRG5CO0FBRVcsU0FBSyxFQUFFLEdBRmxCO0FBR1csV0FBTyxFQUFFO0FBQUEsYUFBTUMsSUFBSSxDQUFDQyxrQkFBTCxDQUF3QkosSUFBeEIsQ0FBTjtBQUFBLEtBSHBCO0FBSVcsV0FBTyxFQUFFO0FBQUVLLFVBQUksRUFBRUosT0FBTyxDQUFDcEIsdUJBQWhCO0FBQXlDeUIsV0FBSyxFQUFFO0FBQWhELEtBSnBCO0FBS1csT0FBRyxFQUFDLGtCQUxmO0FBTVcsU0FBSyxFQUFDLGtCQU5qQjtBQU9XLE9BQUcsRUFBRU4sSUFBSSxDQUFDTztBQVByQixJQURGLENBREQsZUFXQywyREFBQyxzREFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFFBQUksTUFGTjtBQUdFLE1BQUUsRUFBRSxFQUhOO0FBSUUsTUFBRSxFQUFFLEVBSk47QUFLRSxNQUFFLEVBQUUsQ0FMTjtBQU1FLFdBQU8sRUFBQyxRQU5WO0FBT0UsU0FBSyxFQUFDLFFBUFI7QUFRRSxhQUFTLEVBQUVOLE9BQU8sQ0FBQ2pCO0FBUnJCLGtCQVVFLDJEQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUM7QUFBM0Msa0JBQ0UsMkRBQUMsNERBQUQ7QUFDRSxTQUFLLEVBQUMsUUFEUjtBQUVFLFdBQU8sRUFBQztBQUZWLEtBSUdnQixJQUFJLENBQUNRLEtBSlIsQ0FERixlQU9FLDJEQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxhQUFTLEVBQUMsSUFGWjtBQUdFLGFBQVMsRUFBRVAsT0FBTyxDQUFDYjtBQUhyQixLQUtHWSxJQUFJLENBQUNTLGdCQUxSLENBUEYsZUFjRSwyREFBQyw0REFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsYUFBUyxFQUFDLElBRlo7QUFHRSxhQUFTLEVBQUVSLE9BQU8sQ0FBQ1Q7QUFIckIsS0FLR1EsSUFBSSxDQUFDVSxnQkFMUixDQWRGLGVBcUJFLDJEQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFDLFFBRFI7QUFFRSxXQUFPLEVBQUMsSUFGVjtBQUdFLGFBQVMsRUFBRVQsT0FBTyxDQUFDUDtBQUhyQixLQUtLTSxJQUFJLENBQUNXLFVBTFYsQ0FyQkYsQ0FWRixDQVhELENBQVA7QUFxREgsQ0ExREQ7QUFBQSxVQUdvQmpDLFNBSHBCO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvVmlkZW9CYW5uZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBHcmlkLCBUeXBvZ3JhcGh5LCBDYXJkTWVkaWEgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGhvbWVQYWdlVmlkZW9CYW5uZXJSb290OiB7XG4gICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgaGVpZ2h0OlwiMzc1cHhcIixcbiAgICAnJiBpbWcnOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH0sXG4gIGhvbWVQYWdlVmlkZW9CYW5uZXJUZXh0R3JpZDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiAnMzBweCdcbiAgICB9XG4gIH0sXG4gIGhvbWVQYWdlVmlkZW9CYW5uZXJIZWFkZXJMZXZlbE9uZToge1xuICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuaDJBbHQsXG4gICAgbWFyZ2luOiAnMjVweCAwIDBweCdcbiAgfSxcbiAgaG9tZVBhZ2VWaWRlb0Jhbm5lckhlYWRlckxldmVsVHdvOiB7XG4gICAgLi4udGhlbWUudHlwb2dyYXBoeS5oMkFsdExpZ2h0LFxuICAgIG1hcmdpbjogJzAgMCAyNXB4J1xuICB9LFxuICBob21lUGFnZVZpZGVvQmFubmVyQWN0aW9uVGV4dDoge1xuICAgIC4uLnRoZW1lLmxpbmtzLmN0YUxpbmssXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBwYWRkaW5nOiAnM3B4IDAnXG4gIH1cbn0pKVxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7IGNsYXNzRGF0YSwgZGF0YSAgfSA9IHByb3BzXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcylcblxuICAgIHJldHVybiA8R3JpZCBjbGFzc05hbWU9e2NsYXNzRGF0YS5ob21lUGFnZX0gY29udGFpbmVyPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxDYXJkTWVkaWEgY29tcG9uZW50PVwiaWZyYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhvbWUudmlkZW9CYW5uZXJDbGlja2VkKGRhdGEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5ob21lUGFnZVZpZGVvQmFubmVyUm9vdCwgbWVkaWE6IFwiaG9tZVBhZ2VNZWRpYVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQmVoaW5kIHRoZSBTaG9vdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZWhpbmQgdGhlIFNob290XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEubWVkaWF1cmx9IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIHNtPXsxMn1cbiAgICAgICAgICAgICAgbWQ9ezR9XG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ob21lUGFnZVZpZGVvQmFubmVyVGV4dEdyaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZVBhZ2VWaWRlb0Jhbm5lckhlYWRlckxldmVsT25lfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLmhlYWRlcl9sZXZlbF9vbmV9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZVBhZ2VWaWRlb0Jhbm5lckhlYWRlckxldmVsVHdvfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLmhlYWRlcl9sZXZlbF90d299XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVQYWdlVmlkZW9CYW5uZXJBY3Rpb25UZXh0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuYWN0aW9udGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/VideoBanner.js\n");

/***/ })

})