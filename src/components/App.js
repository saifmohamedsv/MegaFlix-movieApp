import "../styles/App.css";
import Row from './Row'
import requests from '../requests'
function App() {
  return (
    <div className="App">
      <h1>MEGAFLIX</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
