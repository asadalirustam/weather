function WeatherCard({ weather }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg max-w-md w-full mb-6">
      <h2 className="text-xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h2>
      <p className="text-sm text-gray-200">{new Date().toDateString()}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-6xl font-bold">{Math.round(weather.main.temp)}°</p>
        <p className="capitalize">{weather.weather[0].description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
        <p>Pressure: {weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherCard;
