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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n// import { updateSession } from './app/lib/action';\nasync function middleware(request) {\n    const roles = await getSession();\n    const currentUser = request.cookies.get(\"roles\")?.value;\n    console.log(currentUser);\n    if (!currentUser && !request.nextUrl.pathname.startsWith(\"/\")) {\n        return Response.redirect(new URL(\"/login\", request.url));\n    }\n    if (currentUser === \"administrator\" && request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/profile\", request.url));\n    }\n    if (currentUser === \"subscriber\" && request.nextUrl.pathname.startsWith(\"/login\")) {\n        return Response.redirect(new URL(\"/blog\", request.url));\n    }\n// return await updateSession(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!api|_next/static|_next/image|.*\\\\.png$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxvREFBb0Q7QUFFN0MsZUFBZUEsV0FBV0MsT0FBb0I7SUFDakQsTUFBTUMsUUFBUSxNQUFNQztJQUNwQixNQUFNQyxjQUFjSCxRQUFRSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVQztJQUNsREMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLElBQUksQ0FBQ0EsZUFBZSxDQUFDSCxRQUFRUyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLE1BQU07UUFDM0QsT0FBT0MsU0FBU0MsUUFBUSxDQUFDLElBQUlDLElBQUksVUFBVWQsUUFBUWUsR0FBRztJQUMxRDtJQUVBLElBQUlaLGdCQUFnQixtQkFBbUJILFFBQVFTLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsV0FBVztRQUNsRixPQUFPQyxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxZQUFZZCxRQUFRZSxHQUFHO0lBQzVEO0lBRUEsSUFBSVosZ0JBQWdCLGdCQUFnQkgsUUFBUVMsT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxXQUFXO1FBQy9FLE9BQU9DLFNBQVNDLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFNBQVNkLFFBQVFlLEdBQUc7SUFDekQ7QUFFQSx1Q0FBdUM7QUFDM0M7QUFFTyxNQUFNQyxTQUFTO0lBQ2xCQyxTQUFTO1FBQUM7S0FBa0Q7QUFDaEUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzeD8xODMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5pbXBvcnQgdHlwZSB7IE5leHRSZXF1ZXN0IH0gZnJvbSAnbmV4dC9zZXJ2ZXInXHJcblxyXG4vLyBpbXBvcnQgeyB1cGRhdGVTZXNzaW9uIH0gZnJvbSAnLi9hcHAvbGliL2FjdGlvbic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBnZXRTZXNzaW9uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHJlcXVlc3QuY29va2llcy5nZXQoJ3JvbGVzJyk/LnZhbHVlOyAgICBcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuXHJcbiAgICBpZiAoIWN1cnJlbnRVc2VyICYmICFyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcXVlc3QudXJsKSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFVzZXIgPT09ICdhZG1pbmlzdHJhdG9yJyAmJiByZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2xvZ2luJykpIHtcclxuICAgICAgICByZXR1cm4gUmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3Byb2ZpbGUnLCByZXF1ZXN0LnVybCkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRVc2VyID09PSAnc3Vic2NyaWJlcicgJiYgcmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9sb2dpbicpKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9ibG9nJywgcmVxdWVzdC51cmwpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhd2FpdCB1cGRhdGVTZXNzaW9uKHJlcXVlc3QpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gICAgbWF0Y2hlcjogWycvKCg/IWFwaXxfbmV4dC9zdGF0aWN8X25leHQvaW1hZ2V8LipcXFxcLnBuZyQpLiopJ10sXHJcbn0iXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInJlcXVlc3QiLCJyb2xlcyIsImdldFNlc3Npb24iLCJjdXJyZW50VXNlciIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiUmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});