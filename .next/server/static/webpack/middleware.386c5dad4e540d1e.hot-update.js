"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./app/lib/action.tsx":
/*!****************************!*\
  !*** ./app/lib/action.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\n\nconst secretKey = \"secret\";\nconst key = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"10 sec from now\").sign(key);\n}\nasync function decrypt(input) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(input, key, {\n        algorithms: [\n            \"HS256\"\n        ]\n    });\n    return payload;\n}\nasync function login(formData) {\n    const user = {\n        username: formData.get(\"username\"),\n        password: formData.get(\"password\")\n    };\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const expires = new Date(Date.now() + 10 * 1000);\n    const session = await encrypt({\n        user,\n        expires\n    });\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", session, {\n        expires,\n        httpOnly: true\n    });\n    const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            username,\n            password\n        })\n    });\n    if (!tokenResponse.ok) {\n        console.log(\"This email have no existing account\");\n        return;\n    } else {\n        console.log(\"This email have existing account\");\n    }\n    const { jwt_token } = await tokenResponse.json();\n    const validateResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token-validate\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": `Bearer ${jwt_token}`\n        }\n    });\n    if (validateResponse.ok) {}\n}\nasync function getSession() {\n    const session = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"session\")?.value;\n    if (!session) return null;\n    return await decrypt(session);\n}\nasync function logout(formData) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", \"\", {\n        expires: new Date(0)\n    });\n}\nasync function updateSession(request) {\n    const session = request.cookies.get(\"session\")?.value;\n    if (!session) return;\n    const parsed = await decrypt(\"session\");\n    parsed.expires = new Date(Date.now() + 10 * 1000);\n    const rest = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].next();\n    rest.cookies.set({\n        name: \"session\",\n        value: await encrypt(parsed),\n        httpOnly: true,\n        expires: parsed.expires\n    });\n    return rest;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L19OX0UvLi9hcHAvbGliL2FjdGlvbi50c3g/OTg5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5pbXBvcnQgeyBTaWduSldULCBqd3RWZXJpZnkgfSBmcm9tIFwiam9zZVwiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5jb25zdCBzZWNyZXRLZXkgPSAnc2VjcmV0JztcclxuY29uc3Qga2V5ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHNlY3JldEtleSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5jcnlwdChwYXlsb2FkOiBhbnkpIHtcclxuICAgIHJldHVybiBhd2FpdCBuZXcgU2lnbkpXVChwYXlsb2FkKVxyXG4gICAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicgfSlcclxuICAgICAgICAuc2V0SXNzdWVkQXQoKVxyXG4gICAgICAgIC5zZXRFeHBpcmF0aW9uVGltZSgnMTAgc2VjIGZyb20gbm93JylcclxuICAgICAgICAuc2lnbihrZXkpXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdChpbnB1dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KGlucHV0LCBrZXksIHtcclxuXHJcbiAgICAgICAgYWxnb3JpdGhtczogWydIUzI1NiddLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgdXNlciA9IHsgdXNlcm5hbWU6IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSwgcGFzc3dvcmQ6IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSB9O1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKTtcclxuICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAgKiAxMDAwKTtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBlbmNyeXB0KHsgdXNlciwgZXhwaXJlcyB9KTtcclxuICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBzZXNzaW9uLCB7IGV4cGlyZXMsIGh0dHBPbmx5OiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2ptLXBvcnRmb2xpby5sb2NhbC93cC1qc29uL2FwaS92MS90b2tlbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdG9rZW5SZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGVtYWlsIGhhdmUgbm8gZXhpc3RpbmcgYWNjb3VudCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGVtYWlsIGhhdmUgZXhpc3RpbmcgYWNjb3VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgand0X3Rva2VuIH0gPSBhd2FpdCB0b2tlblJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHZhbGlkYXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2ptLXBvcnRmb2xpby5sb2NhbC93cC1qc29uL2FwaS92MS90b2tlbi12YWxpZGF0ZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7and0X3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGNvb2tpZXMoKS5nZXQoJ3Nlc3Npb24nKT8udmFsdWU7XHJcbiAgICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIGF3YWl0IGRlY3J5cHQoc2Vzc2lvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICBjb29raWVzKCkuc2V0KCdzZXNzaW9uJywgJycsIHsgZXhwaXJlczogbmV3IERhdGUoMCkgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3Nlc3Npb24nKT8udmFsdWU7XHJcbiAgICBpZiAoIXNlc3Npb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCBkZWNyeXB0KCdzZXNzaW9uJyk7XHJcbiAgICBwYXJzZWQuZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDEwMDApO1xyXG4gICAgY29uc3QgcmVzdCA9IE5leHRSZXNwb25zZS5uZXh0KCk7XHJcblxyXG4gICAgcmVzdC5jb29raWVzLnNldCh7XHJcblxyXG4gICAgICAgIG5hbWU6ICdzZXNzaW9uJyxcclxuICAgICAgICB2YWx1ZTogYXdhaXQgZW5jcnlwdChwYXJzZWQpLFxyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIGV4cGlyZXM6IHBhcnNlZC5leHBpcmVzLFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzdDtcclxufSJdLCJuYW1lcyI6WyJjb29raWVzIiwiU2lnbkpXVCIsImp3dFZlcmlmeSIsIk5leHRSZXNwb25zZSIsInNlY3JldEtleSIsImtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiZW5jcnlwdCIsInBheWxvYWQiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsImRlY3J5cHQiLCJpbnB1dCIsImFsZ29yaXRobXMiLCJsb2dpbiIsImZvcm1EYXRhIiwidXNlciIsInVzZXJuYW1lIiwiZ2V0IiwicGFzc3dvcmQiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInNlc3Npb24iLCJzZXQiLCJodHRwT25seSIsInRva2VuUmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsImxvZyIsImp3dF90b2tlbiIsImpzb24iLCJ2YWxpZGF0ZVJlc3BvbnNlIiwiZ2V0U2Vzc2lvbiIsInZhbHVlIiwibG9nb3V0IiwidXBkYXRlU2Vzc2lvbiIsInJlcXVlc3QiLCJwYXJzZWQiLCJyZXN0IiwibmV4dCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./app/lib/action.tsx\n");

/***/ })

});