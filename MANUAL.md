# Manual

<!-- template
This guide describes the structural architecture, module layout, internal algorithms, optimization behaviors, and technical specifications of the **keybindfocus** codebase.

---

## 🏗️ 1. Architecture Overview

`keybindfocus` acts as a focus-control state director for the built-in VS Code Keybindings Editor (Keyboard Shortcuts panel). It intercepts keybindings focus requests, intelligently sweeps all active window pane grids to locate any existing Keybindings UI instances, moves terminal/user focus onto the target editor columns layout, and triggers localized target layout focus actions.

The system workflow can be illustrated as:
- **Command Invoked**: One of the registered extension commands is dispatched (`keybindingsFocus.open`, `.openSearch`, or `.openList`).
- **Tab Scanner**: Searches the global Workspace tabs directory to locate existing shortcuts panes.
- **Column Focus Router**: If found, computes the visual grid coordinate of the panel and shifts active cursor focus to that column pane first.
- **Opener Manager**: Resolves focus to ensure the Keyboard Shortcuts panel occupies the active file view state.
- **Sub-Element Target Director**: dispatches focus sub-commands to directly engage specific sections of the layout.

```
       [User Keyboard Command Trigger]
                     │
                     ▼
        [Extension Activation Hook]
                     │
                     ▼
         [Globally Scan Tab Groups] ───► [Identify viewType or Label]
                     │
         [Resolve Viewer Pane Column]
                     │
                     ▼
       [Focus Target Pane (from 1-8)]
                     │
                     ▼
       [Execute Activate Keybindings View]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
    [Focus Search Input]   [Focus Table Rows]
```

## 🧠 2. Core Modules & Systems

### A. Tab Inspector (`findOpenKeybindingsTab`)
- Parses through every individual tab group element in `vscode.window.tabGroups.all`.
- Iterates over each tab's metadata parameter fields.
- Checks if the tab's underlying type is marked with `tab.input.viewType === "keybindings.editor"`.
- Uses a fallback heuristic check against its label: `tab.label === 'Keyboard Shortcuts'` for compatibility with other VS Code language and localization variants.

### B. Group Pane Navigator (`openGroupOfTab`)
- Obtains the target tab's active group viewColumn: `groupIndex = targetGroup.viewColumn`.
- Uses a strict 1-to-8 range match to index a mapped array of command strings:
  ```js
  const commandMap = [
    'workbench.action.focusFirstEditorGroup',
    'workbench.action.focusSecondEditorGroup',
    ...
  ]
  ```
- Executes the designated command dynamically via `vscode.commands.executeCommand(...)` to move pane focus.

### C. Direct Keybindings State Initiator (`openOrFocusKeybindings`)
- Calls down to `findOpenKeybindingsTab()` to see if a panel sheet is already open.
- If a target is found, it automatically calls `openGroupOfTab()` and commands `"workbench.action.openGlobalKeybindings"`.
- On cold starts (where no tab is found), it opens a fresh panel by triggering `"workbench.action.openGlobalKeybindings"`.

### D. Sub-View Directors (`focusSearch` / `focusList`)
- Moves sub-focus points inside the tab via internal VS Code workbench triggers:
  - **Search focus**: `"keybindings.editor.searchKeybindings"`
  - **Rows List focus**: `"keybindings.editor.focusKeybindings"`


## 🔎 3. Core Algorithm

### Dynamic Multi-Group Location Resolution
The extension utilizes a clean locate-then-focus routine:
1. **Sweep**: Map and scan multi-pane columns in parent `tabGroups`. This bypasses default VS Code behaviors of opening multiple duplicate tabs on multi-column split views.
2. **Shift Column**: Since VS Code's system command `workbench.action.openGlobalKeybindings` default-opens in the *currently active editor group*, we must first shift the active focus panel column to the one containing the existing tab, preventing the creation of a duplicate copy.
3. **Bring Active Focus**: Dispatches `openGlobalKeybindings` which smoothly highlights the pre-existing sheet.


## 🛰️ 4. Commands, Keybindings & Context Flags

- **Activation Context**: Commands are lazy-activated on first triggering using the activation actions defined in `package.json`:
  - `onCommand:keybindingsFocus.open`
  - `onCommand:keybindingsFocus.openSearch`
  - `onCommand:keybindingsFocus.openList`
- **Exposed Host Commands**:
  - `keybindingsFocus.open` - Launches/focuses the Global Keybindings UI.
  - `keybindingsFocus.openSearch` - Launches/focuses the UI and focuses search inputs.
  - `keybindingsFocus.openList` - Launches/focuses the UI and focuses rows index list.


## 🔧 5. Workspace Build & Configuration

The build stack is kept minimalist, lightweight and highly performant:
- **Runtimes**: Configured around pure Node.js CommonJS JavaScript module architecture.
- **Dependencies**: Operates entirely with the standard built-in `"vscode"` host extension library, requiring zero heavy third-party framework layers.
- **Publish Pipeline**: Compliant with the package pipeline defined by the `"package"` script hook calling `@vscode/vsce package` to yield a standard installable VSIX bundle file.

---
## Go back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- 🔸[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)
