import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Search for a city"
      />
      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;