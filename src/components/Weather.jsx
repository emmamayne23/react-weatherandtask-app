import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityInput, setCityInput] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleCityChange = (event) => {
    setCityInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchCity(cityInput);
    }
  };

  const API_KEY = "439f21ac1e4eb1f8f73175035096873f";

  useEffect(() => {
    // Load saved data from local storage when component mounts
    const savedWeatherData = localStorage.getItem("weatherData");
    const savedSearchCity = localStorage.getItem("searchCity");

    if (savedWeatherData && savedSearchCity) {
      setWeatherData(JSON.parse(savedWeatherData));
      setSearchCity(savedSearchCity);
      setCityInput(savedSearchCity);
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!searchCity) {
        return;
      }

      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(URL);
        const data = await response.json();
        setWeatherData(data);

        // Save to local storage
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("searchCity", searchCity);

        console.log(data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
        setWeatherData(null);

        // Clear local storage on error
        localStorage.removeItem("weatherData");
        localStorage.removeItem("searchCity");
      }
      setCityInput("");
    };

    fetchWeather();
  }, [searchCity]);

  return (
    <>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-lvh">
          <div className="grid place-items-center p-10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Weather App</h1>
            <h2 className="text-xl text-gray-500 font-semibold">Enter City to get information</h2>
          </div>
            <input
              className="border w-40 focus:outline-none focus:ring focus:w-80 duration-500 rounded-lg p-2 mt-5"
              type="search"
              placeholder="Search City Here..."
              value={cityInput}
              onChange={handleCityChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div>
            <div className="grid place-items-center">
              {!weatherData ? (
                <div className="text-gray-600">
                  Enter City and press Enter to get information
                </div>
              ) : weatherData.main ? (
                <div className="border p-5 rounded-2xl shadow-md shadow-current text-white">
                  <div className="grid place-items-center text-xl font-semibold leading-7">
                    <div className="weather-icon w-60">
                      <img
                        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                        alt="weather-icon"
                        className="w-full"
                      />
                    </div>
                    <div className="weather-temperature">
                      {Math.round(weatherData.main.temp)}°C
                    </div>
                    <div className="city">{weatherData.name}</div>
                    <div className="mini-description">
                      {weatherData.weather[0].description}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-600">Loading...</div>
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default Weather;
