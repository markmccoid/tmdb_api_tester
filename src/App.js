import React from "react";
import "antd/dist/antd.css";
// import greeter from 'tmdb_api';
import Main from "./components/Main";
import { initTMDB } from "tmdb_api";

function App() {
  initTMDB("0e4935aa81b04539beb687d04ff414e3");
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#57595b"
      }}
    >
      <header style={{ fontSize: "1.5rem", color: "white" }}>
        TMDB API Wrapper
      </header>
      <Main />
    </div>
  );
}

export default App;
