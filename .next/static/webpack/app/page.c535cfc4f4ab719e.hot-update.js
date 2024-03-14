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

/***/ "(app-pages-browser)/./app/blocks/about/about.tsx":
/*!************************************!*\
  !*** ./app/blocks/about/about.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var atropos_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! atropos/react */ \"(app-pages-browser)/./node_modules/atropos/atropos-react.mjs\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AboutBlock(param) {\n    let {} = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        new split_type__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"#aboutSplit\");\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.from(\"#aboutSplit .char\", {\n            y: -10,\n            stagger: 0.02,\n            delay: 0.02,\n            duration: .1,\n            opacity: 0,\n            scrollTrigger: {\n                trigger: \".jm-b-about-section\",\n                start: \"top+=75px center\",\n                end: \"top+=85px center\"\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.set(\".jm-b-about-section .description\", {\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".jm-b-about-section .description\", {\n            opacity: 1,\n            delay: 0.2,\n            scrollTrigger: {\n                trigger: \".jm-b-about-section\",\n                start: \"top+=75px center\",\n                end: \"top+=85px center\"\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.set(\".jm-b-about-section .svg-color\", {\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.to(\".jm-b-about-section .svg-color\", {\n            opacity: 1,\n            scrollTrigger: {\n                trigger: \".jm-b-about-section\",\n                start: \"top center\",\n                end: \"top center\",\n                scrub: 1\n            }\n        });\n    }, []);\n    const [hovered, sethovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-about-section color bg-white pb-[268px] pt-[80px] md:pt-[100px] relative\",\n            id: \"about\",\n            \"data-color\": \"#FFFFFF\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"absolute inset-0 h-full w-full svg-color stroke-gray-200 stroke-gradient-to-b [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]\",\n                    \"aria-hidden\": \"true\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pattern\", {\n                                id: \"0787a7c5-978c-4f66-83c7-11c213f99cb7\",\n                                width: \"200\",\n                                height: \"200\",\n                                x: \"50%\",\n                                y: \"-1\",\n                                patternUnits: \"userSpaceOnUse\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M.5 200V.5H200\",\n                                    fill: \"none\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                            width: \"100%\",\n                            height: \"100%\",\n                            strokeWidth: \"0\",\n                            fill: \"url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container grid md:grid-cols-2 max-w-[1144px] gap-x-8 lg:gap-x-[121px] my-auto align-middle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-container lg:max-w-[461px] my-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-light-blue-05 font-oswald mb-3 text-[24px] md:text-[29px] md:leading-[25.536px] md:tracking-[0.44px] lg:text-[40px] md:mb-6\",\n                                    id: \"aboutSplit\",\n                                    children: \"ABOUT ME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-dark-blue-05 font-lato text-[12px] md:text-[16px] lg:text-[16px] md:leading-[25px] lg:leading-[25px] tracking-[0.16px] description\",\n                                    children: [\n                                        \"As a recent graduate,  with a strong passion for turning lines of code into captivating user experiences.  I'm thrilled to be delving into the world of web development, where I channel my love for problem-solving and attention to detail to craft seamless and responsive websites.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 38\n                                        }, this),\n                                        \" And now I am very happy to serve clients at Greydient Lab. Which really taught me valuable lessons in teamwork, adaptability, and the power of clean, organized code. I'm a firm believer in continuous learning and embrace each project as a chance to enhance my skills and expand my knowledge.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-container lg:mt-[48px] md:mt-[32px] mt-[24px] flex justify-end md:justify-start\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/public/assets/jm-portfolio\",\n                                        download: true,\n                                        className: \"font-oswald text-[16px] tracking-[1px] lg:text-[24px] rounded-[4px] lg:tracking-[1.2px] bg-light-blue-05 hover:bg-light-blue-04 transform transition-all py-2 lg:py-3 px-4 lg:px-7 \",\n                                        children: \"Download CV\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image-container h-full w-full mt-[40px] md:mt-0\",\n                            onMouseEnter: ()=>sethovered(true),\n                            onMouseLeave: ()=>sethovered(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(atropos_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                shadow: true,\n                                shadowScale: 0.4,\n                                highlight: false,\n                                activeOffset: 2,\n                                className: \"image-wrapper max-w-full relative \",\n                                \"data-atropos-offset\": \"5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-gradient-to-b from-[#FFD2A5] via-30% via-light-orange to-light-orange-05 pt-10 relative  !transform !transition-all\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: \"/assets/my-pic.png\",\n                                            alt: \"footer-image\",\n                                            width: 305,\n                                            height: 427.95,\n                                            \"data-atropos-offset\": \"-5\",\n                                            \"data-atropos-opacity\": \"1\",\n                                            className: \"my-auto mx-auto relative transform transition-all  \".concat(hovered ? \" !opacity-0\" : \" !opacity-100 \")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: \"/assets/my-pic-2.png\",\n                                            alt: \"footer-image\",\n                                            width: 356,\n                                            height: 427.95,\n                                            \"data-atropos-offset\": \"-5\",\n                                            \"data-atropos-opacity\": \"0\",\n                                            className: \"z-10 mx-auto absolute bottom-0 left-[12%] md:left-[7%] lg:left-[17.5%] opacity-0 group-hover:opacity-100 h-[427.95px] transform transition-all \".concat(hovered ? \" !opacity-100\" : \" !opacity-0 \")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(AboutBlock, \"pMjRq8VlDWv+9S0NKIHFjghHGY4=\");\n_c = AboutBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutBlock);\nvar _c;\n$RefreshReg$(_c, \"AboutBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvYWJvdXQvYWJvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ3JCO0FBQ0Q7QUFDTztBQUNEO0FBQ1A7QUFFNUIsU0FBU1EsV0FBWSxLQUNwQjtRQURvQixFQUNwQixHQURvQjs7SUFFakJQLGdEQUFTQSxDQUFFO1FBQ1gsSUFBSUssa0RBQVNBLENBQUU7UUFDZkMsc0NBQUlBLENBQUNFLElBQUksQ0FBRSxxQkFBcUI7WUFDNUJDLEdBQUcsQ0FBQztZQUNKQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7WUFDVDtRQUNKO1FBQ0FYLHNDQUFJQSxDQUFDWSxHQUFHLENBQUUsb0NBQW9DO1lBQUVMLFNBQVM7UUFBRTtRQUMzRFAsc0NBQUlBLENBQUNhLEVBQUUsQ0FBRSxvQ0FBb0M7WUFDekNOLFNBQVM7WUFDVEYsT0FBTztZQUNQRyxlQUFlO2dCQUNYQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxLQUFLO1lBQ1Q7UUFDSjtRQUVBWCxzQ0FBSUEsQ0FBQ1ksR0FBRyxDQUFFLGtDQUFrQztZQUFFTCxTQUFTO1FBQUU7UUFDekRQLHNDQUFJQSxDQUFDYSxFQUFFLENBQUUsa0NBQWtDO1lBQ3ZDTixTQUFTO1lBQ1RDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xHLE9BQU87WUFDWDtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBQ0QsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsQ0FBRTtJQUV4QyxxQkFDSTtrQkFDSSw0RUFBQ3NCO1lBQUlDLFdBQVU7WUFBZ0ZDLElBQUc7WUFBUUMsY0FBVzs7OEJBQ2pILDhEQUFDQztvQkFBSUgsV0FBVTtvQkFBdUpJLGVBQVk7O3NDQUM5Syw4REFBQ0M7c0NBQ0csNEVBQUNDO2dDQUFRTCxJQUFHO2dDQUF1Q00sT0FBTTtnQ0FBTUMsUUFBTztnQ0FBTUMsR0FBRTtnQ0FBTXhCLEdBQUU7Z0NBQUt5QixjQUFhOzBDQUNwRyw0RUFBQ0M7b0NBQUtDLEdBQUU7b0NBQWlCQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUd0Qyw4REFBQ0M7NEJBQUtQLE9BQU07NEJBQU9DLFFBQU87NEJBQU9PLGFBQVk7NEJBQUlGLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFMUQsOERBQUNkO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDZ0I7b0NBQUdoQixXQUFVO29DQUFtSUMsSUFBRzs4Q0FBYTs7Ozs7OzhDQUNqSyw4REFBQ2dCO29DQUFFakIsV0FBVTs7d0NBQTBJO3NEQUNuSiw4REFBQ2tCOzs7OztzREFBUSw4REFBQ0E7Ozs7O3dDQUFROzs7Ozs7OzhDQUN0Qiw4REFBQ25CO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDckIsaURBQUlBO3dDQUFDd0MsTUFBSzt3Q0FBOEJDLFFBQVE7d0NBQUNwQixXQUFVO2tEQUFzTDs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzFQLDhEQUFDRDs0QkFBSUMsV0FBVTs0QkFBa0RxQixjQUFjLElBQU12QixXQUFZOzRCQUFRd0IsY0FBYyxJQUFNeEIsV0FBWTtzQ0FDckksNEVBQUNsQixxREFBT0E7Z0NBQUMyQyxRQUFRO2dDQUFNQyxhQUFhO2dDQUFLQyxXQUFXO2dDQUFPQyxjQUFjO2dDQUFHMUIsV0FBVTtnQ0FBcUMyQix1QkFBb0I7MENBQzNJLDRFQUFDNUI7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDdEIsa0RBQUtBOzRDQUNGa0QsS0FBSTs0Q0FDSkMsS0FBSTs0Q0FDSnRCLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JtQix1QkFBb0I7NENBQ3BCRyx3QkFBcUI7NENBQ3JCOUIsV0FBVyxzREFBaUcsT0FBM0NILFVBQVUsZ0JBQWdCOzs7Ozs7c0RBRS9GLDhEQUFDbkIsa0RBQUtBOzRDQUNGa0QsS0FBSTs0Q0FDSkMsS0FBSTs0Q0FDSnRCLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JtQix1QkFBb0I7NENBQ3BCRyx3QkFBcUI7NENBQ3JCOUIsV0FBVyxrSkFBNkwsT0FBM0NILFVBQVUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3TjtHQXhGU2Q7S0FBQUE7QUEwRlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2Nrcy9hYm91dC9hYm91dC50c3g/MDJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQXRyb3BvcyBmcm9tICdhdHJvcG9zL3JlYWN0JztcclxuaW1wb3J0IFNwbGl0VHlwZSBmcm9tICdzcGxpdC10eXBlJztcclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xyXG5cclxuZnVuY3Rpb24gQWJvdXRCbG9jaygge1xyXG59ICkge1xyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICBuZXcgU3BsaXRUeXBlKCAnI2Fib3V0U3BsaXQnICk7XHJcbiAgICBnc2FwLmZyb20oICcjYWJvdXRTcGxpdCAuY2hhcicsIHtcclxuICAgICAgICB5OiAtMTAsXHJcbiAgICAgICAgc3RhZ2dlcjogMC4wMixcclxuICAgICAgICBkZWxheTogMC4wMixcclxuICAgICAgICBkdXJhdGlvbjogLjEsXHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICcuam0tYi1hYm91dC1zZWN0aW9uJyxcclxuICAgICAgICAgICAgc3RhcnQ6ICd0b3ArPTc1cHggY2VudGVyJyxcclxuICAgICAgICAgICAgZW5kOiAndG9wKz04NXB4IGNlbnRlcicsXHJcbiAgICAgICAgfSxcclxuICAgIH0gKTtcclxuICAgIGdzYXAuc2V0KCAnLmptLWItYWJvdXQtc2VjdGlvbiAuZGVzY3JpcHRpb24nLCB7IG9wYWNpdHk6IDAgfSApO1xyXG4gICAgZ3NhcC50byggJy5qbS1iLWFib3V0LXNlY3Rpb24gLmRlc2NyaXB0aW9uJywge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZGVsYXk6IDAuMixcclxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICcuam0tYi1hYm91dC1zZWN0aW9uJyxcclxuICAgICAgICAgICAgc3RhcnQ6ICd0b3ArPTc1cHggY2VudGVyJyxcclxuICAgICAgICAgICAgZW5kOiAndG9wKz04NXB4IGNlbnRlcicsXHJcbiAgICAgICAgfSxcclxuICAgIH0gKTtcclxuXHJcbiAgICBnc2FwLnNldCggJy5qbS1iLWFib3V0LXNlY3Rpb24gLnN2Zy1jb2xvcicsIHsgb3BhY2l0eTogMCB9ICk7XHJcbiAgICBnc2FwLnRvKCAnLmptLWItYWJvdXQtc2VjdGlvbiAuc3ZnLWNvbG9yJywge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnLmptLWItYWJvdXQtc2VjdGlvbicsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgICAgIGVuZDogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgICAgICBzY3J1YjogMSxcclxuICAgICAgICB9LFxyXG4gICAgfSApO1xyXG59LCBbXSApO1xyXG4gICAgY29uc3QgW2hvdmVyZWQsIHNldGhvdmVyZWRdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nam0tYi1hYm91dC1zZWN0aW9uIGNvbG9yIGJnLXdoaXRlIHBiLVsyNjhweF0gcHQtWzgwcHhdIG1kOnB0LVsxMDBweF0gcmVsYXRpdmUnIGlkPSdhYm91dCcgZGF0YS1jb2xvcj0nI0ZGRkZGRic+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgaC1mdWxsIHctZnVsbCBzdmctY29sb3Igc3Ryb2tlLWdyYXktMjAwIHN0cm9rZS1ncmFkaWVudC10by1iIFttYXNrLWltYWdlOnJhZGlhbC1ncmFkaWVudCgxMDAlXzEwMCVfYXRfdG9wX3JpZ2h0LHdoaXRlLHRyYW5zcGFyZW50KV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdHRlcm4gaWQ9XCIwNzg3YTdjNS05NzhjLTRmNjYtODNjNy0xMWMyMTNmOTljYjdcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHg9XCI1MCVcIiB5PVwiLTFcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0uNSAyMDBWLjVIMjAwXCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdHRlcm4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzdHJva2VXaWR0aD1cIjBcIiBmaWxsPVwidXJsKCMwNzg3YTdjNS05NzhjLTRmNjYtODNjNy0xMWMyMTNmOTljYjcpXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBtZDpncmlkLWNvbHMtMiBtYXgtdy1bMTE0NHB4XSBnYXAteC04IGxnOmdhcC14LVsxMjFweF0gbXktYXV0byBhbGlnbi1taWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyIGxnOm1heC13LVs0NjFweF0gbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxpZ2h0LWJsdWUtMDUgZm9udC1vc3dhbGQgbWItMyB0ZXh0LVsyNHB4XSBtZDp0ZXh0LVsyOXB4XSBtZDpsZWFkaW5nLVsyNS41MzZweF0gbWQ6dHJhY2tpbmctWzAuNDRweF0gbGc6dGV4dC1bNDBweF0gbWQ6bWItNicgaWQ9J2Fib3V0U3BsaXQnPkFCT1VUIE1FPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhcmstYmx1ZS0wNSBmb250LWxhdG8gdGV4dC1bMTJweF0gbWQ6dGV4dC1bMTZweF0gbGc6dGV4dC1bMTZweF0gbWQ6bGVhZGluZy1bMjVweF0gbGc6bGVhZGluZy1bMjVweF0gdHJhY2tpbmctWzAuMTZweF0gZGVzY3JpcHRpb24nPkFzIGEgcmVjZW50IGdyYWR1YXRlLCAgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciB0dXJuaW5nIGxpbmVzIG9mIGNvZGUgaW50byBjYXB0aXZhdGluZyB1c2VyIGV4cGVyaWVuY2VzLiAgSSZhcG9zO20gdGhyaWxsZWQgdG8gYmUgZGVsdmluZyBpbnRvIHRoZSB3b3JsZCBvZiB3ZWIgZGV2ZWxvcG1lbnQsIHdoZXJlIEkgY2hhbm5lbCBteSBsb3ZlIGZvciBwcm9ibGVtLXNvbHZpbmcgYW5kIGF0dGVudGlvbiB0byBkZXRhaWwgdG8gY3JhZnQgc2VhbWxlc3MgYW5kIHJlc3BvbnNpdmUgd2Vic2l0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj48YnI+PC9icj4gQW5kIG5vdyBJIGFtIHZlcnkgaGFwcHkgdG8gc2VydmUgY2xpZW50cyBhdCBHcmV5ZGllbnQgTGFiLiBXaGljaCByZWFsbHkgdGF1Z2h0IG1lIHZhbHVhYmxlIGxlc3NvbnMgaW4gdGVhbXdvcmssIGFkYXB0YWJpbGl0eSwgYW5kIHRoZSBwb3dlciBvZiBjbGVhbiwgb3JnYW5pemVkIGNvZGUuIEkmYXBvczttIGEgZmlybSBiZWxpZXZlciBpbiBjb250aW51b3VzIGxlYXJuaW5nIGFuZCBlbWJyYWNlIGVhY2ggcHJvamVjdCBhcyBhIGNoYW5jZSB0byBlbmhhbmNlIG15IHNraWxscyBhbmQgZXhwYW5kIG15IGtub3dsZWRnZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lciBsZzptdC1bNDhweF0gbWQ6bXQtWzMycHhdIG10LVsyNHB4XSBmbGV4IGp1c3RpZnktZW5kIG1kOmp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHVibGljL2Fzc2V0cy9qbS1wb3J0Zm9saW9cIiBkb3dubG9hZCBjbGFzc05hbWU9J2ZvbnQtb3N3YWxkIHRleHQtWzE2cHhdIHRyYWNraW5nLVsxcHhdIGxnOnRleHQtWzI0cHhdIHJvdW5kZWQtWzRweF0gbGc6dHJhY2tpbmctWzEuMnB4XSBiZy1saWdodC1ibHVlLTA1IGhvdmVyOmJnLWxpZ2h0LWJsdWUtMDQgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIHB5LTIgbGc6cHktMyBweC00IGxnOnB4LTcgJz5Eb3dubG9hZCBDVjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXIgaC1mdWxsIHctZnVsbCBtdC1bNDBweF0gbWQ6bXQtMFwiIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0aG92ZXJlZCggdHJ1ZSApfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldGhvdmVyZWQoIGZhbHNlICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXRyb3BvcyBzaGFkb3c9e3RydWV9IHNoYWRvd1NjYWxlPXswLjR9IGhpZ2hsaWdodD17ZmFsc2V9IGFjdGl2ZU9mZnNldD17Mn0gY2xhc3NOYW1lPSdpbWFnZS13cmFwcGVyIG1heC13LWZ1bGwgcmVsYXRpdmUgJyBkYXRhLWF0cm9wb3Mtb2Zmc2V0PVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tWyNGRkQyQTVdIHZpYS0zMCUgdmlhLWxpZ2h0LW9yYW5nZSB0by1saWdodC1vcmFuZ2UtMDUgcHQtMTAgcmVsYXRpdmUgICF0cmFuc2Zvcm0gIXRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9teS1waWMucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2Zvb3Rlci1pbWFnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MjcuOTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXRyb3Bvcy1vZmZzZXQ9XCItNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXRyb3Bvcy1vcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG15LWF1dG8gbXgtYXV0byByZWxhdGl2ZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgICR7aG92ZXJlZCA/ICcgIW9wYWNpdHktMCcgOiAnICFvcGFjaXR5LTEwMCAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL215LXBpYy0yLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdmb290ZXItaW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDI3Ljk1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0cm9wb3Mtb2Zmc2V0PVwiLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0cm9wb3Mtb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B6LTEwIG14LWF1dG8gYWJzb2x1dGUgYm90dG9tLTAgbGVmdC1bMTIlXSBtZDpsZWZ0LVs3JV0gbGc6bGVmdC1bMTcuNSVdIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBoLVs0MjcuOTVweF0gdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsICR7aG92ZXJlZCA/ICcgIW9wYWNpdHktMTAwJyA6ICcgIW9wYWNpdHktMCAnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0F0cm9wb3M+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRCbG9jaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJBdHJvcG9zIiwiU3BsaXRUeXBlIiwiZ3NhcCIsIkFib3V0QmxvY2siLCJmcm9tIiwieSIsInN0YWdnZXIiLCJkZWxheSIsImR1cmF0aW9uIiwib3BhY2l0eSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzZXQiLCJ0byIsInNjcnViIiwiaG92ZXJlZCIsInNldGhvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImRhdGEtY29sb3IiLCJzdmciLCJhcmlhLWhpZGRlbiIsImRlZnMiLCJwYXR0ZXJuIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwicGF0dGVyblVuaXRzIiwicGF0aCIsImQiLCJmaWxsIiwicmVjdCIsInN0cm9rZVdpZHRoIiwiaDIiLCJwIiwiYnIiLCJocmVmIiwiZG93bmxvYWQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzaGFkb3ciLCJzaGFkb3dTY2FsZSIsImhpZ2hsaWdodCIsImFjdGl2ZU9mZnNldCIsImRhdGEtYXRyb3Bvcy1vZmZzZXQiLCJzcmMiLCJhbHQiLCJkYXRhLWF0cm9wb3Mtb3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/about/about.tsx\n"));

/***/ })

});