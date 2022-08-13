import * as Style from "./style";
import cnk from "../../assets/CNK.png";
import grnd from "../../assets/GRND.png";
import klay from "../../assets/KLAY.png";

function CoinStatus() {
  return (
    <Style.Layout>
      <li>
        <img src={cnk} alt="cnk" width={"20px"} height={"20px"} />
        <p>{"12.4"}</p>
      </li>
      <li>
        <img src={grnd} alt="grnd" width={"20px"} height={"20px"} />
        <p>{"1.34"}</p>
      </li>
      <li>
        <img src={klay} alt="klay" width={"20px"} height={"20px"} />
        <p>{"20.9"}</p>
      </li>
    </Style.Layout>
  );
}

export default CoinStatus;
