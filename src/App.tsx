import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, TournamentJudge, TournamentOrganizer } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tournament-organizer" element={<TournamentOrganizer />} />
          <Route path="tournament-judge" element={<TournamentJudge />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
