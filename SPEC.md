# Spec

This document compiles the user requirements and instructions from `AGENTS.md` and provides detailed documentation of how the extension was architected and built.

---
## Back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- 🔸[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)

---

## 📋 Originally Requested Specifications

### 1. Application & Identification
- **Identifier**: `keybindfocus`
- **Display Name**: `Keybindings Focus`
- **Activation Events**: Lazy-activated when commands are invoked:
  - `onCommand:keybindingsFocus.open`
  - `onCommand:keybindingsFocus.openSearch`
  - `onCommand:keybindingsFocus.openList`
- **Core Goal**: Open or focus the Keyboard Shortcuts tab and safely lock user cursor focus onto sub-elements (the Search field or Keybindings grid list), preventing duplicate tab bloat during split-column workflows.

### 2. Standard VS Code Keyboard Commands Ref
- `workbench.action.openGlobalKeybindings`: Native opener command for Shortcuts panel.
- `keybindings.editor.searchKeybindings`: Directs cursor focus into active text search element.
- `keybindings.editor.focusKeybindings`: Transports active keyboard focus down into the flat table rows.

### 3. Split Editor Group Focus
- When multiple editors or groups are set up side-by-side (split pane), the extension must determine where the existing Keyboard Shortcuts panel is and shift focus there prior to executing the activation commands.

---

## 🛠️ Implementation Details (How We Built It)

### 1. Robust Tab Group & ViewType Scanner (`findOpenKeybindingsTab`)
- Utilizes `vscode.window.tabGroups.all` loop traversal to examine all active columns.
- Performs dual-predicate evaluation check:
  - Structural view-type matching: `tab.input && tab.input.viewType === "keybindings.editor"`
  - Lexical label matching fallback: `tab.label === 'Keyboard Shortcuts'`

### 2. Multi-column Target Router (`openGroupOfTab`)
- Resolves the visual index column `viewColumn` from the target tab.
- Translates columns integers (`1` to `8`) to corresponding host focus actions: `workbench.action.focusFirstEditorGroup` up to `workbench.action.focusEighthEditorGroup`.
- Focuses the group beforehand to prepare focus contexts before opening or focusing target elements.

---

## 🎯 Implemented Technical Concerns & Optimization Features
- **Redundant Tab Avoidance**: Prevents launching duplicate instances when splits exist.
- **Error Resilient Guardrails**: Checks if `tab.input` is valid before scanning its properties, and handles cold-boot states where no tab exists gracefully.
- **Agnostic Group Indexing**: Correctly handles dynamic side-by-side pane split column layouts natively.
---
## Go Back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- 🔸[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)
