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

/***/ "(app-pages-browser)/./app/blocks/hero/heroBlock.tsx":
/*!***************************************!*\
  !*** ./app/blocks/hero/heroBlock.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-react */ \"(app-pages-browser)/./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_featured_image_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/featured-image.json */ \"(app-pages-browser)/./public/assets/featured-image.json\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HeroBlock(param) {\n    let {} = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        new split_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"#split\");\n        new split_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"#splitText\");\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".button-container button\", {\n            opacity: 0,\n            y: 10\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".button-container p\", {\n            opacity: 0,\n            y: 10\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".lottie\", {\n            opacity: 0,\n            y: 120\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.from(\"#split .char\", {\n            y: -10,\n            stagger: 0.02,\n            delay: 0.6,\n            duration: .2,\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.from(\"#splitText .char\", {\n            y: -10,\n            stagger: 0.02,\n            delay: 1.3,\n            duration: .1,\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".button-container p\", {\n            y: 0,\n            delay: 2.3,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".button-container button\", {\n            y: 0,\n            delay: 2.8,\n            opacity: 1,\n            duration: .2\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".jm-b-hero-sections .lottie\", {\n            y: 0,\n            delay: 3.3,\n            opacity: 1,\n            stagger: 4\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-hero-sections bg-dark-blue-05 flex lg:pb-[185px] md:pb-[100px] pb-[50px] relative overflow-hidden justify-center text-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-[64px] md:top-[84px] w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height\",\n                    children: Array.from({\n                        length: 10 * 7\n                    }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-dark-blue-01 hover:bg-dark-blue-03 transition-all \"\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative align-middle justify-center z-2 mt-[200px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-container max-w-[256px] md:max-w-[380px] lg:max-w-[625px] mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-left font-oswald text-[19.5px] tracking-[0.536px] leading-normal md:text-[20px] md:tracking-[1.2px] lg:text-[30px] font-normal lg:tracking-[1.5px] p-0 md:pl-1 text-light-orange-05\",\n                                    id: \"split\",\n                                    children: \"Hi I am Jun Mar,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-oswald  text-[27px] md:text-[40px] tracking-[0.512px] leading-[29.184px] md:leading-[43.776px] md:tracking-[0.768px] lg:text-[67px] text-white lg:leading-[61.104px] lg:tracking-[1.072px] \",\n                                    id: \"splitText\",\n                                    children: [\n                                        \"FRONT END \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-light-blue-05\",\n                                            children: \"DEVELOPER\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 247\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 302\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[16.5px] tracking-[0.536px] md:text-[24px] md:tracking-[0.798px] lg:text-[41px] leading-normal lg:tracking-[1.128px]\",\n                                            children: [\n                                                \"AND I \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-light-blue-05\",\n                                                    children: \"LOVE\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 458\n                                                }, this),\n                                                \" DEVELOPING YOUR IDEAS\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 312\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-container flex justify-between mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"max-w-[170px] tracking-[0.1px] md:max-w-[250px] lg:max-w-[335px] text-left text-[10px] md:text-[14px] lg:text-[20px] text-light-gray-01 font-normal font-lato md:leading-[18px] lg:leading-normal\",\n                                            children: \"I am skilled in building and designing things for the web. Currently working web-based projects at Greydient Lab.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            id: \"workshead\",\n                                            className: \"px-2 py-1 md:px-[16px] md:py-[8px] lg:px-[47px] md:leading-[12px] lg:py-[19px] bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white font-oswald text-[12px] md:text-[15px] lg:text-[24px] font-semibold rounded-[4px]\",\n                                            children: \"View Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-[1144px] mx-auto mt-20 lottie\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                animationData: _public_assets_featured_image_json__WEBPACK_IMPORTED_MODULE_3__\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 64\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(HeroBlock, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HeroBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroBlock);\nvar _c;\n$RefreshReg$(_c, \"HeroBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVyby9oZXJvQmxvY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR2lEO0FBQ2Y7QUFDMkM7QUFDMUM7QUFDUDtBQUU1QixTQUFTTSxVQUFXLEtBQ25CO1FBRG1CLEVBQ25CLEdBRG1COztJQUVsQkwsZ0RBQVNBLENBQUU7UUFFVCxJQUFJRyxrREFBU0EsQ0FBRTtRQUNmLElBQUlBLGtEQUFTQSxDQUFFO1FBRWZDLHNDQUFJQSxDQUFDRSxHQUFHLENBQUUsNEJBQTRCO1lBQUNDLFNBQVE7WUFBR0MsR0FBRztRQUFJO1FBQ3pESixzQ0FBSUEsQ0FBQ0UsR0FBRyxDQUFFLHVCQUF1QjtZQUFDQyxTQUFRO1lBQUdDLEdBQUc7UUFBSTtRQUNwREosc0NBQUlBLENBQUNFLEdBQUcsQ0FBRSxXQUFXO1lBQUNDLFNBQVE7WUFBR0MsR0FBRztRQUFLO1FBRXpDSixzQ0FBSUEsQ0FBQ0ssSUFBSSxDQUFFLGdCQUFnQjtZQUN6QkQsR0FBRyxDQUFDO1lBQ0pFLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZMLFNBQVM7UUFDWDtRQUVBSCxzQ0FBSUEsQ0FBQ0ssSUFBSSxDQUFFLG9CQUFvQjtZQUM3QkQsR0FBRyxDQUFDO1lBQ0pFLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZMLFNBQVM7UUFDWDtRQUVBSCxzQ0FBSUEsQ0FBQ1MsRUFBRSxDQUFFLHVCQUF1QjtZQUM5QkwsR0FBRztZQUNIRyxPQUFPO1lBQ1BKLFNBQVM7UUFDWDtRQUVBSCxzQ0FBSUEsQ0FBQ1MsRUFBRSxDQUFFLDRCQUE0QjtZQUNuQ0wsR0FBRztZQUNIRyxPQUFPO1lBQ1BKLFNBQVM7WUFDVEssVUFBVTtRQUNaO1FBRUFSLHNDQUFJQSxDQUFDUyxFQUFFLENBQUUsK0JBQStCO1lBQ3RDTCxHQUFHO1lBQ0hHLE9BQU87WUFDUEosU0FBUztZQUNURyxTQUFTO1FBQ1g7SUFHRixHQUFHLEVBQUU7SUFDTCxxQkFDRTtrQkFDRSw0RUFBQ0k7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaQyxNQUFNUCxJQUFJLENBQUU7d0JBQUVRLFFBQVEsS0FBSztvQkFBRSxHQUFJQyxHQUFHLENBQUUsQ0FBRUMsR0FBR0Msc0JBQzFDLDhEQUFDTjs0QkFBZ0JDLFdBQVU7MkJBQWpCSzs7Ozs7Ozs7Ozs4QkFJZCw4REFBQ047b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNNO29DQUFFTixXQUFVO29DQUEyTE8sSUFBRzs4Q0FBUTs7Ozs7OzhDQUNuTiw4REFBQ0M7b0NBQUdSLFdBQVU7b0NBQW1NTyxJQUFHOzt3Q0FBWTtzREFBVSw4REFBQ0U7NENBQUtULFdBQVU7c0RBQXFCOzs7Ozs7d0NBQWdCO3NEQUFFLDhEQUFDVTs7Ozs7d0NBQVE7c0RBQUMsOERBQUNEOzRDQUFLVCxXQUFVOztnREFBNEg7OERBQU0sOERBQUNTO29EQUFLVCxXQUFVOzhEQUFxQjs7Ozs7O2dEQUFXOzs7Ozs7Ozs7Ozs7OzhDQUM3ZSw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTTs0Q0FBRU4sV0FBVTtzREFBb007Ozs7OztzREFDak4sOERBQUNXOzRDQUFPSixJQUFHOzRDQUFZUCxXQUFVO3NEQUFtUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUd4Uiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQXNDLDRFQUFDZCxxREFBTUE7Z0NBQUMwQixlQUFlekIsK0RBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pHO0dBeEVTRztLQUFBQTtBQTBFVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvY2tzL2hlcm8vaGVyb0Jsb2NrLnRzeD8zY2JiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG90dGllIGZyb20gXCJsb3R0aWUtcmVhY3RcIjtcclxuaW1wb3J0IGdyb292eVdhbGtBbmltYXRpb24gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvZmVhdHVyZWQtaW1hZ2UuanNvblwiO1xyXG5pbXBvcnQgU3BsaXRUeXBlIGZyb20gJ3NwbGl0LXR5cGUnO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XHJcblxyXG5mdW5jdGlvbiBIZXJvQmxvY2soIHtcclxufSApIHtcclxuICB1c2VFZmZlY3QoICgpID0+IHtcclxuXHJcbiAgICBuZXcgU3BsaXRUeXBlKCAnI3NwbGl0JyApO1xyXG4gICAgbmV3IFNwbGl0VHlwZSggJyNzcGxpdFRleHQnICk7XHJcblxyXG4gICAgZ3NhcC5zZXQoICcuYnV0dG9uLWNvbnRhaW5lciBidXR0b24nLCB7b3BhY2l0eTowLCB5OiAxMCwgfSApO1xyXG4gICAgZ3NhcC5zZXQoICcuYnV0dG9uLWNvbnRhaW5lciBwJywge29wYWNpdHk6MCwgeTogMTAsIH0gKTtcclxuICAgIGdzYXAuc2V0KCAnLmxvdHRpZScsIHtvcGFjaXR5OjAsIHk6IDEyMCwgfSApO1xyXG5cclxuICAgIGdzYXAuZnJvbSggJyNzcGxpdCAuY2hhcicsIHtcclxuICAgICAgeTogLTEwLFxyXG4gICAgICBzdGFnZ2VyOiAwLjAyLFxyXG4gICAgICBkZWxheTogMC42LFxyXG4gICAgICBkdXJhdGlvbjogLjIsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9ICk7XHJcblxyXG4gICAgZ3NhcC5mcm9tKCAnI3NwbGl0VGV4dCAuY2hhcicsIHtcclxuICAgICAgeTogLTEwLFxyXG4gICAgICBzdGFnZ2VyOiAwLjAyLFxyXG4gICAgICBkZWxheTogMS4zLFxyXG4gICAgICBkdXJhdGlvbjogLjEsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9ICk7XHJcblxyXG4gICAgZ3NhcC50byggJy5idXR0b24tY29udGFpbmVyIHAnLCB7XHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIGRlbGF5OiAyLjMsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9ICk7XHJcbiAgXHJcbiAgICBnc2FwLnRvKCAnLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uJywge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBkZWxheTogMi44LFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICBkdXJhdGlvbjogLjIsXHJcbiAgICB9ICk7XHJcbiAgXHJcbiAgICBnc2FwLnRvKCAnLmptLWItaGVyby1zZWN0aW9ucyAubG90dGllJywge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBkZWxheTogMy4zLFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICBzdGFnZ2VyOiA0LFxyXG4gICAgfSApO1xyXG4gIFxyXG5cclxuICB9LCBbXSApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nam0tYi1oZXJvLXNlY3Rpb25zIGJnLWRhcmstYmx1ZS0wNSBmbGV4IGxnOnBiLVsxODVweF0gbWQ6cGItWzEwMHB4XSBwYi1bNTBweF0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyICc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWzY0cHhdIG1kOnRvcC1bODRweF0gdy1zY3JlZW4gaC1zY3JlZW4gei0xIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncmlkIGdyaWQtY29scy1ib3hlcy1zbS13aWR0aCBncmlkLXJvd3MtYm94ZXMtc20taGVpZ2h0IG1kOmdyaWQtY29scy1ib3hlcy13aWR0aC1tZCBtZDpncmlkLXJvd3MtYm94ZXMtaGVpZ2h0LW1kIGxnOmdyaWQtY29scy1ib3hlcy13aWR0aCBsZzpncmlkLXJvd3MtYm94ZXMtaGVpZ2h0XCI+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSggeyBsZW5ndGg6IDEwICogNyB9ICkubWFwKCAoIF8sIGluZGV4ICkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgc2l6ZS1bMTI1cHhdIG1kOnNpemUtWzE1MHB4XSBsZzpzaXplLVsyMDBweF0gYm9yZGVyIGJvcmRlci1kYXJrLWJsdWUtMDEgaG92ZXI6YmctZGFyay1ibHVlLTAzIHRyYW5zaXRpb24tYWxsIFwiPjwvZGl2PlxyXG4gICAgICAgICAgKSApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWxhdGl2ZSBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgei0yIG10LVsyMDBweF1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXIgbWF4LXctWzI1NnB4XSBtZDptYXgtdy1bMzgwcHhdIGxnOm1heC13LVs2MjVweF0gbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGVmdCBmb250LW9zd2FsZCB0ZXh0LVsxOS41cHhdIHRyYWNraW5nLVswLjUzNnB4XSBsZWFkaW5nLW5vcm1hbCBtZDp0ZXh0LVsyMHB4XSBtZDp0cmFja2luZy1bMS4ycHhdIGxnOnRleHQtWzMwcHhdIGZvbnQtbm9ybWFsIGxnOnRyYWNraW5nLVsxLjVweF0gcC0wIG1kOnBsLTEgdGV4dC1saWdodC1vcmFuZ2UtMDUnIGlkPSdzcGxpdCc+SGkgSSBhbSBKdW4gTWFyLDwvcD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1vc3dhbGQgIHRleHQtWzI3cHhdIG1kOnRleHQtWzQwcHhdIHRyYWNraW5nLVswLjUxMnB4XSBsZWFkaW5nLVsyOS4xODRweF0gbWQ6bGVhZGluZy1bNDMuNzc2cHhdIG1kOnRyYWNraW5nLVswLjc2OHB4XSBsZzp0ZXh0LVs2N3B4XSB0ZXh0LXdoaXRlIGxnOmxlYWRpbmctWzYxLjEwNHB4XSBsZzp0cmFja2luZy1bMS4wNzJweF0gJyBpZD0nc3BsaXRUZXh0Jz5GUk9OVCBFTkQgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LWxpZ2h0LWJsdWUtMDUnPkRFVkVMT1BFUjwvc3Bhbj4gIDxicj48L2JyPiA8c3BhbiBjbGFzc05hbWU9J3RleHQtWzE2LjVweF0gdHJhY2tpbmctWzAuNTM2cHhdIG1kOnRleHQtWzI0cHhdIG1kOnRyYWNraW5nLVswLjc5OHB4XSBsZzp0ZXh0LVs0MXB4XSBsZWFkaW5nLW5vcm1hbCBsZzp0cmFja2luZy1bMS4xMjhweF0nPkFORCBJIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1saWdodC1ibHVlLTA1Jz5MT1ZFPC9zcGFuPiBERVZFTE9QSU5HIFlPVVIgSURFQVM8L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTRcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21heC13LVsxNzBweF0gdHJhY2tpbmctWzAuMXB4XSBtZDptYXgtdy1bMjUwcHhdIGxnOm1heC13LVszMzVweF0gdGV4dC1sZWZ0IHRleHQtWzEwcHhdIG1kOnRleHQtWzE0cHhdIGxnOnRleHQtWzIwcHhdIHRleHQtbGlnaHQtZ3JheS0wMSBmb250LW5vcm1hbCBmb250LWxhdG8gbWQ6bGVhZGluZy1bMThweF0gbGc6bGVhZGluZy1ub3JtYWwnPkkgYW0gc2tpbGxlZCBpbiBidWlsZGluZyBhbmQgZGVzaWduaW5nIHRoaW5ncyBmb3IgdGhlIHdlYi4gQ3VycmVudGx5IHdvcmtpbmcgd2ViLWJhc2VkIHByb2plY3RzIGF0IEdyZXlkaWVudCBMYWIuPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ3b3Jrc2hlYWRcIiBjbGFzc05hbWU9J3B4LTIgcHktMSBtZDpweC1bMTZweF0gbWQ6cHktWzhweF0gbGc6cHgtWzQ3cHhdIG1kOmxlYWRpbmctWzEycHhdIGxnOnB5LVsxOXB4XSBiZy1saWdodC1vcmFuZ2UtMDUgaG92ZXI6YmctbGlnaHQtb3JhbmdlLTAzIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCB0ZXh0LXdoaXRlIGZvbnQtb3N3YWxkIHRleHQtWzEycHhdIG1kOnRleHQtWzE1cHhdIGxnOnRleHQtWzI0cHhdIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1bNHB4XSc+VmlldyBQcm9qZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTE0NHB4XSBteC1hdXRvIG10LTIwIGxvdHRpZVwiPjxMb3R0aWUgYW5pbWF0aW9uRGF0YT17Z3Jvb3Z5V2Fsa0FuaW1hdGlvbn0gLz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXYgPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb0Jsb2NrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMb3R0aWUiLCJncm9vdnlXYWxrQW5pbWF0aW9uIiwiU3BsaXRUeXBlIiwiZ3NhcCIsIkhlcm9CbG9jayIsInNldCIsIm9wYWNpdHkiLCJ5IiwiZnJvbSIsInN0YWdnZXIiLCJkZWxheSIsImR1cmF0aW9uIiwidG8iLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImxlbmd0aCIsIm1hcCIsIl8iLCJpbmRleCIsInAiLCJpZCIsImgxIiwic3BhbiIsImJyIiwiYnV0dG9uIiwiYW5pbWF0aW9uRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/hero/heroBlock.tsx\n"));

/***/ })

});