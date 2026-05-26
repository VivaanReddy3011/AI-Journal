# AI Journal

AI Journal is a local-first student journaling demo that analyzes writing, estimates the emotional tone, and returns gentle feedback, practical advice, and a simple mood dashboard.

## Demo Release

- Version: `v1.0.1`
- Run mode: local browser app
- Storage: `localStorage`
- APIs: none required

## Preview

![AI Journal demo preview](demo-preview.png)

## What This Release Shows

- A regular journaling workspace with AI tucked in quietly
- Light and dark appearance toggle
- 8 color themes with matching light and dark variants
- Local emotion analysis for mood, intensity, and themes
- Supportive feedback and reflection prompts
- Mood trend and emotion breakdown charts
- Saved entry history in the browser

## What It Does

- Lets a student write a journal entry directly in the browser
- Scores the text with a lightweight local emotion model
- Returns a mood label, intensity estimate, and supportive advice
- Shows a dashboard with recent entries and recurring themes
- Stores everything locally in `localStorage`

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Node.js local server for `localhost` runs

## Run It Locally

```powershell
npm start
```

Then open:

```text
http://127.0.0.1:3000
```

You can also open `index.html` directly, but the local server is the cleaner option.

## Demo Notes

- The app is fully local and free to run
- No external API is required
- This is a supportive journaling demo, not a medical or clinical tool

## File Map

- `index.html` - app structure and workspace layout
- `styles.css` - visual design and themes
- `script.js` - analysis, feedback, and dashboard logic
- `server.js` - tiny local server for localhost
- `package.json` - project metadata and run script
- `demo-preview.png` - repo preview image

## Release Notes

### v1.0.1

- Refined the journaling workspace to feel closer to a real note app
- Added compact theme controls and local theme persistence
- Updated the README for a cleaner demo-release presentation
- Kept the app free, local, and quick to run
