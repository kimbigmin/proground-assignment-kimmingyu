import React from "react";
import RankBoard from "../components/RankBoard";
import DailyScore from "../components/DailyScore";
import EstimatedWalk from "../components/EstimatedWalk";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <DailyScore />
      <EstimatedWalk />
      <RankBoard isForHome={true} />
      <Navbar />
    </>
  );
}

export default Home;
