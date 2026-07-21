---
title: BUILD
---

# BUILD

## Go to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- 🔸[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)

---

## 🛠️ Build and Packaging Pipeline

`keybindfocus` is configured as a vanilla CommonJS Node.js extension for Visual Studio Code. Because it relies on native CommonJS imports (`require("vscode")`) and pure Javascript standard runtimes, it does not require a transpiler step (such as TypeScript or Babel) to be transformed before execution. This offers a highly reliable, zero-overhead and friction-free deploy workflow.

### 📦 Key Components
- **Primary Runtime Module**: `extension.js` – Contains active activation event hooks, tab scanners, pane column focuses, and event registrations.
- **Configuration Manifest**: `package.json` – Holds the definition of commands, lazy activation triggers (`onCommand:*`), author/license properties, and package scripts.

---

## 🚀 Execution & Packaging Commands

The extension manifest defines scripts to clean, verify, and pack the extension workspace:

- **Local Package / Dependency Synchronization**:
  ```bash
  npm install
  ```
  Synchronizes developer workspace types (`@types/node`, `@types/vscode`) and builder/packagers (`@vscode/vsce`).

- **Packaging binary**:
  ```bash
  npm run package
  ```
  Invokes `vsce package`, which aggregates resources, README.md, LICENSE, and manifest definitions into an installable `.vsix` binary bundle file (e.g., `keybindfocus-0.0.1.vsix`).

- **Local Extension Installation**:
  ```bash
  code --install-extension keybindfocus-0.0.1.vsix
  ```
  Installs the locally built extension directly into your active VS Code instance command toolchain.

---
## Go back to...
- ▪️[AGENTS.md](AGENTS.md)
- ▪️[AILOG.md](AILOG.md)
- ▪️[AITASKS.md](AITASKS.md)
- 🔸[BUILD.md](BUILD.md)
- ▪️[CODE.md](CODE.md)
- ▪️[FEATURES.md](FEATURES.md)
- ▪️[MANUAL.md](MANUAL.md)
- ▪️[README.md](README.md)
- ▪️[SPEC.md](SPEC.md)
- ▪️[TESTING.md](TESTING.md)
