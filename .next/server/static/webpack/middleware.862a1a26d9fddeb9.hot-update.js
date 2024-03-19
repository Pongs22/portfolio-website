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

/***/ "(middleware)/./middleware.tsx":
/*!************************!*\
  !*** ./middleware.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _app_lib_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/lib/action */ \"(middleware)/./app/lib/action.tsx\");\n\nasync function middleware(request) {\n    const currentUser = request.cookies.get(\"currentUser\")?.value;\n    if (currentUser && !request.nextUrl.pathname.startsWith(\"/blog\")) {\n        return Response.redirect(new URL(\"/blog\", request.url));\n    }\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n    return await (0,_app_lib_action__WEBPACK_IMPORTED_MODULE_0__.updateSession)(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2lEO0FBRTFDLGVBQWVDLFdBQVdDLE9BQW9CO0lBRWpELE1BQU1DLGNBQWNELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQkM7SUFFeEQsSUFBSUgsZUFBZSxDQUFDRCxRQUFRSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFVBQVU7UUFDOUQsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU1YsUUFBUVcsR0FBRztJQUN6RDtJQUVBLElBQUksQ0FBQ1YsZUFBZSxDQUFDRCxRQUFRSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7UUFDaEUsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVYsUUFBUVcsR0FBRztJQUMxRDtJQUVBLE9BQU8sTUFBTWIsOERBQWFBLENBQUNFO0FBQy9CO0FBRU8sTUFBTVksU0FBUztJQUNsQkMsU0FBUztRQUFDO0tBQWtEO0FBQ2hFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50c3g/MTgzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IHVwZGF0ZVNlc3Npb24gfSBmcm9tICcuL2FwcC9saWIvYWN0aW9uJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdjdXJyZW50VXNlcicpPy52YWx1ZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFVzZXIgJiYgIXJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvYmxvZycpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9ibG9nJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghY3VycmVudFVzZXIgJiYgIXJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvbG9naW4nKSkge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IHVwZGF0ZVNlc3Npb24ocmVxdWVzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy8oKD8hYXBpfF9uZXh0L3N0YXRpY3xfbmV4dC9pbWFnZXwuKlxcXFwucG5nJCkuKiknXSxcclxufSJdLCJuYW1lcyI6WyJ1cGRhdGVTZXNzaW9uIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJjdXJyZW50VXNlciIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJSZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});