# AI Tasks
---
## Back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- 🔸[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)

## [x] Incoming tasks from chat
- [x] NEW: Reverse engineer keybindfocus and update all UPPERCASE.md system documentation files
	- [x] NEW: Update BUILD.md with build and packing commands
	- [x] NEW: Update FEATURES.md with three key focus commands
	- [x] NEW: Update MANUAL.md with tab group scanning and group columns navigation algorithm
	- [x] NEW: Update SPEC.md with original requirements and VS Code commands API reference
	- [x] NEW: Update TESTING.md with environment checks, tab focus check, and search/list validations
	- [x] NEW: Update AILOG.md with development log entries and commit message

## [ ] New Changes
<!-- template
### [ ] Change X to Y
- details
-->

## [ ] New Settings
- No new settings introduced.

## [x] New Commands
- [x] Command: `keybindingsFocus.open` - Open or Focus Keyboard Shortcuts
- [x] Command: `keybindingsFocus.openSearch` - Open and Focus Search Input File Box
- [x] Command: `keybindingsFocus.openList` - Open and Focus List View Panel

## [ ] New Bindings
- No customized keyboard shortcuts bundled directly in contributions.

## [x] New Features
- [x] Feature: Smart editor group focus mapping
- [x] Feature: Active shortcuts selector tab identifier
- [x] Feature: Automated direct index mode switching to Search input or Item list

## [ ] Settings
- None.

## [x] Commands
- [x] `keybindingsFocus.open` - Keybindings: Open or Focus
- [x] `keybindingsFocus.openSearch` - Keybindings: Open and Focus Search
- [x] `keybindingsFocus.openList` - Keybindings: Open and Focus List

## [ ] Bindings
- None explicitly registered in `package.json` contributes block.

## [x] Features
- [x] Smart tab group scan: Scans `vscode.window.tabGroups.all` checking `tabs` matching `viewType === "keybindings.editor"` or `label === "Keyboard Shortcuts"`
- [x] Multi-pane pane selection: Executes `workbench.action.focusFirstEditorGroup` to `workbench.action.focusEighthEditorGroup` depending on found pane
- [x] Automated action selectors: Dispatches matching action selector focus commands after panel reveal
---
## Go Back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- 🔸[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)
