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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction NavigationBar(param) {\n    let {} = param;\n    const scrollToSection = (sectionId)=>{\n        const section = document.querySelector(sectionId);\n        if (section) {\n            const { top } = section.getBoundingClientRect();\n            window.scrollTo({\n                behavior: \"smooth\",\n                top: top + window.scrollY\n            });\n        }\n    };\n    const handleClick = (sectionId)=>{\n        scrollToSection(sectionId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-navbar bg-transparent backdrop-blur-sm absolute top-0 z-[100] w-full b py-[12px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo-container fonr-oswald text-[40px] text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/assets/logoooo.svg\",\n                            alt: \"hero-image\",\n                            width: 70,\n                            height: 60,\n                            className: \" mx-auto my-auto w-[50px] h-[40px] md:w-full md:h-full\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-container align-middle justify-center my-auto hidden md:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                        onClick: ()=>handleClick(\"#works\"),\n                                        children: \"Works\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                        onClick: ()=>handleClick(\"#about\"),\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]\",\n                                        onClick: ()=>handleClick(\"#contact\"),\n                                        children: \"CONTACT ME\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"menu-mobile-container align-middle justify-center my-auto block md:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/assets/nav-mb-icon.svg\",\n                            alt: \"hero-image\",\n                            width: 40,\n                            height: 24,\n                            className: \" mx-auto my-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFMEI7QUFDSTtBQUc5QixTQUFTRSxjQUFlLEtBQ3ZCO1FBRHVCLEVBQ3ZCLEdBRHVCO0lBR3RCLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxVQUFVQyxTQUFTQyxhQUFhLENBQUNIO1FBQ3ZDLElBQUlDLFNBQVM7WUFDWCxNQUFNLEVBQUVHLEdBQUcsRUFBRSxHQUFHSCxRQUFRSSxxQkFBcUI7WUFDN0NDLE9BQU9DLFFBQVEsQ0FBRTtnQkFDZkMsVUFBVTtnQkFDVkosS0FBS0EsTUFBTUUsT0FBT0csT0FBTztZQUMzQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLENBQUVWO1FBQ3BCRCxnQkFBaUJDO0lBQ25CO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNXO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNmLGtEQUFLQTs0QkFDTmdCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0s7NEJBQUdMLFdBQVU7OzhDQUNaLDhEQUFDTTs4Q0FBRyw0RUFBQ0M7d0NBQU9QLFdBQVU7d0NBQXFFUSxTQUFTLElBQU1WLFlBQWE7a0RBQWE7Ozs7Ozs7Ozs7OzhDQUNwSSw4REFBQ1E7OENBQUcsNEVBQUNDO3dDQUFPUCxXQUFVO3dDQUFxRVEsU0FBUyxJQUFNVixZQUFhO2tEQUFZOzs7Ozs7Ozs7Ozs4Q0FDbkksOERBQUNROzhDQUFHLDRFQUFDQzt3Q0FBT1AsV0FBVTt3Q0FBd0lRLFNBQVMsSUFBTVYsWUFBWTtrREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMU0sOERBQUNDO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDZixrREFBS0E7NEJBQ0pnQixLQUFJOzRCQUNKQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QjtLQWxEU2Q7QUFvRFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyQmxvY2sudHN4PzNmNzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJhcigge1xyXG59ICkge1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoc2VjdGlvbklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25JZCk7XHJcbiAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICBjb25zdCB7IHRvcCB9ID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKCB7XHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIHRvcDogdG9wICsgd2luZG93LnNjcm9sbFksXHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICggc2VjdGlvbklkOiBzdHJpbmcgKSA9PiB7XHJcbiAgICBzY3JvbGxUb1NlY3Rpb24oIHNlY3Rpb25JZCApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdqbS1iLW5hdmJhciBiZy10cmFuc3BhcmVudCBiYWNrZHJvcC1ibHVyLXNtIGFic29sdXRlIHRvcC0wIHotWzEwMF0gdy1mdWxsIGIgcHktWzEycHhdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyIGZvbnItb3N3YWxkIHRleHQtWzQwcHhdIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbG9nb29vby5zdmcnXHJcbiAgICAgICAgICAgICAgYWx0PSdoZXJvLWltYWdlJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nIG14LWF1dG8gbXktYXV0byB3LVs1MHB4XSBoLVs0MHB4XSBtZDp3LWZ1bGwgbWQ6aC1mdWxsJ1xyXG4gICAgICAgICAgICAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBteS1hdXRvIGhpZGRlbiBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZ2FwLXgtWzc1cHhdIG15LWF1dG8gYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIFsmPmxpXTpteS1hdXRvIFsmPmxpXTpmb250LWxhdG8gWyY+bGldOnRleHQtWzE0cHhdJz5cclxuICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0ndHJhY2tpbmctWzEuNHB4XSBmb250LWJvbGQgaG92ZXI6dGV4dC1saWdodC1ibHVlLTA1IHRyYW5zaXRpb24tYWxsJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayggJyN3b3JrcycgKX0gPldvcmtzPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0ndHJhY2tpbmctWzEuNHB4XSBmb250LWJvbGQgaG92ZXI6dGV4dC1saWdodC1ibHVlLTA1IHRyYW5zaXRpb24tYWxsJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayggJyNhYm91dCcgKX0+QWJvdXQ8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPSdmb250LW9zd2FsZCBweC00IHB5LTMgYmctbGlnaHQtb3JhbmdlLTA1IGhvdmVyOmJnLWxpZ2h0LW9yYW5nZS0wMyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgdGV4dC13aGl0ZSB0cmFja2luZy1bMS4wNHB4XSByb3VuZGVkLVs0cHhdJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnI2NvbnRhY3QnKX0+Q09OVEFDVCBNRTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtY29udGFpbmVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBteS1hdXRvIGJsb2NrIG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbmF2LW1iLWljb24uc3ZnJ1xyXG4gICAgICAgICAgICAgIGFsdD0naGVyby1pbWFnZSdcclxuICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBteC1hdXRvIG15LWF1dG8nXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIk5hdmlnYXRpb25CYXIiLCJzY3JvbGxUb1NlY3Rpb24iLCJzZWN0aW9uSWQiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInNjcm9sbFkiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/header/headerBlock.tsx\n"));

/***/ })

});