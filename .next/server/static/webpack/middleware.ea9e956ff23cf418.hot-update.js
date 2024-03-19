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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n// import { updateSession } from './app/lib/action';\nasync function middleware(request) {\n    const currentUser = request.cookies.get(\"currentUser\")?.value;\n    if (currentUser && !request.nextUrl.pathname.startsWith(\"/blog\")) {\n        return Response.redirect(new URL(\"/blog\", request.url));\n    }\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n// return await updateSession(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvREFBb0Q7QUFFN0MsZUFBZUEsV0FBV0MsT0FBb0I7SUFFakQsTUFBTUMsY0FBY0QsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCQztJQUV4RCxJQUFJSCxlQUFlLENBQUNELFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsVUFBVTtRQUM5RCxPQUFPQyxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxTQUFTVixRQUFRVyxHQUFHO0lBQ3pEO0lBRUEsSUFBSSxDQUFDVixlQUFlLENBQUNELFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsV0FBVztRQUNoRSxPQUFPQyxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixRQUFRVyxHQUFHO0lBQzFEO0FBRUEsdUNBQXVDO0FBQzNDO0FBRU8sTUFBTUMsU0FBUztJQUNsQkMsU0FBUztRQUFDO0tBQWtEO0FBQ2hFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50c3g/MTgzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbi8vIGltcG9ydCB7IHVwZGF0ZVNlc3Npb24gfSBmcm9tICcuL2FwcC9saWIvYWN0aW9uJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdjdXJyZW50VXNlcicpPy52YWx1ZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFVzZXIgJiYgIXJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvYmxvZycpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9ibG9nJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghY3VycmVudFVzZXIgJiYgIXJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvbG9naW4nKSkge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGF3YWl0IHVwZGF0ZVNlc3Npb24ocmVxdWVzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy8oKD8hYXBpfF9uZXh0L3N0YXRpY3xfbmV4dC9pbWFnZXwuKlxcXFwucG5nJCkuKiknXSxcclxufSJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImN1cnJlbnRVc2VyIiwiY29va2llcyIsImdldCIsInZhbHVlIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});