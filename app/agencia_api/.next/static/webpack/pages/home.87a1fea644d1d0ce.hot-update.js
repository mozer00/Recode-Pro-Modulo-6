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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n // Importe o Link para criar links de navegação\nconst Home = ()=>{\n    _s();\n    const [clients, setClients] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Faça uma chamada GET para a API Spring Boot\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8080/clients\").then((response)=>{\n            setClients(response.data);\n        }).catch((error)=>{\n            console.error(\"Erro ao buscar a lista de clientes:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().h1),\n                children: \"Lista de Clientes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table container tabela\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Id\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Nome\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Renda\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"CPF\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"A\\xe7\\xf5es\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    clients.map((elemento)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tabela),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.id\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.renda\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: elemento.cpf\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/update-client/\".concat(elemento.id),\n                                                className: \"btn btn-warning\",\n                                                children: \"Editar\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/delete-client/\".concat(elemento.id),\n                                                className: \"btn btn btn-danger\",\n                                                children: \"Excluir\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, elemento.id, false, {\n                            fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\vscode\\\\vscode\\\\nextjs\\\\cliente-api\\\\pages\\\\home.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"cUQn5teewQOIEjPDAOj81V47VgI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0U7QUFDbEI7QUFDb0I7QUFDakIsQ0FBQywrQ0FBK0M7QUFFN0UsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUiw4Q0FBOEM7UUFDOUNFLGlEQUNNLENBQUMsaUNBQ0pPLElBQUksQ0FBQyxDQUFDQztZQUNMSCxXQUFXRyxTQUFTQyxJQUFJO1FBQzFCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRRCxLQUFLLENBQUMsdUNBQXVDQTtRQUN2RDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFXZCxtRUFBUTswQkFBRTs7Ozs7OzBCQUN6Qiw4REFBQ2U7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDRTtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7O2dDQUFVOzs7Ozs7Ozs7Ozs7b0JBR2pCZixRQUFRZ0IsR0FBRyxDQUFDLENBQUNDLHlCQUNaLDhEQUFDQztzQ0FDQyw0RUFBQ0o7Z0NBQUdILFdBQVdkLHVFQUFZOztrREFDekIsOERBQUN1QjtrREFBSUgsU0FBU0ksRUFBRTs7Ozs7O2tEQUNoQiw4REFBQ0Q7a0RBQUlILFNBQVNLLElBQUk7Ozs7OztrREFDbEIsOERBQUNGO2tEQUFJSCxTQUFTTSxLQUFLOzs7Ozs7a0RBQ25CLDhEQUFDSDtrREFBSUgsU0FBU08sS0FBSzs7Ozs7O2tEQUNuQiw4REFBQ0o7a0RBQUlILFNBQVNRLEdBQUc7Ozs7OztrREFDakIsOERBQUNMOzswREFDQyw4REFBQ3RCLGtEQUFJQTtnREFBQzRCLE1BQU0sa0JBQThCLE9BQVpULFNBQVNJLEVBQUU7Z0RBQUlWLFdBQVU7MERBQWtCOzs7Ozs7MERBQ3pFLDhEQUFDYixrREFBSUE7Z0RBQUM0QixNQUFNLGtCQUE4QixPQUFaVCxTQUFTSSxFQUFFO2dEQUFJVixXQUFVOzBEQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVR0RU0sU0FBU0ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpDO0dBL0NNdEI7S0FBQUE7QUFpRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7IC8vIEltcG9ydGUgbyBMaW5rIHBhcmEgY3JpYXIgbGlua3MgZGUgbmF2ZWdhw6fDo29cclxuIFxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjbGllbnRzLCBzZXRDbGllbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGYcOnYSB1bWEgY2hhbWFkYSBHRVQgcGFyYSBhIEFQSSBTcHJpbmcgQm9vdFxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jbGllbnRzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldENsaWVudHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJybyBhbyBidXNjYXIgYSBsaXN0YSBkZSBjbGllbnRlczpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGUuaDF9Pkxpc3RhIGRlIENsaWVudGVzPC9oMT5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIGNvbnRhaW5lciB0YWJlbGFcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5JZDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Ob21lPC90aD5cclxuICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgPHRoPlJlbmRhPC90aD5cclxuICAgICAgICAgICAgPHRoPkNQRjwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Bw6fDtWVzPC90aD4gey8qIEFkaWNpb25lIHVtYSBjb2x1bmEgcGFyYSBhcyBhw6fDtWVzIGRlIGVkacOnw6NvIGUgZXhjbHVzw6NvICovfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIHtjbGllbnRzLm1hcCgoZWxlbWVudG8pID0+IChcclxuICAgICAgICAgIDx0Ym9keSBrZXk9e2VsZW1lbnRvLmlkfT5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGUudGFiZWxhfT5cclxuICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnRvLmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntlbGVtZW50by5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntlbGVtZW50by5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57ZWxlbWVudG8ucmVuZGF9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2VsZW1lbnRvLmNwZn08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXBkYXRlLWNsaWVudC8ke2VsZW1lbnRvLmlkfWB9IGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiPkVkaXRhcjwvTGluaz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGVsZXRlLWNsaWVudC8ke2VsZW1lbnRvLmlkfWB9IGNsYXNzTmFtZT1cImJ0biBidG4gYnRuLWRhbmdlclwiPkV4Y2x1aXI8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJzdHlsZSIsIkxpbmsiLCJIb21lIiwiY2xpZW50cyIsInNldENsaWVudHMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwibWFwIiwiZWxlbWVudG8iLCJ0Ym9keSIsInRhYmVsYSIsInRkIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJyZW5kYSIsImNwZiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});