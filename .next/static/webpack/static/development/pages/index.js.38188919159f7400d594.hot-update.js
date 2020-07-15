webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/misc/TrendTile.js":
/*!**************************************!*\
  !*** ./components/misc/TrendTile.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import QuickShopTag from \"./QuickShopTag\"\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    bannersDescription: _defineProperty({\n      margin: \"17px auto 18px\",\n      fontFamily: theme.fonts.futuraPTDemi\n    }, theme.breakpoints.down(\"sm\"), {\n      margin: \"25px auto 20px\"\n    }),\n    bannersActionText: _objectSpread(_objectSpread({}, theme.links.ctaLink), {}, {\n      width: \"fit-content\",\n      margin: \"0 auto\"\n    }),\n    bannerImage: {\n      \"& amp-img\": {\n        width: \"100%\"\n      }\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (props) {\n  _s();\n\n  var data = props.data;\n  var classes = useStyles(props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    style: {\n      position: \"relative\",\n      margin: \"0 auto\",\n      height: \"fit-content\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: data.actionurl\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: data.mediaurl,\n    style: {\n      \"height\": \"auto\",\n      \"width\": \"100%\"\n    },\n    className: classes.bannerImage\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: data.actionurl\n  }, data.header_level_one && data.header_level_one !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    align: \"center\",\n    variant: \"h5\",\n    className: \"\".concat(classes.bannersDescription, \" bannerDescription\")\n  }, data.header_level_one), data.actionText && data.actionText !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      \"padding\": \"3px 0px 40px 0px\"\n    },\n    className: \"trendTileActionTextGrid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    align: \"center\",\n    className: \"\".concat(classes.bannersActionText, \" trendTileActionText\")\n  }, data.actiontext))));\n}, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21pc2MvVHJlbmRUaWxlLmpzPzg4MGEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYmFubmVyc0Rlc2NyaXB0aW9uIiwibWFyZ2luIiwiZm9udEZhbWlseSIsImZvbnRzIiwiZnV0dXJhUFREZW1pIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiYmFubmVyc0FjdGlvblRleHQiLCJsaW5rcyIsImN0YUxpbmsiLCJ3aWR0aCIsImJhbm5lckltYWdlIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NlcyIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiYWN0aW9udXJsIiwibWVkaWF1cmwiLCJoZWFkZXJfbGV2ZWxfb25lIiwiYWN0aW9uVGV4dCIsImFjdGlvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNqQ0Msc0JBQWtCO0FBQ2hCQyxZQUFNLEVBQUUsZ0JBRFE7QUFFaEJDLGdCQUFVLEVBQUNILEtBQUssQ0FBQ0ksS0FBTixDQUFZQztBQUZQLE9BR2ZMLEtBQUssQ0FBQ00sV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FIZSxFQUdnQjtBQUM5QkwsWUFBTSxFQUFFO0FBRHNCLEtBSGhCLENBRGU7QUFRakNNLHFCQUFpQixrQ0FDWlIsS0FBSyxDQUFDUyxLQUFOLENBQVlDLE9BREE7QUFFZkMsV0FBSyxFQUFFLGFBRlE7QUFHZlQsWUFBTSxFQUFFO0FBSE8sTUFSZ0I7QUFhakNVLGVBQVcsRUFBRTtBQUNYLG1CQUFhO0FBQ1hELGFBQUssRUFBRTtBQURJO0FBREY7QUFib0IsR0FBTDtBQUFBLENBQU4sQ0FBNUI7QUFvQmUsNEVBQUNFLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BRVZDLElBRlUsR0FFREQsS0FGQyxDQUVWQyxJQUZVO0FBR2xCLE1BQU1DLE9BQU8sR0FBR2pCLFNBQVMsQ0FBQ2UsS0FBRCxDQUF6QjtBQUVBLHNCQUFPLHFJQUNHLDJEQUFDLHNEQUFEO0FBQU8sU0FBSyxFQUFFO0FBQUVHLGNBQVEsRUFBRSxVQUFaO0FBQXdCZCxZQUFNLEVBQUMsUUFBL0I7QUFBeUNlLFlBQU0sRUFBQztBQUFoRDtBQUFkLGtCQUNFLDJEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFHSCxJQUFJLENBQUNJO0FBQWxCLGtCQUNJO0FBQ0ksT0FBRyxFQUFHSixJQUFJLENBQUNLLFFBRGY7QUFFSSxTQUFLLEVBQUU7QUFBRSxnQkFBVSxNQUFaO0FBQW9CLGVBQVM7QUFBN0IsS0FGWDtBQUdJLGFBQVMsRUFBRUosT0FBTyxDQUFDSDtBQUh2QixJQURKLENBREYsQ0FESCxlQWtCRywyREFBQyxnREFBRDtBQUFNLFFBQUksRUFBR0UsSUFBSSxDQUFDSTtBQUFsQixLQUNJSixJQUFJLENBQUNNLGdCQUFMLElBQXlCTixJQUFJLENBQUNNLGdCQUFMLEtBQTBCLEVBQW5ELGlCQUNDLDJEQUFDLDREQUFEO0FBQVksU0FBSyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBQyxJQUFuQztBQUF3QyxhQUFTLFlBQUtMLE9BQU8sQ0FBQ2Qsa0JBQWI7QUFBakQsS0FBd0dhLElBQUksQ0FBQ00sZ0JBQTdHLENBRkwsRUFJSU4sSUFBSSxDQUFDTyxVQUFMLElBQW1CUCxJQUFJLENBQUNPLFVBQUwsS0FBb0IsRUFBdkMsaUJBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBRSxpQkFBVztBQUFiLEtBQVo7QUFBK0MsYUFBUyxFQUFDO0FBQXpELGtCQUNFLDJEQUFDLDREQUFEO0FBQVksU0FBSyxFQUFDLFFBQWxCO0FBQTJCLGFBQVMsWUFBS04sT0FBTyxDQUFDUCxpQkFBYjtBQUFwQyxLQUE0Rk0sSUFBSSxDQUFDUSxVQUFqRyxDQURGLENBTEwsQ0FsQkgsQ0FBUDtBQTZCUCxDQWxDRDtBQUFBLFVBR3dCeEIsU0FIeEI7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWlzYy9UcmVuZFRpbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIG1ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgUXVpY2tTaG9wVGFnIGZyb20gXCIuL1F1aWNrU2hvcFRhZ1wiXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICAgIGJhbm5lcnNEZXNjcmlwdGlvbjoge1xuICAgICAgICBtYXJnaW46IFwiMTdweCBhdXRvIDE4cHhcIixcbiAgICAgICAgZm9udEZhbWlseTp0aGVtZS5mb250cy5mdXR1cmFQVERlbWksXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XG4gICAgICAgICAgbWFyZ2luOiBcIjI1cHggYXV0byAyMHB4XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJhbm5lcnNBY3Rpb25UZXh0OiB7XG4gICAgICAgIC4uLnRoZW1lLmxpbmtzLmN0YUxpbmssXG4gICAgICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIlxuICAgICAgfSxcbiAgICAgIGJhbm5lckltYWdlOiB7XG4gICAgICAgIFwiJiBhbXAtaW1nXCI6IHtcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgfVxuICAgICAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHNcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhwcm9wcylcblxuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBtYXJnaW46XCIwIGF1dG9cIiwgaGVpZ2h0OlwiZml0LWNvbnRlbnRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17IGRhdGEuYWN0aW9udXJsIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsgZGF0YS5tZWRpYXVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJoZWlnaHRcIjogXCJhdXRvXCIsIFwid2lkdGhcIjogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFubmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIHsgLyogZGF0YS5xdWlja0xpbmtzICYmXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5xdWlja0xpbmtzLm1hcCgoeCwgeSkgPT4gPFF1aWNrU2hvcFRhZyBrZXk9e3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwPXthcHB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt4LmFjdGlvblNrdX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSAqL31cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eyBkYXRhLmFjdGlvbnVybCB9ID5cbiAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmhlYWRlcl9sZXZlbF9vbmUgJiYgZGF0YS5oZWFkZXJfbGV2ZWxfb25lICE9PSAnJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmJhbm5lcnNEZXNjcmlwdGlvbn0gYmFubmVyRGVzY3JpcHRpb25gfSA+e2RhdGEuaGVhZGVyX2xldmVsX29uZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAge2RhdGEuYWN0aW9uVGV4dCAmJiBkYXRhLmFjdGlvblRleHQgIT09ICcnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcInBhZGRpbmdcIjogXCIzcHggMHB4IDQwcHggMHB4XCIgfX0gY2xhc3NOYW1lPVwidHJlbmRUaWxlQWN0aW9uVGV4dEdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5iYW5uZXJzQWN0aW9uVGV4dH0gdHJlbmRUaWxlQWN0aW9uVGV4dGB9ID57ZGF0YS5hY3Rpb250ZXh0fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/misc/TrendTile.js\n");

/***/ })

})