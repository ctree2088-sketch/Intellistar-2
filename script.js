// IntelliSTAR Emulator - Chrome Optimized
// Browser detection and validation

function detectBrowser() {
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
    const isEdgeChromium = /Edg/.test(userAgent);
    
    return isChrome || isEdgeChromium;
}

function showBrowserWarning() {
    const checker = document.getElementById('browser-check');
    checker.classList.add('show');
    
    const warning = document.createElement('div');
    warning.className = 'browser-warning';
    warning.innerHTML = `
        <h1>⚠️ Chrome Required</h1>
        <p>This IntelliSTAR Emulator is optimized for Google Chrome only.</p>
        <p>For the best experience and full compatibility, please use Chrome browser.</p>
        <a href="https://www.google.com/chrome/" target="_blank">Download Chrome</a>
    `;
    
    checker.appendChild(warning);
    document.querySelector('.intellistar-container').style.display = 'none';
}

// Check browser on page load
window.addEventListener('load', () => {
    if (!detectBrowser()) {
        showBrowserWarning();
        return;
    }
    console.log('%c✅ Chrome Detected - IntelliSTAR Emulator Ready', 'color: #2E7D32; font-size: 14px; font-weight: bold;');
});

// IntelliSTAR Weather Display Class
class WeatherDisplay {
    constructor() {
        this.weather = {
            location: 'FARMINGDALE',
            condition: 'Partly Cloudy',
            tempNow: 87,
            tempToday: 88,
            humidity: 49,
            wind: 'SSW',
            windSpeed: 14,
            gusts: 'None'
        };
        
        this.init();
    }
    
    init() {
        this.animateClouds();
        this.animateSun();
        this.startWeatherUpdates();
        this.logStartup();
    }
    
    logStartup() {
        console.log('%c🌤️ IntelliSTAR Emulator v1.0.0', 'color: #4a90e2; font-size: 16px; font-weight: bold;');
        console.log('%cChrome Optimized | Ready for Testing', 'color: #2c5282; font-size: 12px;');
        console.log('%c📋 Commands:', 'color: #4a90e2; font-weight: bold;');
        console.log('  • weatherDisplay.updateLocation("Location", "Condition", temp)');
        console.log('  • weatherDisplay.updateDetails(humidity, "WIND", windSpeed, "Gusts")');
        console.log('  • weatherDisplay.checkPerformance()');
        console.log('%c⌨️ Shortcuts:', 'color: #4a90e2; font-weight: bold;');
        console.log('  • Ctrl+Shift+W: Update weather via dialog');
        console.log('  • Ctrl+Shift+P: Performance stats');
    }
    
    animateClouds() {
        const clouds = document.querySelectorAll('.cloud');
        clouds.forEach((cloud, index) => {
            const duration = 6 + (index * 2);
            cloud.style.animation = `float ${duration}s ease-in-out infinite ${index % 2 === 0 ? '' : 'reverse'}`;
        });
    }
    
    animateSun() {
        const sun = document.querySelector('.sun');
        sun.style.animation = 'sunglow 3s ease-in-out infinite';
    }
    
    startWeatherUpdates() {
        setInterval(() => {
            this.updateWeatherValues();
        }, 30000);
    }
    
    updateWeatherValues() {
        this.weather.tempNow = this.weather.tempNow + (Math.random() - 0.5) * 2;
        this.weather.humidity = Math.max(20, Math.min(90, this.weather.humidity + (Math.random() - 0.5) * 3));
        this.renderWeatherDetails();
    }
    
    renderWeatherDetails() {
        const detailItems = document.querySelectorAll('.detail-value');
        if (detailItems.length > 0) {
            detailItems[0].textContent = Math.round(this.weather.tempNow);
        }
        if (detailItems.length > 1) {
            detailItems[1].textContent = Math.round(this.weather.humidity) + '%';
        }
    }
    
    updateLocation(location, condition, temp) {
        this.weather.location = location.toUpperCase();
        this.weather.condition = condition;
        this.weather.tempToday = temp;
        this.weather.tempNow = temp - 1;
        
        document.querySelector('.location-name').textContent = this.weather.location;
        document.querySelector('.header-location').textContent = location;
        document.querySelector('.header-condition').textContent = condition;
        document.querySelector('.condition-label').textContent = condition;
        document.querySelector('.temp-value').textContent = this.weather.tempToday + '°';
        
        console.log(`%c📍 Location: ${location} | ${condition} | ${temp}°`, 'color: #FFD700; font-weight: bold;');
    }
    
    updateDetails(humidity, wind, windSpeed, gusts) {
        this.weather.humidity = humidity;
        this.weather.wind = wind;
        this.weather.windSpeed = windSpeed;
        this.weather.gusts = gusts;
        
        const detailItems = document.querySelectorAll('.detail-value');
        if (detailItems.length >= 4) {
            detailItems[1].textContent = humidity + '%';
            detailItems[2].textContent = wind + ' ' + windSpeed + ' MPH';
            detailItems[3].textContent = gusts;
        }
        
        console.log(`%c🌪️ Updated: Humidity ${humidity}% | Wind ${wind} ${windSpeed} MPH | Gusts ${gusts}`, 'color: #4a90e2; font-weight: bold;');
    }
    
    checkPerformance() {
        if (window.performance && window.performance.memory) {
            const memData = {
                'Used Heap': (window.performance.memory.usedJSHeapSize / 1048576).toFixed(2) + ' MB',
                'Total Heap': (window.performance.memory.totalJSHeapSize / 1048576).toFixed(2) + ' MB',
                'Limit': (window.performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + ' MB'
            };
            console.table(memData);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const display = new WeatherDisplay();
    window.weatherDisplay = display;
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        if (e.shiftKey && e.key === 'W') {
            showWeatherDialog();
        }
        if (e.shiftKey && e.key === 'P') {
            window.weatherDisplay?.checkPerformance();
        }
    }
});

function showWeatherDialog() {
    const location = prompt('Enter location:', 'FARMINGDALE');
    if (location) {
        const condition = prompt('Enter condition:', 'Partly Cloudy');
        const temp = parseInt(prompt('Enter temperature:', '88'));
        const humidity = parseInt(prompt('Enter humidity (%):', '49'));
        const wind = prompt('Enter wind direction:', 'SSW');
        const windSpeed = parseInt(prompt('Enter wind speed (mph):', '14'));
        const gusts = prompt('Enter gusts:', 'None');
        
        if (window.weatherDisplay) {
            window.weatherDisplay.updateLocation(location, condition, temp);
            window.weatherDisplay.updateDetails(humidity, wind, windSpeed, gusts);
        }
    }
}
