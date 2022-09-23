import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import NavBar from './components/navBar';
import NotFound from './components/notFound';
import Rentals from './components/rentals';

const App = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/movies/:id" element={<MovieForm />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
