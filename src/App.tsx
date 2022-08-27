import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, TournamentSpectator, TournamentJudge, TournamentOrganizer } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tournament-organizer" element={<TournamentOrganizer />} />
          <Route path="tournament-judge" element={<TournamentJudge />} />
          <Route path="tournament-spectator" element={<TournamentSpectator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
