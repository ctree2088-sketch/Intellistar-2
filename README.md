# IntelliSTAR Emulator

A web-based emulator of The Weather Channel's IntelliSTAR display system, recreating the classic weather broadcast graphics.

## Features

- 📺 Authentic IntelliSTAR interface recreation
- 🎨 Blue gradient themed design matching The Weather Channel
- 🌤️ Animated weather elements (sun, clouds)
- 📊 Real-time weather metrics (temperature, humidity, wind, gusts)
- 🗺️ Location display with map placeholder
- ✨ Smooth animations and visual effects
- 📱 Responsive design for different screen sizes

## How to Use

1. Open `index.html` in a web browser
2. The display will show weather information for Farmingdale
3. Weather values update automatically every 30 seconds with slight variations

## Interactive Features

### Console Commands

You can update the weather display programmatically using the console:

```javascript
// Update location and main weather info
weatherDisplay.updateLocation('New York', 'Sunny', 75)

// Update detailed weather metrics
weatherDisplay.updateDetails(45, 'NW', 8, 'None')
```

### Keyboard Shortcut

Press `Ctrl+Shift+W` (or `Cmd+Shift+W` on Mac) to open an interactive dialog to update all weather values.

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and animations
- `script.js` - JavaScript functionality and interactivity
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

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## License

Created as a fan project. The Weather Channel is a trademark of The Weather Channel, Inc.
