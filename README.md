<h1>Harmony Song Lyrics Finder</h1>

Harmony is a web application built using React that allows users to search for song lyrics using the Musixmatch API. Users can search for songs by title or author and view the lyrics and information about the selected track. The app features a dark mode and light mode theme toggle for enhanced user experience.


Make sure you have the following software installed on your machine:

1. Node.js (v12 or later);
2. npm (Node Package Manager);

<h1>Getting Started</h1>
Prerequisites
Make sure you have the following software installed on your machine:

Installation
1. Clone this repository:
```
git clone https://github.com/danielchronos1/harmony-search.git
```
2. Navigate to the project directory:
```
cd harmony-search
```
3. Install the required dependencies:
```
npm install
```
4. Rename .env.example to .env and add your Musixmatch API key as REACT_APP_API_KEY.

5. Start the development server:
```
npm start
```
6. Open your web browser and go to http://localhost:3000 to access the Harmony app.

<h1>Features</h1>

<h2>Dark Mode / Light Mode</h2>
The app features a theme toggle at the top right corner represented by a sun (light mode) and moon (dark mode) icon.
Clicking on the theme toggle switches between dark and light mode.

<h2>Search for Song</h2>
Users can enter the title or author of a song in the search bar.
Upon submitting the search, the app sends a request to the Musixmatch API to retrieve a list of track results based on the search query.

<h2>Track Information</h2>
If there are search results, they will be displayed in a grid format.
Clicking on a track will display detailed information about the track, including its name, artist, and album.
Users can click a button to view the lyrics of the selected track.

<h2>Lyrics Display</h2>
The app fetches the lyrics of the selected track from the Musixmatch API.
If the lyrics are available, they will be displayed in a readable format.
If the lyrics are not available, a message indicating that the lyrics are not available will be shown.

<h1>Usage</h1>

1. Enter the title or author of a song in the search bar.
2. Press enter for start the search.
3. Click on a track to view its detailed information.
4. Click the "Check track" button to view the lyrics of the selected track.
5. Use the theme toggle to switch between dark and light mode.(optional)
   
<h1>Contributing</h1>
Contributions are welcome! If you find any issues or would like to enhance the app, feel free to open an issue or create a pull request.

<h1>License</h1>
This project is licensed under the MIT License.

This site was built using [GitHub Pages](https://danielchronos1.github.io/harmony-search/).

