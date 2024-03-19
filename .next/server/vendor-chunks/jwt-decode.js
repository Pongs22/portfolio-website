"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwt-decode";
exports.ids = ["vendor-chunks/jwt-decode"];
exports.modules = {

/***/ "(rsc)/./node_modules/jwt-decode/build/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/jwt-decode/build/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ InvalidTokenError),\n/* harmony export */   jwtDecode: () => (/* binding */ jwtDecode)\n/* harmony export */ });\nclass InvalidTokenError extends Error {\n}\nInvalidTokenError.prototype.name = \"InvalidTokenError\";\nfunction b64DecodeUnicode(str) {\n    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p)=>{\n        let code = p.charCodeAt(0).toString(16).toUpperCase();\n        if (code.length < 2) {\n            code = \"0\" + code;\n        }\n        return \"%\" + code;\n    }));\n}\nfunction base64UrlDecode(str) {\n    let output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    switch(output.length % 4){\n        case 0:\n            break;\n        case 2:\n            output += \"==\";\n            break;\n        case 3:\n            output += \"=\";\n            break;\n        default:\n            throw new Error(\"base64 string is not of the correct length\");\n    }\n    try {\n        return b64DecodeUnicode(output);\n    } catch (err) {\n        return atob(output);\n    }\n}\nfunction jwtDecode(token, options) {\n    if (typeof token !== \"string\") {\n        throw new InvalidTokenError(\"Invalid token specified: must be a string\");\n    }\n    options || (options = {});\n    const pos = options.header === true ? 0 : 1;\n    const part = token.split(\".\")[pos];\n    if (typeof part !== \"string\") {\n        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);\n    }\n    let decoded;\n    try {\n        decoded = base64UrlDecode(part);\n    } catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);\n    }\n    try {\n        return JSON.parse(decoded);\n    } catch (e) {\n        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSwwQkFBMEJDO0FBQ3ZDO0FBQ0FELGtCQUFrQkUsU0FBUyxDQUFDQyxJQUFJLEdBQUc7QUFDbkMsU0FBU0MsaUJBQWlCQyxHQUFHO0lBQ3pCLE9BQU9DLG1CQUFtQkMsS0FBS0YsS0FBS0csT0FBTyxDQUFDLFFBQVEsQ0FBQ0MsR0FBR0M7UUFDcEQsSUFBSUMsT0FBT0QsRUFBRUUsVUFBVSxDQUFDLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxXQUFXO1FBQ25ELElBQUlILEtBQUtJLE1BQU0sR0FBRyxHQUFHO1lBQ2pCSixPQUFPLE1BQU1BO1FBQ2pCO1FBQ0EsT0FBTyxNQUFNQTtJQUNqQjtBQUNKO0FBQ0EsU0FBU0ssZ0JBQWdCWCxHQUFHO0lBQ3hCLElBQUlZLFNBQVNaLElBQUlHLE9BQU8sQ0FBQyxNQUFNLEtBQUtBLE9BQU8sQ0FBQyxNQUFNO0lBQ2xELE9BQVFTLE9BQU9GLE1BQU0sR0FBRztRQUNwQixLQUFLO1lBQ0Q7UUFDSixLQUFLO1lBQ0RFLFVBQVU7WUFDVjtRQUNKLEtBQUs7WUFDREEsVUFBVTtZQUNWO1FBQ0o7WUFDSSxNQUFNLElBQUloQixNQUFNO0lBQ3hCO0lBQ0EsSUFBSTtRQUNBLE9BQU9HLGlCQUFpQmE7SUFDNUIsRUFDQSxPQUFPQyxLQUFLO1FBQ1IsT0FBT1gsS0FBS1U7SUFDaEI7QUFDSjtBQUNPLFNBQVNFLFVBQVVDLEtBQUssRUFBRUMsT0FBTztJQUNwQyxJQUFJLE9BQU9ELFVBQVUsVUFBVTtRQUMzQixNQUFNLElBQUlwQixrQkFBa0I7SUFDaEM7SUFDQXFCLFdBQVlBLENBQUFBLFVBQVUsQ0FBQztJQUN2QixNQUFNQyxNQUFNRCxRQUFRRSxNQUFNLEtBQUssT0FBTyxJQUFJO0lBQzFDLE1BQU1DLE9BQU9KLE1BQU1LLEtBQUssQ0FBQyxJQUFJLENBQUNILElBQUk7SUFDbEMsSUFBSSxPQUFPRSxTQUFTLFVBQVU7UUFDMUIsTUFBTSxJQUFJeEIsa0JBQWtCLENBQUMsdUNBQXVDLEVBQUVzQixNQUFNLEVBQUUsQ0FBQztJQUNuRjtJQUNBLElBQUlJO0lBQ0osSUFBSTtRQUNBQSxVQUFVVixnQkFBZ0JRO0lBQzlCLEVBQ0EsT0FBT0csR0FBRztRQUNOLE1BQU0sSUFBSTNCLGtCQUFrQixDQUFDLGtEQUFrRCxFQUFFc0IsTUFBTSxFQUFFLEVBQUUsRUFBRUssRUFBRUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RztJQUNBLElBQUk7UUFDQSxPQUFPQyxLQUFLQyxLQUFLLENBQUNKO0lBQ3RCLEVBQ0EsT0FBT0MsR0FBRztRQUNOLE1BQU0sSUFBSTNCLGtCQUFrQixDQUFDLGdEQUFnRCxFQUFFc0IsTUFBTSxFQUFFLEVBQUUsRUFBRUssRUFBRUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9qd3QtZGVjb2RlL2J1aWxkL2VzbS9pbmRleC5qcz84M2E4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnZhbGlkVG9rZW5FcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbkludmFsaWRUb2tlbkVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJJbnZhbGlkVG9rZW5FcnJvclwiO1xuZnVuY3Rpb24gYjY0RGVjb2RlVW5pY29kZShzdHIpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGF0b2Ioc3RyKS5yZXBsYWNlKC8oLikvZywgKG0sIHApID0+IHtcbiAgICAgICAgbGV0IGNvZGUgPSBwLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChjb2RlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGNvZGUgPSBcIjBcIiArIGNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiJVwiICsgY29kZTtcbiAgICB9KSk7XG59XG5mdW5jdGlvbiBiYXNlNjRVcmxEZWNvZGUoc3RyKSB7XG4gICAgbGV0IG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csIFwiK1wiKS5yZXBsYWNlKC9fL2csIFwiL1wiKTtcbiAgICBzd2l0Y2ggKG91dHB1dC5sZW5ndGggJSA0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBvdXRwdXQgKz0gXCI9PVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIG91dHB1dCArPSBcIj1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZTY0IHN0cmluZyBpcyBub3Qgb2YgdGhlIGNvcnJlY3QgbGVuZ3RoXCIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBhdG9iKG91dHB1dCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGp3dERlY29kZSh0b2tlbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdG9rZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRUb2tlbkVycm9yKFwiSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQ6IG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgY29uc3QgcG9zID0gb3B0aW9ucy5oZWFkZXIgPT09IHRydWUgPyAwIDogMTtcbiAgICBjb25zdCBwYXJ0ID0gdG9rZW4uc3BsaXQoXCIuXCIpW3Bvc107XG4gICAgaWYgKHR5cGVvZiBwYXJ0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkVG9rZW5FcnJvcihgSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQ6IG1pc3NpbmcgcGFydCAjJHtwb3MgKyAxfWApO1xuICAgIH1cbiAgICBsZXQgZGVjb2RlZDtcbiAgICB0cnkge1xuICAgICAgICBkZWNvZGVkID0gYmFzZTY0VXJsRGVjb2RlKHBhcnQpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFRva2VuRXJyb3IoYEludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBpbnZhbGlkIGJhc2U2NCBmb3IgcGFydCAjJHtwb3MgKyAxfSAoJHtlLm1lc3NhZ2V9KWApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVkKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRUb2tlbkVycm9yKGBJbnZhbGlkIHRva2VuIHNwZWNpZmllZDogaW52YWxpZCBqc29uIGZvciBwYXJ0ICMke3BvcyArIDF9ICgke2UubWVzc2FnZX0pYCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkludmFsaWRUb2tlbkVycm9yIiwiRXJyb3IiLCJwcm90b3R5cGUiLCJuYW1lIiwiYjY0RGVjb2RlVW5pY29kZSIsInN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsImF0b2IiLCJyZXBsYWNlIiwibSIsInAiLCJjb2RlIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJiYXNlNjRVcmxEZWNvZGUiLCJvdXRwdXQiLCJlcnIiLCJqd3REZWNvZGUiLCJ0b2tlbiIsIm9wdGlvbnMiLCJwb3MiLCJoZWFkZXIiLCJwYXJ0Iiwic3BsaXQiLCJkZWNvZGVkIiwiZSIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jwt-decode/build/esm/index.js\n");

/***/ })

};
;