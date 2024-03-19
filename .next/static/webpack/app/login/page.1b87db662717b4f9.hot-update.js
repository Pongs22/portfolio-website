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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction LoginPage() {\n    _s();\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        const username = formData.get(\"username\");\n        const password = formData.get(\"password\");\n        const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username,\n                password\n            })\n        });\n        if (!tokenResponse.ok) {\n            console.log(\"Login Failed\");\n            return;\n        }\n        const { jwt_token } = await tokenResponse.json();\n        setJwtToken(jwt_token);\n        // Step 2: Validate the token (optional)\n        const validateResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token-validate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": \"Bearer \".concat(jwt_token)\n            }\n        });\n        if (validateResponse.ok) {\n            console.log(\"Token is valid\");\n        } else {\n            console.log(\"Token validation failed\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dark-blue-05 h-screen flex content-center my-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"mx-auto my-auto bg-dark-blue-05 flex flex-col gap-y-5 max-w-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"username\",\n                    placeholder: \"username\",\n                    required: true,\n                    className: \"text-dark-blue-05\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"Password\",\n                    required: true,\n                    className: \"text-dark-blue-05\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\portfolio-website\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"2xJwQwSUPsi7+Knnm8dn8hGMzW4=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFHbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFFeEQsZUFBZUksYUFBYUMsS0FBaUM7UUFDM0RBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsV0FBVyxJQUFJQyxTQUFTSCxNQUFNSSxhQUFhO1FBQ2pELE1BQU1DLFdBQVdILFNBQVNJLEdBQUcsQ0FBQztRQUM5QixNQUFNQyxXQUFXTCxTQUFTSSxHQUFHLENBQUM7UUFFOUIsTUFBTUUsZ0JBQWdCLE1BQU1DLE1BQU0sa0RBQWtEO1lBQ2xGQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVUO2dCQUFVRTtZQUFTO1FBQzVDO1FBRUEsSUFBSSxDQUFDQyxjQUFjTyxFQUFFLEVBQUU7WUFDckJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0Y7UUFFQSxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHLE1BQU1WLGNBQWNXLElBQUk7UUFDOUNyQixZQUFZb0I7UUFFWix3Q0FBd0M7UUFDeEMsTUFBTUUsbUJBQW1CLE1BQU1YLE1BQU0sMkRBQTJEO1lBQzlGQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixpQkFBaUIsVUFBb0IsT0FBVk87WUFDN0I7UUFDRjtRQUVBLElBQUlFLGlCQUFpQkwsRUFBRSxFQUFFO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7UUFDZCxPQUFPO1lBQ0xELFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0MsVUFBVXpCO1lBQWN1QixXQUFVOzs4QkFDdEMsOERBQUNHO29CQUFNQyxNQUFLO29CQUFPQyxNQUFLO29CQUFXQyxhQUFZO29CQUFXQyxRQUFRO29CQUFDUCxXQUFVOzs7Ozs7OEJBQzdFLDhEQUFDRztvQkFBTUMsTUFBSztvQkFBV0MsTUFBSztvQkFBV0MsYUFBWTtvQkFBV0MsUUFBUTtvQkFBQ1AsV0FBVTs7Ozs7OzhCQUNqRiw4REFBQ1E7b0JBQU9KLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBakR3QjlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLnRzeD80OTBhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIGNvbnN0IFtqd3RUb2tlbiwgc2V0Snd0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2ptLXBvcnRmb2xpby5sb2NhbC93cC1qc29uL2FwaS92MS90b2tlbicsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdG9rZW5SZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9naW4gRmFpbGVkJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGp3dF90b2tlbiB9ID0gYXdhaXQgdG9rZW5SZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRKd3RUb2tlbihqd3RfdG9rZW4pO1xyXG5cclxuICAgIC8vIFN0ZXAgMjogVmFsaWRhdGUgdGhlIHRva2VuIChvcHRpb25hbClcclxuICAgIGNvbnN0IHZhbGlkYXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2ptLXBvcnRmb2xpby5sb2NhbC93cC1qc29uL2FwaS92MS90b2tlbi12YWxpZGF0ZScsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2p3dF90b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlUmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGlzIHZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gdmFsaWRhdGlvbiBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWRhcmstYmx1ZS0wNSBoLXNjcmVlbiBmbGV4IGNvbnRlbnQtY2VudGVyIG15LWF1dG9cIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPSdteC1hdXRvIG15LWF1dG8gYmctZGFyay1ibHVlLTA1IGZsZXggZmxleC1jb2wgZ2FwLXktNSBtYXgtdy14bCc+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIHJlcXVpcmVkIGNsYXNzTmFtZT0ndGV4dC1kYXJrLWJsdWUtMDUnIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZCBjbGFzc05hbWU9J3RleHQtZGFyay1ibHVlLTA1JyAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTG9naW5QYWdlIiwiand0VG9rZW4iLCJzZXRKd3RUb2tlbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsInVzZXJuYW1lIiwiZ2V0IiwicGFzc3dvcmQiLCJ0b2tlblJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJqd3RfdG9rZW4iLCJqc29uIiwidmFsaWRhdGVSZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.tsx\n"));

/***/ })

});