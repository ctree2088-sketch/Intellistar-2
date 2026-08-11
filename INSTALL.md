# Installation Guide - IntelliSTAR Emulator

## Prerequisites
- **Google Chrome** (Latest version recommended)
- A modern computer with decent specs
- No additional dependencies needed!

## Download & Installation

### Option 1: Direct Download
1. Go to [Releases](https://github.com/ctree2088-sketch/intellistar-2/releases)
2. Download the latest `intellistar-emulator-v1.0.0.zip`
3. Extract the ZIP file to your desired location
4. Open `index.html` with Google Chrome

### Option 2: Clone from GitHub
```bash
git clone https://github.com/ctree2088-sketch/intellistar-2.git
cd intellistar-2
```
Then open `index.html` with Google Chrome.

### Option 3: Use a Local Server (Recommended)
For best performance, serve over HTTP:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Node.js (if installed):**
```bash
npx http-server
```

Then open `http://localhost:8000` in Chrome.

## Quick Start
1. Open `index.html` in Chrome
2. You'll see the Farmingdale weather display
3. Weather updates automatically every 30 seconds
4. Use keyboard shortcuts to update weather

## Keyboard Shortcuts
- **Ctrl+Shift+W** - Update weather interactively
- **Ctrl+Shift+P** - View performance stats (Chrome DevTools)

## Console Commands
Open Chrome DevTools (F12) and try:

```javascript
// Change location and weather
weatherDisplay.updateLocation('New York', 'Sunny', 75)

// Update detailed weather
weatherDisplay.updateDetails(45, 'NW', 8, 'None')

// Check performance
weatherDisplay.checkPerformance()
```

## Troubleshooting

### Browser Warning Appears
- Make sure you're using **Google Chrome**
- Download Chrome from [google.com/chrome](https://www.google.com/chrome/)

### Display Looks Wrong
- Hard refresh the page (Ctrl+Shift+R)
- Clear Chrome cache (Ctrl+Shift+Delete)
- Update Chrome to the latest version

### Animations Are Choppy
- Close unnecessary browser tabs
- Disable browser extensions
- Update your graphics drivers
- Use Chrome's hardware acceleration (Settings > Advanced > System)

### Console Shows Errors
- Check that all files are present (index.html, styles.css, script.js)
- Verify files are in the same directory
- Check Chrome's DevTools Console (F12)

## System Requirements
- **OS:** Windows 7+, macOS 10.12+, or Linux
- **Chrome:** Version 90+ (recommended: latest)
- **RAM:** 512 MB minimum (1 GB+ recommended)
- **Display:** 1024x768 minimum resolution

## Getting Help
- Check [README.md](README.md) for features and usage
- Review [CHANGELOG.md](CHANGELOG.md) for version history
- Open an issue on GitHub

Enjoy the IntelliSTAR Emulator! 🌤️
