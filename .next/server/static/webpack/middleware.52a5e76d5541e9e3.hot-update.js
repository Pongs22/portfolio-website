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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\n\nconst secretKey = \"secret\";\nconst key = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"10 sec from now\").sign(key);\n}\nasync function decrypt(input) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(input, key, {\n        algorithms: [\n            \"HS256\"\n        ]\n    });\n    return payload;\n}\nasync function login(formData) {\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            username,\n            password\n        })\n    });\n    if (!tokenResponse.ok) {\n        console.log(\"This email have no existing account\");\n        return;\n    }\n    const { jwt_token } = await tokenResponse.json();\n    const validateResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token-validate\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": `Bearer ${jwt_token}`\n        }\n    });\n    if (validateResponse.ok) {\n        const expires = new Date(Date.now() + 10 * 1000);\n        const session = jwt_token;\n        (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", session, {\n            expires,\n            httpOnly: true\n        });\n    }\n}\nasync function getSession() {\n    const session = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"session\")?.value;\n    if (!session) return null;\n    return await decrypt(session);\n}\nasync function logout(formData) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", \"\", {\n        expires: new Date(0)\n    });\n}\nasync function updateSession(request) {\n    const session = request.cookies.get(\"session\")?.value;\n    if (!session) return;\n    const parsed = await decrypt(\"session\");\n    parsed.expires = new Date(Date.now() + 10 * 1000);\n    const rest = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].next();\n    rest.cookies.set({\n        name: \"session\",\n        value: await encrypt(parsed),\n        httpOnly: true,\n        expires: parsed.expires\n    });\n    return rest;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL2xpYi9hY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNHO0FBQ2M7QUFFeEQsTUFBTUksWUFBWTtBQUNsQixNQUFNQyxNQUFNLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0g7QUFFOUIsZUFBZUksUUFBUUMsT0FBWTtJQUN0QyxPQUFPLE1BQU0sSUFBSVIseUNBQU9BLENBQUNRLFNBQ3BCQyxrQkFBa0IsQ0FBQztRQUFFQyxLQUFLO0lBQVEsR0FDbENDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsbUJBQ2xCQyxJQUFJLENBQUNUO0FBQ2Q7QUFFTyxlQUFlVSxRQUFRQyxLQUFhO0lBQ3ZDLE1BQU0sRUFBRVAsT0FBTyxFQUFFLEdBQUcsTUFBTVAsK0NBQVNBLENBQUNjLE9BQU9YLEtBQUs7UUFFNUNZLFlBQVk7WUFBQztTQUFRO0lBQ3pCO0lBQ0EsT0FBT1I7QUFDWDtBQUVPLGVBQWVTLE1BQU1DLFFBQWtCO0lBQzFDLE1BQU1DLFdBQVdELFNBQVNFLEdBQUcsQ0FBQztJQUM5QixNQUFNQyxXQUFXSCxTQUFTRSxHQUFHLENBQUM7SUFHOUIsTUFBTUUsZ0JBQWdCLE1BQU1DLE1BQU0sa0RBQWtEO1FBQ2hGQyxRQUFRO1FBQ1JDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFVDtZQUFVRTtRQUFTO0lBQzlDO0lBRUEsSUFBSSxDQUFDQyxjQUFjTyxFQUFFLEVBQUU7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHLE1BQU1WLGNBQWNXLElBQUk7SUFDOUMsTUFBTUMsbUJBQW1CLE1BQU1YLE1BQU0sMkRBQTJEO1FBQzVGQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFTyxVQUFVLENBQUM7UUFDMUM7SUFDSjtJQUVBLElBQUlFLGlCQUFpQkwsRUFBRSxFQUFFO1FBQ3JCLE1BQU1NLFVBQVUsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLEtBQUs7UUFDM0MsTUFBTUMsVUFBVU47UUFDaEJqQyxxREFBT0EsR0FBR3dDLEdBQUcsQ0FBQyxXQUFXRCxTQUFTO1lBQUVIO1lBQVNLLFVBQVU7UUFBSztJQUNoRTtBQUNKO0FBR08sZUFBZUM7SUFFbEIsTUFBTUgsVUFBVXZDLHFEQUFPQSxHQUFHcUIsR0FBRyxDQUFDLFlBQVlzQjtJQUMxQyxJQUFJLENBQUNKLFNBQVMsT0FBTztJQUNyQixPQUFPLE1BQU14QixRQUFRd0I7QUFDekI7QUFFTyxlQUFlSyxPQUFPekIsUUFBa0I7SUFDM0NuQixxREFBT0EsR0FBR3dDLEdBQUcsQ0FBQyxXQUFXLElBQUk7UUFBRUosU0FBUyxJQUFJQyxLQUFLO0lBQUc7QUFDeEQ7QUFFTyxlQUFlUSxjQUFjQyxPQUFvQjtJQUVwRCxNQUFNUCxVQUFVTyxRQUFROUMsT0FBTyxDQUFDcUIsR0FBRyxDQUFDLFlBQVlzQjtJQUNoRCxJQUFJLENBQUNKLFNBQVM7SUFFZCxNQUFNUSxTQUFTLE1BQU1oQyxRQUFRO0lBQzdCZ0MsT0FBT1gsT0FBTyxHQUFHLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxLQUFLO0lBQzVDLE1BQU1VLE9BQU83QyxrRkFBWUEsQ0FBQzhDLElBQUk7SUFFOUJELEtBQUtoRCxPQUFPLENBQUN3QyxHQUFHLENBQUM7UUFFYlUsTUFBTTtRQUNOUCxPQUFPLE1BQU1uQyxRQUFRdUM7UUFDckJOLFVBQVU7UUFDVkwsU0FBU1csT0FBT1gsT0FBTztJQUMzQjtJQUVBLE9BQU9ZO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xpYi9hY3Rpb24udHN4Pzk4OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3Qgc2VjcmV0S2V5ID0gJ3NlY3JldCc7XHJcbmNvbnN0IGtleSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzZWNyZXRLZXkpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY3J5cHQocGF5bG9hZDogYW55KSB7XHJcbiAgICByZXR1cm4gYXdhaXQgbmV3IFNpZ25KV1QocGF5bG9hZClcclxuICAgICAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHsgYWxnOiAnSFMyNTYnIH0pXHJcbiAgICAgICAgLnNldElzc3VlZEF0KClcclxuICAgICAgICAuc2V0RXhwaXJhdGlvblRpbWUoJzEwIHNlYyBmcm9tIG5vdycpXHJcbiAgICAgICAgLnNpZ24oa2V5KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdChpbnB1dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KGlucHV0LCBrZXksIHtcclxuXHJcbiAgICAgICAgYWxnb3JpdGhtczogWydIUzI1NiddLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vam0tcG9ydGZvbGlvLmxvY2FsL3dwLWpzb24vYXBpL3YxL3Rva2VuJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0b2tlblJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZW1haWwgaGF2ZSBubyBleGlzdGluZyBhY2NvdW50Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgand0X3Rva2VuIH0gPSBhd2FpdCB0b2tlblJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHZhbGlkYXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2ptLXBvcnRmb2xpby5sb2NhbC93cC1qc29uL2FwaS92MS90b2tlbi12YWxpZGF0ZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7and0X3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBqd3RfdG9rZW47XHJcbiAgICAgICAgY29va2llcygpLnNldCgnc2Vzc2lvbicsIHNlc3Npb24sIHsgZXhwaXJlcywgaHR0cE9ubHk6IHRydWUgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gY29va2llcygpLmdldCgnc2Vzc2lvbicpPy52YWx1ZTtcclxuICAgIGlmICghc2Vzc2lvbikgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gYXdhaXQgZGVjcnlwdChzZXNzaW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCAnJywgeyBleHBpcmVzOiBuZXcgRGF0ZSgwKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24ocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gcmVxdWVzdC5jb29raWVzLmdldCgnc2Vzc2lvbicpPy52YWx1ZTtcclxuICAgIGlmICghc2Vzc2lvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZCA9IGF3YWl0IGRlY3J5cHQoJ3Nlc3Npb24nKTtcclxuICAgIHBhcnNlZC5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEwICogMTAwMCk7XHJcbiAgICBjb25zdCByZXN0ID0gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuXHJcbiAgICByZXN0LmNvb2tpZXMuc2V0KHtcclxuXHJcbiAgICAgICAgbmFtZTogJ3Nlc3Npb24nLFxyXG4gICAgICAgIHZhbHVlOiBhd2FpdCBlbmNyeXB0KHBhcnNlZCksXHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgZXhwaXJlczogcGFyc2VkLmV4cGlyZXMsXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXN0O1xyXG59Il0sIm5hbWVzIjpbImNvb2tpZXMiLCJTaWduSldUIiwiand0VmVyaWZ5IiwiTmV4dFJlc3BvbnNlIiwic2VjcmV0S2V5Iiwia2V5IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJlbmNyeXB0IiwicGF5bG9hZCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldElzc3VlZEF0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwiZGVjcnlwdCIsImlucHV0IiwiYWxnb3JpdGhtcyIsImxvZ2luIiwiZm9ybURhdGEiLCJ1c2VybmFtZSIsImdldCIsInBhc3N3b3JkIiwidG9rZW5SZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwiand0X3Rva2VuIiwianNvbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInNlc3Npb24iLCJzZXQiLCJodHRwT25seSIsImdldFNlc3Npb24iLCJ2YWx1ZSIsImxvZ291dCIsInVwZGF0ZVNlc3Npb24iLCJyZXF1ZXN0IiwicGFyc2VkIiwicmVzdCIsIm5leHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./app/lib/action.tsx\n");

/***/ })

});