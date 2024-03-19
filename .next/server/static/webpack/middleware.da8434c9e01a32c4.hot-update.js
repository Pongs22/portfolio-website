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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\n\nconst secretKey = \"secret\";\nconst key = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"10 sec from now\").sign(key);\n}\n// export async function decrypt(input: string): Promise<any> {\n//     const { payload } = await jwtVerify(input, key, {\n//         algorithms: ['HS256'],\n//     });\n//     return payload;\n// }\nasync function login(formData) {\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            username,\n            password\n        })\n    });\n    if (!tokenResponse.ok) {\n        console.log(\"This email have no existing account\");\n        return;\n    }\n    const { jwt_token } = await tokenResponse.json();\n    const validateResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token-validate\", {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": `Bearer ${jwt_token}`\n        }\n    });\n    if (validateResponse.ok) {\n        const expires = new Date(Date.now() + 10 * 1000);\n        const session = jwt_token;\n        (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", session, {\n            expires,\n            httpOnly: true\n        });\n    }\n}\nasync function getSession() {\n    const session = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"session\")?.value;\n    if (!session) return null;\n    return;\n}\nasync function logout(formData) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", \"\", {\n        expires: new Date(0)\n    });\n}\nasync function updateSession(request) {\n    const session = request.cookies.get(\"session\")?.value;\n    if (!session) return;\n    const parsed = await decrypt(\"session\");\n    parsed.expires = new Date(Date.now() + 10 * 1000);\n    const rest = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].next();\n    rest.cookies.set({\n        name: \"session\",\n        value: await encrypt(parsed),\n        httpOnly: true,\n        expires: parsed.expires\n    });\n    return rest;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL2xpYi9hY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0c7QUFDYztBQUV4RCxNQUFNRyxZQUFZO0FBQ2xCLE1BQU1DLE1BQU0sSUFBSUMsY0FBY0MsTUFBTSxDQUFDSDtBQUU5QixlQUFlSSxRQUFRQyxPQUFZO0lBQ3RDLE9BQU8sTUFBTSxJQUFJUCx5Q0FBT0EsQ0FBQ08sU0FDcEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQyxtQkFDbEJDLElBQUksQ0FBQ1Q7QUFDZDtBQUVBLCtEQUErRDtBQUMvRCx3REFBd0Q7QUFFeEQsaUNBQWlDO0FBQ2pDLFVBQVU7QUFDVixzQkFBc0I7QUFDdEIsSUFBSTtBQUVHLGVBQWVVLE1BQU1DLFFBQWtCO0lBQzFDLE1BQU1DLFdBQVdELFNBQVNFLEdBQUcsQ0FBQztJQUM5QixNQUFNQyxXQUFXSCxTQUFTRSxHQUFHLENBQUM7SUFHOUIsTUFBTUUsZ0JBQWdCLE1BQU1DLE1BQU0sa0RBQWtEO1FBQ2hGQyxRQUFRO1FBQ1JDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFVDtZQUFVRTtRQUFTO0lBQzlDO0lBRUEsSUFBSSxDQUFDQyxjQUFjTyxFQUFFLEVBQUU7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0o7SUFFQSxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHLE1BQU1WLGNBQWNXLElBQUk7SUFDOUMsTUFBTUMsbUJBQW1CLE1BQU1YLE1BQU0sMkRBQTJEO1FBQzVGQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEIsaUJBQWlCLENBQUMsT0FBTyxFQUFFTyxVQUFVLENBQUM7UUFDMUM7SUFDSjtJQUVBLElBQUlFLGlCQUFpQkwsRUFBRSxFQUFFO1FBQ3JCLE1BQU1NLFVBQVUsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLEtBQUs7UUFDM0MsTUFBTUMsVUFBVU47UUFDaEI3QixxREFBT0EsR0FBR29DLEdBQUcsQ0FBQyxXQUFXRCxTQUFTO1lBQUVIO1lBQVNLLFVBQVU7UUFBSztJQUNoRTtBQUNKO0FBR08sZUFBZUM7SUFFbEIsTUFBTUgsVUFBVW5DLHFEQUFPQSxHQUFHaUIsR0FBRyxDQUFDLFlBQVlzQjtJQUMxQyxJQUFJLENBQUNKLFNBQVMsT0FBTztJQUNyQjtBQUNKO0FBRU8sZUFBZUssT0FBT3pCLFFBQWtCO0lBQzNDZixxREFBT0EsR0FBR29DLEdBQUcsQ0FBQyxXQUFXLElBQUk7UUFBRUosU0FBUyxJQUFJQyxLQUFLO0lBQUc7QUFDeEQ7QUFFTyxlQUFlUSxjQUFjQyxPQUFvQjtJQUVwRCxNQUFNUCxVQUFVTyxRQUFRMUMsT0FBTyxDQUFDaUIsR0FBRyxDQUFDLFlBQVlzQjtJQUNoRCxJQUFJLENBQUNKLFNBQVM7SUFFZCxNQUFNUSxTQUFTLE1BQU1DLFFBQVE7SUFDN0JELE9BQU9YLE9BQU8sR0FBRyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssS0FBSztJQUM1QyxNQUFNVyxPQUFPM0Msa0ZBQVlBLENBQUM0QyxJQUFJO0lBRTlCRCxLQUFLN0MsT0FBTyxDQUFDb0MsR0FBRyxDQUFDO1FBRWJXLE1BQU07UUFDTlIsT0FBTyxNQUFNaEMsUUFBUW9DO1FBQ3JCTixVQUFVO1FBQ1ZMLFNBQVNXLE9BQU9YLE9BQU87SUFDM0I7SUFFQSxPQUFPYTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvYWN0aW9uLnRzeD85ODk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IHNlY3JldEtleSA9ICdzZWNyZXQnO1xyXG5jb25zdCBrZXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc2VjcmV0S2V5KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbmNyeXB0KHBheWxvYWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBTaWduSldUKHBheWxvYWQpXHJcbiAgICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogJ0hTMjU2JyB9KVxyXG4gICAgICAgIC5zZXRJc3N1ZWRBdCgpXHJcbiAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKCcxMCBzZWMgZnJvbSBub3cnKVxyXG4gICAgICAgIC5zaWduKGtleSlcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlY3J5cHQoaW5wdXQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbi8vICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeShpbnB1dCwga2V5LCB7XHJcblxyXG4vLyAgICAgICAgIGFsZ29yaXRobXM6IFsnSFMyNTYnXSxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgcmV0dXJuIHBheWxvYWQ7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbihmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2ptLXBvcnRmb2xpby5sb2NhbC93cC1qc29uL2FwaS92MS90b2tlbicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdG9rZW5SZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGVtYWlsIGhhdmUgbm8gZXhpc3RpbmcgYWNjb3VudCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGp3dF90b2tlbiB9ID0gYXdhaXQgdG9rZW5SZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB2YWxpZGF0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qbS1wb3J0Zm9saW8ubG9jYWwvd3AtanNvbi9hcGkvdjEvdG9rZW4tdmFsaWRhdGUnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2p3dF90b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVSZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAgKiAxMDAwKTtcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gand0X3Rva2VuO1xyXG4gICAgICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBzZXNzaW9uLCB7IGV4cGlyZXMsIGh0dHBPbmx5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24oKSB7XHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGNvb2tpZXMoKS5nZXQoJ3Nlc3Npb24nKT8udmFsdWU7XHJcbiAgICBpZiAoIXNlc3Npb24pIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29va2llcygpLnNldCgnc2Vzc2lvbicsICcnLCB7IGV4cGlyZXM6IG5ldyBEYXRlKDApIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlO1xyXG4gICAgaWYgKCFzZXNzaW9uKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGFyc2VkID0gYXdhaXQgZGVjcnlwdCgnc2Vzc2lvbicpO1xyXG4gICAgcGFyc2VkLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTAgKiAxMDAwKTtcclxuICAgIGNvbnN0IHJlc3QgPSBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG5cclxuICAgIHJlc3QuY29va2llcy5zZXQoe1xyXG5cclxuICAgICAgICBuYW1lOiAnc2Vzc2lvbicsXHJcbiAgICAgICAgdmFsdWU6IGF3YWl0IGVuY3J5cHQocGFyc2VkKSxcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBleHBpcmVzOiBwYXJzZWQuZXhwaXJlcyxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3Q7XHJcbn0iXSwibmFtZXMiOlsiY29va2llcyIsIlNpZ25KV1QiLCJOZXh0UmVzcG9uc2UiLCJzZWNyZXRLZXkiLCJrZXkiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImVuY3J5cHQiLCJwYXlsb2FkIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJsb2dpbiIsImZvcm1EYXRhIiwidXNlcm5hbWUiLCJnZXQiLCJwYXNzd29yZCIsInRva2VuUmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY29uc29sZSIsImxvZyIsImp3dF90b2tlbiIsImpzb24iLCJ2YWxpZGF0ZVJlc3BvbnNlIiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJzZXNzaW9uIiwic2V0IiwiaHR0cE9ubHkiLCJnZXRTZXNzaW9uIiwidmFsdWUiLCJsb2dvdXQiLCJ1cGRhdGVTZXNzaW9uIiwicmVxdWVzdCIsInBhcnNlZCIsImRlY3J5cHQiLCJyZXN0IiwibmV4dCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./app/lib/action.tsx\n");

/***/ })

});