document.addEventListener('DOMContentLoaded', () => {
    const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore'];
  
    const apiKey = 'e9c14e42c0bbdbf988843ede8189b3f7';
  
    const cityListElement = document.getElementById('city-list');
  
    cities.forEach(city => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          const cityCard = document.createElement('div');
          cityCard.classList.add('city-card');
  
          const cityName = document.createElement('div');
          cityName.classList.add('city-name');
          cityName.textContent = city;
  
          const temperature = document.createElement('div');
          temperature.classList.add('temperature');
          temperature.textContent = `${data.main.temp}°C`;
  
          const weatherIcon = document.createElement('img');
          weatherIcon.classList.add('weather-icon');
          weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          weatherIcon.alt = data.weather[0].description;
  
          cityCard.appendChild(cityName);
          cityCard.appendChild(temperature);
          cityCard.appendChild(weatherIcon);
  
          cityListElement.appendChild(cityCard);
        })
        .catch(error => {
          console.error(`Error fetching weather data for ${city}:`, error);
        });
    });
  });
  