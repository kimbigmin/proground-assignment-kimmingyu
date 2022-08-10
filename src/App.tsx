import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/leader-board" element={<LeaderBoard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
