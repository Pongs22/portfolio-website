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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavigationBar(param) {\n    let {} = param;\n    _s();\n    const [preventScroll, setpreventScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (preventScroll) {\n        document.body.classList.add(\"overflow-hidden\");\n    } else {\n        document.body.classList.remove(\"overflow-hidden\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setpreventScroll(false);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const scrollToSection = (sectionId)=>{\n        const section = document.querySelector(sectionId);\n        if (section) {\n            const { top } = section.getBoundingClientRect();\n            window.scrollTo({\n                behavior: \"smooth\",\n                top: top + window.scrollY\n            });\n        }\n    };\n    const handleClick = (sectionId)=>{\n        scrollToSection(sectionId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-navbar bg-transparent backdrop-blur-sm absolute top-0 z-[100] w-full b py-[12px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo-container fonr-oswald text-[40px] text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/assets/logoooo.svg\",\n                                alt: \"hero-image\",\n                                width: 70,\n                                height: 60,\n                                className: \" mx-auto my-auto w-[50px] h-[40px] md:w-full md:h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-container align-middle justify-center my-auto hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#works\"),\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#about\"),\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]\",\n                                            onClick: ()=>handleClick(\"#contact\"),\n                                            children: \"CONTACT ME\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-mobile-container align-middle justify-center my-auto block md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setpreventScroll(true),\n                                id: \"navBtn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/assets/nav-mb-icon.svg\",\n                                    alt: \"hero-image\",\n                                    width: 40,\n                                    height: 24,\n                                    className: \" mx-auto my-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-bar-dropdown  absolute \".concat(preventScroll ? \" block\" : \" hidden \", \" transform transition-all top-0 h-screen w-screen md:hidden z-[999] duration-700  bg-black/80\"),\n                    id: \"backDrop\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[275px] bg-dark-blue-01 h-screen  \".concat(preventScroll ? \" right-0 \" : \" right-[-100%] \", \" top-0 absolute z-[1000] transform transition-all duration-500\"),\n                    id: \"navMenu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setpreventScroll(false),\n                        id: \"navBtn\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/assets/nav-mb-icon.svg\",\n                            alt: \"hero-image\",\n                            width: 40,\n                            height: 24,\n                            className: \" mx-auto my-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(NavigationBar, \"5wPb4KH4BEqtZJjtahJA4p0eFTw=\");\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ3JCO0FBRzlCLFNBQVNJLGNBQWMsS0FDdEI7UUFEc0IsRUFDdEIsR0FEc0I7O0lBRXJCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5ELElBQUdHLGVBQWM7UUFDZkUsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztJQUM5QixPQUNLO1FBQ0hILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7SUFDakM7SUFDQVYsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxlQUFlO1lBQ25CTixpQkFBaUI7UUFDbkI7UUFDQU8sT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUY7UUFDbEMsT0FBTztZQUNMQyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVSDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxVQUFVWCxTQUFTWSxhQUFhLENBQUNGO1FBQ3ZDLElBQUlDLFNBQVM7WUFDWCxNQUFNLEVBQUVFLEdBQUcsRUFBRSxHQUFHRixRQUFRRyxxQkFBcUI7WUFDN0NSLE9BQU9TLFFBQVEsQ0FBQztnQkFDZEMsVUFBVTtnQkFDVkgsS0FBS0EsTUFBTVAsT0FBT1csT0FBTztZQUMzQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLENBQUNSO1FBQ25CRCxnQkFBZ0JDO0lBQ2xCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNTO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDeEIsa0RBQUtBO2dDQUNKeUIsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkosV0FBVTs7Ozs7Ozs7Ozs7c0NBRWQsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSztnQ0FBR0wsV0FBVTs7a0RBQ1osOERBQUNNO2tEQUFHLDRFQUFDQzs0Q0FBT1AsV0FBVTs0Q0FBcUVRLFNBQVMsSUFBTVYsWUFBWTtzREFBWTs7Ozs7Ozs7Ozs7a0RBQ2xJLDhEQUFDUTtrREFBRyw0RUFBQ0M7NENBQU9QLFdBQVU7NENBQXFFUSxTQUFTLElBQU1WLFlBQVk7c0RBQVc7Ozs7Ozs7Ozs7O2tEQUNqSSw4REFBQ1E7a0RBQUcsNEVBQUNDOzRDQUFPUCxXQUFVOzRDQUF3SVEsU0FBUyxJQUFNVixZQUFZO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcxTSw4REFBQ0M7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNPO2dDQUFPQyxTQUFTLElBQU83QixpQkFBa0I7Z0NBQVE4QixJQUFHOzBDQUNuRCw0RUFBQ2pDLGtEQUFLQTtvQ0FDSnlCLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTWxCLDhEQUFDRDtvQkFBSUMsV0FBVyw4QkFBb0UsT0FBdEN0QixnQkFBZ0IsV0FBVyxZQUFXO29CQUFnRytCLElBQUc7Ozs7Ozs4QkFFdkwsOERBQUNWO29CQUFJQyxXQUFXLHVDQUF1RixPQUFoRHRCLGdCQUFnQixjQUFjLG1CQUFrQjtvQkFBaUUrQixJQUFHOzhCQUMzSyw0RUFBQ0Y7d0JBQU9DLFNBQVMsSUFBTzdCLGlCQUFrQjt3QkFBUzhCLElBQUc7a0NBQ2hELDRFQUFDakMsa0RBQUtBOzRCQUNKeUIsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUI7R0FwRlN2QjtLQUFBQTtBQXNGVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvY2tzL2hlYWRlci9oZWFkZXJCbG9jay50c3g/M2Y3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbkJhcih7XHJcbn0pIHtcclxuICBjb25zdCBbcHJldmVudFNjcm9sbCwgc2V0cHJldmVudFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmKHByZXZlbnRTY3JvbGwpe1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRwcmV2ZW50U2Nyb2xsKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IChzZWN0aW9uSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VjdGlvbklkKTtcclxuICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHsgdG9wIH0gPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgICB0b3A6IHRvcCArIHdpbmRvdy5zY3JvbGxZLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChzZWN0aW9uSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2Nyb2xsVG9TZWN0aW9uKHNlY3Rpb25JZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdqbS1iLW5hdmJhciBiZy10cmFuc3BhcmVudCBiYWNrZHJvcC1ibHVyLXNtIGFic29sdXRlIHRvcC0wIHotWzEwMF0gdy1mdWxsIGIgcHktWzEycHhdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lciBmb25yLW9zd2FsZCB0ZXh0LVs0MHB4XSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9sb2dvb29vLnN2ZydcclxuICAgICAgICAgICAgICBhbHQ9J2hlcm8taW1hZ2UnXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NjB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPScgbXgtYXV0byBteS1hdXRvIHctWzUwcHhdIGgtWzQwcHhdIG1kOnctZnVsbCBtZDpoLWZ1bGwnXHJcbiAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY29udGFpbmVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBteS1hdXRvIGhpZGRlbiBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGdhcC14LVs3NXB4XSBteS1hdXRvIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBbJj5saV06bXktYXV0byBbJj5saV06Zm9udC1sYXRvIFsmPmxpXTp0ZXh0LVsxNHB4XSc+XHJcbiAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPSd0cmFja2luZy1bMS40cHhdIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWxpZ2h0LWJsdWUtMDUgdHJhbnNpdGlvbi1hbGwnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCcjd29ya3MnKX0gPldvcmtzPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J3RyYWNraW5nLVsxLjRweF0gZm9udC1ib2xkIGhvdmVyOnRleHQtbGlnaHQtYmx1ZS0wNSB0cmFuc2l0aW9uLWFsbCcgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJyNhYm91dCcpfT5BYm91dDwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPSdmb250LW9zd2FsZCBweC00IHB5LTMgYmctbGlnaHQtb3JhbmdlLTA1IGhvdmVyOmJnLWxpZ2h0LW9yYW5nZS0wMyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgdGV4dC13aGl0ZSB0cmFja2luZy1bMS4wNHB4XSByb3VuZGVkLVs0cHhdJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnI2NvbnRhY3QnKX0+Q09OVEFDVCBNRTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtY29udGFpbmVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBteS1hdXRvIGJsb2NrIG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyggKSA9PiBzZXRwcmV2ZW50U2Nyb2xsKCB0cnVlICl9IGlkPSduYXZCdG4nPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL25hdi1tYi1pY29uLnN2ZydcclxuICAgICAgICAgICAgICAgIGFsdD0naGVyby1pbWFnZSdcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9JyBteC1hdXRvIG15LWF1dG8nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtYmFyLWRyb3Bkb3duICBhYnNvbHV0ZSAke3ByZXZlbnRTY3JvbGwgPyAnIGJsb2NrJyA6ICcgaGlkZGVuICd9IHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCB0b3AtMCBoLXNjcmVlbiB3LXNjcmVlbiBtZDpoaWRkZW4gei1bOTk5XSBkdXJhdGlvbi03MDAgIGJnLWJsYWNrLzgwYH0gaWQ9J2JhY2tEcm9wJz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctWzI3NXB4XSBiZy1kYXJrLWJsdWUtMDEgaC1zY3JlZW4gICR7cHJldmVudFNjcm9sbCA/ICcgcmlnaHQtMCAnIDogJyByaWdodC1bLTEwMCVdICd9IHRvcC0wIGFic29sdXRlIHotWzEwMDBdIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDBgfSBpZD0nbmF2TWVudSc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoICkgPT4gc2V0cHJldmVudFNjcm9sbCggZmFsc2UgKX0gaWQ9J25hdkJ0bic+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbmF2LW1iLWljb24uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdoZXJvLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIG14LWF1dG8gbXktYXV0bydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5hdmlnYXRpb25CYXIiLCJwcmV2ZW50U2Nyb2xsIiwic2V0cHJldmVudFNjcm9sbCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsVG9TZWN0aW9uIiwic2VjdGlvbklkIiwic2VjdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwic2Nyb2xsWSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/header/headerBlock.tsx\n"));

/***/ })

});