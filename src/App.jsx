import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Lists from "./pages/Lists";
import ExplorarMovies from "./pages/ExplorarMovies";
import ExplorarSeries from "./pages/ExplorarSeries";
import ExplorarBooks from "./pages/ExplorarBooks";
import AllMovies from "./pages/AllMovies";
import CategoryMovies from "./pages/CategoryMovies";
import MovieDetail from "./pages/MovieDetail";
import ScrollToTop from "./components/ScrollToTop";

import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/libros" element={<Books />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/listas" element={<Lists />} />
          <Route path="/explorar/peliculas" element={<ExplorarMovies />} />
          <Route path="/explorar/series" element={<ExplorarSeries />} />
          <Route path="/explorar/libros" element={<ExplorarBooks />} />
          <Route path="/explorar/peliculas/todas" element={<AllMovies />} />
          <Route
            path="/explorar/peliculas/categoria/:category"
            element={<CategoryMovies />}
          />
          <Route path="/pelicula/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;