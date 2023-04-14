import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movies, Profile, MovieInformation, Navbar } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element=<h1>Home</h1> />
        <Route exact path="/movie/:id" element={MovieInformation()} />
        <Route exact path="/actors/:id" element={Actors()} />
        <Route exact path="/movies" element={Movies()} />
        <Route exact path="/profile/:id" element={Profile()} />
      </Routes>
    </main>
  </div>
);

export default App;
