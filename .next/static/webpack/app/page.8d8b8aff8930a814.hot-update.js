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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction NavigationBar(param) {\n    let {} = param;\n    _s();\n    const [preventScroll, setpreventScroll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    if (preventScroll) {\n        document.body.classList.add(\"overflow-hidden\");\n    } else {\n        document.body.classList.remove(\"overflow-hidden\");\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setpreventScroll(false);\n        };\n        window.addEventListener(\"resize\", handleResize);\n    }, []);\n    const scrollToSection = (sectionId)=>{\n        const section = document.querySelector(sectionId);\n        if (section) {\n            const { top } = section.getBoundingClientRect();\n            window.scrollTo({\n                behavior: \"smooth\",\n                top: top + window.scrollY\n            });\n        }\n    };\n    const handleClick = (sectionId)=>{\n        scrollToSection(sectionId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jm-b-navbar bg-transparent absolute top-0 z-[100] w-full b py-[12px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"logo-container fonr-oswald text-[40px] text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"/assets/logoooo.svg\",\n                                alt: \"hero-image\",\n                                width: 70,\n                                height: 60,\n                                className: \" mx-auto my-auto w-[50px] h-[40px] md:w-full md:h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-container align-middle justify-center my-auto hidden md:block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex gap-x-[75px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#works\"),\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#about\"),\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]\",\n                                            onClick: ()=>handleClick(\"#contact\"),\n                                            children: \"CONTACT ME\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-mobile-container align-middle justify-center my-auto block md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setpreventScroll(true),\n                                id: \"navBtn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: \"/assets/nav-mb-icon.svg\",\n                                    alt: \"hero-image\",\n                                    width: 40,\n                                    height: 24,\n                                    className: \" mx-auto my-auto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav-bar-dropdown  absolute \".concat(preventScroll ? \" block\" : \" hidden \", \" transform transition-all top-0 h-screen w-screen md:hidden z-[999] duration-700  bg-black/80\"),\n                id: \"backDrop\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[275px] bg-dark-blue-01 h-screen  \".concat(preventScroll ? \" right-0 \" : \" right-[-100%] \", \" top-0 absolute z-[1000] transform transition-all duration-500 py-[12px] px-[24px] justify-end flex\"),\n                id: \"navMenu\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setpreventScroll(false),\n                    id: \"navBtn\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/assets/close-img.svg\",\n                            alt: \"hero-image\",\n                            width: 40,\n                            height: 24,\n                            className: \"absolute top-[12px] right-[24px]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex flex-col gap-y-[50px] my-auto align-middle justify-center [&>li]:my-auto [&>li]:font-lato [&>li]:text-[14px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#works\"),\n                                            children: \"Works\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#about\"),\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"tracking-[1.4px] font-bold hover:text-light-blue-05 transition-all\",\n                                            onClick: ()=>handleClick(\"#contact\"),\n                                            children: \"Contact Me\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"font-oswald px-4 py-3 bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white tracking-[1.04px] rounded-[4px]\",\n                                            onClick: ()=>handleClick(\"#contact\"),\n                                            children: \"Download CV\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\header\\\\headerBlock.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(NavigationBar, \"5wPb4KH4BEqtZJjtahJA4p0eFTw=\");\n_c = NavigationBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationBar);\nvar _c;\n$RefreshReg$(_c, \"NavigationBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRW1EO0FBQ3JCO0FBRzlCLFNBQVNJLGNBQWMsS0FDdEI7UUFEc0IsRUFDdEIsR0FEc0I7O0lBRXJCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5ELElBQUlHLGVBQWU7UUFDakJFLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDOUIsT0FDSztRQUNISCxTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO0lBQ2pDO0lBQ0FWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsZUFBZTtZQUNuQk4saUJBQWlCO1FBQ25CO1FBQ0FPLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVGO0lBQ3BDLEdBQUcsRUFBRTtJQUVMLE1BQU1HLGtCQUFrQixDQUFDQztRQUN2QixNQUFNQyxVQUFVVixTQUFTVyxhQUFhLENBQUNGO1FBQ3ZDLElBQUlDLFNBQVM7WUFDWCxNQUFNLEVBQUVFLEdBQUcsRUFBRSxHQUFHRixRQUFRRyxxQkFBcUI7WUFDN0NQLE9BQU9RLFFBQVEsQ0FBQztnQkFDZEMsVUFBVTtnQkFDVkgsS0FBS0EsTUFBTU4sT0FBT1UsT0FBTztZQUMzQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxjQUFjLENBQUNSO1FBQ25CRCxnQkFBZ0JDO0lBQ2xCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDUztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3ZCLGtEQUFLQTtnQ0FDSndCLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JKLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVkLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQUdMLFdBQVU7O2tEQUNaLDhEQUFDTTtrREFBRyw0RUFBQ0M7NENBQU9QLFdBQVU7NENBQXFFUSxTQUFTLElBQU1WLFlBQVk7c0RBQVk7Ozs7Ozs7Ozs7O2tEQUNsSSw4REFBQ1E7a0RBQUcsNEVBQUNDOzRDQUFPUCxXQUFVOzRDQUFxRVEsU0FBUyxJQUFNVixZQUFZO3NEQUFXOzs7Ozs7Ozs7OztrREFDakksOERBQUNRO2tEQUFHLDRFQUFDQzs0Q0FBT1AsV0FBVTs0Q0FBd0lRLFNBQVMsSUFBTVYsWUFBWTtzREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMU0sOERBQUNDOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDTztnQ0FBT0MsU0FBUyxJQUFNNUIsaUJBQWlCO2dDQUFPNkIsSUFBRzswQ0FDaEQsNEVBQUNoQyxrREFBS0E7b0NBQ0p3QixLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXBCLDhEQUFDRDtnQkFBSUMsV0FBVyw4QkFBb0UsT0FBdENyQixnQkFBZ0IsV0FBVyxZQUFXO2dCQUFnRzhCLElBQUc7Ozs7OzswQkFFckwsOERBQUNWO2dCQUFJQyxXQUFXLHVDQUF1RixPQUFoRHJCLGdCQUFnQixjQUFjLG1CQUFrQjtnQkFBc0c4QixJQUFHOzBCQUM5TSw0RUFBQ0Y7b0JBQU9DLFNBQVMsSUFBTTVCLGlCQUFpQjtvQkFBUTZCLElBQUc7O3NDQUNqRCw4REFBQ2hDLGtEQUFLQTs0QkFDSndCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JKLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2YsNEVBQUNLO2dDQUFHTCxXQUFVOztrREFDWiw4REFBQ007a0RBQUcsNEVBQUNDOzRDQUFPUCxXQUFVOzRDQUFxRVEsU0FBUyxJQUFNVixZQUFZO3NEQUFXOzs7Ozs7Ozs7OztrREFDakksOERBQUNRO2tEQUFHLDRFQUFDQzs0Q0FBT1AsV0FBVTs0Q0FBcUVRLFNBQVMsSUFBTVYsWUFBWTtzREFBVzs7Ozs7Ozs7Ozs7a0RBQ2pJLDhEQUFDUTtrREFBRyw0RUFBQ0M7NENBQU9QLFdBQVU7NENBQXFFUSxTQUFTLElBQU1WLFlBQVk7c0RBQWE7Ozs7Ozs7Ozs7O2tEQUNuSSw4REFBQ1E7a0RBQUcsNEVBQUNDOzRDQUFPUCxXQUFVOzRDQUF3SVEsU0FBUyxJQUFNVixZQUFZO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwTjtHQXhGU3BCO0tBQUFBO0FBMEZULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ja3MvaGVhZGVyL2hlYWRlckJsb2NrLnRzeD8zZjczIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKHtcclxufSkge1xyXG4gIGNvbnN0IFtwcmV2ZW50U2Nyb2xsLCBzZXRwcmV2ZW50U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKHByZXZlbnRTY3JvbGwpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJyk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0cHJldmVudFNjcm9sbChmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoc2VjdGlvbklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25JZCk7XHJcbiAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICBjb25zdCB7IHRvcCB9ID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgdG9wOiB0b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoc2VjdGlvbklkOiBzdHJpbmcpID0+IHtcclxuICAgIHNjcm9sbFRvU2VjdGlvbihzZWN0aW9uSWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nam0tYi1uYXZiYXIgYmctdHJhbnNwYXJlbnQgYWJzb2x1dGUgdG9wLTAgei1bMTAwXSB3LWZ1bGwgYiBweS1bMTJweF0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyIGZvbnItb3N3YWxkIHRleHQtWzQwcHhdIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2xvZ29vb28uc3ZnJ1xyXG4gICAgICAgICAgICAgIGFsdD0naGVyby1pbWFnZSdcclxuICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9JyBteC1hdXRvIG15LWF1dG8gdy1bNTBweF0gaC1bNDBweF0gbWQ6dy1mdWxsIG1kOmgtZnVsbCdcclxuICAgICAgICAgICAgLz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIG15LWF1dG8gaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZ2FwLXgtWzc1cHhdIG15LWF1dG8gYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIFsmPmxpXTpteS1hdXRvIFsmPmxpXTpmb250LWxhdG8gWyY+bGldOnRleHQtWzE0cHhdJz5cclxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J3RyYWNraW5nLVsxLjRweF0gZm9udC1ib2xkIGhvdmVyOnRleHQtbGlnaHQtYmx1ZS0wNSB0cmFuc2l0aW9uLWFsbCcgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJyN3b3JrcycpfSA+V29ya3M8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0ndHJhY2tpbmctWzEuNHB4XSBmb250LWJvbGQgaG92ZXI6dGV4dC1saWdodC1ibHVlLTA1IHRyYW5zaXRpb24tYWxsJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnI2Fib3V0Jyl9PkFib3V0PC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J2ZvbnQtb3N3YWxkIHB4LTQgcHktMyBiZy1saWdodC1vcmFuZ2UtMDUgaG92ZXI6YmctbGlnaHQtb3JhbmdlLTAzIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCB0ZXh0LXdoaXRlIHRyYWNraW5nLVsxLjA0cHhdIHJvdW5kZWQtWzRweF0nIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCcjY29udGFjdCcpfT5DT05UQUNUIE1FPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1jb250YWluZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIG15LWF1dG8gYmxvY2sgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0cHJldmVudFNjcm9sbCh0cnVlKX0gaWQ9J25hdkJ0bic+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbmF2LW1iLWljb24uc3ZnJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdoZXJvLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nIG14LWF1dG8gbXktYXV0bydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXYtYmFyLWRyb3Bkb3duICBhYnNvbHV0ZSAke3ByZXZlbnRTY3JvbGwgPyAnIGJsb2NrJyA6ICcgaGlkZGVuICd9IHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCB0b3AtMCBoLXNjcmVlbiB3LXNjcmVlbiBtZDpoaWRkZW4gei1bOTk5XSBkdXJhdGlvbi03MDAgIGJnLWJsYWNrLzgwYH0gaWQ9J2JhY2tEcm9wJz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctWzI3NXB4XSBiZy1kYXJrLWJsdWUtMDEgaC1zY3JlZW4gICR7cHJldmVudFNjcm9sbCA/ICcgcmlnaHQtMCAnIDogJyByaWdodC1bLTEwMCVdICd9IHRvcC0wIGFic29sdXRlIHotWzEwMDBdIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgcHktWzEycHhdIHB4LVsyNHB4XSBqdXN0aWZ5LWVuZCBmbGV4YH0gaWQ9J25hdk1lbnUnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRwcmV2ZW50U2Nyb2xsKGZhbHNlKX0gaWQ9J25hdkJ0bic+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9jbG9zZS1pbWcuc3ZnJ1xyXG4gICAgICAgICAgICAgIGFsdD0naGVyby1pbWFnZSdcclxuICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bMTJweF0gcmlnaHQtWzI0cHhdJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtd3JhcHBlciBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC15LVs1MHB4XSBteS1hdXRvIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBbJj5saV06bXktYXV0byBbJj5saV06Zm9udC1sYXRvIFsmPmxpXTp0ZXh0LVsxNHB4XSc+XHJcbiAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPSd0cmFja2luZy1bMS40cHhdIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWxpZ2h0LWJsdWUtMDUgdHJhbnNpdGlvbi1hbGwnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCcjd29ya3MnKX0+V29ya3M8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0ndHJhY2tpbmctWzEuNHB4XSBmb250LWJvbGQgaG92ZXI6dGV4dC1saWdodC1ibHVlLTA1IHRyYW5zaXRpb24tYWxsJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygnI2Fib3V0Jyl9PkFib3V0PC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9J3RyYWNraW5nLVsxLjRweF0gZm9udC1ib2xkIGhvdmVyOnRleHQtbGlnaHQtYmx1ZS0wNSB0cmFuc2l0aW9uLWFsbCcgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJyNjb250YWN0Jyl9PkNvbnRhY3QgTWU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YnV0dG9uIGNsYXNzTmFtZT0nZm9udC1vc3dhbGQgcHgtNCBweS0zIGJnLWxpZ2h0LW9yYW5nZS0wNSBob3ZlcjpiZy1saWdodC1vcmFuZ2UtMDMgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHRleHQtd2hpdGUgdHJhY2tpbmctWzEuMDRweF0gcm91bmRlZC1bNHB4XScgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soJyNjb250YWN0Jyl9PkRvd25sb2FkIENWPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTmF2aWdhdGlvbkJhciIsInByZXZlbnRTY3JvbGwiLCJzZXRwcmV2ZW50U2Nyb2xsIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvU2VjdGlvbiIsInNlY3Rpb25JZCIsInNlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInNjcm9sbFkiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/header/headerBlock.tsx\n"));

/***/ })

});