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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavigationBar(param) {\n    let {} = param;\n    _s();\n    const [preventScroll, setpreventScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const scrollToSection = (sectionId)=>{\n        const section = document.querySelector(sectionId);\n        if (section) {\n            const { top } = section.getBoundingClientRect();\n            window.scrollTo({\n                behavior: \"smooth\",\n                top: top + window.scrollY\n            });\n        }\n    };\n    const handleClick = (sectionId)=>{\n        scrollToSection(sectionId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-navbar bg-transparent backdrop-blur-sm absolute top-0 z-[100] w-full b py-[12px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo-container fonr-oswald text-[40px] text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/assets/logoooo.svg\",\n                                alt: \"hero-image\",\n                                width: 70,\n                                height: 60,\n                                className: \" mx-auto my-auto w-[50px] h-[40px] md:w-full md:h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-container align-middle justify-center my-auto hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#works\"),\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#about\"),\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]\",\n                                            onClick: ()=>handleClick(\"#contact\"),\n                                            children: \"CONTACT ME\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-mobile-container align-middle justify-center my-auto block md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setpreventScroll(true),\n                                id: \"navBtn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/assets/nav-mb-icon.svg\",\n                                    alt: \"hero-image\",\n                                    width: 40,\n                                    height: 24,\n                                    className: \" mx-auto my-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-bar-dropdown hidden absolute top-0 h-screen w-screen md:hidden z-[999] backdrop-blur-xl bg-white/30\",\n                    id: \"backDrop\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[275px] bg-dark-blue-01 h-screen  \".concat(preventScroll ? \" right-[-100%]\" : \" right-0 \", \" top-0 absolute z-[1000] transform transition-all\"),\n                    id: \"navMenu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setpreventScroll(false),\n                        id: \"navBtn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/assets/nav-mb-icon.svg\",\n                            alt: \"hero-image\",\n                            width: 40,\n                            height: 24,\n                            className: \" mx-auto my-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(NavigationBar, \"zBst9Xp7uYrwbeTilKiBgdN0spk=\");\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ3JCO0FBRzlCLFNBQVNHLGNBQWMsS0FDdEI7UUFEc0IsRUFDdEIsR0FEc0I7O0lBRXJCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1LLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxVQUFVQyxTQUFTQyxhQUFhLENBQUNIO1FBQ3ZDLElBQUlDLFNBQVM7WUFDWCxNQUFNLEVBQUVHLEdBQUcsRUFBRSxHQUFHSCxRQUFRSSxxQkFBcUI7WUFDN0NDLE9BQU9DLFFBQVEsQ0FBQztnQkFDZEMsVUFBVTtnQkFDVkosS0FBS0EsTUFBTUUsT0FBT0csT0FBTztZQUMzQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLENBQUNWO1FBQ25CRCxnQkFBZ0JDO0lBQ2xCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNXO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDakIsa0RBQUtBO2dDQUNKa0IsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkosV0FBVTs7Ozs7Ozs7Ozs7c0NBRWQsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSztnQ0FBR0wsV0FBVTs7a0RBQ1osOERBQUNNO2tEQUFHLDRFQUFDQzs0Q0FBT1AsV0FBVTs0Q0FBcUVRLFNBQVMsSUFBTVYsWUFBWTtzREFBWTs7Ozs7Ozs7Ozs7a0RBQ2xJLDhEQUFDUTtrREFBRyw0RUFBQ0M7NENBQU9QLFdBQVU7NENBQXFFUSxTQUFTLElBQU1WLFlBQVk7c0RBQVc7Ozs7Ozs7Ozs7O2tEQUNqSSw4REFBQ1E7a0RBQUcsNEVBQUNDOzRDQUFPUCxXQUFVOzRDQUF3SVEsU0FBUyxJQUFNVixZQUFZO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcxTSw4REFBQ0M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNPO2dDQUFPQyxTQUFTLElBQU90QixpQkFBa0I7Z0NBQVF1QixJQUFHOzBDQUNuRCw0RUFBQzFCLGtEQUFLQTtvQ0FDSmtCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTWxCLDhEQUFDRDtvQkFBSUMsV0FBVTtvQkFBMEdTLElBQUc7Ozs7Ozs4QkFFNUgsOERBQUNWO29CQUFJQyxXQUFXLHVDQUFzRixPQUEvQ2YsZ0JBQWdCLG1CQUFtQixhQUFZO29CQUFvRHdCLElBQUc7OEJBQzdKLDRFQUFDRjt3QkFBT0MsU0FBUyxJQUFPdEIsaUJBQWtCO3dCQUFTdUIsSUFBRztrQ0FDaEQsNEVBQUMxQixrREFBS0E7NEJBQ0prQixLQUFJOzRCQUNKQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExQjtHQXBFU2hCO0tBQUFBO0FBc0VULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeD8zZjczIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKHtcclxufSkge1xyXG4gIGNvbnN0IFtwcmV2ZW50U2Nyb2xsLCBzZXRwcmV2ZW50U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKHNlY3Rpb25JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uSWQpO1xyXG4gICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgY29uc3QgeyB0b3AgfSA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIHRvcDogdG9wICsgd2luZG93LnNjcm9sbFksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHNlY3Rpb25JZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzY3JvbGxUb1NlY3Rpb24oc2VjdGlvbklkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ptLWItbmF2YmFyIGJnLXRyYW5zcGFyZW50IGJhY2tkcm9wLWJsdXItc20gYWJzb2x1dGUgdG9wLTAgei1bMTAwXSB3LWZ1bGwgYiBweS1bMTJweF0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyIGZvbnItb3N3YWxkIHRleHQtWzQwcHhdIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2xvZ29vb28uc3ZnJ1xyXG4gICAgICAgICAgICAgIGFsdD0naGVyby1pbWFnZSdcclxuICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBteC1hdXRvIG15LWF1dG8gdy1bNTBweF0gaC1bNDBweF0gbWQ6dy1mdWxsIG1kOmgtZnVsbCdcclxuICAgICAgICAgICAgLz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIG15LWF1dG8gaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZ2FwLXgtWzc1cHhdIG15LWF1dG8gYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIFsmPmxpXTpteS1hdXRvIFsmPmxpXTpmb250LWxhdG8gWyY+bGldOnRleHQtWzE0cHhdJz5cclxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J3RyYWNraW5nLVsxLjRweF0gZm9udC1ib2xkIGhvdmVyOnRleHQtbGlnaHQtYmx1ZS0wNSB0cmFuc2l0aW9uLWFsbCcgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJyN3b3JrcycpfSA+V29ya3M8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0ndHJhY2tpbmctWzEuNHB4XSBmb250LWJvbGQgaG92ZXI6dGV4dC1saWdodC1ibHVlLTA1IHRyYW5zaXRpb24tYWxsJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnI2Fib3V0Jyl9PkFib3V0PC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J2ZvbnQtb3N3YWxkIHB4LTQgcHktMyBiZy1saWdodC1vcmFuZ2UtMDUgaG92ZXI6YmctbGlnaHQtb3JhbmdlLTAzIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCB0ZXh0LXdoaXRlIHRyYWNraW5nLVsxLjA0cHhdIHJvdW5kZWQtWzRweF0nIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCcjY29udGFjdCcpfT5DT05UQUNUIE1FPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1jb250YWluZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIG15LWF1dG8gYmxvY2sgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCApID0+IHNldHByZXZlbnRTY3JvbGwoIHRydWUgKX0gaWQ9J25hdkJ0bic+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbmF2LW1iLWljb24uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdoZXJvLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIG14LWF1dG8gbXktYXV0bydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1iYXItZHJvcGRvd24gaGlkZGVuIGFic29sdXRlIHRvcC0wIGgtc2NyZWVuIHctc2NyZWVuIG1kOmhpZGRlbiB6LVs5OTldIGJhY2tkcm9wLWJsdXIteGwgYmctd2hpdGUvMzBcIiBpZD0nYmFja0Ryb3AnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy1bMjc1cHhdIGJnLWRhcmstYmx1ZS0wMSBoLXNjcmVlbiAgJHtwcmV2ZW50U2Nyb2xsID8gJyByaWdodC1bLTEwMCVdJyA6ICcgcmlnaHQtMCAnfSB0b3AtMCBhYnNvbHV0ZSB6LVsxMDAwXSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGxgfSBpZD0nbmF2TWVudSc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoICkgPT4gc2V0cHJldmVudFNjcm9sbCggZmFsc2UgKX0gaWQ9J25hdkJ0bic+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbmF2LW1iLWljb24uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdoZXJvLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIG14LWF1dG8gbXktYXV0bydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5hdmlnYXRpb25CYXIiLCJwcmV2ZW50U2Nyb2xsIiwic2V0cHJldmVudFNjcm9sbCIsInNjcm9sbFRvU2VjdGlvbiIsInNlY3Rpb25JZCIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwic2Nyb2xsWSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/header/headerBlock.tsx\n"));

/***/ })

});