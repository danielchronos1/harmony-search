Harmony Song Lyrics Finder
Harmony is a web application built using React that allows users to search for song lyrics using the Musixmatch API. Users can search for songs by title or author and view the lyrics and information about the selected track. The app features a dark mode and light mode theme toggle for enhanced user experience.

Make sure you have the following software installed on your machine:

Node.js (v12 or later)
npm (Node Package Manager)

Installation
Clone this repository:

git clone https://github.com/your-username/harmony-song-lyrics-finder.git

Navigate to the project directory:

cd harmony-song-lyrics-finder

Install the required dependencies:

npm install

Rename .env.example to .env and add your Musixmatch API key as REACT_APP_API_KEY.

Start the development server:

npm start
Open your web browser and go to http://localhost:3000 to access the Harmony app.

Features
Dark Mode / Light Mode
The app features a theme toggle at the top right corner represented by a sun (light mode) and moon (dark mode) icon.
Clicking on the theme toggle switches between dark and light mode.
Search for Song
Users can enter the title or author of a song in the search bar.
Upon submitting the search, the app sends a request to the Musixmatch API to retrieve a list of track results based on the search query.
Track Information
If there are search results, they will be displayed in a grid format.
Clicking on a track will display detailed information about the track, including its name, artist, and album.
Users can click a button to view the lyrics of the selected track.
Lyrics Display
The app fetches the lyrics of the selected track from the Musixmatch API.
If the lyrics are available, they will be displayed in a readable format.
If the lyrics are not available, a message indicating that the lyrics are not available will be shown.
Usage
Enter the title or author of a song in the search bar.
Click the search button to retrieve track results.
Click on a track to view its detailed information.
Click the "Check track" button to view the lyrics of the selected track.
Use the theme toggle to switch between dark and light mode.
Contributing
Contributions are welcome! If you find any issues or would like to enhance the app, feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License.

Feel free to customize and expand this documentation to suit your needs. Make sure to update any placeholders (e.g., your-username, harmony-song-lyrics-finder) with your actual repository and information.
