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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n// import { updateSession } from './app/lib/action';\nasync function middleware(request) {\n    const currentUser = request.cookies.get(\"roles\")?.value;\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n    if (currentUser === \"administrator\" && request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/profile\", request.url));\n    }\n    if (currentUser === \"subscriber\" && request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/blog\", request.url));\n    }\n// return await updateSession(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxvREFBb0Q7QUFFN0MsZUFBZUEsV0FBV0MsT0FBb0I7SUFDakQsTUFBTUMsY0FBY0QsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUM7SUFFbEQsSUFBSSxDQUFDSCxlQUFlLENBQUNELFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsTUFBTTtRQUMzRCxPQUFPQyxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixRQUFRVyxHQUFHO0lBQzFEO0lBRUEsSUFBSVYsZ0JBQWdCLG1CQUFtQkQsUUFBUUssT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxXQUFXO1FBQ2xGLE9BQU9DLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFlBQVlWLFFBQVFXLEdBQUc7SUFDNUQ7SUFFQSxJQUFJVixnQkFBZ0IsZ0JBQWdCRCxRQUFRSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7UUFDL0UsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU1YsUUFBUVcsR0FBRztJQUN6RDtBQUVBLHVDQUF1QztBQUMzQztBQUVPLE1BQU1DLFNBQVM7SUFDbEJDLFNBQVM7UUFBQztLQUFrRDtBQUNoRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21pZGRsZXdhcmUudHN4PzE4MzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcclxuXHJcbi8vIGltcG9ydCB7IHVwZGF0ZVNlc3Npb24gfSBmcm9tICcuL2FwcC9saWIvYWN0aW9uJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3JvbGVzJyk/LnZhbHVlOyAgICBcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRVc2VyICYmICFyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFVzZXIgPT09ICdhZG1pbmlzdHJhdG9yJyAmJiByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2xvZ2luJykpIHtcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3Byb2ZpbGUnLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRVc2VyID09PSAnc3Vic2NyaWJlcicgJiYgcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9sb2dpbicpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9ibG9nJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhd2FpdCB1cGRhdGVTZXNzaW9uKHJlcXVlc3QpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8LipcXFxcLnBuZyQpLiopJ10sXHJcbn0iXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInJlcXVlc3QiLCJjdXJyZW50VXNlciIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJSZXNwb25zZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});