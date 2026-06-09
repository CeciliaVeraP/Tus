import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Tags from "./pages/Tags";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/libros" element={<Books />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/etiquetas" element={<Tags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;