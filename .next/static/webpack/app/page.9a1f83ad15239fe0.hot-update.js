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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-react */ \"(app-pages-browser)/./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_featured_image_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/assets/featured-image.json */ \"(app-pages-browser)/./public/assets/featured-image.json\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HeroBlock(param) {\n    let {} = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        new split_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"#split\");\n        new split_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"#splitText\");\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".button-container button\", {\n            opacity: 0,\n            y: 10\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".button-container p\", {\n            opacity: 0,\n            y: 10\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".lottie\", {\n            opacity: 0,\n            y: 120\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.from(\"#split .char\", {\n            y: -10,\n            stagger: 0.02,\n            delay: 0.6,\n            duration: .2,\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.from(\"#splitText .char\", {\n            y: -10,\n            stagger: 0.02,\n            delay: 1.3,\n            duration: .1,\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".button-container p\", {\n            y: 0,\n            delay: 2.3,\n            opacity: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".button-container button\", {\n            y: 0,\n            delay: 2.8,\n            opacity: 1,\n            duration: .2\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".jm-b-hero-sections .lottie\", {\n            y: 0,\n            delay: 3.3,\n            opacity: 1,\n            stagger: 4\n        });\n    }, []);\n    const scrollToSection = (sectionId)=>{\n        const section = document.querySelector(sectionId);\n        if (section) {\n            const { top } = section.getBoundingClientRect();\n            window.scrollTo({\n                behavior: \"smooth\",\n                top: top + window.scrollY\n            });\n        }\n    };\n    const handleClick = (sectionId)=>{\n        scrollToSection(sectionId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-hero-sections bg-dark-blue-05 flex lg:pb-[185px] md:pb-[100px] pb-[50px] relative overflow-hidden justify-center text-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-[64px] md:top-[84px] w-screen h-screen z-1 align-items-center justify-center grid grid-cols-boxes-sm-width grid-rows-boxes-sm-height md:grid-cols-boxes-width-md md:grid-rows-boxes-height-md lg:grid-cols-boxes-width lg:grid-rows-boxes-height\",\n                    children: Array.from({\n                        length: 10 * 7\n                    }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 size-[125px] md:size-[150px] lg:size-[200px] border border-dark-blue-01 transition-all \"\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container relative align-middle justify-center z-2 mt-[200px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-container max-w-[256px] md:max-w-[380px] lg:max-w-[625px] mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-left font-oswald text-[19.5px] tracking-[0.536px] leading-normal md:text-[20px] md:tracking-[1.2px] lg:text-[30px] font-normal lg:tracking-[1.5px] p-0 md:pl-1 text-light-orange-05\",\n                                    id: \"split\",\n                                    children: \"Hi I am Jun Mar,\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-oswald  text-[27px] md:text-[40px] tracking-[0.512px] leading-[29.184px] md:leading-[43.776px] md:tracking-[0.768px] lg:text-[67px] text-white lg:leading-[61.104px] lg:tracking-[1.072px] \",\n                                    id: \"splitText\",\n                                    children: [\n                                        \"FRONT END \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-light-blue-05\",\n                                            children: \"DEVELOPER\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 247\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 302\n                                        }, this),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-[16.5px] tracking-[0.536px] md:text-[24px] md:tracking-[0.798px] lg:text-[41px] leading-normal lg:tracking-[1.128px]\",\n                                            children: [\n                                                \"AND I \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"text-light-blue-05\",\n                                                    children: \"LOVE\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 458\n                                                }, this),\n                                                \" DEVELOPING YOUR IDEAS\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 312\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-container flex justify-between mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"max-w-[170px] tracking-[0.1px] md:max-w-[250px] lg:max-w-[335px] text-left text-[10px] md:text-[14px] lg:text-[20px] text-light-gray-01 font-normal font-lato md:leading-[18px] lg:leading-normal\",\n                                            children: \"I am skilled in building and designing things for the web. Currently working web-based projects at Greydient Lab.\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            id: \"workshead\",\n                                            className: \"px-2 py-1 md:px-[16px] md:py-[8px] lg:px-[47px] md:leading-[12px] lg:py-[19px] bg-light-orange-05 hover:bg-light-orange-03 transform transition-all text-white font-oswald text-[12px] md:text-[15px] lg:text-[24px] font-semibold rounded-[4px]\",\n                                            onClick: ()=>handleClick(\"#works\"),\n                                            children: \"View Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-[1144px] mx-auto mt-20 lottie\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                animationData: _public_assets_featured_image_json__WEBPACK_IMPORTED_MODULE_3__\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 64\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\hero\\\\heroBlock.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(HeroBlock, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HeroBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroBlock);\nvar _c;\n$RefreshReg$(_c, \"HeroBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvaGVyby9oZXJvQmxvY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR2lEO0FBQ2Y7QUFDMkM7QUFDMUM7QUFDUDtBQUU1QixTQUFTTSxVQUFXLEtBQ25CO1FBRG1CLEVBQ25CLEdBRG1COztJQUVsQkwsZ0RBQVNBLENBQUU7UUFFVCxJQUFJRyxrREFBU0EsQ0FBRTtRQUNmLElBQUlBLGtEQUFTQSxDQUFFO1FBRWZDLHNDQUFJQSxDQUFDRSxHQUFHLENBQUUsNEJBQTRCO1lBQUNDLFNBQVE7WUFBR0MsR0FBRztRQUFJO1FBQ3pESixzQ0FBSUEsQ0FBQ0UsR0FBRyxDQUFFLHVCQUF1QjtZQUFDQyxTQUFRO1lBQUdDLEdBQUc7UUFBSTtRQUNwREosc0NBQUlBLENBQUNFLEdBQUcsQ0FBRSxXQUFXO1lBQUNDLFNBQVE7WUFBR0MsR0FBRztRQUFLO1FBRXpDSixzQ0FBSUEsQ0FBQ0ssSUFBSSxDQUFFLGdCQUFnQjtZQUN6QkQsR0FBRyxDQUFDO1lBQ0pFLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZMLFNBQVM7UUFDWDtRQUVBSCxzQ0FBSUEsQ0FBQ0ssSUFBSSxDQUFFLG9CQUFvQjtZQUM3QkQsR0FBRyxDQUFDO1lBQ0pFLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZMLFNBQVM7UUFDWDtRQUVBSCxzQ0FBSUEsQ0FBQ1MsRUFBRSxDQUFFLHVCQUF1QjtZQUM5QkwsR0FBRztZQUNIRyxPQUFPO1lBQ1BKLFNBQVM7UUFDWDtRQUVBSCxzQ0FBSUEsQ0FBQ1MsRUFBRSxDQUFFLDRCQUE0QjtZQUNuQ0wsR0FBRztZQUNIRyxPQUFPO1lBQ1BKLFNBQVM7WUFDVEssVUFBVTtRQUNaO1FBRUFSLHNDQUFJQSxDQUFDUyxFQUFFLENBQUUsK0JBQStCO1lBQ3RDTCxHQUFHO1lBQ0hHLE9BQU87WUFDUEosU0FBUztZQUNURyxTQUFTO1FBQ1g7SUFHRixHQUFHLEVBQUU7SUFFTCxNQUFNSSxrQkFBa0IsQ0FBRUM7UUFDeEIsTUFBTUMsVUFBVUMsU0FBU0MsYUFBYSxDQUFFSDtRQUN4QyxJQUFLQyxTQUFVO1lBQ2IsTUFBTSxFQUFFRyxHQUFHLEVBQUUsR0FBR0gsUUFBUUkscUJBQXFCO1lBQzdDQyxPQUFPQyxRQUFRLENBQUU7Z0JBQ2ZDLFVBQVU7Z0JBQ1ZKLEtBQUtBLE1BQU1FLE9BQU9HLE9BQU87WUFDM0I7UUFDRjtJQUNGO0lBRUEsTUFBTUMsY0FBYyxDQUFFVjtRQUNwQkQsZ0JBQWlCQztJQUNuQjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDVztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1pDLE1BQU1uQixJQUFJLENBQUU7d0JBQUVvQixRQUFRLEtBQUs7b0JBQUUsR0FBSUMsR0FBRyxDQUFFLENBQUVDLEdBQUdDLHNCQUMxQyw4REFBQ047NEJBQWdCQyxXQUFVOzJCQUFqQks7Ozs7Ozs7Ozs7OEJBSWQsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FBRU4sV0FBVTtvQ0FBMkxPLElBQUc7OENBQVE7Ozs7Ozs4Q0FDbk4sOERBQUNDO29DQUFHUixXQUFVO29DQUFtTU8sSUFBRzs7d0NBQVk7c0RBQVUsOERBQUNFOzRDQUFLVCxXQUFVO3NEQUFxQjs7Ozs7O3dDQUFnQjtzREFBRSw4REFBQ1U7Ozs7O3dDQUFRO3NEQUFDLDhEQUFDRDs0Q0FBS1QsV0FBVTs7Z0RBQTRIOzhEQUFNLDhEQUFDUztvREFBS1QsV0FBVTs4REFBcUI7Ozs7OztnREFBVzs7Ozs7Ozs7Ozs7Ozs4Q0FDN2UsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ007NENBQUVOLFdBQVU7c0RBQW9NOzs7Ozs7c0RBQ2pOLDhEQUFDVzs0Q0FBT0osSUFBRzs0Q0FBWVAsV0FBVTs0Q0FBbVBZLFNBQVMsSUFBTWQsWUFBYTtzREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdoVSw4REFBQ0M7NEJBQUlDLFdBQVU7c0NBQXNDLDRFQUFDMUIscURBQU1BO2dDQUFDdUMsZUFBZXRDLCtEQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6RztHQXhGU0c7S0FBQUE7QUEwRlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2Nrcy9oZXJvL2hlcm9CbG9jay50c3g/M2NiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvdHRpZSBmcm9tIFwibG90dGllLXJlYWN0XCI7XHJcbmltcG9ydCBncm9vdnlXYWxrQW5pbWF0aW9uIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL2ZlYXR1cmVkLWltYWdlLmpzb25cIjtcclxuaW1wb3J0IFNwbGl0VHlwZSBmcm9tICdzcGxpdC10eXBlJztcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xyXG5cclxuZnVuY3Rpb24gSGVyb0Jsb2NrKCB7XHJcbn0gKSB7XHJcbiAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcblxyXG4gICAgbmV3IFNwbGl0VHlwZSggJyNzcGxpdCcgKTtcclxuICAgIG5ldyBTcGxpdFR5cGUoICcjc3BsaXRUZXh0JyApO1xyXG5cclxuICAgIGdzYXAuc2V0KCAnLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uJywge29wYWNpdHk6MCwgeTogMTAsIH0gKTtcclxuICAgIGdzYXAuc2V0KCAnLmJ1dHRvbi1jb250YWluZXIgcCcsIHtvcGFjaXR5OjAsIHk6IDEwLCB9ICk7XHJcbiAgICBnc2FwLnNldCggJy5sb3R0aWUnLCB7b3BhY2l0eTowLCB5OiAxMjAsIH0gKTtcclxuXHJcbiAgICBnc2FwLmZyb20oICcjc3BsaXQgLmNoYXInLCB7XHJcbiAgICAgIHk6IC0xMCxcclxuICAgICAgc3RhZ2dlcjogMC4wMixcclxuICAgICAgZGVsYXk6IDAuNixcclxuICAgICAgZHVyYXRpb246IC4yLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSApO1xyXG5cclxuICAgIGdzYXAuZnJvbSggJyNzcGxpdFRleHQgLmNoYXInLCB7XHJcbiAgICAgIHk6IC0xMCxcclxuICAgICAgc3RhZ2dlcjogMC4wMixcclxuICAgICAgZGVsYXk6IDEuMyxcclxuICAgICAgZHVyYXRpb246IC4xLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSApO1xyXG5cclxuICAgIGdzYXAudG8oICcuYnV0dG9uLWNvbnRhaW5lciBwJywge1xyXG4gICAgICB5OiAwLFxyXG4gICAgICBkZWxheTogMi4zLFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSApO1xyXG4gIFxyXG4gICAgZ3NhcC50byggJy5idXR0b24tY29udGFpbmVyIGJ1dHRvbicsIHtcclxuICAgICAgeTogMCxcclxuICAgICAgZGVsYXk6IDIuOCxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgZHVyYXRpb246IC4yLFxyXG4gICAgfSApO1xyXG4gIFxyXG4gICAgZ3NhcC50byggJy5qbS1iLWhlcm8tc2VjdGlvbnMgLmxvdHRpZScsIHtcclxuICAgICAgeTogMCxcclxuICAgICAgZGVsYXk6IDMuMyxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgc3RhZ2dlcjogNCxcclxuICAgIH0gKTtcclxuXHJcblxyXG4gIH0sIFtdICk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9ICggc2VjdGlvbklkOiBzdHJpbmcgKSA9PiB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc2VjdGlvbklkICk7XHJcbiAgICBpZiAoIHNlY3Rpb24gKSB7XHJcbiAgICAgIGNvbnN0IHsgdG9wIH0gPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oIHtcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgdG9wOiB0b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCBzZWN0aW9uSWQ6IHN0cmluZyApID0+IHtcclxuICAgIHNjcm9sbFRvU2VjdGlvbiggc2VjdGlvbklkICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdqbS1iLWhlcm8tc2VjdGlvbnMgYmctZGFyay1ibHVlLTA1IGZsZXggbGc6cGItWzE4NXB4XSBtZDpwYi1bMTAwcHhdIHBiLVs1MHB4XSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4ganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNjRweF0gbWQ6dG9wLVs4NHB4XSB3LXNjcmVlbiBoLXNjcmVlbiB6LTEgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyaWQgZ3JpZC1jb2xzLWJveGVzLXNtLXdpZHRoIGdyaWQtcm93cy1ib3hlcy1zbS1oZWlnaHQgbWQ6Z3JpZC1jb2xzLWJveGVzLXdpZHRoLW1kIG1kOmdyaWQtcm93cy1ib3hlcy1oZWlnaHQtbWQgbGc6Z3JpZC1jb2xzLWJveGVzLXdpZHRoIGxnOmdyaWQtcm93cy1ib3hlcy1oZWlnaHRcIj5cclxuICAgICAgICAgIHtBcnJheS5mcm9tKCB7IGxlbmd0aDogMTAgKiA3IH0gKS5tYXAoICggXywgaW5kZXggKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBzaXplLVsxMjVweF0gbWQ6c2l6ZS1bMTUwcHhdIGxnOnNpemUtWzIwMHB4XSBib3JkZXIgYm9yZGVyLWRhcmstYmx1ZS0wMSB0cmFuc2l0aW9uLWFsbCBcIj48L2Rpdj5cclxuICAgICAgICAgICkgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVsYXRpdmUgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHotMiBtdC1bMjAwcHhdXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyIG1heC13LVsyNTZweF0gbWQ6bWF4LXctWzM4MHB4XSBsZzptYXgtdy1bNjI1cHhdIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxlZnQgZm9udC1vc3dhbGQgdGV4dC1bMTkuNXB4XSB0cmFja2luZy1bMC41MzZweF0gbGVhZGluZy1ub3JtYWwgbWQ6dGV4dC1bMjBweF0gbWQ6dHJhY2tpbmctWzEuMnB4XSBsZzp0ZXh0LVszMHB4XSBmb250LW5vcm1hbCBsZzp0cmFja2luZy1bMS41cHhdIHAtMCBtZDpwbC0xIHRleHQtbGlnaHQtb3JhbmdlLTA1JyBpZD0nc3BsaXQnPkhpIEkgYW0gSnVuIE1hciw8L3A+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtb3N3YWxkICB0ZXh0LVsyN3B4XSBtZDp0ZXh0LVs0MHB4XSB0cmFja2luZy1bMC41MTJweF0gbGVhZGluZy1bMjkuMTg0cHhdIG1kOmxlYWRpbmctWzQzLjc3NnB4XSBtZDp0cmFja2luZy1bMC43NjhweF0gbGc6dGV4dC1bNjdweF0gdGV4dC13aGl0ZSBsZzpsZWFkaW5nLVs2MS4xMDRweF0gbGc6dHJhY2tpbmctWzEuMDcycHhdICcgaWQ9J3NwbGl0VGV4dCc+RlJPTlQgRU5EIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1saWdodC1ibHVlLTA1Jz5ERVZFTE9QRVI8L3NwYW4+ICA8YnI+PC9icj4gPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LVsxNi41cHhdIHRyYWNraW5nLVswLjUzNnB4XSBtZDp0ZXh0LVsyNHB4XSBtZDp0cmFja2luZy1bMC43OThweF0gbGc6dGV4dC1bNDFweF0gbGVhZGluZy1ub3JtYWwgbGc6dHJhY2tpbmctWzEuMTI4cHhdJz5BTkQgSSA8c3BhbiBjbGFzc05hbWU9J3RleHQtbGlnaHQtYmx1ZS0wNSc+TE9WRTwvc3Bhbj4gREVWRUxPUElORyBZT1VSIElERUFTPC9zcGFuPjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYXgtdy1bMTcwcHhdIHRyYWNraW5nLVswLjFweF0gbWQ6bWF4LXctWzI1MHB4XSBsZzptYXgtdy1bMzM1cHhdIHRleHQtbGVmdCB0ZXh0LVsxMHB4XSBtZDp0ZXh0LVsxNHB4XSBsZzp0ZXh0LVsyMHB4XSB0ZXh0LWxpZ2h0LWdyYXktMDEgZm9udC1ub3JtYWwgZm9udC1sYXRvIG1kOmxlYWRpbmctWzE4cHhdIGxnOmxlYWRpbmctbm9ybWFsJz5JIGFtIHNraWxsZWQgaW4gYnVpbGRpbmcgYW5kIGRlc2lnbmluZyB0aGluZ3MgZm9yIHRoZSB3ZWIuIEN1cnJlbnRseSB3b3JraW5nIHdlYi1iYXNlZCBwcm9qZWN0cyBhdCBHcmV5ZGllbnQgTGFiLjwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwid29ya3NoZWFkXCIgY2xhc3NOYW1lPSdweC0yIHB5LTEgbWQ6cHgtWzE2cHhdIG1kOnB5LVs4cHhdIGxnOnB4LVs0N3B4XSBtZDpsZWFkaW5nLVsxMnB4XSBsZzpweS1bMTlweF0gYmctbGlnaHQtb3JhbmdlLTA1IGhvdmVyOmJnLWxpZ2h0LW9yYW5nZS0wMyB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgdGV4dC13aGl0ZSBmb250LW9zd2FsZCB0ZXh0LVsxMnB4XSBtZDp0ZXh0LVsxNXB4XSBsZzp0ZXh0LVsyNHB4XSBmb250LXNlbWlib2xkIHJvdW5kZWQtWzRweF0nIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCAnI3dvcmtzJyApfT5WaWV3IFByb2plY3RzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMTQ0cHhdIG14LWF1dG8gbXQtMjAgbG90dGllXCI+PExvdHRpZSBhbmltYXRpb25EYXRhPXtncm9vdnlXYWxrQW5pbWF0aW9ufSAvPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2RpdiA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQmxvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxvdHRpZSIsImdyb292eVdhbGtBbmltYXRpb24iLCJTcGxpdFR5cGUiLCJnc2FwIiwiSGVyb0Jsb2NrIiwic2V0Iiwib3BhY2l0eSIsInkiLCJmcm9tIiwic3RhZ2dlciIsImRlbGF5IiwiZHVyYXRpb24iLCJ0byIsInNjcm9sbFRvU2VjdGlvbiIsInNlY3Rpb25JZCIsInNlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwic2Nyb2xsWSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJsZW5ndGgiLCJtYXAiLCJfIiwiaW5kZXgiLCJwIiwiaWQiLCJoMSIsInNwYW4iLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhbmltYXRpb25EYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/hero/heroBlock.tsx\n"));

/***/ })

});