import React from "react";
import * as Style from "./style";
import block from "../../assets/block.png";
import { User } from "../../types";

function UserList({ userData }: { userData: User }) {
  const userInfo = userData.isBlocked
    ? { image: block, serialNumber: "Blocked_User" }
    : userData;

  return (
    <Style.Layout data-index={userData.index}>
      <>
        <div className="info">
          <p className="rank">{+userData.index + 1}</p>
          <img src={userInfo.image} alt="user-logo" />
          <p className="nick-name">{userInfo.serialNumber}</p>
        </div>
        <p className="score">{userData.price}</p>
      </>
    </Style.Layout>
  );
}

export default UserList;
