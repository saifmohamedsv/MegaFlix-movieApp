import "../styles/App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "../requests";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Banner />
      <Row title="Trending Now" isLargeRow fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
