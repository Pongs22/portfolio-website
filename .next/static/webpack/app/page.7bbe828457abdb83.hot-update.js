"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/animations/backgroundTransition.tsx":
/*!*************************************************!*\
  !*** ./app/animations/backgroundTransition.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nfunction BackgroundTransition(param) {\n    let { children } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const colorElement = document.querySelectorAll(\".color\");\n        const color = [];\n        colorElement.forEach((element)=>{\n            const colors = element.getAttribute(\"data-color\");\n            if (colors) {\n                color.push(colors);\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.utils.toArray(colorElement).forEach(function(g) {\n            const bgcolor = g.getAttribute(\"data-color\");\n            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger.create({\n                trigger: g,\n                start: \"top center\",\n                end: \"bottom center\",\n                markers: true,\n                onEnter: ()=>gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(\".jm-b-skill-sections, .jm-b-works-section, .jm-b-about-section, .jm-b-footer\", {\n                        backgroundColor: bgcolor\n                    }),\n                onEnterBack: ()=>gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(\".jm-b-skill-sections, .jm-b-works-section, .jm-b-about-section,  .jm-b-footer\", {\n                        backgroundColor: bgcolor\n                    }),\n                scrub: 2\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"background-transition\",\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\animations\\\\backgroundTransition.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(BackgroundTransition, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = BackgroundTransition;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundTransition);\nvar _c;\n$RefreshReg$(_c, \"BackgroundTransition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hbmltYXRpb25zL2JhY2tncm91bmRUcmFuc2l0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFb0Q7QUFDeEI7QUFFNEI7QUFHeERFLHNDQUFJQSxDQUFDRSxjQUFjLENBQUNELGtFQUFhQTtBQU9qQyxTQUFTRSxxQkFBc0IsS0FBdUM7UUFBdkMsRUFBRUMsUUFBUSxFQUE2QixHQUF2Qzs7SUFFN0JMLGdEQUFTQSxDQUFDO1FBRVIsTUFBTU0sZUFBZUMsU0FBU0MsZ0JBQWdCLENBQUU7UUFDaEQsTUFBTUMsUUFBUSxFQUFFO1FBQ2hCSCxhQUFhSSxPQUFPLENBQUUsQ0FBRUM7WUFDcEIsTUFBTUMsU0FBU0QsUUFBUUUsWUFBWSxDQUFFO1lBQ3JDLElBQUlELFFBQVE7Z0JBQ1ZILE1BQU1LLElBQUksQ0FBQ0Y7WUFDYjtRQUNKO1FBRUlYLHNDQUFJQSxDQUFDYyxLQUFLLENBQUNDLE9BQU8sQ0FBRVYsY0FBZUksT0FBTyxDQUFFLFNBQVdPLENBQUM7WUFDcEQsTUFBTUMsVUFBVSxFQUFxQkwsWUFBWSxDQUFFO1lBQ25EWCxrRUFBYUEsQ0FBQ2lCLE1BQU0sQ0FBRTtnQkFDbEJDLFNBQVNIO2dCQUNUSSxPQUFPO2dCQUNQQyxLQUFLO2dCQUNMQyxTQUFTO2dCQUNUQyxTQUFTLElBQU12QixzQ0FBSUEsQ0FBQ3dCLEVBQUUsQ0FBQyxnRkFBZ0Y7d0JBQUVDLGlCQUFpQlI7b0JBQXVCO2dCQUNqSlMsYUFBYSxJQUFNMUIsc0NBQUlBLENBQUN3QixFQUFFLENBQUMsaUZBQWlGO3dCQUFFQyxpQkFBaUJSO29CQUFzQjtnQkFDckpVLE9BQU87WUFDWDtRQUNKO0lBQ04sR0FBRyxFQUFFO0lBQ0wscUJBQ0U7a0JBQ0EsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ1p6Qjs7Ozs7OztBQUtQO0dBbENTRDtLQUFBQTtBQW9DVCwrREFBZUEsb0JBQW9CQSxFQUNsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYW5pbWF0aW9ucy9iYWNrZ3JvdW5kVHJhbnNpdGlvbi50c3g/NDBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCBUd2VlblZhbHVlIGZyb20gJ2dzYXAnO1xyXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCB7IENzc1ZhcmlhYmxlIH0gZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL0BuZXh0L2ZvbnQnO1xyXG5cclxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuXHJcbmludGVyZmFjZSBCYWNrZ3JvdW5kVHJhbnNpdGlvblByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gQmFja2dyb3VuZFRyYW5zaXRpb24oIHsgY2hpbGRyZW4gfTogQmFja2dyb3VuZFRyYW5zaXRpb25Qcm9wcyApIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb2xvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNvbG9yJyApO1xyXG4gICAgY29uc3QgY29sb3IgPSBbXTtcclxuICAgIGNvbG9yRWxlbWVudC5mb3JFYWNoKCAoIGVsZW1lbnQgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29sb3JzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWNvbG9yJyApO1xyXG4gICAgICAgIGlmIChjb2xvcnMpIHtcclxuICAgICAgICAgIGNvbG9yLnB1c2goY29sb3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9ICk7XHJcblxyXG4gICAgICAgIGdzYXAudXRpbHMudG9BcnJheSggY29sb3JFbGVtZW50ICkuZm9yRWFjaCggZnVuY3Rpb24gKCBnICkge1xyXG4gICAgICAgICAgICBjb25zdCBiZ2NvbG9yID0gKCBnIGFzIEhUTUxFbGVtZW50ICkuZ2V0QXR0cmlidXRlKCAnZGF0YS1jb2xvcicgKTtcclxuICAgICAgICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGcgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAnYm90dG9tIGNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25FbnRlcjogKCkgPT4gZ3NhcC50bygnLmptLWItc2tpbGwtc2VjdGlvbnMsIC5qbS1iLXdvcmtzLXNlY3Rpb24sIC5qbS1iLWFib3V0LXNlY3Rpb24sIC5qbS1iLWZvb3RlcicsIHsgYmFja2dyb3VuZENvbG9yOiBiZ2NvbG9yIGFzIENzc1ZhcmlhYmxlIH0pLFxyXG4gICAgICAgICAgICAgICAgb25FbnRlckJhY2s6ICgpID0+IGdzYXAudG8oJy5qbS1iLXNraWxsLXNlY3Rpb25zLCAuam0tYi13b3Jrcy1zZWN0aW9uLCAuam0tYi1hYm91dC1zZWN0aW9uLCAgLmptLWItZm9vdGVyJywgeyBiYWNrZ3JvdW5kQ29sb3I6IGJnY29sb3IgYXMgQ3NzVmFyaWFibGV9KSxcclxuICAgICAgICAgICAgICAgIHNjcnViOiAyLFxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfSApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kLXRyYW5zaXRpb24nPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRUcmFuc2l0aW9uXHJcbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJyZWdpc3RlclBsdWdpbiIsIkJhY2tncm91bmRUcmFuc2l0aW9uIiwiY2hpbGRyZW4iLCJjb2xvckVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xvciIsImZvckVhY2giLCJlbGVtZW50IiwiY29sb3JzIiwiZ2V0QXR0cmlidXRlIiwicHVzaCIsInV0aWxzIiwidG9BcnJheSIsImciLCJiZ2NvbG9yIiwiY3JlYXRlIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwibWFya2VycyIsIm9uRW50ZXIiLCJ0byIsImJhY2tncm91bmRDb2xvciIsIm9uRW50ZXJCYWNrIiwic2NydWIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/animations/backgroundTransition.tsx\n"));

/***/ })

});