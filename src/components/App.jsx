import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, Movies, Profile, MovieInformation, Navbar } from '.';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main>
        <div className={classes.toolbar} />
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
};

export default App;
