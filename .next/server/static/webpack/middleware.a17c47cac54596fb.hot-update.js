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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var _app_lib_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/lib/action */ \"(middleware)/./app/lib/action.tsx\");\n\nasync function middleware(request) {\n    const currentUser = request.cookies.get(\"currentUser\")?.value;\n    if (currentUser && !request.nextUrl.pathname.startsWith(\"/blog\")) {\n        return Response.redirect(new URL(\"/blog\", request.url));\n    }\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n    return await (0,_app_lib_action__WEBPACK_IMPORTED_MODULE_0__.updateSession)(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2lEO0FBRTFDLGVBQWVDLFdBQVdDLE9BQW9CO0lBR2pELE1BQU1DLGNBQWNELFFBQVFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQkM7SUFFeEQsSUFBSUgsZUFBZSxDQUFDRCxRQUFRSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFVBQVU7UUFDOUQsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU1YsUUFBUVcsR0FBRztJQUN6RDtJQUVBLElBQUksQ0FBQ1YsZUFBZSxDQUFDRCxRQUFRSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7UUFDaEUsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVVYsUUFBUVcsR0FBRztJQUMxRDtJQUVBLE9BQU8sTUFBTWIsOERBQWFBLENBQUNFO0FBQy9CO0FBRU8sTUFBTVksU0FBUztJQUNsQkMsU0FBUztRQUFDO0tBQWtEO0FBQ2hFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50c3g/MTgzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB7IHVwZGF0ZVNlc3Npb24gfSBmcm9tICcuL2FwcC9saWIvYWN0aW9uJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gcmVxdWVzdC5jb29raWVzLmdldCgnY3VycmVudFVzZXInKT8udmFsdWU7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRVc2VyICYmICFyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2Jsb2cnKSkge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvYmxvZycsIHJlcXVlc3QudXJsKSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWN1cnJlbnRVc2VyICYmICFyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2xvZ2luJykpIHtcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhd2FpdCB1cGRhdGVTZXNzaW9uKHJlcXVlc3QpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8LipcXFxcLnBuZyQpLiopJ10sXHJcbn0iXSwibmFtZXMiOlsidXBkYXRlU2Vzc2lvbiIsIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY3VycmVudFVzZXIiLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiUmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});