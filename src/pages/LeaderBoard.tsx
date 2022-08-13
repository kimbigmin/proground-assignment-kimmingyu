import RankBoard from "../components/RankBoard";
import { motion } from "framer-motion";

function LeaderBoard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ transitionDuration: "1s", opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <RankBoard isForHome={false}></RankBoard>
    </motion.div>
  );
}

export default LeaderBoard;
