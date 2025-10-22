import React from "react";

const CategoryFilter = (props) => {
  const { heading, genres, selectedGenre, onSelectGenre } = props;

  return (
    <div className="category-filter mb-4">
      <h2 className="text-xl font-bold mb-2">{heading}</h2>

      <div className="flex space-x-2">
        {/* "All" button */}
        <button
          onClick={() => onSelectGenre("")}
          className={`px-3 py-1 rounded ${
            selectedGenre === "" ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>

        {/* Genre buttons */}
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            className={`px-3 py-1 rounded ${
              selectedGenre === genre
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
