import React from "react";

export default function MovieCard({ name, rating }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition">
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-600">⭐ Rating: {rating?.average || "N/A"}</p>
    </div>
  );
}
