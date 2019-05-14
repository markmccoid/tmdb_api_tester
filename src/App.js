import React from 'react';
import './App.css';
// import greeter from 'tmdb_api';
import Main from './components/Main';
import { initTMDB } from 'tmdb_api';

function App() {
  initTMDB('0e4935aa81b04539beb687d04ff414e3')
  return (
    <div className="App">
      <header className="App-header">
          TMDB API Wrapper
      </header>
      <Main />
    </div>
  );
}

export default App;
