/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
function activate(context) {
    console.log('Congratulations, your extension "first-extension" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('first-extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from first-extension!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('first-extension.pizza', () => {
        vscode.window.showInformationMessage('Do you want some pizza?', 'yes', 'no');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('first-extension.first-panel', () => {
        const panel = vscode.window.createWebviewPanel('first-panel', 'First Panel', vscode.ViewColumn.One, {});
        panel.webview.html = getWebviewContent();
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
function getWebviewContent() {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>First Panel</title>
  </head>
	<body>
		<h1>Base 64 Translater</h1>
		<form>
			<textarea name="input-data" placeholder="input ..." rows="30" cols="50"></textarea>
			<button>Encoding</button>
			<button>Decoding</button>
			<textarea name="output-data" placeholder="output ..." rows="30" cols="50"></textarea>
		</form>
	</body>
  </html>`;
}

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map