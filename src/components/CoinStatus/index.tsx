import * as Style from "./style";
import cnk from "../../assets/CNK.png";
import grnd from "../../assets/GRND.png";
import klay from "../../assets/KLAY.png";

function CoinStatus() {
  return (
    <Style.Layout>
      <li>
        <img src={cnk} alt="cnk" />
        <p>{"12.4"}</p>
      </li>
      <li>
        <img src={grnd} alt="cnk" />
        <p>{"12.4"}</p>
      </li>
      <li>
        <img src={klay} alt="cnk" />
        <p>{"12.4"}</p>
      </li>
    </Style.Layout>
  );
}

export default CoinStatus;
