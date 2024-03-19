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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decrypt: () => (/* binding */ decrypt),\n/* harmony export */   encrypt: () => (/* binding */ encrypt),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(middleware)/./node_modules/next/dist/esm/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(middleware)/./node_modules/jose/dist/browser/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\n\n\nconst secretKey = \"secret\";\nconst key = new TextEncoder().encode(secretKey);\nasync function encrypt(payload) {\n    return await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"10 sec from now\").sign(key);\n}\nasync function decrypt(input) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(input, key, {\n        algorithms: [\n            \"HS256\"\n        ]\n    });\n    return payload;\n}\nasync function login(formData) {\n    const user = {\n        username: formData.get(\"username\"),\n        password: formData.get(\"password\")\n    };\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const tokenResponse = await fetch(\"http://jm-portfolio.local/wp-json/api/v1/token\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            username,\n            password\n        })\n    });\n    if (!tokenResponse.ok) {\n        console.log(\"This email have no existing account\");\n        return;\n    } else {\n        const expires = new Date(Date.now() + 10 * 1000);\n        const session = await encrypt({\n            user,\n            expires\n        });\n        (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", session, {\n            expires,\n            httpOnly: true\n        });\n    }\n}\nasync function getSession() {\n    const session = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(\"session\")?.value;\n    if (!session) return null;\n    return await decrypt(session);\n}\nasync function logout(formData) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set(\"session\", \"\", {\n        expires: new Date(0)\n    });\n}\nasync function updateSession(request) {\n    const session = request.cookies.get(\"session\")?.value;\n    if (!session) return;\n    const parsed = await decrypt(\"session\");\n    parsed.expires = new Date(Date.now() + 10 * 1000);\n    const rest = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].next();\n    rest.cookies.set({\n        name: \"session\",\n        value: await encrypt(parsed),\n        httpOnly: true,\n        expires: parsed.expires\n    });\n    return rest;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vYXBwL2xpYi9hY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNHO0FBQ2M7QUFFeEQsTUFBTUksWUFBWTtBQUNsQixNQUFNQyxNQUFNLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0g7QUFFOUIsZUFBZUksUUFBU0MsT0FBWTtJQUN2QyxPQUFPLE1BQU0sSUFBSVIseUNBQU9BLENBQUNRLFNBQ3hCQyxrQkFBa0IsQ0FBQztRQUFDQyxLQUFLO0lBQU8sR0FDaENDLFdBQVcsR0FDWEMsaUJBQWlCLENBQUMsbUJBQ2xCQyxJQUFJLENBQUNUO0FBRVY7QUFFTyxlQUFlVSxRQUFRQyxLQUFhO0lBQ3ZDLE1BQU0sRUFBRVAsT0FBTyxFQUFFLEdBQUcsTUFBTVAsK0NBQVNBLENBQUNjLE9BQU9YLEtBQUs7UUFFNUNZLFlBQVk7WUFBQztTQUFRO0lBQ3pCO0lBQ0EsT0FBT1I7QUFDWDtBQUVPLGVBQWVTLE1BQU9DLFFBQWtCO0lBQzNDLE1BQU1DLE9BQU87UUFBQ0MsVUFBU0YsU0FBU0csR0FBRyxDQUFDO1FBQWFDLFVBQVNKLFNBQVNHLEdBQUcsQ0FBQztJQUFZO0lBQ25GLE1BQU1ELFdBQVdGLFNBQVNHLEdBQUcsQ0FBQztJQUM5QixNQUFNQyxXQUFXSixTQUFTRyxHQUFHLENBQUM7SUFFOUIsTUFBTUUsZ0JBQWdCLE1BQU1DLE1BQU0sa0RBQWtEO1FBQ2xGQyxRQUFRO1FBQ1JDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUFFVDtZQUFTRTtRQUFTO0lBQzNDO0lBRUEsSUFBSSxDQUFDQyxjQUFjTyxFQUFFLEVBQUU7UUFDckJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0YsT0FDSztRQUNELE1BQU1DLFVBQVUsSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLEtBQUs7UUFDM0MsTUFBTUMsVUFBVSxNQUFNN0IsUUFBUTtZQUFDWTtZQUFNYztRQUFPO1FBQzVDbEMscURBQU9BLEdBQUdzQyxHQUFHLENBQUMsV0FBV0QsU0FBUztZQUFDSDtZQUFTSyxVQUFVO1FBQUs7SUFDL0Q7QUFHSjtBQUVPLGVBQWVDO0lBRWxCLE1BQU1ILFVBQVVyQyxxREFBT0EsR0FBR3NCLEdBQUcsQ0FBQyxZQUFZbUI7SUFDMUMsSUFBRyxDQUFDSixTQUFTLE9BQU87SUFDcEIsT0FBTyxNQUFNdEIsUUFBUXNCO0FBQ3pCO0FBRU8sZUFBZUssT0FBUXZCLFFBQWtCO0lBQ2hEbkIscURBQU9BLEdBQUdzQyxHQUFHLENBQUMsV0FBVyxJQUFJO1FBQUNKLFNBQVMsSUFBSUMsS0FBSztJQUFFO0FBQ2xEO0FBRU8sZUFBZVEsY0FBY0MsT0FBb0I7SUFFcEQsTUFBTVAsVUFBVU8sUUFBUTVDLE9BQU8sQ0FBQ3NCLEdBQUcsQ0FBQyxZQUFZbUI7SUFDaEQsSUFBRyxDQUFDSixTQUFTO0lBRWIsTUFBTVEsU0FBUyxNQUFNOUIsUUFBUTtJQUM3QjhCLE9BQU9YLE9BQU8sR0FBRyxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssS0FBSztJQUM1QyxNQUFNVSxPQUFPM0Msa0ZBQVlBLENBQUM0QyxJQUFJO0lBRTlCRCxLQUFLOUMsT0FBTyxDQUFDc0MsR0FBRyxDQUFDO1FBRWJVLE1BQU07UUFDTlAsT0FBTyxNQUFNakMsUUFBUXFDO1FBQ3JCTixVQUFVO1FBQ1ZMLFNBQVNXLE9BQU9YLE9BQU87SUFDM0I7SUFFQSxPQUFPWTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvYWN0aW9uLnRzeD85ODk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSB9IGZyb20gXCJqb3NlXCI7XHJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IHNlY3JldEtleSA9ICdzZWNyZXQnO1xyXG5jb25zdCBrZXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoc2VjcmV0S2V5KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbmNyeXB0IChwYXlsb2FkOiBhbnkpe1xyXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBTaWduSldUKHBheWxvYWQpIFxyXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7YWxnOiAnSFMyNTYnfSlcclxuICAgIC5zZXRJc3N1ZWRBdCgpXHJcbiAgICAuc2V0RXhwaXJhdGlvblRpbWUoJzEwIHNlYyBmcm9tIG5vdycpXHJcbiAgICAuc2lnbihrZXkpXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVjcnlwdChpbnB1dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhd2FpdCBqd3RWZXJpZnkoaW5wdXQsIGtleSwge1xyXG5cclxuICAgICAgICBhbGdvcml0aG1zOiBbJ0hTMjU2J10sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXlsb2FkO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4gKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgdXNlciA9IHt1c2VybmFtZTpmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyksIHBhc3N3b3JkOmZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSB9O1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKTtcclxuXHJcbiAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qbS1wb3J0Zm9saW8ubG9jYWwvd3AtanNvbi9hcGkvdjEvdG9rZW4nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSxwYXNzd29yZCB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdG9rZW5SZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhpcyBlbWFpbCBoYXZlIG5vIGV4aXN0aW5nIGFjY291bnQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBlbmNyeXB0KHt1c2VyLCBleHBpcmVzfSk7XHJcbiAgICAgICAgY29va2llcygpLnNldCgnc2Vzc2lvbicsIHNlc3Npb24sIHtleHBpcmVzLCBodHRwT25seTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gY29va2llcygpLmdldCgnc2Vzc2lvbicpPy52YWx1ZTtcclxuICAgIGlmKCFzZXNzaW9uKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBhd2FpdCBkZWNyeXB0KHNlc3Npb24pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0IChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuY29va2llcygpLnNldCgnc2Vzc2lvbicsICcnLCB7ZXhwaXJlczogbmV3IERhdGUoMCl9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24ocmVxdWVzdDogTmV4dFJlcXVlc3Qpe1xyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlO1xyXG4gICAgaWYoIXNlc3Npb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwYXJzZWQgPSBhd2FpdCBkZWNyeXB0KCdzZXNzaW9uJyk7XHJcbiAgICBwYXJzZWQuZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDEwMDApO1xyXG4gICAgY29uc3QgcmVzdCA9IE5leHRSZXNwb25zZS5uZXh0KCk7XHJcblxyXG4gICAgcmVzdC5jb29raWVzLnNldCh7XHJcblxyXG4gICAgICAgIG5hbWU6ICdzZXNzaW9uJyxcclxuICAgICAgICB2YWx1ZTogYXdhaXQgZW5jcnlwdChwYXJzZWQpLFxyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIGV4cGlyZXM6IHBhcnNlZC5leHBpcmVzLFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzdDtcclxufSJdLCJuYW1lcyI6WyJjb29raWVzIiwiU2lnbkpXVCIsImp3dFZlcmlmeSIsIk5leHRSZXNwb25zZSIsInNlY3JldEtleSIsImtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiZW5jcnlwdCIsInBheWxvYWQiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsImRlY3J5cHQiLCJpbnB1dCIsImFsZ29yaXRobXMiLCJsb2dpbiIsImZvcm1EYXRhIiwidXNlciIsInVzZXJuYW1lIiwiZ2V0IiwicGFzc3dvcmQiLCJ0b2tlblJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInNlc3Npb24iLCJzZXQiLCJodHRwT25seSIsImdldFNlc3Npb24iLCJ2YWx1ZSIsImxvZ291dCIsInVwZGF0ZVNlc3Npb24iLCJyZXF1ZXN0IiwicGFyc2VkIiwicmVzdCIsIm5leHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./app/lib/action.tsx\n");

/***/ })

});