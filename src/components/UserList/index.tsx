import React from "react";
import * as Style from "./style";
import { useDispatch } from "react-redux";
import { setBlock } from "../../features/users/usersSlice";

function UserList({ userData }: { userData: any }) {
  const dispatch = useDispatch();

  const blockHandler = () => {
    dispatch(setBlock(userData.idx));
  };

  return (
    <Style.Layout>
      <div className="info" onClick={blockHandler}>
        <p className="rank">{userData.idx + 1}</p>
        <img src={userData.image} alt="user-logo" />
        <p className="nick-name">
          {userData.isBlocked ? "blocked" : userData.serialNumber}
        </p>
      </div>
      <p className="score">{userData.price}</p>
    </Style.Layout>
  );
}

export default UserList;
