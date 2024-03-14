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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var atropos_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! atropos/react */ \"(app-pages-browser)/./node_modules/atropos/atropos-react.mjs\");\n/* harmony import */ var split_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! split-type */ \"(app-pages-browser)/./node_modules/split-type/dist/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AboutBlock(param) {\n    let {} = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        new split_type__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"#aboutSplit\");\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.from(\"#aboutSplit .char\", {\n            y: -10,\n            stagger: 0.02,\n            delay: 0.02,\n            duration: .1,\n            opacity: 0,\n            scrollTrigger: {\n                trigger: \".jm-b-about-section\",\n                start: \"top+=75px center\",\n                end: \"top+=85px center\"\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".jm-b-about-section .description\", {\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".jm-b-about-section .description\", {\n            opacity: 1,\n            delay: 0.2,\n            scrollTrigger: {\n                trigger: \".jm-b-about-section\",\n                start: \"top+=75px center\",\n                end: \"top+=85px center\"\n            }\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set(\".jm-b-about-section .svg-color\", {\n            opacity: 0\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(\".jm-b-about-section .svg-color\", {\n            opacity: 1,\n            scrollTrigger: {\n                trigger: \".jm-b-about-section\",\n                start: \"top center\",\n                end: \"top center\",\n                scrub: 1\n            }\n        });\n    }, []);\n    const [hovered, sethovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jm-b-about-section color bg-white ld:pb-[268px] md:pb-[218px] pb-[150px] pt-[80px] md:pt-[100px] relative\",\n            id: \"about\",\n            \"data-color\": \"#FFFFFF\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"absolute inset-0 h-full w-full svg-color stroke-gray-200 stroke-gradient-to-b [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]\",\n                    \"aria-hidden\": \"true\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pattern\", {\n                                id: \"0787a7c5-978c-4f66-83c7-11c213f99cb7\",\n                                width: \"200\",\n                                height: \"200\",\n                                x: \"50%\",\n                                y: \"-1\",\n                                patternUnits: \"userSpaceOnUse\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M.5 200V.5H200\",\n                                    fill: \"none\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                            width: \"100%\",\n                            height: \"100%\",\n                            strokeWidth: \"0\",\n                            fill: \"url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container grid md:grid-cols-2 max-w-[1144px] gap-x-8 lg:gap-x-[121px] my-auto align-middle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-container lg:max-w-[461px] my-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-light-blue-05 font-oswald mb-3 text-[24px] md:text-[29px] md:leading-[25.536px] md:tracking-[0.44px] lg:text-[40px] md:mb-6\",\n                                    id: \"aboutSplit\",\n                                    children: \"ABOUT ME\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-dark-blue-05 font-lato text-[12px] md:text-[16px] lg:text-[16px] md:leading-[25px] lg:leading-[25px] tracking-[0.16px] description\",\n                                    children: [\n                                        \"As a recent graduate,  with a strong passion for turning lines of code into captivating user experiences.  I'm thrilled to be delving into the world of web development, where I channel my love for problem-solving and attention to detail to craft seamless and responsive websites.\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 38\n                                        }, this),\n                                        \" And now I am very happy to serve clients at Greydient Lab. Which really taught me valuable lessons in teamwork, adaptability, and the power of clean, organized code. I'm a firm believer in continuous learning and embrace each project as a chance to enhance my skills and expand my knowledge.\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-container lg:mt-[48px] md:mt-[32px] mt-[24px] flex justify-end md:justify-start\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/assets/jm-portfolio.pdf\",\n                                        download: \"JM Portfolio\",\n                                        className: \"font-oswald text-[16px] tracking-[1px] lg:text-[24px] rounded-[4px] lg:tracking-[1.2px] bg-light-blue-05 hover:bg-light-blue-04 transform transition-all py-2 lg:py-3 px-4 lg:px-7 \",\n                                        children: \"Download CV\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image-container h-full w-full mt-[40px] md:mt-0\",\n                            onMouseEnter: ()=>sethovered(true),\n                            onMouseLeave: ()=>sethovered(false),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(atropos_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                shadow: true,\n                                shadowScale: 0.4,\n                                highlight: false,\n                                activeOffset: 2,\n                                className: \"image-wrapper max-w-full relative \",\n                                \"data-atropos-offset\": \"5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-gradient-to-b from-[#FFD2A5] via-30% via-light-orange to-light-orange-05 pt-10 relative  !transform !transition-all\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: \"/assets/my-pic.png\",\n                                            alt: \"footer-image\",\n                                            width: 305,\n                                            height: 427.95,\n                                            \"data-atropos-offset\": \"-5\",\n                                            \"data-atropos-opacity\": \"1\",\n                                            className: \"my-auto mx-auto relative transform transition-all  \".concat(hovered ? \" !opacity-0\" : \" !opacity-100 \")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            src: \"/assets/my-pic-2.png\",\n                                            alt: \"footer-image\",\n                                            width: 356,\n                                            height: 427.95,\n                                            \"data-atropos-offset\": \"-5\",\n                                            \"data-atropos-opacity\": \"0\",\n                                            className: \"z-10 mx-auto absolute bottom-0 left-[12%] md:left-[7%] lg:left-[17.5%] opacity-0 group-hover:opacity-100 h-[427.95px] transform transition-all \".concat(hovered ? \" !opacity-100\" : \" !opacity-0 \")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(AboutBlock, \"pMjRq8VlDWv+9S0NKIHFjghHGY4=\");\n_c = AboutBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutBlock);\nvar _c;\n$RefreshReg$(_c, \"AboutBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvYWJvdXQvYWJvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDckI7QUFFTTtBQUNEO0FBQ1A7QUFFNUIsU0FBU08sV0FBWSxLQUNwQjtRQURvQixFQUNwQixHQURvQjs7SUFFakJOLGdEQUFTQSxDQUFFO1FBQ1gsSUFBSUksa0RBQVNBLENBQUU7UUFDZkMsc0NBQUlBLENBQUNFLElBQUksQ0FBRSxxQkFBcUI7WUFDNUJDLEdBQUcsQ0FBQztZQUNKQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7WUFDVDtRQUNKO1FBQ0FYLHNDQUFJQSxDQUFDWSxHQUFHLENBQUUsb0NBQW9DO1lBQUVMLFNBQVM7UUFBRTtRQUMzRFAsc0NBQUlBLENBQUNhLEVBQUUsQ0FBRSxvQ0FBb0M7WUFDekNOLFNBQVM7WUFDVEYsT0FBTztZQUNQRyxlQUFlO2dCQUNYQyxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxLQUFLO1lBQ1Q7UUFDSjtRQUVBWCxzQ0FBSUEsQ0FBQ1ksR0FBRyxDQUFFLGtDQUFrQztZQUFFTCxTQUFTO1FBQUU7UUFDekRQLHNDQUFJQSxDQUFDYSxFQUFFLENBQUUsa0NBQWtDO1lBQ3ZDTixTQUFTO1lBQ1RDLGVBQWU7Z0JBQ1hDLFNBQVM7Z0JBQ1RDLE9BQU87Z0JBQ1BDLEtBQUs7Z0JBQ0xHLE9BQU87WUFDWDtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBQ0QsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBRTtJQUV4QyxxQkFDSTtrQkFDSSw0RUFBQ3FCO1lBQUlDLFdBQVU7WUFBNEdDLElBQUc7WUFBUUMsY0FBVzs7OEJBQzdJLDhEQUFDQztvQkFBSUgsV0FBVTtvQkFBdUpJLGVBQVk7O3NDQUM5Syw4REFBQ0M7c0NBQ0csNEVBQUNDO2dDQUFRTCxJQUFHO2dDQUF1Q00sT0FBTTtnQ0FBTUMsUUFBTztnQ0FBTUMsR0FBRTtnQ0FBTXhCLEdBQUU7Z0NBQUt5QixjQUFhOzBDQUNwRyw0RUFBQ0M7b0NBQUtDLEdBQUU7b0NBQWlCQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUd0Qyw4REFBQ0M7NEJBQUtQLE9BQU07NEJBQU9DLFFBQU87NEJBQU9PLGFBQVk7NEJBQUlGLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFFMUQsOERBQUNkO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDZ0I7b0NBQUdoQixXQUFVO29DQUFtSUMsSUFBRzs4Q0FBYTs7Ozs7OzhDQUNqSyw4REFBQ2dCO29DQUFFakIsV0FBVTs7d0NBQTBJO3NEQUNuSiw4REFBQ2tCOzs7OztzREFBUSw4REFBQ0E7Ozs7O3dDQUFROzs7Ozs7OzhDQUN0Qiw4REFBQ25CO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDbUI7d0NBQUVDLE1BQUs7d0NBQTJCQyxVQUFTO3dDQUFlckIsV0FBVTtrREFBc0w7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUduUSw4REFBQ0Q7NEJBQUlDLFdBQVU7NEJBQWtEc0IsY0FBYyxJQUFNeEIsV0FBWTs0QkFBUXlCLGNBQWMsSUFBTXpCLFdBQVk7c0NBQ3JJLDRFQUFDbEIscURBQU9BO2dDQUFDNEMsUUFBUTtnQ0FBTUMsYUFBYTtnQ0FBS0MsV0FBVztnQ0FBT0MsY0FBYztnQ0FBRzNCLFdBQVU7Z0NBQXFDNEIsdUJBQW9COzBDQUMzSSw0RUFBQzdCO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ3JCLGtEQUFLQTs0Q0FDRmtELEtBQUk7NENBQ0pDLEtBQUk7NENBQ0p2QixPQUFPOzRDQUNQQyxRQUFROzRDQUNSb0IsdUJBQW9COzRDQUNwQkcsd0JBQXFCOzRDQUNyQi9CLFdBQVcsc0RBQWlHLE9BQTNDSCxVQUFVLGdCQUFnQjs7Ozs7O3NEQUUvRiw4REFBQ2xCLGtEQUFLQTs0Q0FDRmtELEtBQUk7NENBQ0pDLEtBQUk7NENBQ0p2QixPQUFPOzRDQUNQQyxRQUFROzRDQUNSb0IsdUJBQW9COzRDQUNwQkcsd0JBQXFCOzRDQUNyQi9CLFdBQVcsa0pBQTZMLE9BQTNDSCxVQUFVLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN047R0F4RlNkO0tBQUFBO0FBMEZULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ibG9ja3MvYWJvdXQvYWJvdXQudHN4PzAyYmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEF0cm9wb3MgZnJvbSAnYXRyb3Bvcy9yZWFjdCc7XHJcbmltcG9ydCBTcGxpdFR5cGUgZnJvbSAnc3BsaXQtdHlwZSc7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcclxuXHJcbmZ1bmN0aW9uIEFib3V0QmxvY2soIHtcclxufSApIHtcclxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4gICAgbmV3IFNwbGl0VHlwZSggJyNhYm91dFNwbGl0JyApO1xyXG4gICAgZ3NhcC5mcm9tKCAnI2Fib3V0U3BsaXQgLmNoYXInLCB7XHJcbiAgICAgICAgeTogLTEwLFxyXG4gICAgICAgIHN0YWdnZXI6IDAuMDIsXHJcbiAgICAgICAgZGVsYXk6IDAuMDIsXHJcbiAgICAgICAgZHVyYXRpb246IC4xLFxyXG4gICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnLmptLWItYWJvdXQtc2VjdGlvbicsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wKz03NXB4IGNlbnRlcicsXHJcbiAgICAgICAgICAgIGVuZDogJ3RvcCs9ODVweCBjZW50ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICB9ICk7XHJcbiAgICBnc2FwLnNldCggJy5qbS1iLWFib3V0LXNlY3Rpb24gLmRlc2NyaXB0aW9uJywgeyBvcGFjaXR5OiAwIH0gKTtcclxuICAgIGdzYXAudG8oICcuam0tYi1hYm91dC1zZWN0aW9uIC5kZXNjcmlwdGlvbicsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGRlbGF5OiAwLjIsXHJcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnLmptLWItYWJvdXQtc2VjdGlvbicsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wKz03NXB4IGNlbnRlcicsXHJcbiAgICAgICAgICAgIGVuZDogJ3RvcCs9ODVweCBjZW50ZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICB9ICk7XHJcblxyXG4gICAgZ3NhcC5zZXQoICcuam0tYi1hYm91dC1zZWN0aW9uIC5zdmctY29sb3InLCB7IG9wYWNpdHk6IDAgfSApO1xyXG4gICAgZ3NhcC50byggJy5qbS1iLWFib3V0LXNlY3Rpb24gLnN2Zy1jb2xvcicsIHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgICAgdHJpZ2dlcjogJy5qbS1iLWFib3V0LXNlY3Rpb24nLFxyXG4gICAgICAgICAgICBzdGFydDogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgICAgICBlbmQ6ICd0b3AgY2VudGVyJyxcclxuICAgICAgICAgICAgc2NydWI6IDEsXHJcbiAgICAgICAgfSxcclxuICAgIH0gKTtcclxufSwgW10gKTtcclxuICAgIGNvbnN0IFtob3ZlcmVkLCBzZXRob3ZlcmVkXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ptLWItYWJvdXQtc2VjdGlvbiBjb2xvciBiZy13aGl0ZSBsZDpwYi1bMjY4cHhdIG1kOnBiLVsyMThweF0gcGItWzE1MHB4XSBwdC1bODBweF0gbWQ6cHQtWzEwMHB4XSByZWxhdGl2ZScgaWQ9J2Fib3V0JyBkYXRhLWNvbG9yPScjRkZGRkZGJz5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIHN2Zy1jb2xvciBzdHJva2UtZ3JheS0yMDAgc3Ryb2tlLWdyYWRpZW50LXRvLWIgW21hc2staW1hZ2U6cmFkaWFsLWdyYWRpZW50KDEwMCVfMTAwJV9hdF90b3BfcmlnaHQsd2hpdGUsdHJhbnNwYXJlbnQpXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0dGVybiBpZD1cIjA3ODdhN2M1LTk3OGMtNGY2Ni04M2M3LTExYzIxM2Y5OWNiN1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgeD1cIjUwJVwiIHk9XCItMVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS41IDIwMFYuNUgyMDBcIiBmaWxsPVwibm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0dGVybj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHN0cm9rZVdpZHRoPVwiMFwiIGZpbGw9XCJ1cmwoIzA3ODdhN2M1LTk3OGMtNGY2Ni04M2M3LTExYzIxM2Y5OWNiNylcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkIG1kOmdyaWQtY29scy0yIG1heC13LVsxMTQ0cHhdIGdhcC14LTggbGc6Z2FwLXgtWzEyMXB4XSBteS1hdXRvIGFsaWduLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXIgbGc6bWF4LXctWzQ2MXB4XSBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtbGlnaHQtYmx1ZS0wNSBmb250LW9zd2FsZCBtYi0zIHRleHQtWzI0cHhdIG1kOnRleHQtWzI5cHhdIG1kOmxlYWRpbmctWzI1LjUzNnB4XSBtZDp0cmFja2luZy1bMC40NHB4XSBsZzp0ZXh0LVs0MHB4XSBtZDptYi02JyBpZD0nYWJvdXRTcGxpdCc+QUJPVVQgTUU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZGFyay1ibHVlLTA1IGZvbnQtbGF0byB0ZXh0LVsxMnB4XSBtZDp0ZXh0LVsxNnB4XSBsZzp0ZXh0LVsxNnB4XSBtZDpsZWFkaW5nLVsyNXB4XSBsZzpsZWFkaW5nLVsyNXB4XSB0cmFja2luZy1bMC4xNnB4XSBkZXNjcmlwdGlvbic+QXMgYSByZWNlbnQgZ3JhZHVhdGUsICB3aXRoIGEgc3Ryb25nIHBhc3Npb24gZm9yIHR1cm5pbmcgbGluZXMgb2YgY29kZSBpbnRvIGNhcHRpdmF0aW5nIHVzZXIgZXhwZXJpZW5jZXMuICBJJmFwb3M7bSB0aHJpbGxlZCB0byBiZSBkZWx2aW5nIGludG8gdGhlIHdvcmxkIG9mIHdlYiBkZXZlbG9wbWVudCwgd2hlcmUgSSBjaGFubmVsIG15IGxvdmUgZm9yIHByb2JsZW0tc29sdmluZyBhbmQgYXR0ZW50aW9uIHRvIGRldGFpbCB0byBjcmFmdCBzZWFtbGVzcyBhbmQgcmVzcG9uc2l2ZSB3ZWJzaXRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPiBBbmQgbm93IEkgYW0gdmVyeSBoYXBweSB0byBzZXJ2ZSBjbGllbnRzIGF0IEdyZXlkaWVudCBMYWIuIFdoaWNoIHJlYWxseSB0YXVnaHQgbWUgdmFsdWFibGUgbGVzc29ucyBpbiB0ZWFtd29yaywgYWRhcHRhYmlsaXR5LCBhbmQgdGhlIHBvd2VyIG9mIGNsZWFuLCBvcmdhbml6ZWQgY29kZS4gSSZhcG9zO20gYSBmaXJtIGJlbGlldmVyIGluIGNvbnRpbnVvdXMgbGVhcm5pbmcgYW5kIGVtYnJhY2UgZWFjaCBwcm9qZWN0IGFzIGEgY2hhbmNlIHRvIGVuaGFuY2UgbXkgc2tpbGxzIGFuZCBleHBhbmQgbXkga25vd2xlZGdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyIGxnOm10LVs0OHB4XSBtZDptdC1bMzJweF0gbXQtWzI0cHhdIGZsZXgganVzdGlmeS1lbmQgbWQ6anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hc3NldHMvam0tcG9ydGZvbGlvLnBkZlwiIGRvd25sb2FkPVwiSk0gUG9ydGZvbGlvXCIgY2xhc3NOYW1lPSdmb250LW9zd2FsZCB0ZXh0LVsxNnB4XSB0cmFja2luZy1bMXB4XSBsZzp0ZXh0LVsyNHB4XSByb3VuZGVkLVs0cHhdIGxnOnRyYWNraW5nLVsxLjJweF0gYmctbGlnaHQtYmx1ZS0wNSBob3ZlcjpiZy1saWdodC1ibHVlLTA0IHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBweS0yIGxnOnB5LTMgcHgtNCBsZzpweC03ICc+RG93bmxvYWQgQ1Y8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyIGgtZnVsbCB3LWZ1bGwgbXQtWzQwcHhdIG1kOm10LTBcIiBvbk1vdXNlRW50ZXI9eygpID0+IHNldGhvdmVyZWQoIHRydWUgKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRob3ZlcmVkKCBmYWxzZSApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF0cm9wb3Mgc2hhZG93PXt0cnVlfSBzaGFkb3dTY2FsZT17MC40fSBoaWdobGlnaHQ9e2ZhbHNlfSBhY3RpdmVPZmZzZXQ9ezJ9IGNsYXNzTmFtZT0naW1hZ2Utd3JhcHBlciBtYXgtdy1mdWxsIHJlbGF0aXZlICcgZGF0YS1hdHJvcG9zLW9mZnNldD1cIjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLVsjRkZEMkE1XSB2aWEtMzAlIHZpYS1saWdodC1vcmFuZ2UgdG8tbGlnaHQtb3JhbmdlLTA1IHB0LTEwIHJlbGF0aXZlICAhdHJhbnNmb3JtICF0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9hc3NldHMvbXktcGljLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdmb290ZXItaW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDI3Ljk1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0cm9wb3Mtb2Zmc2V0PVwiLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0cm9wb3Mtb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BteS1hdXRvIG14LWF1dG8gcmVsYXRpdmUgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsICAke2hvdmVyZWQgPyAnICFvcGFjaXR5LTAnIDogJyAhb3BhY2l0eS0xMDAgJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9teS1waWMtMi5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nZm9vdGVyLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQyNy45NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHJvcG9zLW9mZnNldD1cIi01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHJvcG9zLW9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgei0xMCBteC1hdXRvIGFic29sdXRlIGJvdHRvbS0wIGxlZnQtWzEyJV0gbWQ6bGVmdC1bNyVdIGxnOmxlZnQtWzE3LjUlXSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgaC1bNDI3Ljk1cHhdIHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCAke2hvdmVyZWQgPyAnICFvcGFjaXR5LTEwMCcgOiAnICFvcGFjaXR5LTAgJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdHJvcG9zPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0QmxvY2s7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJBdHJvcG9zIiwiU3BsaXRUeXBlIiwiZ3NhcCIsIkFib3V0QmxvY2siLCJmcm9tIiwieSIsInN0YWdnZXIiLCJkZWxheSIsImR1cmF0aW9uIiwib3BhY2l0eSIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzZXQiLCJ0byIsInNjcnViIiwiaG92ZXJlZCIsInNldGhvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImRhdGEtY29sb3IiLCJzdmciLCJhcmlhLWhpZGRlbiIsImRlZnMiLCJwYXR0ZXJuIiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwicGF0dGVyblVuaXRzIiwicGF0aCIsImQiLCJmaWxsIiwicmVjdCIsInN0cm9rZVdpZHRoIiwiaDIiLCJwIiwiYnIiLCJhIiwiaHJlZiIsImRvd25sb2FkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic2hhZG93Iiwic2hhZG93U2NhbGUiLCJoaWdobGlnaHQiLCJhY3RpdmVPZmZzZXQiLCJkYXRhLWF0cm9wb3Mtb2Zmc2V0Iiwic3JjIiwiYWx0IiwiZGF0YS1hdHJvcG9zLW9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/about/about.tsx\n"));

/***/ })

});