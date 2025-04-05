import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

function Findeve() {
  const [event, setEvent] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get('http://localhost:4001/event');
        console.log('Fetched events:', res.data);
        setEvent(res.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    getEvent();
  }, []);

  const filteredEvents = event.filter((item) => {
    const heading = item?.heading?.toLowerCase() || '';
    const location = item?.location?.toLowerCase() || '';
    return (
      heading.includes(search.toLowerCase()) ||
      location.includes(search.toLowerCase())
    );
  });

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4 text-white">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name or location"
          className="input input-bordered w-full max-w-md mb-6 px-4 py-2 border border-gray-600 rounded bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Cards Grid */}
        {filteredEvents.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredEvents.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mt-10 text-lg">No matching events found.</p>
        )}
      </div>
    </>
  );
}

export default Findeve;
