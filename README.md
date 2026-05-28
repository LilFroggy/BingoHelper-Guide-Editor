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


{
    textures=[
        Property[
            name=textures, value=eyJ0aW1lc3RhbXAiOjE1NTk2NzYyNzYyNzYsInByb2ZpbGVJZCI6ImEyZjgzNDU5NWM4OTRhMjdhZGQzMDQ5NzE2Y2E5MTBjIiwicHJvZmlsZU5hbWUiOiJiUHVuY2giLCJzaWduYXR1cmVSZXF1aXJlZCI6dHJ1ZSwidGV4dHVyZXMiOnsiU0tJTiI6eyJ1cmwiOiJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlL2NkNjU0NTMxODE2ZWM3MjAwYTZhNDYxZDdhMDNjMmRhZGYzMWY0NDlhNTkxYzg1ZjNiMzFjYjJhODNkZDczNjYifX19,
            signature=nlSTknzGOCRA9nT4N8dQce9+2sRkCmpPBN/sKJqIYZxjbF+Uuejbuo32zSFqj1rdB720EA7jVplcZxMP6i9XscUAF83GWwCHX2N75AT1NRW3PeBg0gtrM/qQxKgaH4zOEquGZZ9l8NyV5k2rxDVZRG8YusxsP45WSUV4bnJyLpWeVXO/ZY5luX841BpseLQVTEHjkhYVbL32tauHM6DoB05VKh+5r8utv/OsV8oXQf37+5DMD530ftkriMt+QIlEcVogCk6BR9fvP7tA5Bxvuc6uDbVSkMZaXq62mHVbdRBmnh/nm2hWjrfwNrCPbGi3on5YY5qpnjY9t65Tjw4JsRqmpQXjrscIcfSir8sylisjZfi+kyrjoi4eGVGFVwS2HO1wpX303h3l/z2q9yCEwCHEjnnMx5CI3H8egTTQSLZC8pz60ZaFnyf+ZDwl9gs79wfYGDaqwi7rq7LFYeSrZctABb4oVs/DRuKs+4l8e0LOu90nHnMh7aseAT9YfSip+uTvGaybcpnG8kLcv4sm7J8n3EnhTtcU1ajS/dxZs9i/+p1bQ+wq+k1vwgAOXFLh02ISqUHVVYF9OlyZRiS+/84bPA6WS9SWz+ur6C49fCH44lCPaxxu1UJeHZXI2b1Luh8t7jtKj/gvtzj2GWHADLpcdw2M0IwrRH7ibew8OgE=
        ]
    ]
}