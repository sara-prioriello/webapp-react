import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultLayout";
import HomeMovies from "./pages/HomeMovies";
import MovieDetails from "./pages/MovieDetails";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomeMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
