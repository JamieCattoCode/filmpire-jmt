import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Routes>
        <Route path="/" element=<h1>Home</h1> />
        <Route exact path="/movie/:id" />
        <Route exact path="/actors/:id" />
        <Route exact path="/movies" />
        <Route exact path="/profile/:id" />
      </Routes>
    </main>
  </div>
);

export default App;
