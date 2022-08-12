import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import LeaderBoard from "../../pages/LeaderBoard";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "../../pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/leader-board" element={<LeaderBoard />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
