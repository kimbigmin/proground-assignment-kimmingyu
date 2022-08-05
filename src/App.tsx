import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RankBoard from "./components/RankBoard";
import StatusBox from "./components/StatusBox";
import Title from "./components/Title";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div
        style={{
          maxWidth: "100%",
          marginBottom: "2rem",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        <div
          style={{
            maxWidth: "90%",
            margin: "0 auto",
          }}
        >
          <Title title="Daily Score" />
          <StatusBox type="dailyScore" statusValue={314} />
        </div>
      </div>
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Title title="Estimated WALK" />
        <StatusBox type="estimatedWalk" statusValue={140} />
      </div>
      <RankBoard />

      <Navbar />
    </>
  );
}

export default App;
