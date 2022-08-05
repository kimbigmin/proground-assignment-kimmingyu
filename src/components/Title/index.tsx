import React from "react";
import * as Style from "./style";

function Title({ title, moreBtn }: { title: string; moreBtn?: string }) {
  return (
    <Style.Layout>
      <h2>{title}</h2>
      {moreBtn ? <button className="more-Btn">{moreBtn}</button> : null}
    </Style.Layout>
  );
}

export default Title;
