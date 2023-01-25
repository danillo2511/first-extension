import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "first-extension" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('first-extension.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from first-extension!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('first-extension.pizza', () => {
			vscode.window.showInformationMessage('Do you want some pizza?','yes','no');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('first-extension.first-panel',() => {
			const panel = vscode.window.createWebviewPanel('first-panel','First Panel',vscode.ViewColumn.One,{});
			panel.webview.html = getWebviewContent();

		})
	);

}

export function deactivate() {}

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