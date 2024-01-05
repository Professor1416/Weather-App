const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);

            if (!response.ok) {
                throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
            }

            const weatherData = await response.json();

            displayWeather(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(data) {
    const cityNameElement = document.getElementById('cityName');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    cityNameElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
}

