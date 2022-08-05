import React from "react";
import * as Style from "./style";
import Gauge from "../Gauge";

function StatusBox({
  type,
  statusValue,
}: {
  type: "dailyScore" | "estimatedWalk";
  statusValue: number;
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
        <span className="walk-number">{statusValue}</span>
        <span className="unit">{statusType[type].unit}</span>
      </h3>

      {type === "dailyScore" && percent && <Gauge percent={percent}></Gauge>}

      {statusType[type].bottomText && (
        <p className="bottom-text">{statusType[type].bottomText}</p>
      )}
    </Style.Layout>
  );
}

export default StatusBox;
