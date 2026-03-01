# Scratch AI Addon

Scratch AI Addon is a Chrome extension that integrates **Hugging Face Transformers.js** with Scratch‑style blocks. It allows you to generate new Scratch blocks dynamically from AI prompts.

---

## 🚀 Features
- Define custom Scratch blocks in `blocks.js`.
- Send prompts from `content.js` to the background script.
- Use Hugging Face models (via Transformers.js) to generate block code.
- Dynamically inject AI‑generated blocks into Scratch Addons.

---

## 📂 Project Structure
ScratchAIAddon/
├── manifest.json      # Extension manifest (MV3)
├── background.js      # Handles AI requests via Transformers.js
├── content.js         # Sends prompts to background script
├── blocks.js          # Defines Scratch block templates
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Auto‑generated dependency lock file

---

## ⚙️ Setup in Codespaces
1. Open this repo in **GitHub Codespaces**.
2. Install dependencies:
   ```bash
   npm install
git add .
git commit -m "Initial Scratch AI Addon setup"
git push


└── .gitignore         # Excludes node_modules from GitHub

