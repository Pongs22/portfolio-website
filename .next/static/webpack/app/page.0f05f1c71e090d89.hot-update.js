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

/***/ "(app-pages-browser)/./app/blocks/header/headerBlock.tsx":
/*!*******************************************!*\
  !*** ./app/blocks/header/headerBlock.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavigationBar(param) {\n    let {} = param;\n    _s();\n    const [preventScroll, setpreventScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollToSection = (sectionId)=>{\n        const section = document.querySelector(sectionId);\n        if (section) {\n            const { top } = section.getBoundingClientRect();\n            window.scrollTo({\n                behavior: \"smooth\",\n                top: top + window.scrollY\n            });\n        }\n    };\n    const handleClick = (sectionId)=>{\n        scrollToSection(sectionId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-navbar bg-transparent backdrop-blur-sm absolute top-0 z-[100] w-full b py-[12px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo-container fonr-oswald text-[40px] text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/assets/logoooo.svg\",\n                                alt: \"hero-image\",\n                                width: 70,\n                                height: 60,\n                                className: \" mx-auto my-auto w-[50px] h-[40px] md:w-full md:h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-container align-middle justify-center my-auto hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#works\"),\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#about\"),\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]\",\n                                            onClick: ()=>handleClick(\"#contact\"),\n                                            children: \"CONTACT ME\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-mobile-container align-middle justify-center my-auto block md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setpreventScroll(true),\n                                id: \"navBtn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/assets/nav-mb-icon.svg\",\n                                    alt: \"hero-image\",\n                                    width: 40,\n                                    height: 24,\n                                    className: \" mx-auto my-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-bar-dropdown  absolute \".concat(preventScroll ? \" block\" : \" hidden \", \" transform transition-all top-0 h-screen w-screen md:hidden z-[999] duration-700  bg-black/80\"),\n                    id: \"backDrop\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[275px] bg-dark-blue-01 h-screen  \".concat(preventScroll ? \" right-0 \" : \" right-[-100%] \", \" top-0 absolute z-[1000] transform transition-all duration-500\"),\n                    id: \"navMenu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setpreventScroll(false),\n                        id: \"navBtn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/assets/nav-mb-icon.svg\",\n                            alt: \"hero-image\",\n                            width: 40,\n                            height: 24,\n                            className: \" mx-auto my-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(NavigationBar, \"zBst9Xp7uYrwbeTilKiBgdN0spk=\");\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ3JCO0FBRzlCLFNBQVNHLGNBQWMsS0FDdEI7UUFEc0IsRUFDdEIsR0FEc0I7O0lBRXJCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1LLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxVQUFVQyxTQUFTQyxhQUFhLENBQUNIO1FBQ3ZDLElBQUlDLFNBQVM7WUFDWCxNQUFNLEVBQUVHLEdBQUcsRUFBRSxHQUFHSCxRQUFRSSxxQkFBcUI7WUFDN0NDLE9BQU9DLFFBQVEsQ0FBQztnQkFDZEMsVUFBVTtnQkFDVkosS0FBS0EsTUFBTUUsT0FBT0csT0FBTztZQUMzQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLENBQUNWO1FBQ25CRCxnQkFBZ0JDO0lBQ2xCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNXO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDakIsa0RBQUtBO2dDQUNKa0IsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkosV0FBVTs7Ozs7Ozs7Ozs7c0NBRWQsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSztnQ0FBR0wsV0FBVTs7a0RBQ1osOERBQUNNO2tEQUFHLDRFQUFDQzs0Q0FBT1AsV0FBVTs0Q0FBcUVRLFNBQVMsSUFBTVYsWUFBWTtzREFBWTs7Ozs7Ozs7Ozs7a0RBQ2xJLDhEQUFDUTtrREFBRyw0RUFBQ0M7NENBQU9QLFdBQVU7NENBQXFFUSxTQUFTLElBQU1WLFlBQVk7c0RBQVc7Ozs7Ozs7Ozs7O2tEQUNqSSw4REFBQ1E7a0RBQUcsNEVBQUNDOzRDQUFPUCxXQUFVOzRDQUF3SVEsU0FBUyxJQUFNVixZQUFZO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcxTSw4REFBQ0M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNPO2dDQUFPQyxTQUFTLElBQU90QixpQkFBa0I7Z0NBQVF1QixJQUFHOzBDQUNuRCw0RUFBQzFCLGtEQUFLQTtvQ0FDSmtCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTWxCLDhEQUFDRDtvQkFBSUMsV0FBVyw4QkFBb0UsT0FBdENmLGdCQUFnQixXQUFXLFlBQVc7b0JBQWdHd0IsSUFBRzs7Ozs7OzhCQUV2TCw4REFBQ1Y7b0JBQUlDLFdBQVcsdUNBQXVGLE9BQWhEZixnQkFBZ0IsY0FBYyxtQkFBa0I7b0JBQWlFd0IsSUFBRzs4QkFDM0ssNEVBQUNGO3dCQUFPQyxTQUFTLElBQU90QixpQkFBa0I7d0JBQVN1QixJQUFHO2tDQUNoRCw0RUFBQzFCLGtEQUFLQTs0QkFDSmtCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFCO0dBcEVTaEI7S0FBQUE7QUFzRVQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyQmxvY2sudHN4PzNmNzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb25CYXIoe1xyXG59KSB7XHJcbiAgY29uc3QgW3ByZXZlbnRTY3JvbGwsIHNldHByZXZlbnRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoc2VjdGlvbklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25JZCk7XHJcbiAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICBjb25zdCB7IHRvcCB9ID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgdG9wOiB0b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoc2VjdGlvbklkOiBzdHJpbmcpID0+IHtcclxuICAgIHNjcm9sbFRvU2VjdGlvbihzZWN0aW9uSWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nam0tYi1uYXZiYXIgYmctdHJhbnNwYXJlbnQgYmFja2Ryb3AtYmx1ci1zbSBhYnNvbHV0ZSB0b3AtMCB6LVsxMDBdIHctZnVsbCBiIHB5LVsxMnB4XSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXIgZm9uci1vc3dhbGQgdGV4dC1bNDBweF0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbG9nb29vby5zdmcnXHJcbiAgICAgICAgICAgICAgYWx0PSdoZXJvLWltYWdlJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nIG14LWF1dG8gbXktYXV0byB3LVs1MHB4XSBoLVs0MHB4XSBtZDp3LWZ1bGwgbWQ6aC1mdWxsJ1xyXG4gICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWNvbnRhaW5lciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgbXktYXV0byBoaWRkZW4gbWQ6YmxvY2tcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBnYXAteC1bNzVweF0gbXktYXV0byBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgWyY+bGldOm15LWF1dG8gWyY+bGldOmZvbnQtbGF0byBbJj5saV06dGV4dC1bMTRweF0nPlxyXG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0ndHJhY2tpbmctWzEuNHB4XSBmb250LWJvbGQgaG92ZXI6dGV4dC1saWdodC1ibHVlLTA1IHRyYW5zaXRpb24tYWxsJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnI3dvcmtzJyl9ID5Xb3JrczwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPSd0cmFja2luZy1bMS40cHhdIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWxpZ2h0LWJsdWUtMDUgdHJhbnNpdGlvbi1hbGwnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCcjYWJvdXQnKX0+QWJvdXQ8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0nZm9udC1vc3dhbGQgcHgtNCBweS0zIGJnLWxpZ2h0LW9yYW5nZS0wNSBob3ZlcjpiZy1saWdodC1vcmFuZ2UtMDMgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHRleHQtd2hpdGUgdHJhY2tpbmctWzEuMDRweF0gcm91bmRlZC1bNHB4XScgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJyNjb250YWN0Jyl9PkNPTlRBQ1QgTUU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbW9iaWxlLWNvbnRhaW5lciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgbXktYXV0byBibG9jayBtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoICkgPT4gc2V0cHJldmVudFNjcm9sbCggdHJ1ZSApfSBpZD0nbmF2QnRuJz5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9uYXYtbWItaWNvbi5zdmcnXHJcbiAgICAgICAgICAgICAgICBhbHQ9J2hlcm8taW1hZ2UnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgbXgtYXV0byBteS1hdXRvJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LWJhci1kcm9wZG93biAgYWJzb2x1dGUgJHtwcmV2ZW50U2Nyb2xsID8gJyBibG9jaycgOiAnIGhpZGRlbiAnfSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgdG9wLTAgaC1zY3JlZW4gdy1zY3JlZW4gbWQ6aGlkZGVuIHotWzk5OV0gZHVyYXRpb24tNzAwICBiZy1ibGFjay84MGB9IGlkPSdiYWNrRHJvcCc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LVsyNzVweF0gYmctZGFyay1ibHVlLTAxIGgtc2NyZWVuICAke3ByZXZlbnRTY3JvbGwgPyAnIHJpZ2h0LTAgJyA6ICcgcmlnaHQtWy0xMDAlXSAnfSB0b3AtMCBhYnNvbHV0ZSB6LVsxMDAwXSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwYH0gaWQ9J25hdk1lbnUnPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCApID0+IHNldHByZXZlbnRTY3JvbGwoIGZhbHNlICl9IGlkPSduYXZCdG4nPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL25hdi1tYi1pY29uLnN2ZydcclxuICAgICAgICAgICAgICAgIGFsdD0naGVyby1pbWFnZSdcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyBteC1hdXRvIG15LWF1dG8nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJOYXZpZ2F0aW9uQmFyIiwicHJldmVudFNjcm9sbCIsInNldHByZXZlbnRTY3JvbGwiLCJzY3JvbGxUb1NlY3Rpb24iLCJzZWN0aW9uSWQiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInNjcm9sbFkiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/header/headerBlock.tsx\n"));

/***/ })

});