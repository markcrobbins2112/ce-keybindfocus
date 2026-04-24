const vscode = require("vscode");

async function findOpenKeybindingsTab() {
	for (const group of vscode.window.tabGroups.all) {
		for (const tab of group.tabs) {
			if (tab.input && tab.input.viewType === "workbench.keybindings.editor") {
				return tab;
			}
		}
	}
	return null;
}

async function openOrFocusKeybindings() {
	const existing = await findOpenKeybindingsTab();
	if (existing) {
		await vscode.window.tabGroups.openTab(existing, { preserveFocus: false });
		return;
	}
	await vscode.commands.executeCommand("workbench.action.openGlobalKeybindings");
}

async function focusSearch() {
	await vscode.commands.executeCommand("keybindings.editor.searchKeybindings");
}

async function focusList() {
	await vscode.commands.executeCommand("keybindings.editor.focusKeybindings");
}

function activate(context) {
	context.subscriptions.push(
		vscode.commands.registerCommand("keybindingsFocus.open", async () => {
			await openOrFocusKeybindings();
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("keybindingsFocus.openSearch", async () => {
			await openOrFocusKeybindings();
			await focusSearch();
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("keybindingsFocus.openList", async () => {
			await openOrFocusKeybindings();
			await focusList();
		})
	);
}

function deactivate() { }

module.exports = { activate, deactivate };
