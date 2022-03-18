import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <div className="track">
        <ul>
          <li className="track-image"><img src={data.album.images[0].url} alt="Album" /></li>
          <li className="detail">
            <h1 id="track-artist">{data.artists[0].name}</h1>
            <h4 id="track-album">{data.album.name}</h4>
            <h2 id="track-tittle">{data.name}</h2>
            <button id="track-button">Add Playlist</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
