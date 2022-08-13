import RankBoard from "../components/RankBoard";
import DailyScore from "../components/DailyScore";
import EstimatedWalk from "../components/EstimatedWalk";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ transitionDuration: "1s", opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DailyScore />
      <EstimatedWalk />
      <RankBoard isForHome={true} />
      <Navbar />
    </motion.div>
  );
}

export default Home;
