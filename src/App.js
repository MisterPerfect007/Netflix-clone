import './App.css';
import Row from './Row'
import request from './requests';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header fetchURL={request.fetchNetflixOriginals}/>
      <Row title='NETFLIX ORIGINALS' fetchURL={request.fetchNetflixOriginals} />
      <Row title='Popular' fetchURL={`movie/popular?api_key=0ba799fc290878a3fd7167c67feb93a6&language=en-US&page=1`} isLarge={true} />
      <Row title='Trending Now' fetchURL={request.fetchTrending} isLarge={true}/>
      {/* <Row title='Top Rated' fetchURL={request.fetchTopRated} /> */}
      <Row title='Top Rated' fetchURL={request.fetchTopRated} isLarge={true} />
      <Row title='Action Movies' fetchURL={request.fetchActionMovies} isLarge={true} />
      <Row title='Comedy Movies' fetchURL={request.fetchComedyMovies} isLarge={true} />
      <Row title='Horror Movies' fetchURL={request.fetchHorrorMovies} isLarge={true} />
      <Row title='Romance Movies' fetchURL={request.fetchRomanceMovies} isLarge={true} />
      <Row title='Documentaries' fetchURL={request.fetchDocumentaries} isLarge={true} />
      {/* https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1 */}
    </div>
  );
}

export default App;
