import React from "react";

const SearchForm = ({ isDarkMode, searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="search-content flex flex-col items-center">
      <h1 className={`${isDarkMode ? "text-white" : "text-gray-800"} text-6xl font-bold mb-4 tablet:text-2xl small:text-xl text-center`}>
        Search For A Song
      </h1>
      <p className="text-ms font-light mb-6 tablet:text-xs small:text-xs text-center">
        We'll find the lyrics to the track you're looking for.
      </p>
      <form className="flex items-center" action="" method="get" onSubmit={handleSearch}>
        <input
          className="p-3 w-96 border-gray-700 focus:outline-none text-black font-bold text-center rounded-xl tablet:p-2 tablet:w-64 small:w-40"
          type="text"
          placeholder="Song title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
