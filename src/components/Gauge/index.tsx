import React from "react";
import * as Style from "./style";
function Gauge({ percent }: { percent: number }) {
  return (
    <Style.Layout percent={percent}>
      <span>
        <p>{percent}%</p>
      </span>
    </Style.Layout>
  );
}

export default Gauge;
