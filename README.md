# AI Journal

AI Journal is a local-first student journaling demo with a normal note-app layout: entries on the side, today's entry in the center, and expandable emotional analytics on the other side.

It reads each entry, estimates the emotional tone, and returns gentle feedback, practical advice, and a simple mood dashboard.

## Demo Release

- Version: `v1.1.1`
- Run mode: local browser app
- Storage: `localStorage`
- APIs: none required

## Preview

![AI Journal demo preview](demo-preview.png)

## What This Release Shows

- A journal workspace inspired by note apps instead of a dashboard-first layout
- Today's entry centered in the page
- Entries, tags, and search on the left
- Expandable analytics on the right
- Local emotion analysis for mood, intensity, and themes
- Supportive feedback and reflection prompts
- A local learning layer that adapts from saved journal entries
- Mood trend and emotion breakdown charts
- Light and dark appearance support
- 8 color themes with matching light and dark variants

## What It Does

- Lets a student write a journal entry directly in the browser
- Scores the text with a lightweight local emotion model
- Learns from saved entries in this browser to improve future analysis
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

You can also use:

```powershell
npm run demo
```

## Demo Notes

- The app is fully local and free to run
- No external API is required
- This is a supportive journaling demo, not a medical or clinical tool

## File Map

- `index.html` - app structure and workspace layout
- `styles.css` - visual design and themes
- `script.js` - analysis, feedback, local learning, and dashboard logic
- `server.js` - tiny local server for localhost
- `package.json` - project metadata and run script
- `demo-preview.png` - repo preview image
- `RELEASE_NOTES.md` - release summary

## Release Notes

### v1.1.1

- Bumped the visible build marker and cache-busted the app assets

### v1.1.0

- Reworked the layout into a normal journal workflow
- Put today's entry in the center with entries on one side and analytics on the other
- Added expandable analytics sections for deeper detail
- Added a local learning layer so the text analyzer adapts from saved entries
- Kept the app free, local, and quick to run

### v1.0.1

- Refined the journaling workspace to feel closer to a real note app
- Added compact theme controls and local theme persistence
- Updated the README for a cleaner demo-release presentation
- Kept the app free, local, and quick to run
