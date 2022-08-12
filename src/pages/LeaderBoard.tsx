import React from "react";
import RankBoard from "../components/RankBoard";
import { motion } from "framer-motion";
import Header from "../components/Header";

function LeaderBoard() {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, transitionDuration: "1s", opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
    >
      <Header />
      <RankBoard isForHome={false}></RankBoard>
    </motion.div>
  );
}

export default LeaderBoard;
