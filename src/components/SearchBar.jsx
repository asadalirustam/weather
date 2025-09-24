function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="flex w-full max-w-md mb-6">
      <input
        type="text"
        placeholder="Search for a place..."
        className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 text-white outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-blue-600 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
