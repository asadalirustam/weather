function DailyForecast({ forecast }) {
  // group by day
  const daily = forecast.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-2xl w-full">
      <h3 className="text-lg font-semibold mb-4">Daily Forecast</h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        {daily.map((day, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-lg shadow text-sm"
          >
            <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}</p>
            <p>{Math.round(day.main.temp)}°C</p>
            <p className="capitalize">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
