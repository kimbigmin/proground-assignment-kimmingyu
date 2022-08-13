import * as Style from "./style";
import { Link } from "react-router-dom";
import { TitleProps } from "../../types/type";

function Title({ title, moreBtn }: TitleProps) {
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
