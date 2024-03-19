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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n// import { updateSession } from './app/lib/action';\nasync function middleware(request) {\n    const currentUser = request.cookies.get(\"currentUser\")?.value;\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n// return await updateSession(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvREFBb0Q7QUFFN0MsZUFBZUEsV0FBV0MsT0FBb0I7SUFFakQsTUFBTUMsY0FBY0QsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCQztJQUd4RCxJQUFJLENBQUNILGVBQWUsQ0FBQ0QsUUFBUUssT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxNQUFNO1FBQzNELE9BQU9DLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVWLFFBQVFXLEdBQUc7SUFDMUQ7QUFFQSx1Q0FBdUM7QUFDM0M7QUFFTyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7S0FBa0Q7QUFDaEUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzeD8xODMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcclxuLy8gaW1wb3J0IHsgdXBkYXRlU2Vzc2lvbiB9IGZyb20gJy4vYXBwL2xpYi9hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHJlcXVlc3QuY29va2llcy5nZXQoJ2N1cnJlbnRVc2VyJyk/LnZhbHVlO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKCFjdXJyZW50VXNlciAmJiAhcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGF3YWl0IHVwZGF0ZVNlc3Npb24ocmVxdWVzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBtYXRjaGVyOiBbJy8oKD8hYXBpfF9uZXh0L3N0YXRpY3xfbmV4dC9pbWFnZXwuKlxcXFwucG5nJCkuKiknXSxcclxufSJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwicmVxdWVzdCIsImN1cnJlbnRVc2VyIiwiY29va2llcyIsImdldCIsInZhbHVlIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlJlc3BvbnNlIiwicmVkaXJlY3QiLCJVUkwiLCJ1cmwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});