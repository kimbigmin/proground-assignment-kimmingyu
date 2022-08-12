import React from "react";
import RankBoard from "../components/RankBoard";
import DailyScore from "../components/DailyScore";
import EstimatedWalk from "../components/EstimatedWalk";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Header from "../components/Header";

function Home() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, transitionDuration: "1s", opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
    >
      <Header />
      <DailyScore />
      <EstimatedWalk />
      <RankBoard isForHome={true} />
      <Navbar />
    </motion.div>
  );
}

export default Home;
