import React from "react";

const TrackList = ({ trackResults, handleTrackClick }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mt-6 mb-6 tablet:text-xl">Search Results</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 tablet:grid-cols-1">
        {trackResults.map((trackItem) => (
          <div key={trackItem.track.track_id} className="flex flex-col border-2 p-6 text-center" onClick={() => handleTrackClick(trackItem)}>
            <h1 className="mb-5 font-bold">{trackItem.track.track_name}</h1>
            <p className="mb-5 font-light">{trackItem.track.artist_name}</p>
            <button className="bg-white text-black mb-10 font-bold p-1" type="submit">Check track</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
