import "./App.css";
import GenreBar from "./Components/GenreBar";
import MovieList from "./Components/MovieList";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <GenreBar title="TV Shows" />
      <MovieList title=" " />
    </>
  );
}

export default App;
