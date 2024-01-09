"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Importe o Link para criar links de navegação\nconst Home = ()=>{\n    _s();\n    const [clients, setClients] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Faça uma chamada GET para a API Spring Boot\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://agencia-api.somee.com/api/Clientes\").then((response)=>{\n            setClients(response.data);\n        }).catch((error)=>{\n            console.error(\"Erro ao buscar a lista de clientes:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().h1),\n                children: \"Lista de Clientes\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table container tabela\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Id\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Senha\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    clients.map((elemento)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabela),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.nome\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.email\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.senha\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/update-client/\".concat(elemento.id),\n                                                className: \"btn btn-warning\",\n                                                children: \"Editar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/delete-client/\".concat(elemento.id),\n                                                className: \"btn btn btn-danger\",\n                                                children: \"Excluir\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        }, elemento.id, false, {\n                            fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mathe\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Recode-Pro-Modulo-6\\\\app\\\\agencia_api\\\\pages\\\\home.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"cUQn5teewQOIEjPDAOj81V47VgI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0U7QUFDbEI7QUFDb0I7QUFDakIsQ0FBQywrQ0FBK0M7QUFFN0UsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUiw4Q0FBOEM7UUFDOUNFLGlEQUNNLENBQUMsNkNBQ0pPLElBQUksQ0FBQyxDQUFDQztZQUNMSCxXQUFXRyxTQUFTQyxJQUFJO1FBQzFCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRRCxLQUFLLENBQUMsdUNBQXVDQTtRQUN2RDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFXZCxtRUFBUTswQkFBRTs7Ozs7OzBCQUN6Qiw4REFBQ2U7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDRTtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR1BmLFFBQVFnQixHQUFHLENBQUMsQ0FBQ0MseUJBQ1osOERBQUNDO3NDQUNDLDRFQUFDSjtnQ0FBR0gsV0FBV2QsdUVBQVk7O2tEQUN6Qiw4REFBQ3VCO2tEQUFJSCxTQUFTSSxFQUFFOzs7Ozs7a0RBQ2hCLDhEQUFDRDtrREFBSUgsU0FBU0ssSUFBSTs7Ozs7O2tEQUNsQiw4REFBQ0Y7a0RBQUlILFNBQVNNLEtBQUs7Ozs7OztrREFDbkIsOERBQUNIO2tEQUFJSCxTQUFTTyxLQUFLOzs7Ozs7a0RBQ25CLDhEQUFDSjs7MERBQ0MsOERBQUN0QixrREFBSUE7Z0RBQ0gyQixNQUFNLGtCQUE4QixPQUFaUixTQUFTSSxFQUFFO2dEQUNuQ1YsV0FBVTswREFDWDs7Ozs7OzBEQUdELDhEQUFDYixrREFBSUE7Z0RBQ0gyQixNQUFNLGtCQUE4QixPQUFaUixTQUFTSSxFQUFFO2dEQUNuQ1YsV0FBVTswREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWhCS00sU0FBU0ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQmpDO0dBdERNdEI7S0FBQUE7QUF3RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiOyAvLyBJbXBvcnRlIG8gTGluayBwYXJhIGNyaWFyIGxpbmtzIGRlIG5hdmVnYcOnw6NvXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZhw6dhIHVtYSBjaGFtYWRhIEdFVCBwYXJhIGEgQVBJIFNwcmluZyBCb290XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2FnZW5jaWEtYXBpLnNvbWVlLmNvbS9hcGkvQ2xpZW50ZXNcIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xpZW50cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBhIGxpc3RhIGRlIGNsaWVudGVzOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLmgxfT5MaXN0YSBkZSBDbGllbnRlczwvaDE+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBjb250YWluZXIgdGFiZWxhXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+SWQ8L3RoPlxyXG4gICAgICAgICAgICA8dGg+Tm9tZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5TZW5oYTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAge2NsaWVudHMubWFwKChlbGVtZW50bykgPT4gKFxyXG4gICAgICAgICAgPHRib2R5IGtleT17ZWxlbWVudG8uaWR9PlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtzdHlsZS50YWJlbGF9PlxyXG4gICAgICAgICAgICAgIDx0ZD57ZWxlbWVudG8uaWR9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnRvLm5vbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnRvLmVtYWlsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntlbGVtZW50by5zZW5oYX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvdXBkYXRlLWNsaWVudC8ke2VsZW1lbnRvLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9kZWxldGUtY2xpZW50LyR7ZWxlbWVudG8uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRXhjbHVpclxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwic3R5bGUiLCJMaW5rIiwiSG9tZSIsImNsaWVudHMiLCJzZXRDbGllbnRzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsIm1hcCIsImVsZW1lbnRvIiwidGJvZHkiLCJ0YWJlbGEiLCJ0ZCIsImlkIiwibm9tZSIsImVtYWlsIiwic2VuaGEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});