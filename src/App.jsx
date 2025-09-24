import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import Weather from "./components/Weather";

const API_KEY = "bc60ad1d0a3db0b5e76a60221e985185";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${bc60ad1d0a3db0b5e76a60221e985185}&units=metric`
      );
      setWeather(res.data);

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${bc60ad1d0a3db0b5e76a60221e985185}&units=metric`
      );
      setForecast(forecastRes.data);
    } catch (err) {
      alert("City not found!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">How’s the sky looking today?</h1>
       <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <WeatherCard />
    </div>
      <SearchBar city={city} setCity={setCity} onSearch={getWeather} />

      {weather && <WeatherCard weather={weather} />}
      {forecast && (
        <>
          <HourlyForecast forecast={forecast} />
          <DailyForecast forecast={forecast} />
        </>
      )}
    </div>
  );
}

export default App;
