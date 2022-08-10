import React from "react";
import * as Style from "./style";

function UserList({ userData }: { userData: any }) {
  return (
    <Style.Layout>
      <div className="info">
        <p className="rank">{userData.idx + 1}</p>
        <img src={userData.image} alt="user-logo" />
        <p className="nick-name">{userData.serialNumber}</p>
      </div>
      <p className="score">{userData.price}</p>
    </Style.Layout>
  );
}

export default UserList;
