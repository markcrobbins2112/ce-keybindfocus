# Testing
<!--
You can use this interactive test sheet directly with IDX inside VS Code to verify that all systems are fully functional. Put your cursor on these checkbox lines, and use our Quick Actions to mark them done!
-->

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
- ▪️[SPEC.md](SPEC.md)
- 🔸[TESTING.md](TESTING.md)

---
## 🔵 Setup, Environment & Build Checks
- [ ] Confirm `package.json` designates `"main": "./extension.js"` and holds valid `activationEvents` and command configurations.
- [ ] Install devDependencies by running `npm install` inside the extension directory.
- [ ] Package the extension using `npm run package` and verify that the build output bundles successfully.

## 🟢 Tab Detection & Opening Walkthrough (Cold Start)
- [ ] Close all open tabs labeled "Keyboard Shortcuts" or viewType "keybindings.editor".
- [ ] Trigger the command: `Keybindings: Open or Focus` (`keybindingsFocus.open`).
- [ ] Verify that a brand new tab titled "Keyboard Shortcuts" launches in your active group pane.

## ⚡ Sub-Component Focus Assertions
- [ ] With the Shortcuts panel active, trigger the command: `Keybindings: Open and Focus Search` (`keybindingsFocus.openSearch`).
- [ ] Verify that user cursor focus shifts immediately to the query search input bar (a blinking text caret should be visible in the text field).
- [ ] Trigger the command: `Keybindings: Open and Focus List` (`keybindingsFocus.openList`).
- [ ] Verify that cursor focus moves down to the keybindings rows grid, allowing immediate scrolling and navigation with up/down arrow keys.

## 🕹️ Multi-Column Split Redundant Tab Checks
- [ ] Split your editor layout so that group columns 1 and 2 are visible side-by-side.
- [ ] Place a "Keyboard Shortcuts" tab inside Group Column 2.
- [ ] Focus a different file tab inside Group Column 1.
- [ ] Run command `Keybindings: Open and Focus Search` (`keybindingsFocus.openSearch`).
- [ ] Confirm that active focus jumps over to Group Column 2, focuses the preexisting Keybindings tab, and initiates search input cursor state.
- [ ] Confirm that no duplicate Keybindings tab was created in Group Column 1.
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
- ▪️[SPEC.md](SPEC.md)
- 🔸[TESTING.md](TESTING.md)
