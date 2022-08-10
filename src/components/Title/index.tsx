import React from "react";
import * as Style from "./style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Title({ title, moreBtn }: { title: string; moreBtn?: string }) {
  return (
    <Style.Layout>
      <h2>{title}</h2>
      {moreBtn ? (
        <button className="more-view">
          <Link to="/leader-board" state={{ title: "Leader Board" }}>
            {moreBtn}{" "}
          </Link>
        </button>
      ) : null}
    </Style.Layout>
  );
}

export default Title;
