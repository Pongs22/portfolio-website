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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\n\nconst secretKey = \"secret\";\nconst key = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"10 sec from now\").sign(key);\n}\nasync function decrypt(input) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(input, key, {\n        algorithms: [\n            \"HS256\"\n        ]\n    });\n    return payload;\n}\nasync function login(formData) {\n    const user = {\n        username: formData.get(\"username\"),\n        password: formData.get(\"password\")\n    };\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const expires = new Date(Date.now() + 10 * 1000);\n    const session = await encrypt({\n        user,\n        expires\n    });\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", session, {\n        expires,\n        httpOnly: true\n    });\n    const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            user\n        })\n    });\n    if (!tokenResponse.ok) {\n        console.log(\"This email have no existing account\");\n        return;\n    } else {\n        console.log(\"This email have existing account\");\n    }\n    const { jwt_token } = await tokenResponse.json();\n    const validateResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token-validate\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": `Bearer ${jwt_token}`\n        }\n    });\n    if (validateResponse.ok) {}\n}\nasync function getSession() {\n    const session = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"session\")?.value;\n    if (!session) return null;\n    return await decrypt(session);\n}\nasync function logout(formData) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", \"\", {\n        expires: new Date(0)\n    });\n}\nasync function updateSession(request) {\n    const session = request.cookies.get(\"session\")?.value;\n    if (!session) return;\n    const parsed = await decrypt(\"session\");\n    parsed.expires = new Date(Date.now() + 10 * 1000);\n    const rest = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].next();\n    rest.cookies.set({\n        name: \"session\",\n        value: await encrypt(parsed),\n        httpOnly: true,\n        expires: parsed.expires\n    });\n    return rest;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXBwL2xpYi9hY3Rpb24udHN4Pzk4OTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3Qgc2VjcmV0S2V5ID0gJ3NlY3JldCc7XHJcbmNvbnN0IGtleSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzZWNyZXRLZXkpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY3J5cHQocGF5bG9hZDogYW55KSB7XHJcbiAgICByZXR1cm4gYXdhaXQgbmV3IFNpZ25KV1QocGF5bG9hZClcclxuICAgICAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHsgYWxnOiAnSFMyNTYnIH0pXHJcbiAgICAgICAgLnNldElzc3VlZEF0KClcclxuICAgICAgICAuc2V0RXhwaXJhdGlvblRpbWUoJzEwIHNlYyBmcm9tIG5vdycpXHJcbiAgICAgICAgLnNpZ24oa2V5KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQoaW5wdXQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeShpbnB1dCwga2V5LCB7XHJcblxyXG4gICAgICAgIGFsZ29yaXRobXM6IFsnSFMyNTYnXSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBheWxvYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB7IHVzZXJuYW1lOiBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyksIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykgfTtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XHJcbiAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEwICogMTAwMCk7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZW5jcnlwdCh7IHVzZXIsIGV4cGlyZXMgfSk7XHJcbiAgICBjb29raWVzKCkuc2V0KCdzZXNzaW9uJywgc2Vzc2lvbiwgeyBleHBpcmVzLCBodHRwT25seTogdHJ1ZSB9KTtcclxuXHJcbiAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qbS1wb3J0Zm9saW8ubG9jYWwvd3AtanNvbi9hcGkvdjEvdG9rZW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyIH0pLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0b2tlblJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZW1haWwgaGF2ZSBubyBleGlzdGluZyBhY2NvdW50Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZW1haWwgaGF2ZSBleGlzdGluZyBhY2NvdW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBqd3RfdG9rZW4gfSA9IGF3YWl0IHRva2VuUmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgdmFsaWRhdGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vam0tcG9ydGZvbGlvLmxvY2FsL3dwLWpzb24vYXBpL3YxL3Rva2VuLXZhbGlkYXRlJywge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtqd3RfdG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlUmVzcG9uc2Uub2spIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gY29va2llcygpLmdldCgnc2Vzc2lvbicpPy52YWx1ZTtcclxuICAgIGlmICghc2Vzc2lvbikgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gYXdhaXQgZGVjcnlwdChzZXNzaW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCAnJywgeyBleHBpcmVzOiBuZXcgRGF0ZSgwKSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24ocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gcmVxdWVzdC5jb29raWVzLmdldCgnc2Vzc2lvbicpPy52YWx1ZTtcclxuICAgIGlmICghc2Vzc2lvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBhcnNlZCA9IGF3YWl0IGRlY3J5cHQoJ3Nlc3Npb24nKTtcclxuICAgIHBhcnNlZC5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEwICogMTAwMCk7XHJcbiAgICBjb25zdCByZXN0ID0gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuXHJcbiAgICByZXN0LmNvb2tpZXMuc2V0KHtcclxuXHJcbiAgICAgICAgbmFtZTogJ3Nlc3Npb24nLFxyXG4gICAgICAgIHZhbHVlOiBhd2FpdCBlbmNyeXB0KHBhcnNlZCksXHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgZXhwaXJlczogcGFyc2VkLmV4cGlyZXMsXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXN0O1xyXG59Il0sIm5hbWVzIjpbImNvb2tpZXMiLCJTaWduSldUIiwiand0VmVyaWZ5IiwiTmV4dFJlc3BvbnNlIiwic2VjcmV0S2V5Iiwia2V5IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJlbmNyeXB0IiwicGF5bG9hZCIsInNldFByb3RlY3RlZEhlYWRlciIsImFsZyIsInNldElzc3VlZEF0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwiZGVjcnlwdCIsImlucHV0IiwiYWxnb3JpdGhtcyIsImxvZ2luIiwiZm9ybURhdGEiLCJ1c2VyIiwidXNlcm5hbWUiLCJnZXQiLCJwYXNzd29yZCIsImV4cGlyZXMiLCJEYXRlIiwibm93Iiwic2Vzc2lvbiIsInNldCIsImh0dHBPbmx5IiwidG9rZW5SZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJjb25zb2xlIiwibG9nIiwiand0X3Rva2VuIiwianNvbiIsInZhbGlkYXRlUmVzcG9uc2UiLCJnZXRTZXNzaW9uIiwidmFsdWUiLCJsb2dvdXQiLCJ1cGRhdGVTZXNzaW9uIiwicmVxdWVzdCIsInBhcnNlZCIsInJlc3QiLCJuZXh0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./app/lib/action.tsx\n");

/***/ }),

/***/ "(middleware)/./middleware.tsx":
/*!************************!*\
  !*** ./middleware.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _app_lib_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/lib/action */ \"(middleware)/./app/lib/action.tsx\");\n\nasync function middleware(request) {\n    return await (0,_app_lib_action__WEBPACK_IMPORTED_MODULE_0__.updateSession)(request);\n    const currentUser = request.cookies.get(\"currentUser\")?.value;\n//   if (currentUser && !request.nextUrl.pathname.startsWith('/blog')) {\n//     return Response.redirect(new URL('/blog', request.url))\n//   }\n//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {\n//     return Response.redirect(new URL('/login', request.url))\n//   }\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2lEO0FBRTFDLGVBQWVDLFdBQVdDLE9BQW9CO0lBRWpELE9BQU8sTUFBTUYsOERBQWFBLENBQUNFO0lBQzNCLE1BQU1DLGNBQWNELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQkM7QUFFNUQsd0VBQXdFO0FBQ3hFLDhEQUE4RDtBQUM5RCxNQUFNO0FBRU4sMEVBQTBFO0FBQzFFLCtEQUErRDtBQUMvRCxNQUFNO0FBQ047QUFFTyxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7S0FBa0Q7QUFDOUQsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzeD8xODMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgdXBkYXRlU2Vzc2lvbiB9IGZyb20gJy4vYXBwL2xpYi9hY3Rpb24nO1xyXG4gXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IHVwZGF0ZVNlc3Npb24ocmVxdWVzdCk7ICAgXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHJlcXVlc3QuY29va2llcy5nZXQoJ2N1cnJlbnRVc2VyJyk/LnZhbHVlXHJcbiBcclxuLy8gICBpZiAoY3VycmVudFVzZXIgJiYgIXJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvYmxvZycpKSB7XHJcbi8vICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2Jsb2cnLCByZXF1ZXN0LnVybCkpXHJcbi8vICAgfVxyXG4gXHJcbi8vICAgaWYgKCFjdXJyZW50VXNlciAmJiAhcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9sb2dpbicpKSB7XHJcbi8vICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxyXG4vLyAgIH1cclxufVxyXG4gXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8LipcXFxcLnBuZyQpLiopJ10sXHJcbn0iXSwibmFtZXMiOlsidXBkYXRlU2Vzc2lvbiIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY3VycmVudFVzZXIiLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});