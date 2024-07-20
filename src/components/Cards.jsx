import React from "react";

function Cards({ item }) {
  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-gray-200 shadow-xl rounded-lg overflow-hidden">
        <img
          className="w-full h-56 object-cover object-center"
          src={item.image}
          alt={item.title}
        />
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">
            {item.name}
          </h2>
          <p className="text-gray-600">{item.title}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-gray-700">{item.price}</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
