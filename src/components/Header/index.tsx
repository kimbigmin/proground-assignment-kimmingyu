import * as Style from "./style";
import CoinStatus from "../CoinStatus";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageBackHandler = () => navigate(-1);

  const state = location.state as { title: string };

  return (
    <Style.Layout>
      {location.pathname === "/" ? (
        <>
          <PersonOutlineOutlinedIcon />
          <div className="account-box">
            <CoinStatus />
            <AccountBalanceWalletOutlinedIcon fontSize="medium" />
          </div>
        </>
      ) : (
        <>
          <ArrowBackIosNewIcon fontSize="small" onClick={pageBackHandler} />
          <h2 className="page-title">{state.title}</h2>
        </>
      )}
    </Style.Layout>
  );
}

export default Header;
