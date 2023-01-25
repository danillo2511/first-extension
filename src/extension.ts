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

}

export function deactivate() {}
