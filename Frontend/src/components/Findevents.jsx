// 
import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json'; // Assumes you placed your data here

function Findevents() {
  // Only show events with price > 0
  const filteredEvents = list.filter((data) => data.price > 0);

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-4">
      {filteredEvents.map((item) =>
        item && item.img ? <Cards item={item} key={item.id} /> : null
      )}
    </div>
  );
}

export default Findevents;
