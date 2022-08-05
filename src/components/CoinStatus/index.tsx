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
        {"12.4"}
      </li>
      <li>
        <MonetizationOnIcon fontSize="small" color="success" />
        {"12.3"}
      </li>
      <li>
        <CookieIcon fontSize="small" />
        {"12.3"}
      </li>
    </Style.Layout>
  );
}

export default CoinStatus;
