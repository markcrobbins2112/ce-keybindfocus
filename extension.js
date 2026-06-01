const vscode = require("vscode");

async function findOpenKeybindingsTab() {
	for (const group of vscode.window.tabGroups.all) {
		for (const tab of group.tabs) {
			if (tab.input && tab.input.viewType === "keybindings.editor" || tab.label === 'Keyboard Shortcuts') {
				return {tab, group};
			}
		}
	}
	return null;
}

async function openGroupOfTab(tab) {
	const targetGroup = tab.group;
	// Tab groups are indexed 1-8 based on their visual order
	const groupIndex = targetGroup.viewColumn;

	if (groupIndex >= 1 && groupIndex <= 8) {
		// Construct the command name (e.g., 'workbench.action.focusFirstEditorGroup')
		const commandMap = [
			'workbench.action.focusFirstEditorGroup',
			'workbench.action.focusSecondEditorGroup',
			'workbench.action.focusThirdEditorGroup',
			'workbench.action.focusFourthEditorGroup',
			'workbench.action.focusFifthEditorGroup',
			'workbench.action.focusSixthEditorGroup',
			'workbench.action.focusSeventhEditorGroup',
			'workbench.action.focusEighthEditorGroup'
		];

		// Focus the group first
		await vscode.commands.executeCommand(commandMap[groupIndex - 1]);

		// Now reveal the Keybindings editor
		//await vscode.commands.executeCommand('workbench.action.openGlobalKeybindings');
	}
}
async function openOrFocusKeybindings() {
	const result = await findOpenKeybindingsTab();
	if (result) {
		//await vscode.window.tabGroups.revealTab(result.tab, result.group.viewColumn);
		//await vscode.window.tabGroups.openTab(result, { preserveFocus: false });
		// await vscode.commands.executeCommand('workbench.action.focusEditorGroup', {
		// 	group: result.group.viewColumn
		// });
		openGroupOfTab(result.tab);
		await vscode.commands.executeCommand("workbench.action.openGlobalKeybindings");
		return true;
	}
	await vscode.commands.executeCommand("workbench.action.openGlobalKeybindings");
	return false;
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
