import * as React from "react";
import * as Style from "./style";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CookieIcon from "@mui/icons-material/Cookie";

function CoinStatus() {
  return (
    <Style.Layout>
      <li>
        <CurrencyBitcoinIcon fontSize="small" color="warning" />
        <p>{"12.4"}</p>
      </li>
      <li>
        <MonetizationOnIcon fontSize="small" color="success" />
        <p>{"12.4"}</p>
      </li>
      <li>
        <CookieIcon fontSize="small" />
        <p>{"12.4"}</p>
      </li>
    </Style.Layout>
  );
}

export default CoinStatus;
