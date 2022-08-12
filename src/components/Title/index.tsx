import React from "react";
import * as Style from "./style";
import { Link } from "react-router-dom";

function Title({ title, moreBtn }: { title: string; moreBtn?: string }) {
  return (
    <Style.Layout>
      <h2>{title}</h2>
      {moreBtn ? (
        <Link to="/leader-board" state={{ title: "Leader Board" }}>
          <button className="more-view">{moreBtn}</button>
        </Link>
      ) : null}
    </Style.Layout>
  );
}

export default Title;
