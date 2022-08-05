import * as React from "react";
import * as Style from "./style";
import CoinStatus from "../CoinStatus";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function Header() {
  return (
    <Style.Layout>
      <PersonOutlineOutlinedIcon />
      <div className="account-box">
        <CoinStatus />
        <AccountBalanceWalletOutlinedIcon fontSize="medium" />
      </div>
    </Style.Layout>
  );
}

export default Header;
