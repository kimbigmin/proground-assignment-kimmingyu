import * as React from "react";
import { useState } from "react";
import * as Style from "./style";
import CoinStatus from "../CoinStatus";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Header() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Style.Layout>
      {currentPage === "home" && (
        <>
          <PersonOutlineOutlinedIcon />
          <div className="account-box">
            <CoinStatus />
            <AccountBalanceWalletOutlinedIcon fontSize="medium" />
          </div>
        </>
      )}
      {currentPage === "board" && (
        <>
          <ArrowBackIosNewIcon fontSize="small" />
          <h2 className="page-title">Leader Board</h2>
        </>
      )}
    </Style.Layout>
  );
}

export default Header;
