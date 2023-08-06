import React, { useEffect, useState } from "react";
import axios from "axios";

const TrackInformation = ({ isDarkMode, selectedTrack, setSelectedTrack }) => {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    if (selectedTrack) {
      const lyricsApiUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${selectedTrack.track.track_id}&apikey=${process.env.REACT_APP_API_KEY}`;

      axios
        .get(lyricsApiUrl)
        .then((response) => {
          const lyricsData = response.data.message.body.lyrics;
          const lyricsText = lyricsData ? lyricsData.lyrics_body : "Lyrics not available.";
          setLyrics(lyricsText);
        })
        .catch((error) => {
          console.error("Error fetching lyrics:", error);
          setLyrics("Lyrics not available.");
        });
    }
  }, [selectedTrack]);

  return (
    <div className="text-center flex flex-col justify-center items-center gap-4 mt-10">
    <div>
      <h1 className="text-5xl font-bold mt-6 mb-6 tablet:text-xl small:text-xl">Track Information</h1>
      <div className="border-2 p-6">
        <h1 className="mb-2 small:text-xs">Track name: {selectedTrack.track.track_name}</h1>
        <p className="mb-2 small:text-xs">Artist: {selectedTrack.track.artist_name}</p>
        <p className="mb-2 small:text-xs">Album: {selectedTrack.track.album_name}</p>
        <button className="bg-white text-black p-1 small:text-xs" type="button" onClick={() => setSelectedTrack(null)}>
          Back to Search Results
        </button>
      </div>
      </div>
        <div>
            <h1 className="text-5xl font-bold mt-6 mb-6 tablet:text-xl small:text-xl">Lyrics</h1>
            <pre className="font-bold tablet:text-sm tablet:text-center small:text-xs">{lyrics}</pre>
      </div>
    </div>
  );
};

export default TrackInformation;
