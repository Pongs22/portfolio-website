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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var atropos_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! atropos/react */ \"(app-pages-browser)/./node_modules/atropos/atropos-react.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AboutBlock(param) {\n    let {} = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const container = document.querySelector(\".image-container\");\n        const firstImage = container.querySelector(\"#image1\");\n        const secondImage = container.querySelector(\"#image2\");\n        container.addEventListener(\"mouseenter\", ()=>{\n            gsap.to(firstImage, {\n                opacity: 0.5\n            });\n            gsap.to(secondImage, {\n                opacity: 1\n            });\n        });\n        container.addEventListener(\"mouseleave\", ()=>{\n            gsap.to(firstImage, {\n                opacity: 1\n            });\n            gsap.to(secondImage, {\n                opacity: 0\n            });\n        });\n        // Cleanup event listeners on unmount\n        return ()=>{\n            container.removeEventListener(\"mouseenter\");\n            container.removeEventListener(\"mouseleave\");\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-white pb-[268px] pt-[80px] md:pt-[100px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container grid md:grid-cols-2 max-w-[1144px] gap-x-8 lg:gap-x-[121px] my-auto align-middle\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-container lg:max-w-[461px] my-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-light-blue-05 font-oswald text-[20px] mb-3 md:text-[29px] md:leading-[25.536px] md:tracking-[0.44px] lg:text-[40px] md:mb-6\",\n                                children: \"ABOUT ME\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-dark-blue-05 font-lato text-[12px] md:text-[16px] lg:text-[16px] md:leading-[25px] lg:leading-[25px] tracking-[0.16px]\",\n                                children: [\n                                    \"As a recent graduate,  with a strong passion for turning lines of code into captivating user experiences.  I'm thrilled to be delving into the world of web development, where I channel my love for problem-solving and attention to detail to craft seamless and responsive websites.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 38\n                                    }, this),\n                                    \" And now I am very happy to serve clients at Greydient Lab. Which really taught me valuable lessons in teamwork, adaptability, and the power of clean, organized code. I'm a firm believer in continuous learning and embrace each project as a chance to enhance my skills and expand my knowledge.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"image-container h-full w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(atropos_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            shadow: true,\n                            shadowScale: 0.4,\n                            highlight: true,\n                            activeOffset: 2,\n                            className: \"image-wrapper max-w-full relative \",\n                            \"data-atropos-offset\": \"5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-gradient-to-b from-[#FFD2A5] via-30% via-light-orange to-light-orange-05 pt-10 relative group transform transition-all\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: \"/assets/my-pic.png\",\n                                        alt: \"footer-image\",\n                                        width: 305,\n                                        height: 427.95,\n                                        \"data-atropos-offset\": \"-5\",\n                                        className: \" my-auto mx-auto relative -mt-10 z-10 group-hover:hidden group-hover:opacity-0 transform transition-all\",\n                                        id: \"image1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: \"/assets/my-pic-2.png\",\n                                        alt: \"footer-image\",\n                                        width: 356,\n                                        height: 427.95,\n                                        \"data-atropos-offset\": \"-5\",\n                                        className: \"z-10 mx-auto relative -mt-10 hidden group-hover:block h-[427.95px] transform transition-all opacity-1\",\n                                        id: \"image2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\blocks\\\\about\\\\about.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(AboutBlock, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = AboutBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutBlock);\nvar _c;\n$RefreshReg$(_c, \"AboutBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ja3MvYWJvdXQvYWJvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ1E7QUFDSjtBQUVNO0FBRXBDLFNBQVNJLFdBQVcsS0FDbkI7UUFEbUIsRUFDbkIsR0FEbUI7O0lBR2hCSCxnREFBU0EsQ0FBQztRQUNOLE1BQU1JLFlBQVlDLFNBQVNDLGFBQWEsQ0FBQztRQUN6QyxNQUFNQyxhQUFhSCxVQUFVRSxhQUFhLENBQUM7UUFDM0MsTUFBTUUsY0FBY0osVUFBVUUsYUFBYSxDQUFDO1FBRTVDRixVQUFVSyxnQkFBZ0IsQ0FBQyxjQUFjO1lBQ3ZDQyxLQUFLQyxFQUFFLENBQUNKLFlBQVk7Z0JBQUVLLFNBQVM7WUFBSTtZQUNuQ0YsS0FBS0MsRUFBRSxDQUFDSCxhQUFhO2dCQUFFSSxTQUFTO1lBQUU7UUFDcEM7UUFFQVIsVUFBVUssZ0JBQWdCLENBQUMsY0FBYztZQUN2Q0MsS0FBS0MsRUFBRSxDQUFDSixZQUFZO2dCQUFFSyxTQUFTO1lBQUU7WUFDakNGLEtBQUtDLEVBQUUsQ0FBQ0gsYUFBYTtnQkFBRUksU0FBUztZQUFFO1FBQ3BDO1FBRUEscUNBQXFDO1FBQ3JDLE9BQU87WUFDTFIsVUFBVVMsbUJBQW1CLENBQUM7WUFDOUJULFVBQVVTLG1CQUFtQixDQUFDO1FBQ2hDO0lBQ0YsR0FBRyxFQUFFO0lBQ1AscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQVFDLFdBQVU7c0JBQ2YsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBbUk7Ozs7OzswQ0FDakosOERBQUNHO2dDQUFFSCxXQUFVOztvQ0FBOEg7a0RBQ3ZJLDhEQUFDSTs7Ozs7a0RBQVEsOERBQUNBOzs7OztvQ0FBUTs7Ozs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNIO3dCQUFLRCxXQUFVO2tDQUNaLDRFQUFDYixxREFBT0E7NEJBQUNrQixRQUFROzRCQUFNQyxhQUFhOzRCQUFLQyxXQUFXOzRCQUFNQyxjQUFjOzRCQUFHUixXQUFVOzRCQUFxQ1MsdUJBQW9CO3NDQUMxSSw0RUFBQ1I7Z0NBQUlELFdBQVU7O2tEQUNYLDhEQUFDZCxrREFBS0E7d0NBQ0Z3QixLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSSix1QkFBb0I7d0NBQ3BCVCxXQUFVO3dDQUNWYyxJQUFHOzs7Ozs7a0RBRVAsOERBQUM1QixrREFBS0E7d0NBQ0Z3QixLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSSix1QkFBb0I7d0NBQ3BCVCxXQUFVO3dDQUNWYyxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZDO0dBN0RTMUI7S0FBQUE7QUErRFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2Nrcy9hYm91dC9hYm91dC50c3g/MDJiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEF0cm9wb3MgZnJvbSAnYXRyb3Bvcy9yZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBBYm91dEJsb2NrKHtcclxufSkge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW1hZ2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI2ltYWdlMScpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZEltYWdlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZTInKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgZ3NhcC50byhmaXJzdEltYWdlLCB7IG9wYWNpdHk6IDAuNSB9KTtcclxuICAgICAgICAgIGdzYXAudG8oc2Vjb25kSW1hZ2UsIHsgb3BhY2l0eTogMSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgZ3NhcC50byhmaXJzdEltYWdlLCB7IG9wYWNpdHk6IDEgfSk7XHJcbiAgICAgICAgICBnc2FwLnRvKHNlY29uZEltYWdlLCB7IG9wYWNpdHk6IDAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyBDbGVhbnVwIGV2ZW50IGxpc3RlbmVycyBvbiB1bm1vdW50XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJyk7XHJcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdiZy13aGl0ZSBwYi1bMjY4cHhdIHB0LVs4MHB4XSBtZDpwdC1bMTAwcHhdJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWF4LXctWzExNDRweF0gZ2FwLXgtOCBsZzpnYXAteC1bMTIxcHhdIG15LWF1dG8gYWxpZ24tbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lciBsZzptYXgtdy1bNDYxcHhdIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1saWdodC1ibHVlLTA1IGZvbnQtb3N3YWxkIHRleHQtWzIwcHhdIG1iLTMgbWQ6dGV4dC1bMjlweF0gbWQ6bGVhZGluZy1bMjUuNTM2cHhdIG1kOnRyYWNraW5nLVswLjQ0cHhdIGxnOnRleHQtWzQwcHhdIG1kOm1iLTYnPkFCT1VUIE1FPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhcmstYmx1ZS0wNSBmb250LWxhdG8gdGV4dC1bMTJweF0gbWQ6dGV4dC1bMTZweF0gbGc6dGV4dC1bMTZweF0gbWQ6bGVhZGluZy1bMjVweF0gbGc6bGVhZGluZy1bMjVweF0gdHJhY2tpbmctWzAuMTZweF0nPkFzIGEgcmVjZW50IGdyYWR1YXRlLCAgd2l0aCBhIHN0cm9uZyBwYXNzaW9uIGZvciB0dXJuaW5nIGxpbmVzIG9mIGNvZGUgaW50byBjYXB0aXZhdGluZyB1c2VyIGV4cGVyaWVuY2VzLiAgSSdtIHRocmlsbGVkIHRvIGJlIGRlbHZpbmcgaW50byB0aGUgd29ybGQgb2Ygd2ViIGRldmVsb3BtZW50LCB3aGVyZSBJIGNoYW5uZWwgbXkgbG92ZSBmb3IgcHJvYmxlbS1zb2x2aW5nIGFuZCBhdHRlbnRpb24gdG8gZGV0YWlsIHRvIGNyYWZ0IHNlYW1sZXNzIGFuZCByZXNwb25zaXZlIHdlYnNpdGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+IEFuZCBub3cgSSBhbSB2ZXJ5IGhhcHB5IHRvIHNlcnZlIGNsaWVudHMgYXQgR3JleWRpZW50IExhYi4gV2hpY2ggcmVhbGx5IHRhdWdodCBtZSB2YWx1YWJsZSBsZXNzb25zIGluIHRlYW13b3JrLCBhZGFwdGFiaWxpdHksIGFuZCB0aGUgcG93ZXIgb2YgY2xlYW4sIG9yZ2FuaXplZCBjb2RlLiBJJ20gYSBmaXJtIGJlbGlldmVyIGluIGNvbnRpbnVvdXMgbGVhcm5pbmcgYW5kIGVtYnJhY2UgZWFjaCBwcm9qZWN0IGFzIGEgY2hhbmNlIHRvIGVuaGFuY2UgbXkgc2tpbGxzIGFuZCBleHBhbmQgbXkga25vd2xlZGdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXIgaC1mdWxsIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXRyb3BvcyBzaGFkb3c9e3RydWV9IHNoYWRvd1NjYWxlPXswLjR9IGhpZ2hsaWdodD17dHJ1ZX0gYWN0aXZlT2Zmc2V0PXsyfSBjbGFzc05hbWU9J2ltYWdlLXdyYXBwZXIgbWF4LXctZnVsbCByZWxhdGl2ZSAnIGRhdGEtYXRyb3Bvcy1vZmZzZXQ9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWIgZnJvbS1bI0ZGRDJBNV0gdmlhLTMwJSB2aWEtbGlnaHQtb3JhbmdlIHRvLWxpZ2h0LW9yYW5nZS0wNSBwdC0xMCByZWxhdGl2ZSBncm91cCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL215LXBpYy5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nZm9vdGVyLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQyNy45NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHJvcG9zLW9mZnNldD1cIi01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPScgbXktYXV0byBteC1hdXRvIHJlbGF0aXZlIC1tdC0xMCB6LTEwIGdyb3VwLWhvdmVyOmhpZGRlbiBncm91cC1ob3ZlcjpvcGFjaXR5LTAgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0naW1hZ2UxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2Fzc2V0cy9teS1waWMtMi5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nZm9vdGVyLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzU2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQyNy45NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHJvcG9zLW9mZnNldD1cIi01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd6LTEwIG14LWF1dG8gcmVsYXRpdmUgLW10LTEwIGhpZGRlbiBncm91cC1ob3ZlcjpibG9jayBoLVs0MjcuOTVweF0gdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIG9wYWNpdHktMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2ltYWdlMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXRyb3Bvcz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24gPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRCbG9jaztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJBdHJvcG9zIiwiQWJvdXRCbG9jayIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0SW1hZ2UiLCJzZWNvbmRJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnc2FwIiwidG8iLCJvcGFjaXR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJiciIsInNoYWRvdyIsInNoYWRvd1NjYWxlIiwiaGlnaGxpZ2h0IiwiYWN0aXZlT2Zmc2V0IiwiZGF0YS1hdHJvcG9zLW9mZnNldCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blocks/about/about.tsx\n"));

/***/ })

});