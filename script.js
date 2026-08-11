// IntelliSTAR Emulator - Interactive Features

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
        // Initialize animations
        this.animateClouds();
        this.animateSun();
        this.startWeatherUpdates();
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
        // Simulate weather updates every 30 seconds
        setInterval(() => {
            this.updateWeatherValues();
        }, 30000);
    }
    
    updateWeatherValues() {
        // Slightly vary weather values to simulate real updates
        this.weather.tempNow = this.weather.tempNow + (Math.random() - 0.5) * 2;
        this.weather.humidity = Math.max(20, Math.min(90, this.weather.humidity + (Math.random() - 0.5) * 3));
        
        this.renderWeatherDetails();
    }
    
    renderWeatherDetails() {
        const tempElement = document.querySelector('.detail-value:first-of-type');
        if (tempElement) {
            tempElement.textContent = Math.round(this.weather.tempNow);
        }
    }
    
    // Method to change location and weather
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
    }
    
    // Method to update weather details
    updateDetails(humidity, wind, windSpeed, gusts) {
        this.weather.humidity = humidity;
        this.weather.wind = wind;
        this.weather.windSpeed = windSpeed;
        this.weather.gusts = gusts;
        
        this.renderWeatherDetails();
    }
}

// Initialize the display when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const display = new WeatherDisplay();
    
    // Make it available globally for console testing
    window.weatherDisplay = display;
    
    // Example: Log available methods
    console.log('IntelliSTAR Emulator Loaded!');
    console.log('Available methods:');
    console.log('- weatherDisplay.updateLocation(location, condition, temp)');
    console.log('- weatherDisplay.updateDetails(humidity, wind, windSpeed, gusts)');
    console.log('\nExample usage:');
    console.log("weatherDisplay.updateLocation('New York', 'Sunny', 75)");
});

// Optional: Add keyboard shortcuts for testing
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        // Ctrl/Cmd + Shift + W to open weather update dialog
        if (e.shiftKey && e.key === 'W') {
            showWeatherDialog();
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
