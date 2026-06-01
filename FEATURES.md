# Features

---
## Back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- 🔸[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)

Welcome to **Keybindings Focus**!
This guide details all the user-facing capabilities, UI patterns, and commands offered by the extension to optimize your keyboard shortcut configuration workflows.

## Feature Groups

### 🔍 1. Keyboard Shortcuts Tab Management
<a id="z1" name="z.1"></a>
Allows developers to seamlessly locate and reuse existing Keyboard Shortcuts tabs without creating duplicate files or windows.
- **[Agnostic Tab Detection](#agnostic-tab-detection)** - Matches either viewType `"keybindings.editor"` or localized tab Label `"Keyboard Shortcuts"`.
- **[Automatic Editor Group Redirects](#automatic-editor-group-redirects)** - Swaps focus explicitly to the editor pane/group containing the shortcuts window prior to activating focus commands.

### ⚡ 2. Keybindings View State Controls
<a id="z2" name="z.2"></a>
Coordinates searching and list navigation smoothly.
- **[Unified Focus Launcher](#unified-focus-launcher)** - Opens the workspace-wide shortcuts manager or targets an active tab immediately.
- **[Automated Search Trigger](#automated-search-trigger)** - Places the cursor directly into the keybindings search box on load.
- **[Automated List Navigation](#automated-list-navigation)** - Shifts editor keyboard focus into the keybindings flat list allowing rapid arrow-key browsing.


## All Features

### Agnostic Tab Detection
- Group: [Keyboard Shortcuts Tab Management](#z1)
Scans globally across all open editor columns and pane structures using standard tabGroup APIs. Detects keybinding setups via tab type signature or standard labels like English `'Keyboard Shortcuts'`.

### Automatic Editor Group Redirects
- Group: [Keyboard Shortcuts Tab Management](#z1)
Resolves the exact column viewIndex (1 to 8) containing the target shortcuts sheet, executing the appropriate editor focus action to ensure correct focus flow.

### Unified Focus Launcher
- Group: [Keybindings View State Controls](#z2)
Triggers `keybindingsFocus.open` to launch or grab an active instance of the keyboard shortcuts UI workspace-wide.

### Automated Search Trigger
- Group: [Keybindings View State Controls](#z2)
Triggers `keybindingsFocus.openSearch` to immediately navigate into the search input field of the settings list.

### Automated List Navigation
- Group: [Keybindings View State Controls](#z2)
Triggers `keybindingsFocus.openList` to immediately put active keyboard focus inside the settings table index rows.

---
## Go Back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- ▪️[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- 🔸[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)
