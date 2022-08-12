import React from "react";
import * as Style from "./style";
import Gauge from "../Gauge";
import coin from "../../assets/coin.png";
import styled from "styled-components";
import convertNumber from "../../utils/convertNumber";

function StatusBox({
  type,
  statusValue,
}: {
  type: "dailyScore" | "estimatedWalk";
  statusValue: string;
}) {
  const percent = 69;

  const statusType = {
    dailyScore: {
      unit: "point",
      topText: "",
      bottomText: `Top ${percent}% of Super Walkers`,
    },
    estimatedWalk: {
      unit: "walk",
      topText: "You Can Earn",
      bottomText: "estimated as of yesterday",
    },
  };

  return (
    <Style.Layout type={type}>
      {statusType[type].topText && (
        <p className="top-text">{statusType[type].topText}</p>
      )}
      <h3>
        <span className="walk-number">{convertNumber(statusValue)}</span>
        <span className="unit">{statusType[type].unit}</span>
      </h3>

      {type === "dailyScore" && percent && <Gauge percent={percent}></Gauge>}

      {statusType[type].bottomText && (
        <p className="bottom-text">{statusType[type].bottomText}</p>
      )}
      {type === "estimatedWalk" && (
        <CoinAnimation>
          <img src={coin} className="coin1" alt="coin" />
          <img src={coin} className="coin2" alt="coin" />
        </CoinAnimation>
      )}
    </Style.Layout>
  );
}

const CoinAnimation = styled.div`
  position: relative;
  bottom: 3rem;

  .coin1 {
    position: absolute;
    width: 90px;
    top: -2rem;
    right: 1.5rem;
    animation-name: coinAnimation;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    animation-direction: alternate-reverse;
    z-index: 4;
  }

  .coin2 {
    position: absolute;
    width: 60px;
    top: -2rem;
    right: 0rem;
    animation-name: coinAnimation;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    z-index: 3;
  }

  @keyframes coinAnimation {
    0% {
      top: -25px;
    }
    100% {
      top: -35px;
    }
  }
`;

export default StatusBox;
