import "./App.css";
import Footer from "./Components/Footer";
import GenreBar from "./Components/GenreBar";
import MovieList from "./Components/MovieList";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <GenreBar title="TV Shows" />
      <MovieList title="Harry Potter" />
      <MovieList title="Lord of the rings" />
      <MovieList title="Star Wars" />
      <Footer />
    </>
  );
}

export default App;
