/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/wordnet-db";
exports.ids = ["vendor-chunks/wordnet-db"];
exports.modules = {

/***/ "(ssr)/./node_modules/wordnet-db/index.js":
/*!******************************************!*\
  !*** ./node_modules/wordnet-db/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("exports.libVersion = __webpack_require__(/*! ./package.json */ \"(ssr)/./node_modules/wordnet-db/package.json\").version;\nexports.version = \"3.1\"; // this is the WordNet DB version\nexports.path = (__webpack_require__(/*! path */ \"path\").join)(__dirname, \"dict\");\ntry {\n    exports.files = (__webpack_require__(/*! fs */ \"fs\").readdirSync)(exports.path);\n} catch (e) {\n    console.log(e.message);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvd29yZG5ldC1kYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFDQUEsc0hBQXNEO0FBQ3REQSxlQUFlLEdBQUcsT0FBTyxpQ0FBaUM7QUFDMURBLFlBQVksR0FBR0UsOENBQW9CLENBQUNJLFdBQVc7QUFDL0MsSUFBRztJQUNITixhQUFhLEdBQUdFLGlEQUF5QixDQUFDRixRQUFRSSxJQUFJO0FBQ3RELEVBQUUsT0FBTUssR0FBRztJQUNUQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVHLE9BQU87QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW9uZXotbmV4dGpzLy4vbm9kZV9tb2R1bGVzL3dvcmRuZXQtZGIvaW5kZXguanM/Y2YyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0cy5saWJWZXJzaW9uID0gcmVxdWlyZSgnLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xyXG5leHBvcnRzLnZlcnNpb24gPSAnMy4xJztcdC8vIHRoaXMgaXMgdGhlIFdvcmROZXQgREIgdmVyc2lvblxyXG5leHBvcnRzLnBhdGggPSByZXF1aXJlKCdwYXRoJykuam9pbihfX2Rpcm5hbWUsICdkaWN0Jyk7XHJcbnRyeXtcclxuZXhwb3J0cy5maWxlcyA9IHJlcXVpcmUoJ2ZzJykucmVhZGRpclN5bmMoZXhwb3J0cy5wYXRoKTtcclxufSBjYXRjaChlKSB7XHJcbiAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsImxpYlZlcnNpb24iLCJyZXF1aXJlIiwidmVyc2lvbiIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/wordnet-db/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/wordnet-db/package.json":
/*!**********************************************!*\
  !*** ./node_modules/wordnet-db/package.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"wordnet-db","version":"3.1.14","description":"WordNet 3.1 Database files","author":"Moos <mooster@42at.com>","keywords":["WordNet","wordpos","natural","pos"],"homepage":"http://wordnet.princeton.edu/","license":"MIT","repository":{"type":"git","url":"git://github.com/moos/wordnet-db.git"},"dependencies":{},"devDependencies":{"detect-newline":"^3.1.0"},"engines":{"node":">=0.6.0"},"scripts":{"test":"node test.js","prepublish":"npm test"}}');

/***/ })

};
;