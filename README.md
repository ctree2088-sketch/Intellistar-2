# IntelliSTAR Emulator - Chrome Optimized

A web-based emulator of The Weather Channel's IntelliSTAR display system, optimized exclusively for **Google Chrome**.

## ⚠️ Chrome Required

This application is designed and optimized for **Google Chrome** only. While it may work in other browsers, best performance and full compatibility are guaranteed only in Chrome.

**[Download Chrome](https://www.google.com/chrome/)**

## Features

- 📺 Authentic IntelliSTAR interface recreation
- 🎨 Blue gradient themed design matching The Weather Channel
- 🌤️ Animated weather elements (sun, clouds)
- 📊 Real-time weather metrics (temperature, humidity, wind, gusts)
- 🗺️ Location display with map placeholder
- ✨ Smooth animations and visual effects
- ⚡ Chrome-optimized performance
- 🔍 Chrome DevTools integration

## How to Use

1. **Open in Chrome** - Launch `index.html` in Google Chrome
2. View the default Farmingdale weather display
3. Weather values update automatically every 30 seconds

## Interactive Features

### Console Commands

Open Chrome DevTools (F12) and use these commands:

```javascript
// Update location and main weather info
weatherDisplay.updateLocation('New York', 'Sunny', 75)

// Update detailed weather metrics
weatherDisplay.updateDetails(45, 'NW', 8, 'None')

// Check memory usage (Chrome only)
weatherDisplay.checkPerformance()
```

### Keyboard Shortcuts

- **Ctrl+Shift+W** - Open weather update dialog
- **Ctrl+Shift+P** - Display performance stats (Chrome only)

## Chrome-Specific Optimizations

- `-webkit-font-smoothing: antialiased` for better text rendering
- `-webkit-will-change` properties for smoother animations
- Chrome DevTools integration with custom logging
- Hardware acceleration via `backdrop-filter`
- Performance monitoring via `performance.memory` API

## File Structure

- `index.html` - Main HTML structure with browser detection
- `styles.css` - Chrome-optimized CSS with Webkit properties
- `script.js` - Chrome-specific JavaScript features
- `README.md` - This file

## Customization

Edit the `weather` object in `script.js` to change default values:

```javascript
this.weather = {
    location: 'YOUR LOCATION',
    condition: 'Weather Condition',
    tempNow: 75,
    tempToday: 78,
    humidity: 55,
    wind: 'NW',
    windSpeed: 10,
    gusts: 'None'
};
```

## Chrome Features Utilized

- Webkit rendering optimizations
- Hardware acceleration
- Chrome DevTools API
- Performance monitoring
- Modern CSS features (backdrop-filter, gradients)

## Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome | ✅ Full Support |
| Edge (Chromium) | ⚠️ Partial Support |
| Firefox | ❌ Not Supported |
| Safari | ❌ Not Supported |
| Opera | ⚠️ Partial Support |

## License

Created as a fan project. The Weather Channel is a trademark of The Weather Channel, Inc.

---

**Optimized for Chrome. Best viewed in Google Chrome browser.**
