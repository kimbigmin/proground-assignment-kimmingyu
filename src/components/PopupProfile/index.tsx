import React from "react";
import * as Style from "./style";
import { setBlock } from "../../features/users/usersSlice";
import { useDispatch } from "react-redux";
import block from "../../assets/block.png";
import { ProfileProps } from "../../types";

function PopupProfile({ userData, setIsOpenProfile }: ProfileProps) {
  const dispatch = useDispatch();

  const handleBlock = () => {
    dispatch(setBlock(+userData.index!));
    setIsOpenProfile(false);
  };

  const handleClose = () => {
    setIsOpenProfile(false);
  };

  const userInfo = userData.isBlocked
    ? { image: block, serialNumber: "Blocked_User" }
    : userData;

  return (
    <Style.Layout>
      <div className="profile-box">
        <div className="top-bar">
          <h3>Profile</h3>
          <button onClick={handleClose}>X</button>
        </div>
        <img src={userInfo.image} alt="profile-img" />
        <p className="name">{userInfo.serialNumber}</p>
        <button
          className={userData.isBlocked ? "unblock-btn" : "block-btn"}
          onClick={handleBlock}
        >
          {userData.isBlocked ? "UnBlock!" : "Block!"}
        </button>
      </div>
    </Style.Layout>
  );
}

export default PopupProfile;
