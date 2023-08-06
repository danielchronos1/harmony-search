import React, { useState } from "react";
import useTheme from "./utils/useTheme";
import Navbar from "./components/navbar";
import SearchForm from "./components/SearchForm";
import TrackInformation from "./components/TrackInformation";
import TrackList from "./components/TrackList";
import axios from "axios";
import './App.css'

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [trackResults, setTrackResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchApiUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${encodeURIComponent(
      searchQuery
    )}&page_size=6&apikey=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(searchApiUrl)
      .then((response) => {
        setTrackResults(response.data.message.body.track_list);
      })
      .catch((error) => {
        console.error("Error fetching tracks:", error);
        setTrackResults([]);
      });
  };

  const handleTrackClick = (track) => {
    setSelectedTrack(track);
    const lyricsApiUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track.track.track_id}&apikey=${process.env.REACT_APP_API_KEY}`;

    axios
      .get(lyricsApiUrl)
      .then((response) => {
        const lyricsData = response.data.message.body.lyrics;
        const lyrics = lyricsData ? lyricsData.lyrics_body : "Lyrics not available.";
        setSelectedTrack((prevTrack) => ({
          ...prevTrack,
          lyrics: lyrics,
        }));
      })
      .catch((error) => {
        console.error("Error fetching lyrics:", error);
        setSelectedTrack((prevTrack) => ({
          ...prevTrack,
          lyrics: "Lyrics not available.",
        }));
      });
  };

  return (
    <div className={`flex items-center flex-col min-h-screen transition-all ${isDarkMode ? 'dark-theme bg-gray-800 text-gray-300' : 'light-theme bg-gray-300 text-gray-800'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <SearchForm isDarkMode={isDarkMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      {selectedTrack ? (
        <TrackInformation isDarkMode={isDarkMode} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} />
      ) : trackResults.length > 0 ? (
        <TrackList isDarkMode={isDarkMode} trackResults={trackResults} handleTrackClick={handleTrackClick} />
      ) : (
        <p className="mt-4">No search results</p>
      )}
    </div>
  );
}

export default App;
