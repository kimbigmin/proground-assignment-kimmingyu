import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RankBoard from "./components/RankBoard";
import DailyScore from "./components/DailyScore";
import EstimatedWalk from "./components/EstimatedWalk";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <DailyScore />
      <EstimatedWalk />
      <RankBoard />
      <Navbar />
    </>
  );
}

export default App;
