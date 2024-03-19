"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction LoginPage() {\n    _s();\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        const username = formData.get(\"username\");\n        const password = formData.get(\"password\");\n        const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username,\n                password\n            })\n        });\n        if (!tokenResponse.ok) {\n            console.log(\"Login Failed\");\n            return;\n        }\n        const { jwt_token } = await tokenResponse.json();\n        setJwtToken(jwt_token);\n        // Step 2: Validate the token (optional)\n        const validateResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token-validate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(jwt_token)\n            }\n        });\n        if (validateResponse.ok) {\n            console.log(\"Token is valid\");\n        } else {\n            console.log(jwt_token + \"Token validation failed\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dark-blue-05 h-screen flex content-center my-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"mx-auto my-auto bg-dark-blue-05 flex flex-col gap-y-5 max-w-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"username\",\n                    placeholder: \"username\",\n                    required: true,\n                    className: \"text-dark-blue-05\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"Password\",\n                    required: true,\n                    className: \"text-dark-blue-05\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"2xJwQwSUPsi7+Knnm8dn8hGMzW4=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFHbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFFeEQsZUFBZUksYUFBYUMsS0FBaUM7UUFDM0RBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsV0FBVyxJQUFJQyxTQUFTSCxNQUFNSSxhQUFhO1FBQ2pELE1BQU1DLFdBQVdILFNBQVNJLEdBQUcsQ0FBQztRQUM5QixNQUFNQyxXQUFXTCxTQUFTSSxHQUFHLENBQUM7UUFFOUIsTUFBTUUsZ0JBQWdCLE1BQU1DLE1BQU0sa0RBQWtEO1lBQ2xGQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVUO2dCQUFVRTtZQUFTO1FBQzVDO1FBRUEsSUFBSSxDQUFDQyxjQUFjTyxFQUFFLEVBQUU7WUFDckJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0Y7UUFFQSxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHLE1BQU1WLGNBQWNXLElBQUk7UUFDOUNyQixZQUFZb0I7UUFFWix3Q0FBd0M7UUFDeEMsTUFBTUUsbUJBQW1CLE1BQU1YLE1BQU0sMkRBQTJEO1lBQzlGQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixpQkFBaUIsVUFBb0IsT0FBVk87WUFDN0I7UUFDRjtRQUVBLElBQUlFLGlCQUFpQkwsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPO1lBQ0xELFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUtDLFVBQVV6QjtZQUFjdUIsV0FBVTs7OEJBQ3RDLDhEQUFDRztvQkFBTUMsTUFBSztvQkFBT0MsTUFBSztvQkFBV0MsYUFBWTtvQkFBV0MsUUFBUTtvQkFBQ1AsV0FBVTs7Ozs7OzhCQUM3RSw4REFBQ0c7b0JBQU1DLE1BQUs7b0JBQVdDLE1BQUs7b0JBQVdDLGFBQVk7b0JBQVdDLFFBQVE7b0JBQUNQLFdBQVU7Ozs7Ozs4QkFDakYsOERBQUNRO29CQUFPSixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQWpEd0I5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS50c3g/NDkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICBjb25zdCBband0VG9rZW4sIHNldEp3dFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKTtcclxuXHJcbiAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qbS1wb3J0Zm9saW8ubG9jYWwvd3AtanNvbi9hcGkvdjEvdG9rZW4nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRva2VuUmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvZ2luIEZhaWxlZCcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBqd3RfdG9rZW4gfSA9IGF3YWl0IHRva2VuUmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0Snd0VG9rZW4oand0X3Rva2VuKTtcclxuXHJcbiAgICAvLyBTdGVwIDI6IFZhbGlkYXRlIHRoZSB0b2tlbiAob3B0aW9uYWwpXHJcbiAgICBjb25zdCB2YWxpZGF0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qbS1wb3J0Zm9saW8ubG9jYWwvd3AtanNvbi9hcGkvdjEvdG9rZW4tdmFsaWRhdGUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RfdG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBpcyB2YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coand0X3Rva2VuICsgJ1Rva2VuIHZhbGlkYXRpb24gZmFpbGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1kYXJrLWJsdWUtMDUgaC1zY3JlZW4gZmxleCBjb250ZW50LWNlbnRlciBteS1hdXRvXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0nbXgtYXV0byBteS1hdXRvIGJnLWRhcmstYmx1ZS0wNSBmbGV4IGZsZXgtY29sIGdhcC15LTUgbWF4LXcteGwnPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiByZXF1aXJlZCBjbGFzc05hbWU9J3RleHQtZGFyay1ibHVlLTA1JyAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgY2xhc3NOYW1lPSd0ZXh0LWRhcmstYmx1ZS0wNScgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxvZ2luUGFnZSIsImp3dFRva2VuIiwic2V0Snd0VG9rZW4iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJ1c2VybmFtZSIsImdldCIsInBhc3N3b3JkIiwidG9rZW5SZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwiand0X3Rva2VuIiwianNvbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});