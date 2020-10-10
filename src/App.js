import React from 'react';
import 'antd/dist/antd.css';
// import greeter from 'tmdb_api';
import Main from './components/Main';
import { initTMDB } from '@markmccoid/tmdb_api';

function App() {
  initTMDB('0e4935aa81b04539beb687d04ff414e3', {
    dateFormatString: 'MMM-dd-yyyy',
  });
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#57595b',
      }}
    >
      <header style={{ fontSize: '1.5rem', color: 'white', height: '40px' }}>
        TMDB API Wrapper
      </header>
      <Main />
    </div>
  );
}

export default App;
