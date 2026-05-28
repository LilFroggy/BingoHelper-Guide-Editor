## Getting Setup
1. Clone the repository
```bash
git clone https://github.com/LilFroggy/BingoHelper-Guide-Editor.git
```
2. Navigate to the root directory
```bash
cd BingoHelper-Guide-Editor
```
3. Install Node.js dependencies
```bash
npm install
```

## Intellisense
This editor uses JSON Schemas to provide real-time validation and autocomplete for your guides. This ensures that every item ID, skill name, and collection ID you type is actually valid within Hypixel SkyBlock.

To keep the suggestions up-to-date with the latest Hypixel API changes (new items, skills, collections, etc.), the editor runs a background task every time you open this folder or create a guide through npm run create-guide.

When opening the workspace for the first time, VS Code will prompt you with a notification asking permission to "Allow Automatic Tasks". You must click "Allow" for these automatic tasks to run.

If you fail to see or lose the notification, you can always enable background tasks manually.

### To manually enable Automatic Tasks:

1. While in VS Code, press `Ctrl + ,` or `Cmd + ,` on Mac
2. Search for and enable "Tasks: Manage Automatic Tasks in Folder"

## Updating the editor
npm run update-editor