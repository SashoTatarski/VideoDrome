import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from './components/customers';
import Movies from './components/movies';
import NotFound from './components/notFound';
import Rentals from './components/rentals';

const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
