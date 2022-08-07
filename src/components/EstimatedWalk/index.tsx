import React from "react";
import * as Style from "./style";
import Title from "../Title";
import StatusBox from "../StatusBox";

function EstimatedWalk() {
  return (
    <Style.Layout>
      <Title title="Estimated WALK" />
      <StatusBox type="estimatedWalk" statusValue={140} />
    </Style.Layout>
  );
}

export default EstimatedWalk;
