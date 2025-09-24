function HourlyForecast({ forecast }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-2xl w-full mb-6">
      <h3 className="text-lg font-semibold mb-4">Hourly Forecast</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        {forecast.list.slice(0, 6).map((hour, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-lg shadow text-sm"
          >
            <p>{new Date(hour.dt_txt).getHours()}:00</p>
            <p>{Math.round(hour.main.temp)}°C</p>
            <p className="capitalize">{hour.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
