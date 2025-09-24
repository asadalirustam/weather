import React from "react";

const WeatherCard = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-purple-800 text-white rounded-3xl shadow-xl p-6 w-[380px]">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Berlin, Germany</h2>
          <p className="text-sm text-gray-200">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="text-4xl">☀️</div>
      </div>

      {/* Current Temp */}
      <div className="flex items-center justify-center my-6">
        <span className="text-7xl font-bold">20°</span>
      </div>

      {/* Extra Details */}
      <div className="grid grid-cols-4 gap-4 text-center text-sm">
        <div className="bg-white/10 p-2 rounded-xl">
          <p className="text-gray-200">Feels Like</p>
          <p className="font-semibold">18°</p>
        </div>
        <div className="bg-white/10 p-2 rounded-xl">
          <p className="text-gray-200">Humidity</p>
          <p className="font-semibold">46%</p>
        </div>
        <div className="bg-white/10 p-2 rounded-xl">
          <p className="text-gray-200">Wind</p>
          <p className="font-semibold">14 km/h</p>
        </div>
        <div className="bg-white/10 p-2 rounded-xl">
          <p className="text-gray-200">Precip.</p>
          <p className="font-semibold">0 mm</p>
        </div>
      </div>

      {/* Forecast */}
      <div className="mt-6">
        <h3 className="text-gray-200 mb-2">Daily forecast</h3>
        <div className="grid grid-cols-6 gap-2 text-center">
          <div className="bg-white/10 rounded-xl p-2">
            <p className="text-sm">Tue</p>
            <p className="text-xl">🌧</p>
            <p className="text-sm">20° | 14°</p>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <p className="text-sm">Wed</p>
            <p className="text-xl">⛅</p>
            <p className="text-sm">21° | 15°</p>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <p className="text-sm">Thu</p>
            <p className="text-xl">☀️</p>
            <p className="text-sm">24° | 14°</p>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <p className="text-sm">Fri</p>
            <p className="text-xl">☁️</p>
            <p className="text-sm">25° | 13°</p>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <p className="text-sm">Sat</p>
            <p className="text-xl">🌩</p>
            <p className="text-sm">21° | 15°</p>
          </div>
          <div className="bg-white/10 rounded-xl p-2">
            <p className="text-sm">Sun</p>
            <p className="text-xl">🌧</p>
            <p className="text-sm">25° | 16°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
