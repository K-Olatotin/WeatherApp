const apiKey = '6ab03c40154994fe986a97d67526c92b';

function getWeather() {
    const state = document.getElementById('stateInput').value;

    if (!state) {
        document.getElementById('weatherResult').innerHTML = `<p>Please enter your state.</p>`;
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state},NG&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {

                const weatherInfo = `
                    <div class="weather-info">
                        <h2>Weather in ${data.name}, Nigeria</h2>
                        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                    </div>
                `;
                document.getElementById('weatherResult').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>State not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weatherResult').innerHTML = `<p>There was an error fetching the weather data. Please try again.</p>`;
        });
}
