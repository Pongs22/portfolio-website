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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n// import { updateSession } from './app/lib/action';\nasync function middleware(request) {\n    const currentUser = request.cookies.get(\"roles\")?.value;\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n    if (!currentUser && request.nextUrl.pathname.startsWith(\"/\")) {\n        return Response.redirect(new URL(\"/\", request.url));\n    }\n    if (currentUser === \"administrator\" && request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/profile\", request.url));\n    }\n    if (currentUser === \"subscriber\" && request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/blog\", request.url));\n    }\n// return await updateSession(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxvREFBb0Q7QUFFN0MsZUFBZUEsV0FBV0MsT0FBb0I7SUFDakQsTUFBTUMsY0FBY0QsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUM7SUFFbEQsSUFBSSxDQUFDSCxlQUFlLENBQUNELFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsTUFBTTtRQUMzRCxPQUFPQyxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixRQUFRVyxHQUFHO0lBQzFEO0lBRUEsSUFBSSxDQUFDVixlQUFlRCxRQUFRSyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLE1BQU07UUFDMUQsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksS0FBS1YsUUFBUVcsR0FBRztJQUNyRDtJQUVBLElBQUlWLGdCQUFnQixtQkFBbUJELFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsV0FBVztRQUNsRixPQUFPQyxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxZQUFZVixRQUFRVyxHQUFHO0lBQzVEO0lBRUEsSUFBSVYsZ0JBQWdCLGdCQUFnQkQsUUFBUUssT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxXQUFXO1FBQy9FLE9BQU9DLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFNBQVNWLFFBQVFXLEdBQUc7SUFDekQ7QUFFQSx1Q0FBdUM7QUFDM0M7QUFFTyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7S0FBa0Q7QUFDaEUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzeD8xODMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcblxyXG4vLyBpbXBvcnQgeyB1cGRhdGVTZXNzaW9uIH0gZnJvbSAnLi9hcHAvbGliL2FjdGlvbic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSByZXF1ZXN0LmNvb2tpZXMuZ2V0KCdyb2xlcycpPy52YWx1ZTsgICAgXHJcblxyXG4gICAgaWYgKCFjdXJyZW50VXNlciAmJiAhcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvbG9naW4nLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjdXJyZW50VXNlciAmJiByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRVc2VyID09PSAnYWRtaW5pc3RyYXRvcicgJiYgcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9sb2dpbicpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9wcm9maWxlJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50VXNlciA9PT0gJ3N1YnNjcmliZXInICYmIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvbG9naW4nKSkge1xyXG4gICAgICAgIHJldHVybiBSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKCcvYmxvZycsIHJlcXVlc3QudXJsKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXdhaXQgdXBkYXRlU2Vzc2lvbihyZXF1ZXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIG1hdGNoZXI6IFsnLygoPyFhcGl8X25leHQvc3RhdGljfF9uZXh0L2ltYWdlfC4qXFxcXC5wbmckKS4qKSddLFxyXG59Il0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJyZXF1ZXN0IiwiY3VycmVudFVzZXIiLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiUmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});